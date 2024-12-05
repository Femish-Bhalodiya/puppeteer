/*! For license information please see 47c07ce9.d2aad3a6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[94613],{41247:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"api/puppeteer.page.cookies","title":"Page.cookies() method","description":"Warning: This API is now obsolete.","source":"@site/versioned_docs/version-23.10.1/api/puppeteer.page.cookies.md","sourceDirName":"api","slug":"/api/puppeteer.page.cookies","permalink":"/api/puppeteer.page.cookies","draft":false,"unlisted":false,"tags":[],"version":"23.10.1","frontMatter":{"sidebar_label":"Page.cookies"},"sidebar":"api","previous":{"title":"Page.content","permalink":"/api/puppeteer.page.content"},"next":{"title":"Page.createCDPSession","permalink":"/api/puppeteer.page.createcdpsession"}}');var n=s(74848),o=s(28453);const i={sidebar_label:"Page.cookies"},a="Page.cookies() method",c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"pagecookies-method",children:"Page.cookies() method"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(r.p,{children:["Page-level cookie API is deprecated. Use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browser.cookies",children:"Browser.cookies()"})," or ",(0,n.jsx)(r.a,{href:"/api/puppeteer.browsercontext.cookies",children:"BrowserContext.cookies()"})," instead."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"If no URLs are specified, this method returns cookies for the current page URL. If URLs are specified, only cookies for those URLs are returned."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract cookies(...urls: string[]): Promise<Cookie[]>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"urls"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string[]"})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.cookie",children:"Cookie"}),"[]>"]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},21020:(e,r,s)=>{var t=s(96540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,s){var t,o={},p=null,l=null;for(t in void 0!==s&&(p=""+s),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:n,type:e,key:p,ref:l,props:o,_owner:a.current}}r.Fragment=o,r.jsx=p,r.jsxs=p},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var t=s(96540);const n={},o=t.createContext(n);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);