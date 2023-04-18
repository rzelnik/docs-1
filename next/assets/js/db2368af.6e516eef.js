"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),y=l,m=u["".concat(c,".").concat(y)]||u[y]||p[y]||a;return n?o.createElement(m,r(r({ref:t},s),{},{components:n})):o.createElement(m,r({ref:t},s))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20521:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>y});var o=n(87462),l=n(67294),a=n(3905);const r={id:"delete-colony-action",title:"deleteColonyAction",hide_table_of_contents:!1},i=void 0,c={unversionedId:"graphql/mutations/delete-colony-action",id:"graphql/mutations/delete-colony-action",title:"deleteColonyAction",description:"No description",source:"@site/colony/graphql/mutations/delete-colony-action.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-colony-action",permalink:"/next/graphql/mutations/delete-colony-action",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/delete-colony-action.mdx",tags:[],version:"current",frontMatter:{id:"delete-colony-action",title:"deleteColonyAction",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createWatchedColonies",permalink:"/next/graphql/mutations/create-watched-colonies"},next:{title:"deleteColonyExtension",permalink:"/next/graphql/mutations/delete-colony-extension"}},d={},s=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteColonyAction.<b>input</b></code><Bullet /><code>DeleteColonyActionInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletecolonyactionbinputbcodedeletecolonyactioninput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>deleteColonyAction.<b>condition</b></code><Bullet /><code>ModelColonyActionConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deletecolonyactionbconditionbcodemodelcolonyactionconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ColonyAction</code> <Badge class="secondary" text="object"/>',id:"colonyaction-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:i=!1}=e;const[c,d]=(0,l.useState)(i);return(0,a.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},f={Bullet:s,SpecifiedBy:p,Badge:u,toc:y,Details:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteColonyAction(\n  input: DeleteColonyActionInput!\n  condition: ModelColonyActionConditionInput\n): ColonyAction\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deletecolonyactionbinputbcodedeletecolonyactioninput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"deleteColonyAction.",(0,a.kt)("b",null,"input"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/delete-colony-action-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteColonyActionInput!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-deletecolonyactionbconditionbcodemodelcolonyactionconditioninput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"deleteColonyAction.",(0,a.kt)("b",null,"condition"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-action-condition-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelColonyActionConditionInput"))," ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"colonyaction-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/objects/colony-action"},(0,a.kt)("inlineCode",{parentName:"a"},"ColonyAction"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}g.isMDXComponent=!0}}]);