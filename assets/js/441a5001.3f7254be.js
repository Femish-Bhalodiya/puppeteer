/*! For license information please see 441a5001.3f7254be.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2191],{49807:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"api/puppeteer.frame.__eval","title":"Frame.$$eval() method","description":"Runs the given function on an array of elements matching the given selector in the frame.","source":"@site/versioned_docs/version-23.10.1/api/puppeteer.frame.__eval.md","sourceDirName":"api","slug":"/api/puppeteer.frame.__eval","permalink":"/api/puppeteer.frame.__eval","draft":false,"unlisted":false,"tags":[],"version":"23.10.1","frontMatter":{"sidebar_label":"Frame.$$eval"},"sidebar":"api","previous":{"title":"Frame.$$","permalink":"/api/puppeteer.frame.__"},"next":{"title":"Frame.$eval","permalink":"/api/puppeteer.frame._eval"}}');var s=t(74848),a=t(28453);const i={sidebar_label:"Frame.$$eval"},l="Frame.$$eval() method",c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"frameeval-method",children:"Frame.$$eval() method"})}),"\n",(0,s.jsx)(r.p,{children:"Runs the given function on an array of elements matching the given selector in the frame."}),"\n",(0,s.jsx)(r.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,\n  >(\n    selector: Selector,\n    pageFunction: string | Func,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Selector"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"pageFunction"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string | Func"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"The function to be evaluated in the frame's context. An array of elements matching the given selector will be passed to the function as its first argument."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"args"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Params"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Additional arguments to pass to ",(0,s.jsx)(r.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,s.jsx)(r.p,{children:"A promise to the result of the function."}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const divsCounts = await frame.$$eval('div', divs => divs.length);\n"})})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var n,a={},o=null,d=null;for(n in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:o,ref:d,props:a,_owner:l.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);