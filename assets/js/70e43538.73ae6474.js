/*! For license information please see 70e43538.73ae6474.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66236],{30341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"api/puppeteer.page.waitforrequest","title":"Page.waitForRequest() method","description":"Signature","source":"@site/versioned_docs/version-23.10.1/api/puppeteer.page.waitforrequest.md","sourceDirName":"api","slug":"/api/puppeteer.page.waitforrequest","permalink":"/api/puppeteer.page.waitforrequest","draft":false,"unlisted":false,"tags":[],"version":"23.10.1","frontMatter":{"sidebar_label":"Page.waitForRequest"},"sidebar":"api","previous":{"title":"Page.waitForNetworkIdle","permalink":"/api/puppeteer.page.waitfornetworkidle"},"next":{"title":"Page.waitForResponse","permalink":"/api/puppeteer.page.waitforresponse"}}');var i=r(74848),n=r(28453);const a={sidebar_label:"Page.waitForRequest"},o="Page.waitForRequest() method",l={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"pagewaitforrequest-method",children:"Page.waitForRequest() method"})}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForRequest(\n    urlOrPredicate: string | AwaitablePredicate<HTTPRequest>,\n    options?: WaitTimeoutOptions,\n  ): Promise<HTTPRequest>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"urlOrPredicate"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:["string | ",(0,i.jsx)(t.a,{href:"/api/puppeteer.awaitablepredicate",children:"AwaitablePredicate"}),"<",(0,i.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),">"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"A URL or predicate to wait for"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"(Optional)"})," Optional waiting parameters"]})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(t.p,{children:["Promise<",(0,i.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),">"]}),"\n",(0,i.jsx)(t.p,{children:"Promise which resolves to the matched request"}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(t.p,{children:"Optional Waiting Parameters have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"timeout"}),": Maximum wait time in milliseconds, defaults to ",(0,i.jsx)(t.code,{children:"30"})," seconds, pass ",(0,i.jsx)(t.code,{children:"0"})," to disable the timeout. The default value can be changed by using the ",(0,i.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const firstRequest = await page.waitForRequest('https://example.com/resource');\nconst finalRequest = await page.waitForRequest(\n  request => request.url() === 'https://example.com',\n);\nreturn finalRequest.response()?.ok();\n"})})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,t,r)=>{var s=r(96540),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var s,n={},p=null,d=null;for(s in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:p,ref:d,props:n,_owner:o.current}}t.Fragment=n,t.jsx=p,t.jsxs=p},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var s=r(96540);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);