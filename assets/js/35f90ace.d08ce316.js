"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[1888],{3823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>x});var l=n(5893),s=n(1151);const r={},i=void 0,d={id:"Test Plans/LineChart/ComponentTests",title:"ComponentTests",description:"Line Chart \u2013 Component test plan",source:"@site/../../docs/Test Plans/LineChart/ComponentTests.md",sourceDirName:"Test Plans/LineChart",slug:"/Test Plans/LineChart/ComponentTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/LineChart/ComponentTests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UnitTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/HorizontalBarChartWithAxis/UnitTests"},next:{title:"componentTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/MultiStackedBarChart/componentTests"}},c={},x=[];function h(e){const t={li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Line Chart \u2013 Component test plan"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Sub-components: Line, x-axis, y-axis, Event, Time Range, Callout, Drop down and Legend"})}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Line: Line data, Line color (multi colors), Line label (show/hide)"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Legends: show/hide legends, highlight the corresponding line on legend hover"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Callout: Default/custom callout"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.strong,{children:"Labels: x-Axis labels"})}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Test steps"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Validation"})}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:(0,l.jsx)(t.strong,{children:"Tool used"})})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 1: [Snapshot testing]"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, numerical data on x-axis."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Renders line chart correctly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, date data on x-axis."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Renders line chart correctly"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, string data on x-axis."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not render area chart"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Pending"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With allowMultipleShapesForPoints set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render line chart with multiple shapes for chart points"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With HideLegend prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should hide legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With HideTooltip prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should hide the tooltip in chart"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With EnabledLegendsWrapLines set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should enable the legends to wrap lines if there is not enough space to show all legends on a single line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With ShowXAxisLablesTooltip set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should truncate x axis labels and show tooltip on x axis labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With WrapXAxisLables set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should wrap x axis label values"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With yAxisTickFormat set to \u201c%d\u201d"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)("p",{children:"Should render the y-axis ticks in the format specified"}),(0,l.jsx)("p",{})]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- With canSelectMultipleLegends set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should select multiple legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 2: Basic props testing"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideLegend prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not mount legend when hideLegend is true"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideLegend prop set to \u201cfalse\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should mount legend when hideLegend is false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideTooltip prop set to \u201ctrue\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should not mount callout when hideTootip is true"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- HideTooltip prop set to \u201cfalse\u201d"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should mount callout when hideTootip is false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 3: Render calling with respective to props"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- No prop changes: Mount line chart and then set the same props again"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Prop changes: Mount line chart and then set some other prop"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 4: Mouse events"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout correctly on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse move from one line to other line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render callout correctly on mouse move"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a line with customized callout"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render customized callout on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Customized callout on a line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render customized callout correctly on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Customized callout on a line from one line to other line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render customized callout for stack on mouseover"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 5: Render empty chart aria label div when chart is empty"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Line chart mounted with non-empty data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"No empty chart aria label div rendered"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Line chart mounted with empty data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Empty chart aria label div rendered"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 6: Render empty chart calling with respective to props"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- No prop changes: Mount line chart with non-empty data and then set the same props again"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- prop changes: Mount line chart with empty data and then set the props"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called 3 times"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 7: [Sub-Component]: Line"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify lines with specified colors"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render lines with the color provided in data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify line data with gaps"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render the lines with specified gaps"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 8: [Sub-Component]: Legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over line legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should highlight the corresponding line on mouse over on legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse leave on legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reset the highlighted line on mouse leave on legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Single mouse click on legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should select legend on single mouse click on respective legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Double mouse click on legends"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should deselect legend on double mouse click on respective legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 9: [Sub-Component]: Time Range(Color fill bars)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Line chart with time range"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render time range with specified data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Single mouse click on time range legend"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should highlight corresponding time range on legend click"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 10: [Sub-Component]: x-axis labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Truncate x-axis labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the x-axis labels tooltip when hovered"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Rotate x-axis labels"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should rotate the x-axis labels by 45 degrees"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 11: [Sub-Component]: Event"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Line chart with Events data"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should render line chart with events"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 12: [Sub-Component]: Screen resolution"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Increase the screen resolution (zoom in)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should remain unchanged on zoom in"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"- Decrease the screen resolution (zoom out)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should remain unchanged on zoom out"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Test 13: Theme changed to Dark Theme"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Should reflect theme change"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var l=n(7294);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);