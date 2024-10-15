/*! For license information please see afdbb5e9.87271a95.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6065],{67084:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(74848),t=s(28453);const r={},o="Contributing",l={id:"contributing",title:"Contributing",description:"First of all, thank you for your interest in Puppeteer! We'd love to accept your",source:"@site/versioned_docs/version-23.5.3/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",draft:!1,unlisted:!1,tags:[],version:"23.5.3",frontMatter:{},sidebar:"docs",previous:{title:"Community",permalink:"/category/community"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},c={},a=[{value:"Contributor License Agreement",id:"contributor-license-agreement",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Building a single package",id:"building-a-single-package",level:2},{value:"Watch mode",id:"watch-mode",level:3},{value:"Removing stale artifacts",id:"removing-stale-artifacts",level:2},{value:"Comprehensive testing",id:"comprehensive-testing",level:2},{value:"Unit tests",id:"unit-tests",level:3},{value:"Code reviews",id:"code-reviews",level:2},{value:"Code Style",id:"code-style",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"API guidelines",id:"api-guidelines",level:2},{value:"Commit messages",id:"commit-messages",level:2},{value:"Writing documentation",id:"writing-documentation",level:2},{value:"Writing TSDoc comments",id:"writing-tsdoc-comments",level:2},{value:"Running the documentation site locally",id:"running-the-documentation-site-locally",level:2},{value:"Adding new dependencies",id:"adding-new-dependencies",level:2},{value:"Testing tips",id:"testing-tips",level:2},{value:"API Coverage",id:"api-coverage",level:2},{value:"Debugging Puppeteer",id:"debugging-puppeteer",level:2},{value:"Debugging Puppeteer tests via VSCode",id:"debugging-puppeteer-tests-via-vscode",level:3},{value:"Rolling new Chrome version",id:"rolling-new-chrome-version",level:2},{value:"Manual instructions",id:"manual-instructions",level:3},{value:"Bisecting upstream changes",id:"bisecting-upstream-changes",level:3},{value:"Releasing to npm",id:"releasing-to-npm",level:2},{value:"In case Release Please fails",id:"in-case-release-please-fails",level:3},{value:"Bug triage guidelines",id:"bug-triage-guidelines",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"contributing",children:"Contributing"})}),"\n",(0,i.jsx)(n.p,{children:"First of all, thank you for your interest in Puppeteer! We'd love to accept your\npatches and contributions!"}),"\n",(0,i.jsx)(n.h2,{id:"contributor-license-agreement",children:"Contributor License Agreement"}),"\n",(0,i.jsxs)(n.p,{children:["Contributions to this project must be accompanied by a Contributor License\nAgreement. You (or your employer) retain the copyright to your contribution,\nthis simply gives us permission to use and redistribute your contributions as\npart of the project. Head over to <",(0,i.jsx)(n.a,{href:"https://cla.developers.google.com/",children:"https://cla.developers.google.com/"}),"> to see\nyour current agreements on file or to sign a new one."]}),"\n",(0,i.jsx)(n.p,{children:"You generally only need to submit a CLA once, so if you've already submitted one\n(even if it was for a different project), you probably don't need to do it\nagain."}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone this repository"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/puppeteer/puppeteer\ncd puppeteer\n"})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=90796663&machine=standardLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json",children:(0,i.jsx)(n.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the dependencies"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install\n# Or to download Firefox by default\nPUPPETEER_BROWSER=firefox npm install\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Build all packages"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run all tests"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm test\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"building-a-single-package",children:"Building a single package"}),"\n",(0,i.jsx)(n.p,{children:"To build a single package, you can run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run build --workspace <package> # e.g. puppeteer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will build all dependent packages automatically, so specifying a single\npackage is sufficient. This is all possible due to\n",(0,i.jsx)(n.a,{href:"https://github.com/google/wireit",children:"wireit"})," which behaves similar to\n",(0,i.jsx)(n.a,{href:"https://www.gnu.org/software/make/",children:"GNU Make"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"watch-mode",children:"Watch mode"}),"\n",(0,i.jsx)(n.p,{children:"To continuously build a package, you can run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run build --watch --workspace <package> # e.g. puppeteer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You have to only specify a single package to watch else things will not work as expected\nAs stated above because of ",(0,i.jsx)(n.a,{href:"https://github.com/google/wireit",children:"wireit"})," when a change happens\nall dependencies will be build or rebuild (if needed)."]}),"\n",(0,i.jsx)(n.h2,{id:"removing-stale-artifacts",children:"Removing stale artifacts"}),"\n",(0,i.jsxs)(n.p,{children:["It's possible some generated artifacts (such as\n",(0,i.jsx)(n.code,{children:"packages/puppeteer-core/src/types.ts"}),") can become stale since these artifacts\nrely on complex conditions (such as names of distinct files) that cannot be\ncaptured by the build system. To clean artifacts, you can run"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run clean\n# or specify the package\nnpm run clean --workspace <package>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"comprehensive-testing",children:"Comprehensive testing"}),"\n",(0,i.jsxs)(n.p,{children:["Outside of ",(0,i.jsx)(n.code,{children:"npm test"}),", there are several other\n",(0,i.jsxs)(n.a,{href:"https://docs.npmjs.com/cli/using-npm/scripts",children:[(0,i.jsx)(n.code,{children:"npm"})," scripts"]})," that are\nusually check through CI:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test-install"})," - Tests whether ",(0,i.jsx)(n.code,{children:"puppeteer"})," and ",(0,i.jsx)(n.code,{children:"puppeteer-core"})," install\nproperly and are functional."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test-types"})," - Tests the TypeScript types in ",(0,i.jsx)(n.code,{children:"puppeteer"})," using\n",(0,i.jsx)(n.a,{href:"https://github.com/SamVerschueren/tsd",children:(0,i.jsx)(n.code,{children:"tsd"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test:chrome:**"})," - Tests ",(0,i.jsx)(n.code,{children:"puppeteer"})," on Chrome."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test:firefox:**"})," - Tests ",(0,i.jsx)(n.code,{children:"puppeteer"})," on Firefox."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"unit"})," - Runs unit tests."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The default ",(0,i.jsx)(n.code,{children:"npm test"})," runs ",(0,i.jsx)(n.code,{children:"test:{chrome,firefox}:headless"})," which is generally\nsufficient."]}),"\n",(0,i.jsxs)(n.p,{children:["Puppeteer uses a custom test runner on top of Mocha that consults the\n",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/test/TestExpectations.json",children:"TestExpectations.json"}),"\nto see if a given test result is expected or not. See more info about the test\nrunner in\n",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/tools/mocha-runner",children:(0,i.jsx)(n.code,{children:"tools/mocha-runner"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"unit-tests",children:"Unit tests"}),"\n",(0,i.jsx)(n.p,{children:"Tests that only test code (without the running browser) are put next to the classes they test\nand run using the Node test runner (requires Node 20+):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run unit\n"})}),"\n",(0,i.jsx)(n.h2,{id:"code-reviews",children:"Code reviews"}),"\n",(0,i.jsxs)(n.p,{children:["All submissions, including submissions by project members, require review. We\nuse GitHub pull requests for this purpose. Consult\n",(0,i.jsx)(n.a,{href:"https://help.github.com/articles/about-pull-requests/",children:"GitHub Help"})," for more\ninformation on using pull requests."]}),"\n",(0,i.jsx)(n.h2,{id:"code-style",children:"Code Style"}),"\n",(0,i.jsxs)(n.p,{children:["Our coding style is fully defined in\n",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/.eslintrc.js",children:(0,i.jsx)(n.code,{children:".eslintrc"})}),"\n(",(0,i.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"}),") and\n",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/.prettierrc.cjs",children:(0,i.jsx)(n.code,{children:".prettierrc.cjs"})}),"\n(",(0,i.jsx)(n.a,{href:"https://prettier.io",children:"Prettier"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"Code is checked for PRs automatically and you can check your code\nmanually by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run lint\n"})}),"\n",(0,i.jsx)(n.p,{children:"If some errors are returned, you can attempt to fix them using:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run format\n"})}),"\n",(0,i.jsx)(n.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,i.jsx)(n.p,{children:"The following is a description of the primary folders in Puppeteer:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"packages"})," contains all public source code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test"})," contains all test source code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test-d"})," contains type tests using\n",(0,i.jsx)(n.a,{href:"https://github.com/SamVerschueren/tsd",children:(0,i.jsx)(n.code,{children:"tsd"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tools"})," contains miscellaneous scripts that are used in building and etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tools/mocha-runner"})," - contains the source code for our test runner."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"api-guidelines",children:"API guidelines"}),"\n",(0,i.jsx)(n.p,{children:"When authoring new API methods, consider the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Expose as little information as needed. When in doubt, don\u2019t expose new\ninformation."}),"\n",(0,i.jsxs)(n.li,{children:["Methods are used in favor of getters/setters.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The only exception is namespaces, e.g. ",(0,i.jsx)(n.code,{children:"page.keyboard"})," and ",(0,i.jsx)(n.code,{children:"page.coverage"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"All string literals must be small case. This includes event names and option\nvalues."}),"\n",(0,i.jsxs)(n.li,{children:['Avoid adding "sugar" API (API that is trivially implementable in user-space)\nunless they\'re ',(0,i.jsx)(n.strong,{children:"extremely"})," demanded."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"commit-messages",children:"Commit messages"}),"\n",(0,i.jsxs)(n.p,{children:["Commit messages should follow\n",(0,i.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/#summary",children:"the Conventional Commits format"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In particular, breaking changes should clearly be noted as \u201cBREAKING CHANGE:\u201d in\nthe commit message footer. Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"fix(page): fix page.pizza method\n\nThis patch fixes page.pizza so that it works with iframes.\n\nIssues: #123, #234\n\nBREAKING CHANGE: page.pizza now delivers pizza at home by default.\nTo deliver to a different location, use the \"deliver\" option:\n  `page.pizza({deliver: 'work'})`.\n"})}),"\n",(0,i.jsx)(n.h2,{id:"writing-documentation",children:"Writing documentation"}),"\n",(0,i.jsxs)(n.p,{children:["Documentation is generated from TSDoc comments via ",(0,i.jsx)(n.code,{children:"npm run docs"}),". It is automatically\npublished to our documentation site on merge and gets versioned on release."]}),"\n",(0,i.jsxs)(n.p,{children:["This means that you should not change the markdown in files ",(0,i.jsx)(n.code,{children:"docs/api"})," manually."]}),"\n",(0,i.jsx)(n.h2,{id:"writing-tsdoc-comments",children:"Writing TSDoc comments"}),"\n",(0,i.jsxs)(n.p,{children:["Each change to Puppeteer should be thoroughly documented using TSDoc comments.\nRefer to the\n",(0,i.jsx)(n.a,{href:"https://api-extractor.com/pages/tsdoc/doc_comment_syntax/",children:"API Extractor documentation"}),"\nfor information on the exact syntax."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Every new method needs to have either ",(0,i.jsx)(n.code,{children:"@public"})," or ",(0,i.jsx)(n.code,{children:"@internal"})," added as a tag\ndepending on if it is part of the public API."]}),"\n",(0,i.jsxs)(n.li,{children:["Keep each line in a comment to no more than 90 characters (ESLint will warn\nyou if you go over this). If you're a VSCode user the\n",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=stkb.rewrap",children:"Rewrap plugin"}),"\nis highly recommended!"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-the-documentation-site-locally",children:"Running the documentation site locally"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["At root, install all dependencies with ",(0,i.jsx)(n.code,{children:"npm i --ignore-scripts"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["run ",(0,i.jsx)(n.code,{children:"npm run docs"})," which will generate all the ",(0,i.jsx)(n.code,{children:".md"})," files on\n",(0,i.jsx)(n.code,{children:"puppeteer/docs/api"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["run ",(0,i.jsx)(n.code,{children:"npm i"})," in ",(0,i.jsx)(n.code,{children:"puppeteer/website"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["run ",(0,i.jsx)(n.code,{children:"npm start"})," in ",(0,i.jsx)(n.code,{children:"puppeteer/website"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"adding-new-dependencies",children:"Adding new dependencies"}),"\n",(0,i.jsx)(n.p,{children:"For all dependencies (both installation and development):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Do not add"})," a dependency if the desired functionality is easily\nimplementable."]}),"\n",(0,i.jsx)(n.li,{children:"If adding a dependency, it should be well-maintained and trustworthy."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A barrier for introducing new installation dependencies is especially high:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Do not add"})," installation dependency unless it's critical to project\nsuccess."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["There are additional considerations for dependencies that are environment\nagonistic. See the\n",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/third_party/README.md",children:(0,i.jsx)(n.code,{children:"third_party/README.md"})}),"\nfor details."]}),"\n",(0,i.jsx)(n.h2,{id:"testing-tips",children:"Testing tips"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Every feature should be accompanied by a test."}),"\n",(0,i.jsx)(n.li,{children:"Every public api event/method should be accompanied by a test."}),"\n",(0,i.jsx)(n.li,{children:"Tests should not depend on external services."}),"\n",(0,i.jsx)(n.li,{children:"Tests should work on all three platforms: Mac, Linux and Win. This is\nespecially important for screenshot tests."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If a test is expected to fail on certain configurations or became flaky, update\n",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/test/TestExpectations.json",children:"TestExpectations.json"}),"\nto reflect that. See more info about TestExpectations.json in\n",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/tools/mocha-runner",children:(0,i.jsx)(n.code,{children:"tools/mocha-runner"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"api-coverage",children:"API Coverage"}),"\n",(0,i.jsxs)(n.p,{children:["Every public API method or event should be called at least once in tests. To\nensure this, the main ",(0,i.jsx)(n.code,{children:"test"})," command runs coverage during testing."]}),"\n",(0,i.jsx)(n.h2,{id:"debugging-puppeteer",children:"Debugging Puppeteer"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://pptr.dev/guides/debugging",children:"Debugging Tips"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"debugging-puppeteer-tests-via-vscode",children:"Debugging Puppeteer tests via VSCode"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the provided default ",(0,i.jsx)(n.code,{children:".vscode/launch.template.json"})," to ",(0,i.jsx)(n.code,{children:".vscode/launch.json"})," and then use the integrated VSCode debugger to debug test."]}),"\n",(0,i.jsx)(n.p,{children:"Remember to build test before launching via:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run build --workspace @puppeteer-test/test\n"})}),"\n",(0,i.jsx)(n.h1,{id:"for-project-maintainers",children:"For Project Maintainers"}),"\n",(0,i.jsx)(n.h2,{id:"rolling-new-chrome-version",children:"Rolling new Chrome version"}),"\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/.github/workflows/update-browser-pins.yml",children:"GitHub action"})," that runs once per day.\nThe action has a manual trigger that can be found on the ",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/actions/workflows/update-browser-pins.yml",children:"Actions Tab"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"manual-instructions",children:"Manual instructions"}),"\n",(0,i.jsxs)(n.p,{children:["You can run the ",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/tools/update_browser_revision.mjs",children:(0,i.jsx)(n.code,{children:"tools/update_browser_revision.mjs"})})," locally\nand try see if any changes need to be committed."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: You may need to run ",(0,i.jsx)(n.code,{children:"node --experimental-fetch tools/update_browser_revision.mjs"})," as the script relies on ",(0,i.jsx)(n.code,{children:"fetch"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The following steps are manual version of the script above."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Find a suitable Chrome ",(0,i.jsx)(n.code,{children:"revision"})," and ",(0,i.jsx)(n.code,{children:"version"})," via ",(0,i.jsx)(n.a,{href:"https://googlechromelabs.github.io/chrome-for-testing/",children:"https://googlechromelabs.github.io/chrome-for-testing/"})," or ",(0,i.jsx)(n.a,{href:"https://chromiumdash.appspot.com/",children:"https://chromiumdash.appspot.com/"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"packages/puppeteer-core/src/revisions.ts"})," with the found ",(0,i.jsx)(n.code,{children:"version"}),"\nnumber."]}),"\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"versions.json"})," with the new Chrome-to-Puppeteer ",(0,i.jsx)(n.code,{children:"version"})," mapping and\nupdate ",(0,i.jsx)(n.code,{children:"lastMaintainedChromeVersion"})," with the next one in from the list."]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"npm run check"}),". If it fails, update\n",(0,i.jsx)(n.code,{children:"packages/puppeteer-core/package.json"}),"\nwith the expected ",(0,i.jsx)(n.code,{children:"devtools-protocol"})," version and run ",(0,i.jsx)(n.code,{children:"npm install"})," to generate an updated ",(0,i.jsx)(n.code,{children:"package-lock.json"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"npm run clean"}),", ",(0,i.jsx)(n.code,{children:"npm install"})," and ",(0,i.jsx)(n.code,{children:"npm run build"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"npm test"})," and ensure that all tests pass. If a test fails,\n",(0,i.jsx)(n.a,{href:"#bisecting-upstream-changes",children:"bisect"})," the upstream cause of the failure, and\neither update the test expectations accordingly (if it was an intended\nchange) or work around the changes in Puppeteer (if it\u2019s not desirable to\nchange Puppeteer\u2019s observable behavior)."]}),"\n",(0,i.jsxs)(n.li,{children:["Commit and push your changes and open a pull request. The commit message must\ncontain the version in ",(0,i.jsx)(n.code,{children:"Chrome <version>"})," format to ensure\nthat ",(0,i.jsx)(n.a,{href:"https://pptr.dev/",children:"pptr.dev"})," can parse it correctly, e.g.\n",(0,i.jsx)(n.code,{children:"feat(chrome): roll to Chrome 90.0.4427.0"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bisecting-upstream-changes",children:"Bisecting upstream changes"}),"\n",(0,i.jsxs)(n.p,{children:["For bisecting Chrome/Chromium changes use ",(0,i.jsx)(n.a,{href:"https://www.chromium.org/developers/bisect-builds-py/",children:"https://www.chromium.org/developers/bisect-builds-py/"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"releasing-to-npm",children:"Releasing to npm"}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.a,{href:"https://github.com/googleapis/release-please",children:"release-please"})," to\nautomate releases. When a release should be done, check for the release PR in\nour ",(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/pulls",children:"pull requests"})," and merge it."]}),"\n",(0,i.jsx)(n.h3,{id:"in-case-release-please-fails",children:"In case Release Please fails"}),"\n",(0,i.jsx)(n.p,{children:"In the event release-please fails, the following needs to be done:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update anything missing in the CHANGELOG of every package that was supposed\nto be published. For example, if the header is missing, you may need to add"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For puppeteer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"## [{NEW_VERSION}](https://github.com/puppeteer/puppeteer/compare/v{PREVIOUS_VERSION}...v{NEW_VERSION}) ({CURRENT_DATE})`\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For other packages:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"## [{NEW_VERSION}](https://github.com/puppeteer/puppeteer/compare/{PACKAGE_FOLDER_NAME}-v{PREVIOUS_VERSION}...{PACKAGE_FOLDER_NAME}-v{NEW_VERSION}) ({CURRENT_DATE})\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a GitHub release for each package, following the practice of previous\nreleases."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bug-triage-guidelines",children:"Bug triage guidelines"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/issues",children:"Check incoming bug reports"})," that do not have a ",(0,i.jsx)(n.code,{children:"confirmed"})," or ",(0,i.jsx)(n.code,{children:"needs-feedback"})," label:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Make sure the issue is labeled as either ",(0,i.jsx)(n.code,{children:"bug"})," or ",(0,i.jsx)(n.code,{children:"feature"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If the issue does not have a clear repro or you cannot repro, ask for the repro and set the ",(0,i.jsx)(n.code,{children:"needs-feedback"})," label."]}),"\n",(0,i.jsx)(n.li,{children:"Follow-up on the issues you previously asked for a feedback on (you should get a notification on GitHub when the user responds)."}),"\n",(0,i.jsx)(n.li,{children:"If the user does not provide feedback, the issue will be closed by the stale bot eventually."}),"\n",(0,i.jsxs)(n.li,{children:["If you are able to reproduce the issue, add the label ",(0,i.jsx)(n.code,{children:"confirmed"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If the bug is on the Chromium side, create a corresponding crbug.com issue, label the GitHub issue with the ",(0,i.jsx)(n.code,{children:"upstream"})," label, and post a link to crbug.com in the comments."]}),"\n",(0,i.jsx)(n.li,{children:"If the issue is not related to either Puppeteer or Chromium, close the issue."}),"\n",(0,i.jsxs)(n.li,{children:["If the issue is about missing/incorrect documentation, label it as ",(0,i.jsx)(n.code,{children:"documentation"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Issues with PDFs:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["If the issue reproduces using the regular print dialog and/or headful, ",(0,i.jsxs)(n.a,{href:"https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3ELayout",children:["file a crbug.com against the ",(0,i.jsx)(n.code,{children:"Blink>Layout"})," component"]}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If the issue is specific to Headless mode, ",(0,i.jsxs)(n.a,{href:"https://bugs.chromium.org/p/chromium/issues/entry?components=Internals%3EHeadless",children:["file an issue on crbug.com against the ",(0,i.jsx)(n.code,{children:"Internals>Headless"})," component"]}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21020:(e,n,s)=>{var i=s(96540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var i,r={},a=null,d=null;for(i in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!c.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:t,type:e,key:a,ref:d,props:r,_owner:l.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},74848:(e,n,s)=>{e.exports=s(21020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);