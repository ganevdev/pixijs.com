"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2875],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(a),d=r,m=c["".concat(p,".").concat(d)]||c[d]||k[d]||l;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},21030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"PIXI.Cache.pixi_assets",title:"Class: PIXI.Cache",sidebar_label:"PIXI.Cache",custom_edit_url:null},s=void 0,i={unversionedId:"api/classes/PIXI.Cache.pixi_assets",id:"api/classes/PIXI.Cache.pixi_assets",title:"Class: PIXI.Cache",description:"@pixi/assets.Cache",source:"@site/docs/api/classes/PIXI.Cache.pixi_assets.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Cache.pixi_assets",permalink:"/api/classes/PIXI.Cache.pixi_assets",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Cache.pixi_assets",title:"Class: PIXI.Cache",sidebar_label:"PIXI.Cache",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.BufferSystem",permalink:"/api/classes/PIXI.BufferSystem.pixi_core"},next:{title:"PIXI.CanvasContextSystem",permalink:"/api/classes/PIXI.CanvasContextSystem.pixi_canvas_renderer"}},p={},o=[{value:"new PIXI.Cache: <span><code>() </code></span>",id:"new-pixicache--",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"parsers: <span><code>CacheParser[]</code></span>",id:"parsers-cacheparser",level:3},{value:"Methods",id:"methods",level:2},{value:"get: <span><code>(key: string) -&gt; T</code></span>",id:"get-key-string---t",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"has: <span><code>(key: string) -&gt; boolean</code></span>",id:"has-key-string---boolean",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"remove: <span><code>(key: string) -&gt; void</code></span>",id:"remove-key-string---void",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"reset: <span><code>() -&gt; void</code></span>",id:"reset----void",level:3},{value:"set: <span><code>(key: string | string[], value: unknown) -&gt; void</code></span>",id:"set-key-string--string-value-unknown---void",level:3},{value:"Parameters:",id:"parameters-4",level:4}],u={toc:o};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_assets"},"@pixi/assets"),".Cache"),(0,r.kt)("p",null,"A single Cache for all assets.\nWhen assets are added to the cache via set they normally are added to the cache as key-value pairs."),(0,r.kt)("p",null,"With this cache, you can add parsers that will take the object and convert it to a list of assets that can be cached. for example a cacheSprite Sheet parser will add all of the textures found within its sprite sheet directly to the cache."),(0,r.kt)("p",null,"This gives devs the flexibility to cache any type of object however we want."),(0,r.kt)("p",null,"It is not intended that this class is created by developers - it is part of the Asset package. This is the first major system of PixiJS' main Assets class."),(0,r.kt)("p",null,"// TODO: @see"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"new-pixicache--"},"new PIXI.Cache: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() "))),(0,r.kt)("p",null,"A single Cache for all assets."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"parsers-cacheparser"},"parsers: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"CacheParser[]"))),(0,r.kt)("p",null,"All loader parsers registered")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"get-key-string---t"},"get: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(key",":"," string) -",">"," T"))),(0,r.kt)("p",null,"Fetch entry by key"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The key of the entry to get")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"T")),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"has-key-string---boolean"},"has: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(key",":"," string) -",">"," boolean"))),(0,r.kt)("p",null,"Check if the key exists"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The key to check")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"remove-key-string---void"},"remove: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(key",":"," string) -",">"," void"))),(0,r.kt)("p",null,"Remove entry by key\nThis function will also remove any associated alias from the cache also."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The key of the entry to remove"))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"reset----void"},"reset: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," void"))),(0,r.kt)("p",null,"Clear all entries.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"set-key-string--string-value-unknown---void"},"set: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(key",":"," string ","|"," string[], value",":"," unknown) -",">"," void"))),(0,r.kt)("p",null,"Set a value by key or keys name"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string ","|"," string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The key or keys to set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"unknown")),(0,r.kt)("td",{parentName:"tr",align:null},"The value to store in the cache or from which cacheable assets will be derived."))))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);