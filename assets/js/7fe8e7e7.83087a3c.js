"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var f=a.createContext({}),o=function(e){var t=a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=o(e.components);return a.createElement(f.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,f=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=o(r),m=n,b=s["".concat(f,".").concat(m)]||s[m]||p[m]||l;return r?a.createElement(b,u(u({ref:t},d),{},{components:r})):a.createElement(b,u({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,u=new Array(l);u[0]=m;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=e,i[s]="string"==typeof e?e:n,u[1]=i;for(var o=2;o<l;o++)u[o]=r[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},34014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const l={id:"PIXI.BufferSystem.pixi_core",title:"Class: PIXI.BufferSystem",sidebar_label:"PIXI.BufferSystem",custom_edit_url:null},u=void 0,i={unversionedId:"api/classes/PIXI.BufferSystem.pixi_core",id:"api/classes/PIXI.BufferSystem.pixi_core",title:"Class: PIXI.BufferSystem",description:"@pixi/core.BufferSystem",source:"@site/docs/api/classes/PIXI.BufferSystem.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.BufferSystem.pixi_core",permalink:"/api/classes/PIXI.BufferSystem.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.BufferSystem.pixi_core",title:"Class: PIXI.BufferSystem",sidebar_label:"PIXI.BufferSystem",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.BufferResource",permalink:"/api/classes/PIXI.BufferResource.pixi_core"},next:{title:"PIXI.Cache",permalink:"/api/classes/PIXI.Cache.pixi_assets"}},f={},o=[{value:"new PIXI.BufferSystem: <span><code>(renderer: PIXI.Renderer) </code></span>",id:"new-pixibuffersystem-renderer-pixirenderer-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"boundBufferBases: <span><code>{ key: number: Buffer }</code></span>",id:"boundbufferbases--key-number-buffer-",level:3},{value:"managedBuffers: <span><code>{ key: number: Buffer }</code></span>",id:"managedbuffers--key-number-buffer-",level:3},{value:"Methods",id:"methods",level:2},{value:"bind: <span><code>(buffer: Buffer) -&gt; void</code></span>",id:"bind-buffer-buffer---void",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"bindBufferBase: <span><code>(buffer: Buffer, index: number) -&gt; void</code></span>",id:"bindbufferbase-buffer-buffer-index-number---void",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"bindBufferRange: <span><code>(buffer: Buffer, index: number, offset: number) -&gt; void</code></span>",id:"bindbufferrange-buffer-buffer-index-number-offset-number---void",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"dispose: <span><code>(buffer: PIXI.Buffer, contextLost: boolean) -&gt; void</code></span>",id:"dispose-buffer-pixibuffer-contextlost-boolean---void",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"disposeAll: <span><code>(contextLost: boolean) -&gt; void</code></span>",id:"disposeall-contextlost-boolean---void",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"update: <span><code>(buffer: PIXI.Buffer) -&gt; void</code></span>",id:"update-buffer-pixibuffer---void",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"contextChange: <span><code>() -&gt; void</code></span>",id:"contextchange----void",level:3},{value:"createGLBuffer: <span><code>(buffer: Buffer) -&gt; GLBuffer</code></span>",id:"createglbuffer-buffer-buffer---glbuffer",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Returns:",id:"returns",level:4}],d={toc:o};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".BufferSystem"),(0,n.kt)("p",null,"System plugin to the renderer to manage buffers.\nWebGL uses Buffers as a way to store objects to the GPU. This system makes working with them a lot easier."),(0,n.kt)("p",null,"Buffers are used in three main places in WebGL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"geometry information"),(0,n.kt)("li",{parentName:"ul"},"Uniform information (via uniform buffer objects - a WebGL 2 only feature)"),(0,n.kt)("li",{parentName:"ul"},"Transform feedback information. (WebGL 2 only feature)")),(0,n.kt)("p",null,"This system will handle the binding of buffers to the GPU as well as uploading them. With this system, you never need to work directly with GPU buffers, but instead work with the PIXI.Buffer class."),(0,n.kt)("p",null,"// TODO: @see"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"new-pixibuffersystem-renderer-pixirenderer-"},"new PIXI.BufferSystem: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(renderer",":"," PIXI.Renderer) "))),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"renderer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"PIXI.Renderer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},"The renderer this System works for."))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"boundbufferbases--key-number-buffer-"},"boundBufferBases: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"{"," ","[key",":"," number]",":"," Buffer ","}"))),(0,n.kt)("p",null,"Cache keeping track of the base bound buffer bases")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"managedbuffers--key-number-buffer-"},"managedBuffers: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"{"," ","[key",":"," number]",":"," Buffer ","}"))),(0,n.kt)("p",null,"Cache for all buffers by id, used in case renderer gets destroyed or for profiling")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"bind-buffer-buffer---void"},"bind: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(buffer",":"," Buffer) -",">"," void"))),(0,n.kt)("p",null,"This binds specified buffer. On first run, it will create the webGL buffers for the context too"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Buffer")),(0,n.kt)("td",{parentName:"tr",align:null},"the buffer to bind to the renderer"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"bindbufferbase-buffer-buffer-index-number---void"},"bindBufferBase: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(buffer",":"," Buffer, index",":"," number) -",">"," void"))),(0,n.kt)("p",null,"Binds an uniform buffer to at the given index.\nA cache is used so a buffer will not be bound again if already bound."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Buffer")),(0,n.kt)("td",{parentName:"tr",align:null},"the buffer to bind")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"index"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the base index to bind it to."))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"bindbufferrange-buffer-buffer-index-number-offset-number---void"},"bindBufferRange: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(buffer",":"," Buffer, index",":"," number, offset",":"," number) -",">"," void"))),(0,n.kt)("p",null,"Binds a buffer whilst also binding its range. This will make the buffer start from the offset supplied rather than 0 when it is read."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Buffer")),(0,n.kt)("td",{parentName:"tr",align:null},"the buffer to bind")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"index"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the base index to bind at, defaults to 0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"offset"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"number")),(0,n.kt)("td",{parentName:"tr",align:null},"the offset to bind at (this is blocks of 256). 0 = 0, 1 = 256, 2 = 512 etc"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"dispose-buffer-pixibuffer-contextlost-boolean---void"},"dispose: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(buffer",":"," PIXI.Buffer, contextLost",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"Disposes buffer"),(0,n.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"PIXI.Buffer")),(0,n.kt)("td",{parentName:"tr",align:null},"buffer with data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"contextLost"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"If context was lost, we suppress deleteVertexArray"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"disposeall-contextlost-boolean---void"},"disposeAll: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(contextLost",":"," boolean) -",">"," void"))),(0,n.kt)("p",null,"dispose all WebGL resources of all managed buffers"),(0,n.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"contextLost"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"If context was lost, we suppress ",(0,n.kt)("inlineCode",{parentName:"td"},"gl.delete")," calls"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"update-buffer-pixibuffer---void"},"update: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(buffer",":"," PIXI.Buffer) -",">"," void"))),(0,n.kt)("p",null,"Will ensure the data in the buffer is uploaded to the GPU."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"PIXI.Buffer")),(0,n.kt)("td",{parentName:"tr",align:null},"the buffer to update"))))),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"contextchange----void"},"contextChange: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"() -",">"," void"))),(0,n.kt)("p",null,"Sets up the renderer context and necessary buffers.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"createglbuffer-buffer-buffer---glbuffer"},"createGLBuffer: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(buffer",":"," Buffer) -",">"," GLBuffer"))),(0,n.kt)("p",null,"creates and attaches a GLBuffer object tied to the current context."),(0,n.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"buffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Buffer")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"GLBuffer")),(0,n.kt)("td",{parentName:"tr",align:null}))))),(0,n.kt)("hr",null))}s.isMDXComponent=!0}}]);