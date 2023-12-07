const fs = require('fs');
const path = require('path');

function getHomeRoot(callback) {
  exec('echo $HOME', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    // Remove the trailing newline character
    const homeRoot = stdout.trim();
    // Call the callback function with the result
    callback(homeRoot);
  });
}

async function makePrivateFunctionsPublic(filePath) {
  let data = await fs.readFileSync(filePath, 'utf8');
  // Replace the words
  data = data.replace(/\bprivate\b/g, "public");
  // Write the file back
  if (data != null && data != '' && data != undefined) {
    await fs.writeFileSync(filePath, data);
  }
};

async function readDirectory(dirPath) {
  const items = await fs.readdirSync(dirPath);

  items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      if (fullPath.includes('.base.')) {
      const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            readDirectory(fullPath);
        } else {
          makePrivateFunctionsPublic(fullPath);
        }
      }
  });
}

homeRoot = getHomeRoot();
readDirectory(`${homeRoot}/repo1/packages/react-charting/src/components/`);