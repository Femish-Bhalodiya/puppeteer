/*! For license information please see a66a44c3.4f36c49f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61635],{18400:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>o,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/puppeteer.puppeteer.registercustomqueryhandler","title":"Puppeteer.registerCustomQueryHandler() method","description":"Registers a custom query handler.","source":"@site/versioned_docs/version-23.10.1/api/puppeteer.puppeteer.registercustomqueryhandler.md","sourceDirName":"api","slug":"/api/puppeteer.puppeteer.registercustomqueryhandler","permalink":"/api/puppeteer.puppeteer.registercustomqueryhandler","draft":false,"unlisted":false,"tags":[],"version":"23.10.1","frontMatter":{"sidebar_label":"Puppeteer.registerCustomQueryHandler"},"sidebar":"api","previous":{"title":"Puppeteer.customQueryHandlerNames","permalink":"/api/puppeteer.puppeteer.customqueryhandlernames"},"next":{"title":"Puppeteer.unregisterCustomQueryHandler","permalink":"/api/puppeteer.puppeteer.unregistercustomqueryhandler"}}');var s=t(74848),p=t(28453);const i={sidebar_label:"Puppeteer.registerCustomQueryHandler"},a="Puppeteer.registerCustomQueryHandler() method",l={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,p.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"puppeteerregistercustomqueryhandler-method",children:"Puppeteer.registerCustomQueryHandler() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Registers a ",(0,s.jsx)(r.a,{href:"/api/puppeteer.customqueryhandler",children:"custom query handler"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Puppeteer {\n  static registerCustomQueryHandler(\n    name: string,\n    queryHandler: CustomQueryHandler,\n  ): void;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"name"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"The name that the custom query handler will be registered under."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"queryHandler"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.customqueryhandler",children:"CustomQueryHandler"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.a,{href:"/api/puppeteer.customqueryhandler",children:"custom query handler"})," to register."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"void"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["After registration, the handler can be used everywhere where a selector is expected by prepending the selection string with ",(0,s.jsx)(r.code,{children:"<name>/"}),". The name is only allowed to consist of lower- and upper case latin letters."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"import {Puppeteer}, puppeteer from 'puppeteer';\n\nPuppeteer.registerCustomQueryHandler('text', { \u2026 });\nconst aHandle = await page.$('text/\u2026');\n"})})]})}function o(e={}){const{wrapper:r}={...(0,p.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),p=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,p={},d=null,u=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(p[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===p[n]&&(p[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:u,props:p,_owner:a.current}}r.Fragment=p,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},p=n.createContext(s);function i(e){const r=n.useContext(p);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(p.Provider,{value:r},e.children)}}}]);