/*! For license information please see 7b4a49db.74dfe4b1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32570],{93993:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=s(74848),n=s(28453);const i={sidebar_label:"Browser"},p="Browser class",d={id:"api/puppeteer.browser",title:"Browser class",description:"Browser represents a browser instance that is either:",source:"@site/versioned_docs/version-23.5.3/api/puppeteer.browser.md",sourceDirName:"api",slug:"/api/puppeteer.browser",permalink:"/api/puppeteer.browser",draft:!1,unlisted:!1,tags:[],version:"23.5.3",frontMatter:{sidebar_label:"Browser"},sidebar:"api",previous:{title:"Puppeteer.unregisterCustomQueryHandler",permalink:"/api/puppeteer.puppeteer.unregistercustomqueryhandler"},next:{title:"Browser.browserContexts",permalink:"/api/puppeteer.browser.browsercontexts"}},c={},o=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"browser-class",children:"Browser class"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"})," represents a browser instance that is either:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["connected to via ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"})," or - launched by ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"PuppeteerNode.launch()"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"})," ",(0,t.jsx)(r.a,{href:"/api/puppeteer.eventemitter.emit",children:"emits"})," various events which are documented in the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browserevent",children:"BrowserEvent"})," enum."]}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class Browser extends EventEmitter<BrowserEvents>\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Extends:"})," ",(0,t.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,t.jsx)(r.a,{href:"/api/puppeteer.browserevents",children:"BrowserEvents"}),">"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"Browser"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(r.p,{children:["Using a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"})," to create a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"Page"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\nconst page = await browser.newPage();\nawait page.goto('https://example.com');\nawait browser.close();\n"})}),"\n",(0,t.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(r.p,{children:["Disconnecting from and reconnecting to a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n// Store the endpoint to be able to reconnect to the browser.\nconst browserWSEndpoint = browser.wsEndpoint();\n// Disconnect puppeteer from the browser.\nawait browser.disconnect();\n\n// Use the endpoint to reestablish a connection\nconst browser2 = await puppeteer.connect({browserWSEndpoint});\n// Close the browser.\nawait browser2.close();\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"connected",children:"connected"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Whether Puppeteer is connected to this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"debuginfo",children:"debugInfo"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.debuginfo",children:"DebugInfo"})})}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.em,{children:"(Experimental)"})})," Get debug information from Puppeteer."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsx)(r.p,{children:"Currently, includes pending protocol calls. In the future, we might add more info."})]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"browsercontexts",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.browsercontexts",children:"browserContexts()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Gets a list of open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),(0,t.jsxs)(r.p,{children:["In a newly-created ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),", this will return a single instance of ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"BrowserContext"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"close",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.close",children:"close()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Closes this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"})," and all associated ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"createbrowsercontext",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.createbrowsercontext",children:"createBrowserContext(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Creates a new ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),(0,t.jsxs)(r.p,{children:["This won't share cookies/cache with other ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"defaultbrowsercontext",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"defaultBrowserContext()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Gets the default ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["The default ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," cannot be closed."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"disconnect",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.disconnect",children:"disconnect()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Disconnects Puppeteer from this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),", but leaves the process running."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"isconnected",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.isconnected",children:"isConnected()"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"deprecated"})})}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Whether Puppeteer is connected to this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Deprecated:"})}),(0,t.jsxs)(r.p,{children:["Use ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser.connected"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"newpage",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.newpage",children:"newPage()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Creates a new ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"page"})," in the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"pages",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.pages",children:"pages()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Gets a list of all open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," inside this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),"."]}),(0,t.jsxs)(r.p,{children:["If there are multiple ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),", this returns all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," in all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["Non-visible ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"}),", such as ",(0,t.jsx)(r.code,{children:'"background_page"'}),", will not be listed here. You can find them using ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target.page",children:"Target.page()"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"process",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.process",children:"process()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Gets the associated ",(0,t.jsx)(r.a,{href:"https://nodejs.org/api/child_process.html#class-childprocess",children:"ChildProcess"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"target",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.target",children:"target()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Gets the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"target"})," associated with the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),")."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"targets",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.targets",children:"targets()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Gets all active ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"targets"}),"."]}),(0,t.jsxs)(r.p,{children:["In case of multiple ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),", this returns all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"targets"})," in all ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"useragent",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.useragent",children:"userAgent()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Gets this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser's"})," original user agent."]}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"Pages"})," can override the user agent with ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page.setuseragent",children:"Page.setUserAgent()"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"version",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.version",children:"version()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Gets a string representing this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser's"})," name and version."]}),(0,t.jsxs)(r.p,{children:["For headless browser, this is similar to ",(0,t.jsx)(r.code,{children:'"HeadlessChrome/61.0.3153.0"'}),". For non-headless or new-headless, this is similar to ",(0,t.jsx)(r.code,{children:'"Chrome/61.0.3153.0"'}),". For Firefox, it is similar to ",(0,t.jsx)(r.code,{children:'"Firefox/116.0a1"'}),"."]}),(0,t.jsxs)(r.p,{children:["The format of ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.version",children:"Browser.version()"})," might change with future releases of browsers."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"waitfortarget",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.waitfortarget",children:"waitForTarget(predicate, options)"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Waits until a ",(0,t.jsx)(r.a,{href:"/api/puppeteer.target",children:"target"})," matching the given ",(0,t.jsx)(r.code,{children:"predicate"})," appears and returns it."]}),(0,t.jsxs)(r.p,{children:["This will look all open ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browsercontext",children:"browser contexts"}),"."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"wsendpoint",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.browser.wsendpoint",children:"wsEndpoint()"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsxs)(r.p,{children:["Gets the WebSocket URL to connect to this ",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"browser"}),"."]}),(0,t.jsxs)(r.p,{children:["This is usually used with ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]}),(0,t.jsxs)(r.p,{children:["You can find the debugger URL (",(0,t.jsx)(r.code,{children:"webSocketDebuggerUrl"}),") from ",(0,t.jsx)(r.code,{children:"http://HOST:PORT/json/version"}),"."]}),(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/#how-do-i-access-the-browser-target",children:"browser endpoint"})," for more information."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["The format is always ",(0,t.jsx)(r.code,{children:"ws://HOST:PORT/devtools/browser/<id>"}),"."]})]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},21020:(e,r,s)=>{var t=s(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,s){var t,i={},o=null,a=null;for(t in void 0!==s&&(o=""+s),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(a=r.ref),r)p.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:o,ref:a,props:i,_owner:d.current}}r.Fragment=i,r.jsx=o,r.jsxs=o},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>p,x:()=>d});var t=s(96540);const n={},i=t.createContext(n);function p(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:p(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);