/*! For license information please see 5f9c7ad1.8552f4a8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88863],{82025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(74848),s=t(28453);const a={sidebar_label:"ElementHandle.$$eval"},l="ElementHandle.$$eval() method",i={id:"api/puppeteer.elementhandle.__eval",title:"ElementHandle.$$eval() method",description:"Runs the given function on an array of elements matching the given selector in the current element.",source:"@site/versioned_docs/version-23.5.3/api/puppeteer.elementhandle.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.__eval",permalink:"/api/puppeteer.elementhandle.__eval",draft:!1,unlisted:!1,tags:[],version:"23.5.3",frontMatter:{sidebar_label:"ElementHandle.$$eval"},sidebar:"api",previous:{title:"ElementHandle.$$",permalink:"/api/puppeteer.elementhandle.__"},next:{title:"ElementHandle.$eval",permalink:"/api/puppeteer.elementhandle._eval"}},d={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"elementhandleeval-method",children:"ElementHandle.$$eval() method"})}),"\n",(0,r.jsx)(n.p,{children:"Runs the given function on an array of elements matching the given selector in the current element."}),"\n",(0,r.jsx)(n.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Selector"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,r.jsx)(n.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,r.jsx)(n.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,r.jsx)(n.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,r.jsx)(n.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,r.jsx)(n.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,r.jsx)(n.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"pageFunction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Func | string"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"The function to be evaluated in the element's page's context. An array of elements matching the given selector will be passed to the function as its first argument."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"args"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Params"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Additional arguments to pass to ",(0,r.jsx)(n.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,r.jsx)(n.p,{children:"A promise to the result of the function."}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"HTML:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<div class="feed">\n  <div class="tweet">Hello!</div>\n  <div class="tweet">Hi!</div>\n</div>\n'})}),"\n",(0,r.jsx)(n.p,{children:"JavaScript:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const feedHandle = await page.$('.feed');\nexpect(\n  await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))\n).toEqual(['Hello!', 'Hi!']);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},21020:(e,n,t)=>{var r=t(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,a={},c=null,o=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)l.call(n,r)&&!d.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===a[r]&&(a[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:o,props:a,_owner:i.current}}n.Fragment=a,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);