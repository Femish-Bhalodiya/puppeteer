/*! For license information please see e7a49158.9026a302.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53353],{91628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/puppeteer.page.__eval","title":"Page.$$eval() method","description":"This method returns all elements matching the selector and passes the resulting array as the first argument to the pageFunction.","source":"@site/versioned_docs/version-23.10.1/api/puppeteer.page.__eval.md","sourceDirName":"api","slug":"/api/puppeteer.page.__eval","permalink":"/api/puppeteer.page.__eval","draft":false,"unlisted":false,"tags":[],"version":"23.10.1","frontMatter":{"sidebar_label":"Page.$$eval"},"sidebar":"api","previous":{"title":"Page.$$","permalink":"/api/puppeteer.page.__"},"next":{"title":"Page.$eval","permalink":"/api/puppeteer.page._eval"}}');var s=n(74848),a=n(28453);const i={sidebar_label:"Page.$$eval"},l="Page.$$eval() method",o={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"pageeval-method",children:"Page.$$eval() method"})}),"\n",(0,s.jsxs)(t.p,{children:["This method returns all elements matching the selector and passes the resulting array as the first argument to the ",(0,s.jsx)(t.code,{children:"pageFunction"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Selector"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"pageFunction"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Func | string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"the function to be evaluated in the page context. Will be passed an array of matching elements as its first argument."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"args"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Params"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["any additional arguments to pass through to ",(0,s.jsx)(t.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,s.jsxs)(t.p,{children:["The result of calling ",(0,s.jsx)(t.code,{children:"pageFunction"}),". If it returns an element it is wrapped in an ",(0,s.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),", else the raw value itself is returned."]}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"pageFunction"})," returns a promise ",(0,s.jsx)(t.code,{children:"$$eval"})," will wait for the promise to resolve and then return its value."]}),"\n",(0,s.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// get the amount of divs on the page\nconst divCount = await page.$$eval('div', divs => divs.length);\n\n// get the text content of all the `.options` elements:\nconst options = await page.$$eval('div > span.options', options => {\n  return options.map(option => option.textContent);\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",(0,s.jsx)(t.code,{children:"pageFunction"}),". By default it is typed as ",(0,s.jsx)(t.code,{children:"Element[]"}),", but you may need to provide a more specific sub-type:"]}),"\n",(0,s.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"await page.$$eval('input', elements => {\n  return elements.map(e => e.value);\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The compiler should be able to infer the return type from the ",(0,s.jsx)(t.code,{children:"pageFunction"})," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",(0,s.jsx)(t.code,{children:"$$eval"}),":"]}),"\n",(0,s.jsx)(t.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const allInputValues = await page.$$eval('input', elements =>\n  elements.map(e => e.textContent),\n);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,a={},p=null,c=null;for(r in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!o.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:s,type:e,key:p,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=p,t.jsxs=p},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);