"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(u,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43257:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905);const l={id:"update-user",title:"updateUser",hide_table_of_contents:!1},i=void 0,u={unversionedId:"graphql/mutations/update-user",id:"graphql/mutations/update-user",title:"updateUser",description:"No description",source:"@site/colony/graphql/mutations/update-user.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-user",permalink:"/next/graphql/mutations/update-user",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/mutations/update-user.mdx",tags:[],version:"current",frontMatter:{id:"update-user",title:"updateUser",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"updateUserTokens",permalink:"/next/graphql/mutations/update-user-tokens"},next:{title:"updateWatchedColonies",permalink:"/next/graphql/mutations/update-watched-colonies"}},s={},d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateUser.<b>input</b></code><Bullet /><code>UpdateUserInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserbinputbcodeupdateuserinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>updateUser.<b>condition</b></code><Bullet /><code>ModelUserConditionInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateuserbconditionbcodemodeluserconditioninput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="secondary" text="object"/>',id:"user-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[u,s]=(0,a.useState)(i);return(0,o.kt)("details",(0,r.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},u?t:n),u&&l)},f={Bullet:d,SpecifiedBy:p,Badge:c,toc:m,Details:y};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateUser(\n  input: UpdateUserInput!\n  condition: ModelUserConditionInput\n): User\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateuserbinputbcodeupdateuserinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateUser.",(0,o.kt)("b",null,"input"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/update-user-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateUserInput!"))," ",(0,o.kt)(c,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateuserbconditionbcodemodeluserconditioninput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateUser.",(0,o.kt)("b",null,"condition"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-user-condition-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ModelUserConditionInput"))," ",(0,o.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"user-"},(0,o.kt)("a",{parentName:"h4",href:"/graphql/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(c,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);