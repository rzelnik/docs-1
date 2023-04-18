"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=l.createContext({}),p=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(d,".").concat(m)]||c[m]||s[m]||r;return n?l.createElement(k,a(a({ref:t},u),{},{components:n})):l.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<r;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61034:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>u,Details:()=>k,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>m});var l=n(87462),o=n(67294),r=n(3905);const a={id:"model-token-filter-input",title:"ModelTokenFilterInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/inputs/model-token-filter-input",id:"graphql/inputs/model-token-filter-input",title:"ModelTokenFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-token-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-token-filter-input",permalink:"/next/graphql/inputs/model-token-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-token-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-token-filter-input",title:"ModelTokenFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelTokenConditionInput",permalink:"/next/graphql/inputs/model-token-condition-input"},next:{title:"ModelTokenTypeInput",permalink:"/next/graphql/inputs/model-token-type-input"}},p={},u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>id</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>name</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbnamebcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>symbol</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbsymbolbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>decimals</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbdecimalsbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>type</b></code><Bullet /><code>ModelTokenTypeInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbtypebcodemodeltokentypeinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>avatar</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbavatarbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>thumbnail</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbthumbnailbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>createdAt</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbcreatedatbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>and</b></code><Bullet /><code>[ModelTokenFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbandbcodemodeltokenfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>or</b></code><Bullet /><code>[ModelTokenFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputborbcodemodeltokenfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelTokenFilterInput.<b>not</b></code><Bullet /><code>ModelTokenFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modeltokenfilterinputbnotbcodemodeltokenfilterinput-",level:4},{value:"Member of",id:"member-of",level:3}],k=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:i=!1}=e;const[d,p]=(0,o.useState)(i);return(0,r.kt)("details",(0,l.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&a)},y={Bullet:u,SpecifiedBy:s,Badge:c,toc:m,Details:k};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelTokenFilterInput {\n  id: ModelIDInput\n  name: ModelStringInput\n  symbol: ModelStringInput\n  decimals: ModelIntInput\n  type: ModelTokenTypeInput\n  avatar: ModelStringInput\n  thumbnail: ModelStringInput\n  createdAt: ModelStringInput\n  and: [ModelTokenFilterInput]\n  or: [ModelTokenFilterInput]\n  not: ModelTokenFilterInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbidbcodemodelidinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"id"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbnamebcodemodelstringinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbsymbolbcodemodelstringinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"symbol"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbdecimalsbcodemodelintinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"decimals"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbtypebcodemodeltokentypeinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"type"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-token-type-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelTokenTypeInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbavatarbcodemodelstringinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"avatar"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbthumbnailbcodemodelstringinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"thumbnail"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbcreatedatbcodemodelstringinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"createdAt"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbandbcodemodeltokenfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"and"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-token-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModelTokenFilterInput]"))," ",(0,r.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputborbcodemodeltokenfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"or"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-token-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[ModelTokenFilterInput]"))," ",(0,r.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-modeltokenfilterinputbnotbcodemodeltokenfilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ModelTokenFilterInput.",(0,r.kt)("b",null,"not"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-token-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelTokenFilterInput"))," ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/get-token-by-address"},(0,r.kt)("inlineCode",{parentName:"a"},"getTokenByAddress")),"  ",(0,r.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/get-tokens-by-type"},(0,r.kt)("inlineCode",{parentName:"a"},"getTokensByType")),"  ",(0,r.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/queries/list-tokens"},(0,r.kt)("inlineCode",{parentName:"a"},"listTokens")),"  ",(0,r.kt)(c,{class:"secondary",text:"query",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/graphql/inputs/model-token-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelTokenFilterInput")),"  ",(0,r.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);