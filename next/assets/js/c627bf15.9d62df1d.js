"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,m=c["".concat(i,".").concat(k)]||c[k]||p[k]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68247:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>k});var o=n(87462),r=n(67294),a=n(3905);const s={id:"update-user-tokens",title:"updateUserTokens",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql/mutations/update-user-tokens",id:"graphql/mutations/update-user-tokens",title:"updateUserTokens",description:"No description",source:"@site/colony/graphql/mutations/update-user-tokens.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-user-tokens",permalink:"/next/graphql/mutations/update-user-tokens",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/update-user-tokens.mdx",tags:[],version:"current",frontMatter:{id:"update-user-tokens",title:"updateUserTokens",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"updateToken",permalink:"/next/graphql/mutations/update-token"},next:{title:"updateUser",permalink:"/next/graphql/mutations/update-user"}},u={},d=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateUserTokens.<b>input</b></code><Bullet /><code>UpdateUserTokensInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateusertokensbinputbcodeupdateusertokensinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>updateUserTokens.<b>condition</b></code><Bullet /><code>ModelUserTokensConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateusertokensbconditionbcodemodelusertokensconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>UserTokens</code> <Badge class="secondary" text="object"/>',id:"usertokens-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[i,u]=(0,r.useState)(l);return(0,a.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&s)},y={Bullet:d,SpecifiedBy:p,Badge:c,toc:k,Details:m};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateUserTokens(\n  input: UpdateUserTokensInput!\n  condition: ModelUserTokensConditionInput\n): UserTokens\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updateusertokensbinputbcodeupdateusertokensinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"updateUserTokens.",(0,a.kt)("b",null,"input"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/update-user-tokens-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateUserTokensInput!"))," ",(0,a.kt)(c,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updateusertokensbconditionbcodemodelusertokensconditioninput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"updateUserTokens.",(0,a.kt)("b",null,"condition"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-tokens-condition-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ModelUserTokensConditionInput"))," ",(0,a.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"usertokens-"},(0,a.kt)("a",{parentName:"h4",href:"/graphql/objects/user-tokens"},(0,a.kt)("inlineCode",{parentName:"a"},"UserTokens"))," ",(0,a.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}f.isMDXComponent=!0}}]);