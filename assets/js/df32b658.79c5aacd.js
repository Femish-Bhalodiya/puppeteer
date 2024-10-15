/*! For license information please see df32b658.79c5aacd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7445],{90279:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var t=s(74848),a=s(28453);const n={sidebar_label:"Coverage"},o="Coverage class",c={id:"api/puppeteer.coverage",title:"Coverage class",description:"The Coverage class provides methods to gather information about parts of JavaScript and CSS that were used by the page.",source:"@site/versioned_docs/version-23.5.3/api/puppeteer.coverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage",permalink:"/api/puppeteer.coverage",draft:!1,unlisted:!1,tags:[],version:"23.5.3",frontMatter:{sidebar_label:"Coverage"},sidebar:"api",previous:{title:"CDPSession.send",permalink:"/api/puppeteer.cdpsession.send"},next:{title:"Coverage.startCSSCoverage",permalink:"/api/puppeteer.coverage.startcsscoverage"}},i={},l=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"coverage-class",children:"Coverage class"})}),"\n",(0,t.jsx)(r.p,{children:"The Coverage class provides methods to gather information about parts of JavaScript and CSS that were used by the page."}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare class Coverage\n"})}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["To output coverage in a form consumable by ",(0,t.jsx)(r.a,{href:"https://github.com/istanbuljs",children:"Istanbul"}),", see ",(0,t.jsx)(r.a,{href:"https://github.com/istanbuljs/puppeteer-to-istanbul",children:"puppeteer-to-istanbul"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"Coverage"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:"An example of using JavaScript and CSS coverage to get percentage of initially executed code:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"// Enable both JavaScript and CSS coverage\nawait Promise.all([\n  page.coverage.startJSCoverage(),\n  page.coverage.startCSSCoverage(),\n]);\n// Navigate to page\nawait page.goto('https://example.com');\n// Disable both JavaScript and CSS coverage\nconst [jsCoverage, cssCoverage] = await Promise.all([\n  page.coverage.stopJSCoverage(),\n  page.coverage.stopCSSCoverage(),\n]);\nlet totalBytes = 0;\nlet usedBytes = 0;\nconst coverage = [...jsCoverage, ...cssCoverage];\nfor (const entry of coverage) {\n  totalBytes += entry.text.length;\n  for (const range of entry.ranges) usedBytes += range.end - range.start - 1;\n}\nconsole.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);\n"})}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"startcsscoverage",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.coverage.startcsscoverage",children:"startCSSCoverage(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"startjscoverage",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.coverage.startjscoverage",children:"startJSCoverage(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",(0,t.jsx)(r.code,{children:"eval"})," or ",(0,t.jsx)(r.code,{children:"new Function"}),". If ",(0,t.jsx)(r.code,{children:"reportAnonymousScripts"})," is set to ",(0,t.jsx)(r.code,{children:"true"}),", anonymous scripts URL will start with ",(0,t.jsx)(r.code,{children:"debugger://VM"})," (unless a magic //# sourceURL comment is present, in which case that will the be URL)."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"stopcsscoverage",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.coverage.stopcsscoverage",children:"stopCSSCoverage()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Promise that resolves to the array of coverage reports for all stylesheets."}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"CSS Coverage doesn't include dynamically injected style tags without sourceURLs."})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"stopjscoverage",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.coverage.stopjscoverage",children:"stopJSCoverage()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Promise that resolves to the array of coverage reports for all scripts."}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"JavaScript Coverage doesn't include anonymous scripts by default. However, scripts with sourceURLs are reported."})]})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,r,s)=>{var t=s(96540),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,n={},l=null,d=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,t)&&!i.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:a,type:e,key:l,ref:d,props:n,_owner:c.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>c});var t=s(96540);const a={},n=t.createContext(a);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);