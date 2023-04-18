"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=n,u=f["".concat(s,".").concat(m)]||f[m]||d[m]||o;return r?a.createElement(u,l(l({ref:t},p),{},{components:r})):a.createElement(u,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33675:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>p,Details:()=>u,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=r(87462),n=r(67294),o=r(3905);const l={id:"profile-metadata",title:"ProfileMetadata",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/objects/profile-metadata",id:"graphql/objects/profile-metadata",title:"ProfileMetadata",description:"No description",source:"@site/colony/graphql/objects/profile-metadata.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/profile-metadata",permalink:"/next/graphql/objects/profile-metadata",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/objects/profile-metadata.mdx",tags:[],version:"current",frontMatter:{id:"profile-metadata",title:"ProfileMetadata",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"NativeTokenStatus",permalink:"/next/graphql/objects/native-token-status"},next:{title:"Profile",permalink:"/next/graphql/objects/profile"}},c={},p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProfileMetadata.<b>emailPermissions</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-profilemetadatabemailpermissionsbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],u=e=>{let{dataOpen:t,dataClose:r,children:l,startOpen:i=!1}=e;const[s,c]=(0,n.useState)(i);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:r),s&&l)},b={Bullet:p,SpecifiedBy:d,Badge:f,toc:m,Details:u};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProfileMetadata {\n  emailPermissions: [String!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-profilemetadatabemailpermissionsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProfileMetadata.",(0,o.kt)("b",null,"emailPermissions"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"Profile")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);