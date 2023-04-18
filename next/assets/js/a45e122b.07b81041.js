"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,y=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?o.createElement(y,r(r({ref:t},s),{},{components:n})):o.createElement(y,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var d=2;d<l;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22475:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=n(87462),a=n(67294),l=n(3905);const r={id:"create-colony-funds-claim",title:"createColonyFundsClaim",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql/mutations/create-colony-funds-claim",id:"graphql/mutations/create-colony-funds-claim",title:"createColonyFundsClaim",description:"No description",source:"@site/colony/graphql/mutations/create-colony-funds-claim.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-colony-funds-claim",permalink:"/next/graphql/mutations/create-colony-funds-claim",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/create-colony-funds-claim.mdx",tags:[],version:"current",frontMatter:{id:"create-colony-funds-claim",title:"createColonyFundsClaim",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"createColonyExtension",permalink:"/next/graphql/mutations/create-colony-extension"},next:{title:"createColonyMetadata",permalink:"/next/graphql/mutations/create-colony-metadata"}},d={},s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createColonyFundsClaim.<b>input</b></code><Bullet /><code>CreateColonyFundsClaimInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcolonyfundsclaimbinputbcodecreatecolonyfundsclaiminput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>createColonyFundsClaim.<b>condition</b></code><Bullet /><code>ModelColonyFundsClaimConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcolonyfundsclaimbconditionbcodemodelcolonyfundsclaimconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ColonyFundsClaim</code> <Badge class="secondary" text="object"/>',id:"colonyfundsclaim-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:c=!1}=e;const[i,d]=(0,a.useState)(c);return(0,l.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},f={Bullet:s,SpecifiedBy:u,Badge:p,toc:m,Details:y};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"createColonyFundsClaim(\n  input: CreateColonyFundsClaimInput!\n  condition: ModelColonyFundsClaimConditionInput\n): ColonyFundsClaim\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyfundsclaimbinputbcodecreatecolonyfundsclaiminput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"createColonyFundsClaim.",(0,l.kt)("b",null,"input"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/create-colony-funds-claim-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CreateColonyFundsClaimInput!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyfundsclaimbconditionbcodemodelcolonyfundsclaimconditioninput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"createColonyFundsClaim.",(0,l.kt)("b",null,"condition"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-funds-claim-condition-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelColonyFundsClaimConditionInput"))," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"colonyfundsclaim-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/colony-funds-claim"},(0,l.kt)("inlineCode",{parentName:"a"},"ColonyFundsClaim"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}g.isMDXComponent=!0}}]);