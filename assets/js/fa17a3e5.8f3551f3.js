"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3181],{92503:(e,s,i)=>{i.d(s,{Z:()=>a});i(67294);var n=i(86010),r=i(95999),t=i(86668),d=i(39960);const o="anchorWithStickyNavbar_LWe7",l="anchorWithHideOnScrollNavbar_WYt5";var c=i(85893);function a(e){let{as:s,id:i,...a}=e;const{navbar:{hideOnScroll:h}}=(0,t.L)();if("h1"===s||!i)return(0,c.jsx)(s,{...a,id:void 0});const x=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof a.children?a.children:i});return(0,c.jsxs)(s,{...a,className:(0,n.Z)("anchor",h?l:o,a.className),id:i,children:[a.children,(0,c.jsx)(d.Z,{className:"hash-link",to:`#${i}`,"aria-label":x,title:x,children:"\u200b"})]})}},58511:(e,s,i)=>{i.r(s),i.d(s,{default:()=>x});var n=i(39960),r=i(95999);const t=JSON.parse('[{"version":"dev","releaseNotes":"https://github.com/pixijs/pixijs/releases","build":"https://pixijs.download/dev/pixi.min.js","docs":"/api"},{"version":"7.2.0-rc","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.2.0-rc","build":"https://pixijs.download/v7.2.0-rc/pixi.min.js","docs":"https://pixijs.download/v7.2.0-rc/docs/index.html","prerelease":true},{"version":"7.1.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.1.3","build":"https://pixijs.download/v7.1.3/pixi.min.js","docs":"https://pixijs.download/v7.1.3/docs/index.html"},{"version":"7.0.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v7.0.5","build":"https://pixijs.download/v7.0.5/pixi.min.js","docs":"https://pixijs.download/v7.0.5/docs/index.html"},{"version":"6.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v6.5.9","build":"https://pixijs.download/v6.5.9/pixi.min.js","docs":"https://pixijs.download/v6.5.9/docs/index.html"},{"version":"5.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v5.3.12","build":"https://pixijs.download/v5.3.12/pixi.min.js","docs":"https://pixijs.download/v5.3.12/docs/index.html"},{"version":"4.x","releaseNotes":"https://github.com/pixijs/pixijs/releases/tags/v4.8.9","build":"https://pixijs.download/v4.8.9/pixi.min.js","docs":"https://pixijs.download/v4.8.9/docs/index.html"}]');var d=i(92503),o=i(71732),l=i(85893);function c(){return(0,l.jsx)(r.Z,{id:"versionsPage.versionEntry.link",children:"Documentation"})}function a(){return(0,l.jsx)(r.Z,{id:"versionsPage.versionEntry.build",children:"Build"})}function h(){return(0,l.jsx)(r.Z,{id:"versionsPage.versionEntry.releaseNotes",children:"Release Notes"})}function x(){const e=t,s=e[0],i=e[1].prerelease?e[2]:e[1],x=e.find((e=>e.prerelease)),j=e.slice(2);return(0,l.jsx)(o.Z,{title:"Versions",description:"PixiJS Versions page listing all API documentation versions",children:(0,l.jsxs)("main",{className:"container margin-vert--lg",children:[(0,l.jsx)(d.Z,{as:"h1",children:(0,l.jsx)(r.Z,{id:"versionsPage.title",children:"PixiJS API documentation versions"})}),(0,l.jsxs)("div",{className:"margin-bottom--lg",children:[(0,l.jsx)(d.Z,{as:"h3",id:"next",children:(0,l.jsx)(r.Z,{id:"versionsPage.current.title",children:"Current version (Stable)"})}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Z,{id:"versionsPage.current.description",children:"Here you can find the documentation for current released version."})}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:i.version}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:i.docs,children:(0,l.jsx)(c,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:i.build,children:(0,l.jsx)(a,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:i.releaseNotes,children:(0,l.jsx)(h,{})})})]})})})]}),(0,l.jsxs)("div",{className:"margin-bottom--lg",children:[(0,l.jsx)(d.Z,{as:"h3",id:"latest",children:(0,l.jsx)(r.Z,{id:"versionsPage.next.title",children:"Next version (Unreleased)"})}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Z,{id:"versionsPage.next.description",children:"Here you can find the documentation for work-in-process unreleased version."})}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:s.version}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:s.docs,children:(0,l.jsx)(c,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:i.build,children:(0,l.jsx)(a,{})})})]})})})]}),x&&(0,l.jsxs)("div",{className:"margin-bottom--lg",children:[(0,l.jsx)(d.Z,{as:"h3",id:"latest",children:(0,l.jsx)(r.Z,{id:"versionsPage.next.title",children:"Prerelease version"})}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Z,{id:"versionsPage.next.description",children:"Here you can find the documentation for the prerelease version."})}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:x.version}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:x.docs,children:(0,l.jsx)(c,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:x.build,children:(0,l.jsx)(a,{})})})]})})})]}),j.length>0&&(0,l.jsxs)("div",{className:"margin-bottom--lg",children:[(0,l.jsx)(d.Z,{as:"h3",id:"archive",children:(0,l.jsx)(r.Z,{id:"versionsPage.archived.title",children:"Past versions (Not maintained anymore)"})}),(0,l.jsx)("p",{children:(0,l.jsx)(r.Z,{id:"versionsPage.archived.description",children:"Here you can find documentation for previous versions of PixiJS."})}),(0,l.jsx)("table",{children:(0,l.jsx)("tbody",{children:j.map((e=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:e.version}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{to:e.docs,children:(0,l.jsx)(c,{})})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.Z,{href:e.releaseNotes,children:(0,l.jsx)(h,{})})})]},e.version)))})})]})]})})}}}]);