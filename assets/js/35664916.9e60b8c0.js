"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={id:"PIXI.ParticleContainer.pixi_particle_container",title:"Class: PIXI.ParticleContainer",sidebar_label:"PIXI.ParticleContainer",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/PIXI.ParticleContainer.pixi_particle_container",id:"api/classes/PIXI.ParticleContainer.pixi_particle_container",title:"Class: PIXI.ParticleContainer",description:"@pixi/particle-container.ParticleContainer",source:"@site/docs/api/classes/PIXI.ParticleContainer.pixi_particle_container.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.ParticleContainer.pixi_particle_container",permalink:"/api/classes/PIXI.ParticleContainer.pixi_particle_container",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.ParticleContainer.pixi_particle_container",title:"Class: PIXI.ParticleContainer",sidebar_label:"PIXI.ParticleContainer",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.ObservablePoint",permalink:"/api/classes/PIXI.ObservablePoint.pixi_math"},next:{title:"PIXI.ParticleRenderer",permalink:"/api/classes/PIXI.ParticleRenderer.pixi_particle_container"}},p={},d=[{value:"new PIXI.ParticleContainer: <span><code>(maxSize: number, properties: IParticleProperties, batchSize: number, autoResize: boolean) </code></span>",id:"new-pixiparticlecontainer-maxsize-number-properties-iparticleproperties-batchsize-number-autoresize-boolean-",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"autoResize: <span><code>boolean</code></span>",id:"autoresize-boolean",level:3},{value:"baseTexture: <span><code>BaseTexture</code></span>",id:"basetexture-basetexture",level:3},{value:"blendMode: <span><code>BLEND_MODES</code></span>",id:"blendmode-blend_modes",level:3},{value:"roundPixels: <span><code>boolean</code></span>",id:"roundpixels-boolean",level:3},{value:"tint: <span><code>number</code></span>",id:"tint-number",level:3},{value:"Methods",id:"methods",level:2},{value:"destroy: <span><code>(options: IDestroyOptions | boolean) -&gt; void</code></span>",id:"destroy-options-idestroyoptions--boolean---void",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"render: <span><code>(renderer: Renderer) -&gt; void</code></span>",id:"render-renderer-renderer---void",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"setProperties: <span><code>(properties: IParticleProperties) -&gt; void</code></span>",id:"setproperties-properties-iparticleproperties---void",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"onChildrenChange: <span><code>(smallestChildIndex: number) -&gt; void</code></span>",id:"onchildrenchange-smallestchildindex-number---void",level:3},{value:"Parameters:",id:"parameters-4",level:4}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_particle_container"},"@pixi/particle-container"),".ParticleContainer"),(0,l.kt)("p",null,"The ParticleContainer class is a really fast version of the Container built solely for speed, so use when you need a lot of sprites or particles."),(0,l.kt)("p",null,"The tradeoff of the ParticleContainer is that most advanced functionality will not work. ParticleContainer implements the basic object transform (position, scale, rotation) and some advanced functionality like tint (as of v4.5.6)."),(0,l.kt)("p",null,"Other more advanced functionality like masking, children, filters, etc will not work on sprites in this batch."),(0,l.kt)("p",null,"It's extremely easy to use. And here you have a hundred sprites that will be rendered at the speed of light."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"}," import { ParticleContainer, Sprite } from 'pixi.js';\n\n const container = new ParticleContainer();\n\n for (let i = 0; i < 100; ++i)\n {\n     let sprite = Sprite.from('myImage.png');\n     container.addChild(sprite);\n }\n")),(0,l.kt)("p",null,"// TODO: @see"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"new-pixiparticlecontainer-maxsize-number-properties-iparticleproperties-batchsize-number-autoresize-boolean-"},"new PIXI.ParticleContainer: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(maxSize",":"," number, properties",":"," IParticleProperties, batchSize",":"," number, autoResize",":"," boolean) "))),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxSize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"1500")),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of particles that can be rendered by the container. Affects size of allocated buffers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IParticleProperties")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null)),(0,l.kt)("td",{parentName:"tr",align:null},"The properties of children that should be uploaded to the gpu and applied.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties.vertices"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{parentName:"tr",align:null},"When true, vertices be uploaded and applied. if sprite's ",(0,l.kt)("inlineCode",{parentName:"td"}," scale/anchor/trim/frame/orig")," is dynamic, please set ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties.position"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{parentName:"tr",align:null},"When true, position be uploaded and applied.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties.rotation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{parentName:"tr",align:null},"When true, rotation be uploaded and applied.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties.uvs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{parentName:"tr",align:null},"When true, uvs be uploaded and applied.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties.tint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{parentName:"tr",align:null},"When true, alpha and tint be uploaded and applied.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batchSize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"16384")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of particles per batch. If less than maxSize, it uses maxSize instead.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoResize"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"false")),(0,l.kt)("td",{parentName:"tr",align:null},"If true, container allocates more batches in case there are more than ",(0,l.kt)("inlineCode",{parentName:"td"},"maxSize")," particles."))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"autoresize-boolean"},"autoResize: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"false"))),(0,l.kt)("p",null,"If true, container allocates more batches in case there are more than ",(0,l.kt)("inlineCode",{parentName:"p"},"maxSize")," particles.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"basetexture-basetexture"},"baseTexture: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"BaseTexture"))),(0,l.kt)("p",null,"The texture used to render the children.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"blendmode-blend_modes"},"blendMode: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"BLEND_MODES"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"PIXI.BLEND_MODES.NORMAL"))),(0,l.kt)("p",null,"The blend mode to be applied to the sprite. Apply a value of ",(0,l.kt)("inlineCode",{parentName:"p"},"PIXI.BLEND_MODES.NORMAL"),"to reset the blend mode.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"roundpixels-boolean"},"roundPixels: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"boolean"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"true"))),(0,l.kt)("p",null,"If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation. Advantages can include sharper image quality (like text) and faster rendering on canvas. The main disadvantage is movement of objects may appear less smooth. Default to true here as performance is usually the priority for particles.")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"tint-number"},"tint: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"number"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Default Value"),": ",(0,l.kt)("code",null,"0xFFFFFF"))),(0,l.kt)("p",null,"The tint applied to the container. This is a hex value. A value of 0xFFFFFF will remove any tint effect. IMPORTANT",":"," This is a WebGL only feature and will be ignored by the canvas renderer.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"destroy-options-idestroyoptions--boolean---void"},"destroy: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(options",":"," IDestroyOptions ","|"," boolean) -",">"," void"))),(0,l.kt)("p",null,"Destroys the container"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IDestroyOptions ","|"," boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Options parameter. A boolean will act as if all options have been set to that value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.children"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"if set to true, all the children will have their destroy method called as well. 'options' will be passed on to those calls.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.texture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Only used for child Sprites if options.children is set to true Should it destroy the texture of the child sprite")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options.baseTexture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Only used for child Sprites if options.children is set to true Should it destroy the base texture of the child sprite"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"render-renderer-renderer---void"},"render: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(renderer",":"," Renderer) -",">"," void"))),(0,l.kt)("p",null,"Renders the container using the WebGL renderer."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"renderer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Renderer")),(0,l.kt)("td",{parentName:"tr",align:null},"The WebGL renderer."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"setproperties-properties-iparticleproperties---void"},"setProperties: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(properties",":"," IParticleProperties) -",">"," void"))),(0,l.kt)("p",null,"Sets the private properties array to dynamic / static based on the passed properties object"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IParticleProperties")),(0,l.kt)("td",{parentName:"tr",align:null},"The properties to be uploaded"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"onchildrenchange-smallestchildindex-number---void"},"onChildrenChange: ",(0,l.kt)("span",null,(0,l.kt)("code",null,"(smallestChildIndex",":"," number) -",">"," void"))),(0,l.kt)("p",null,"Set the flag that static data should be updated to true"),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"smallestChildIndex"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The smallest child index."))))),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);