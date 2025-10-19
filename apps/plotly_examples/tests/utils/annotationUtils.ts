import fs from 'fs';
import path from 'path';
import type { Locator, Page } from '@playwright/test';

const annotationPresenceCache = new Map<number, boolean>();

function getSchemaFilePath(exampleNumber: number): string {
  const schemaId = exampleNumber.toString().padStart(3, '0');
  return path.resolve(__dirname, '..', '..', 'src', 'data', `data_${schemaId}.json`);
}

function readAnnotationFlag(exampleNumber: number): boolean {
  try {
    const filePath = getSchemaFilePath(exampleNumber);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const schema = JSON.parse(raw);
    const annotations = schema?.layout?.annotations ?? schema?.plotlySchema?.layout?.annotations;
    return Array.isArray(annotations) && annotations.length > 0;
  } catch (error) {
    console.warn(`Unable to evaluate annotations for example ${exampleNumber}:`, error);
    return false;
  }
}

export function exampleHasAnnotations(exampleNumber: number): boolean {
  if (!annotationPresenceCache.has(exampleNumber)) {
    annotationPresenceCache.set(exampleNumber, readAnnotationFlag(exampleNumber));
  }
  return annotationPresenceCache.get(exampleNumber) ?? false;
}

export async function waitForAnnotationsIfNeeded(page: Page, chart: Locator, exampleNumber: number, timeoutMs = 4000): Promise<void> {
  if (!exampleHasAnnotations(exampleNumber)) {
    return;
  }

  const overlayLocator = chart.locator('[data-chart-annotation="true"]');
  const svgAnnotationLocator = chart.locator('g.annotation text, .annotation-text');
  const pollInterval = 75;
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    const candidates: Locator[] = [
      overlayLocator,
      svgAnnotationLocator
    ];

    for (const locator of candidates) {
      if (await locator.count() > 0) {
        await locator.first().waitFor({ state: 'visible', timeout: 500 }).catch(() => undefined);
        return;
      }
    }
    await page.waitForTimeout(pollInterval);
  }

  console.warn(`Timed out waiting for annotations to render for example ${exampleNumber}.`);
}
