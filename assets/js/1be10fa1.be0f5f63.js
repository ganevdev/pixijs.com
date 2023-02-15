"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9546],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,m=u["".concat(p,".").concat(k)]||u[k]||c[k]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},34502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={id:"PIXI.CanvasPrepare.pixi_canvas_prepare",title:"Class: PIXI.CanvasPrepare",sidebar_label:"PIXI.CanvasPrepare",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/PIXI.CanvasPrepare.pixi_canvas_prepare",id:"api/classes/PIXI.CanvasPrepare.pixi_canvas_prepare",title:"Class: PIXI.CanvasPrepare",description:"@pixi/canvas-prepare.CanvasPrepare",source:"@site/docs/api/classes/PIXI.CanvasPrepare.pixi_canvas_prepare.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.CanvasPrepare.pixi_canvas_prepare",permalink:"/api/classes/PIXI.CanvasPrepare.pixi_canvas_prepare",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.CanvasPrepare.pixi_canvas_prepare",title:"Class: PIXI.CanvasPrepare",sidebar_label:"PIXI.CanvasPrepare",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.CanvasObjectRendererSystem",permalink:"/api/classes/PIXI.CanvasObjectRendererSystem.pixi_canvas_renderer"},next:{title:"PIXI.CanvasRenderer",permalink:"/api/classes/PIXI.CanvasRenderer.pixi_canvas_renderer"}},p={},s=[{value:"new PIXI.CanvasPrepare: <span><code>(renderer: CanvasRenderer) </code></span>",id:"new-pixicanvasprepare-renderer-canvasrenderer-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Extends",id:"extends",level:2},{value:"Members",id:"members",level:2},{value:"addHooks: <span><code>Array&lt;Function&gt;</code></span>",id:"addhooks-arrayfunction",level:3},{value:"canvas: <span><code>ICanvas</code></span>",id:"canvas-icanvas",level:3},{value:"completes: <span><code>Array&lt;Function&gt;</code></span>",id:"completes-arrayfunction",level:3},{value:"ctx: <span><code>ICanvasRenderingContext2D</code></span>",id:"ctx-icanvasrenderingcontext2d",level:3},{value:"ticking: <span><code>boolean</code></span>",id:"ticking-boolean",level:3},{value:"uploadHooks: <span><code>Array&lt;Function&gt;</code></span>",id:"uploadhooks-arrayfunction",level:3},{value:"queue: <span><code>Array&lt;any&gt;</code></span>",id:"queue-arrayany",level:3},{value:"renderer: <span><code>IRenderer</code></span>",id:"renderer-irenderer",level:3},{value:"uploadHookHelper: <span><code>any</code></span>",id:"uploadhookhelper-any",level:3},{value:"Methods",id:"methods",level:2},{value:"add: <span><code>(item: PIXI.DisplayObject | PIXI.Container | PIXI.BaseTexture | PIXI.Texture | PIXI.Graphics | PIXI.Text | unknown) -&gt; this</code></span>",id:"add-item-pixidisplayobject--pixicontainer--pixibasetexture--pixitexture--pixigraphics--pixitext--unknown---this",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"destroy: <span><code>() -&gt; void</code></span>",id:"destroy----void",level:3},{value:"registerFindHook: <span><code>(addHook: Function) -&gt; this</code></span>",id:"registerfindhook-addhook-function---this",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-1",level:4},{value:"registerUploadHook: <span><code>(uploadHook: Function) -&gt; this</code></span>",id:"registeruploadhook-uploadhook-function---this",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"upload: <span><code>(item: PIXI.DisplayObject | PIXI.Container | PIXI.BaseTexture | PIXI.Texture | PIXI.Graphics | PIXI.Text) -&gt; Promise&lt;void&gt;</code></span>",id:"upload-item-pixidisplayobject--pixicontainer--pixibasetexture--pixitexture--pixigraphics--pixitext---promisevoid",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-3",level:4}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../modules/pixi_canvas_prepare"},"@pixi/canvas-prepare"),".CanvasPrepare"),(0,r.kt)("p",null,"The prepare manager provides functionality to upload content to the GPU.\nThis cannot be done directly for Canvas like in WebGL, but the effect can be achieved by drawing textures to an offline canvas. This draw call will force the texture to be moved onto the GPU."),(0,r.kt)("p",null,"An instance of this class is automatically created by default, and can be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"renderer.prepare")),(0,r.kt)("p",null,"// TODO: @see"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"new-pixicanvasprepare-renderer-canvasrenderer-"},"new PIXI.CanvasPrepare: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(renderer",":"," CanvasRenderer) "))),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"CanvasRenderer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null)),(0,r.kt)("td",{parentName:"tr",align:null},"A reference to the current renderer"))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"extends"},"Extends"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../classes/PIXI.BasePrepare.pixi_prepare"},"PIXI.BasePrepare"))),(0,r.kt)("h2",{id:"members"},"Members"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"addhooks-arrayfunction"},"addHooks: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Array","<","Function",">"))),(0,r.kt)("p",null,"Collection of additional hooks for finding assets.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"canvas-icanvas"},"canvas: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"ICanvas"))),(0,r.kt)("p",null,"An offline canvas to render textures to")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"completes-arrayfunction"},"completes: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Array","<","Function",">"))),(0,r.kt)("p",null,"Callback to call after completed.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"ctx-icanvasrenderingcontext2d"},"ctx: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"ICanvasRenderingContext2D"))),(0,r.kt)("p",null,"The context to the canvas")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"ticking-boolean"},"ticking: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"boolean"))),(0,r.kt)("p",null,"If prepare is ticking (running).")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"uploadhooks-arrayfunction"},"uploadHooks: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Array","<","Function",">"))),(0,r.kt)("p",null,"Collection of additional hooks for processing assets.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"queue-arrayany"},"queue: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"Array","<","any",">"))),(0,r.kt)("p",null,"Collection of items to uploads at once.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"renderer-irenderer"},"renderer: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"IRenderer"))),(0,r.kt)("p",null,"Reference to the renderer.")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"uploadhookhelper-any"},"uploadHookHelper: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"any"))),(0,r.kt)("p",null,"The only real difference between CanvasPrepare and Prepare is what they pass to upload hooks. That different parameter is stored here.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"add-item-pixidisplayobject--pixicontainer--pixibasetexture--pixitexture--pixigraphics--pixitext--unknown---this"},"add: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(item",":"," PIXI.DisplayObject ","|"," PIXI.Container ","|"," PIXI.BaseTexture ","|"," PIXI.Texture ","|"," PIXI.Graphics ","|"," PIXI.Text ","|"," unknown) -",">"," this"))),(0,r.kt)("p",null,"Manually add an item to the uploading queue."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.DisplayObject ","|"," PIXI.Container ","|"," PIXI.BaseTexture ","|"," PIXI.Texture ","|"," PIXI.Graphics ","|"," PIXI.Text ","|"," unknown")),(0,r.kt)("td",{parentName:"tr",align:null},"Object to add to the queue")))),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"Instance of plugin for chaining."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"destroy----void"},"destroy: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"() -",">"," void"))),(0,r.kt)("p",null,"Destroys the plugin, don't use after this")),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"registerfindhook-addhook-function---this"},"registerFindHook: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(addHook",":"," Function) -",">"," this"))),(0,r.kt)("p",null,"Adds hooks for finding items."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addHook"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Function call that takes two parameters",":"," ",(0,r.kt)("inlineCode",{parentName:"td"},"item:*, queue:Array"),"function must return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if it was able to add item to the queue.")))),(0,r.kt)("h4",{id:"returns-1"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"Instance of plugin for chaining."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"registeruploadhook-uploadhook-function---this"},"registerUploadHook: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(uploadHook",":"," Function) -",">"," this"))),(0,r.kt)("p",null,"Adds hooks for uploading items."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uploadHook"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Function call that takes two parameters",":"," ",(0,r.kt)("inlineCode",{parentName:"td"},"prepare:CanvasPrepare, item:*")," and function must return ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if it was able to handle upload of item.")))),(0,r.kt)("h4",{id:"returns-2"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"this")),(0,r.kt)("td",{parentName:"tr",align:null},"Instance of plugin for chaining."))))),(0,r.kt)("hr",null),(0,r.kt)("article",null,(0,r.kt)("h3",{id:"upload-item-pixidisplayobject--pixicontainer--pixibasetexture--pixitexture--pixigraphics--pixitext---promisevoid"},"upload: ",(0,r.kt)("span",null,(0,r.kt)("code",null,"(item",":"," PIXI.DisplayObject ","|"," PIXI.Container ","|"," PIXI.BaseTexture ","|"," PIXI.Texture ","|"," PIXI.Graphics ","|"," PIXI.Text) -",">"," Promise","<","void",">"))),(0,r.kt)("p",null,"Upload all the textures and graphics to the GPU."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"item"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"PIXI.DisplayObject ","|"," PIXI.Container ","|"," PIXI.BaseTexture ","|"," PIXI.Texture ","|"," PIXI.Graphics ","|"," PIXI.Text")),(0,r.kt)("td",{parentName:"tr",align:null},"Container or display object to search for items to upload or the items to upload themselves, or optionally ommitted, if items have been added using ",(0,r.kt)("a",{parentName:"td",href:"../classes/PIXI.BasePrepare.pixi_prepare#add"},(0,r.kt)("inlineCode",{parentName:"a"},"prepare.add")),".")))),(0,r.kt)("h4",{id:"returns-3"},"Returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Promise","<","void",">")),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);