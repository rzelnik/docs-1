"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62072],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),k=r,m=p["".concat(i,".").concat(k)]||p[k]||u[k]||l;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<l;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},560:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>k});var o=n(87462),r=n(67294),l=n(3905);const a={id:"delete-user-tokens",title:"deleteUserTokens",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/mutations/delete-user-tokens",id:"graphql/mutations/delete-user-tokens",title:"deleteUserTokens",description:"No description",source:"@site/colony/graphql/mutations/delete-user-tokens.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/delete-user-tokens",permalink:"/next/graphql/mutations/delete-user-tokens",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/delete-user-tokens.mdx",tags:[],version:"current",frontMatter:{id:"delete-user-tokens",title:"deleteUserTokens",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"deleteToken",permalink:"/next/graphql/mutations/delete-token"},next:{title:"deleteUser",permalink:"/next/graphql/mutations/delete-user"}},d={},c=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteUserTokens.<b>input</b></code><Bullet /><code>DeleteUserTokensInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deleteusertokensbinputbcodedeleteusertokensinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>deleteUserTokens.<b>condition</b></code><Bullet /><code>ModelUserTokensConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-deleteusertokensbconditionbcodemodelusertokensconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>UserTokens</code> <Badge class="secondary" text="object"/>',id:"usertokens-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:s=!1}=e;const[i,d]=(0,r.useState)(s);return(0,l.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&a)},y={Bullet:c,SpecifiedBy:u,Badge:p,toc:k,Details:m};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteUserTokens(\n  input: DeleteUserTokensInput!\n  condition: ModelUserTokensConditionInput\n): UserTokens\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleteusertokensbinputbcodedeleteusertokensinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteUserTokens.",(0,l.kt)("b",null,"input"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/delete-user-tokens-input"},(0,l.kt)("inlineCode",{parentName:"a"},"DeleteUserTokensInput!"))," ",(0,l.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-deleteusertokensbconditionbcodemodelusertokensconditioninput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"deleteUserTokens.",(0,l.kt)("b",null,"condition"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-tokens-condition-input"},(0,l.kt)("inlineCode",{parentName:"a"},"ModelUserTokensConditionInput"))," ",(0,l.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"usertokens-"},(0,l.kt)("a",{parentName:"h4",href:"/graphql/objects/user-tokens"},(0,l.kt)("inlineCode",{parentName:"a"},"UserTokens"))," ",(0,l.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}f.isMDXComponent=!0}}]);