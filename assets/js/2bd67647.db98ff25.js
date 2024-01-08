"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[13],{1936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(5893),l=n(1151);const r={},d=void 0,c={id:"Test Plans/SankeyChart/ComponentTests",title:"ComponentTests",description:"Sankey Chart \u2013 Component test plan",source:"@site/../../docs/Test Plans/SankeyChart/ComponentTests.md",sourceDirName:"Test Plans/SankeyChart",slug:"/Test Plans/SankeyChart/ComponentTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/SankeyChart/ComponentTests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"componentTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/MultiStackedBarChart/componentTests"},next:{title:"ComponentTests",permalink:"/fluentui-charting-contrib/docs/Test Plans/StackedBarChart/ComponentTests"}},i={},o=[];function x(e){const t={li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Sankey Chart \u2013 Component test plan"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Sub-components: Node, Callout, Labels,"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Node: Node data, Node color, Node label"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Callout: Default callout"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Labels: Default labels"})}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Test steps"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Validation"})}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:(0,s.jsx)(t.strong,{children:"Tool used"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Test 1: [Snapshot testing]"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, string data as node ID."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should render sankey chart with axis correctly"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- With only data prop, numeric data as node ID."}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should render sankey chart with axis correctly"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- With node color and border colors"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should render Sankey chart with specified node and border colors"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Test 2: Render calling with respective to props"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- No prop changes: Mount Sankey chart and then set the same props again"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- Prop changes: Mount Sankey chart and then set some other prop"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Render function should have been called twice"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Test 3: Mouse events"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on a node"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should update Sankey chart correctly on mouseover"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse over on link"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should update Sankey chart correctly on mouseover"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- Mouse click on a node"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should update node and path color based on the link"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Test 4: [Sub-Component]: Node"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- Specify node color"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should render node with the specified color"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- With node description is large"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should render tooltip correctly when node description is large"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Test 5: [Sub-Component]: Callout"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- Hover mouse over a link to display callout"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should show the default callout over that link"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Enzyme"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Test 6: [Sub-Component]: Labels"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"- Set node name to \u201cx\u201d"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should render node name properly"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Test 7: Theme changed to Dark Theme"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Should reflect theme change"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"RTL"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>d});var s=n(7294);const l={},r=s.createContext(l);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);