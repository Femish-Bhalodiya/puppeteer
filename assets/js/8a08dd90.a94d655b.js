/*! For license information please see 8a08dd90.a94d655b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84001],{26006:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(74848),a=n(28453);const s={sidebar_label:"WebWorker.evaluateHandle"},l="WebWorker.evaluateHandle() method",i={id:"api/puppeteer.webworker.evaluatehandle",title:"WebWorker.evaluateHandle() method",description:"Evaluates a given function in the worker.",source:"@site/versioned_docs/version-23.5.3/api/puppeteer.webworker.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.webworker.evaluatehandle",permalink:"/api/puppeteer.webworker.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"23.5.3",frontMatter:{sidebar_label:"WebWorker.evaluateHandle"},sidebar:"api",previous:{title:"WebWorker.evaluate",permalink:"/api/puppeteer.webworker.evaluate"},next:{title:"WebWorker.url",permalink:"/api/puppeteer.webworker.url"}},o={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"webworkerevaluatehandle-method",children:"WebWorker.evaluateHandle() method"})}),"\n",(0,t.jsxs)(r.p,{children:["Evaluates a given function in the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.webworker",children:"worker"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class WebWorker {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    func: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"func"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Func | string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Function to be evaluated."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"Params"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Arguments to pass into ",(0,t.jsx)(r.code,{children:"func"}),"."]})})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]}),"\n",(0,t.jsxs)(r.p,{children:["A ",(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"handle"})," to the return value of ",(0,t.jsx)(r.code,{children:"func"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["If the given function returns a promise, ",(0,t.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," will wait for the promise to resolve."]}),"\n",(0,t.jsxs)(r.p,{children:["In general, you should use ",(0,t.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluatehandle",children:"evaluateHandle"})," if ",(0,t.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," cannot serialize the return value properly or you need a mutable ",(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"handle"})," to the return object."]})]})}function c(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},21020:(e,r,n)=>{var t=n(96540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,s={},d=null,p=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)l.call(r,t)&&!o.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:d,ref:p,props:s,_owner:i.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>i});var t=n(96540);const a={},s=t.createContext(a);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);