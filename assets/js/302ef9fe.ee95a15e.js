/*! For license information please see 302ef9fe.ee95a15e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31929],{39460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(74848),r=t(28453);const o={},i="JavaScript execution",s={id:"guides/javascript-execution",title:"JavaScript execution",description:"Puppeteer allows evaluating JavaScript functions in the context of the page",source:"@site/versioned_docs/version-23.5.3/guides/javascript-execution.md",sourceDirName:"guides",slug:"/guides/javascript-execution",permalink:"/guides/javascript-execution",draft:!1,unlisted:!1,tags:[],version:"23.5.3",frontMatter:{},sidebar:"docs",previous:{title:"Page interactions",permalink:"/guides/page-interactions"},next:{title:"Network logging",permalink:"/guides/network-logging"}},c={},l=[{value:"Return types",id:"return-types",level:2},{value:"Returning promises",id:"returning-promises",level:2},{value:"Passing arguments to the evaluate function",id:"passing-arguments-to-the-evaluate-function",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"javascript-execution",children:"JavaScript execution"})}),"\n",(0,a.jsx)(n.p,{children:"Puppeteer allows evaluating JavaScript functions in the context of the page\ndriven by Puppeteer:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// Import puppeteer\nimport puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser\n  const browser = await puppeteer.launch();\n\n  // Create a page\n  const page = await browser.newPage();\n\n  // Go to your site\n  await page.goto('YOUR_SITE');\n\n  // Evaluate JavaScript\n  const three = await page.evaluate(() => {\n    return 1 + 2;\n  });\n\n  console.log(three);\n\n  // Close browser.\n  await browser.close();\n})();\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Although the function is defined in your script context, it actually gets\nconverted to a string by Puppeteer, sent to the target page and evaluated there.\nIt means that the function cannot access scope variables or call other functions\ndefined in your Puppeteer script, and you need to define the entire function\nlogic within the function body."})}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, you can provide a function body as a string:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// Evaluate JavaScript\nconst three = await page.evaluate(`\n    1 + 2\n`);\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"The example above produces the equivalent results but it also illustrates that\nthe types and global variables available to the evaluated function cannot be\nknown. Especially, in TypeScript you should be careful to make sure that objects\nreferenced by the evaluated function are correct."})}),"\n",(0,a.jsx)(n.h2,{id:"return-types",children:"Return types"}),"\n",(0,a.jsx)(n.p,{children:"The functions you evaluate can return values. If the returned value is of a\nprimitive type, it gets automatically converted by Puppeteer to a primitive type\nin the script context like in the previous example."}),"\n",(0,a.jsx)(n.p,{children:"If the script returns an object, Puppeteer serializes it to a JSON and\nreconstructs it on the script side. This process might not always yield correct\nresults, for example, when you return a DOM node:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const body = await page.evaluate(() => {\n  return document.body;\n});\nconsole.log(body); // {}, unexpected!\n"})}),"\n",(0,a.jsx)(n.p,{children:"To work with the returned objects, Puppeteer offers a way to return objects by reference:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const body = await page.evaluateHandle(() => {\n  return document.body;\n});\nconsole.log(body instanceof ElementHandle); // true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The returned object is either a ",(0,a.jsx)(n.code,{children:"JSHandle"})," or a ",(0,a.jsx)(n.code,{children:"ElementHandle"}),". ",(0,a.jsx)(n.code,{children:"ElementHandle"}),"\nextends ",(0,a.jsx)(n.code,{children:"JSHandle"})," and it is only created for DOM elements."]}),"\n",(0,a.jsxs)(n.p,{children:["See the ",(0,a.jsx)(n.a,{href:"https://pptr.dev/api",children:"API documentation"})," for more details about what methods are available for handles."]}),"\n",(0,a.jsx)(n.h2,{id:"returning-promises",children:"Returning promises"}),"\n",(0,a.jsx)(n.p,{children:"If you return a Promise from an evaluate call, the promise will be automatically\nawaited. For example,"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"await page.evaluate(() => {\n  // wait for 100ms.\n  return new Promise(resolve => setTimeout(resolve, 100));\n});\n// Execution continues here once the Promise created in the page context resolves.\n"})}),"\n",(0,a.jsx)(n.h2,{id:"passing-arguments-to-the-evaluate-function",children:"Passing arguments to the evaluate function"}),"\n",(0,a.jsx)(n.p,{children:"You can provide arguments to your function:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const three = await page.evaluate(\n  (a, b) => {\n    return a + b; // 1 + 2\n  },\n  1,\n  2\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The arguments can be primitive values or ",(0,a.jsx)(n.code,{children:"JSHandle"}),"s."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Page, JSHandle and ElementHandle offer several different helpers to evaluate\nJavaScript but they all follow the basic principles outlined in this guide."})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},21020:(e,n,t)=>{var a=t(96540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,o={},l=null,u=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,a)&&!c.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:s.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(96540);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);