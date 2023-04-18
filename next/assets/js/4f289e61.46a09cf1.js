"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),k=l,m=u["".concat(d,".").concat(k)]||u[k]||p[k]||r;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64631:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>d,toc:()=>k});var o=n(87462),l=n(67294),r=n(3905);const a={id:"delete-token",title:"deleteToken",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/mutations/delete-token",id:"graphql/mutations/delete-token",title:"deleteToken",description:"No description",source:"@site/colony/graphql/mutations/delete-token.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-token",permalink:"/next/graphql/mutations/delete-token",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/delete-token.mdx",tags:[],version:"current",frontMatter:{id:"delete-token",title:"deleteToken",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"deleteProfile",permalink:"/next/graphql/mutations/delete-profile"},next:{title:"deleteUserTokens",permalink:"/next/graphql/mutations/delete-user-tokens"}},c={},s=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteToken.<b>input</b></code><Bullet /><code>DeleteTokenInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletetokenbinputbcodedeletetokeninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>deleteToken.<b>condition</b></code><Bullet /><code>ModelTokenConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletetokenbconditionbcodemodeltokenconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>Token</code> <Badge class="secondary" text="object"/>',id:"token-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:i=!1}=e;const[d,c]=(0,l.useState)(i);return(0,r.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&a)},f={Bullet:s,SpecifiedBy:p,Badge:u,toc:k,Details:m};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteToken(\n  input: DeleteTokenInput!\n  condition: ModelTokenConditionInput\n): Token\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletetokenbinputbcodedeletetokeninput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"deleteToken.",(0,r.kt)("b",null,"input"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/delete-token-input"},(0,r.kt)("inlineCode",{parentName:"a"},"DeleteTokenInput!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-deletetokenbconditionbcodemodeltokenconditioninput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"deleteToken.",(0,r.kt)("b",null,"condition"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-token-condition-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ModelTokenConditionInput"))," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"token-"},(0,r.kt)("a",{parentName:"h4",href:"/graphql/objects/token"},(0,r.kt)("inlineCode",{parentName:"a"},"Token"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}y.isMDXComponent=!0}}]);