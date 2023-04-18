"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,m=p["".concat(i,".").concat(k)]||p[k]||u[k]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64108:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>k});var r=n(87462),a=n(67294),o=n(3905);const l={id:"create-user-tokens-input",title:"CreateUserTokensInput",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/inputs/create-user-tokens-input",id:"graphql/inputs/create-user-tokens-input",title:"CreateUserTokensInput",description:"No description",source:"@site/colony/graphql/inputs/create-user-tokens-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-user-tokens-input",permalink:"/next/graphql/inputs/create-user-tokens-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/create-user-tokens-input.mdx",tags:[],version:"current",frontMatter:{id:"create-user-tokens-input",title:"CreateUserTokensInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CreateUserInput",permalink:"/next/graphql/inputs/create-user-input"},next:{title:"CreateWatchedColoniesInput",permalink:"/next/graphql/inputs/create-watched-colonies-input"}},c={},d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),k=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUserTokensInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createusertokensinputbidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUserTokensInput.<b>tokenID</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createusertokensinputbtokenidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateUserTokensInput.<b>userID</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createusertokensinputbuseridbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:s=!1}=e;const[i,c]=(0,a.useState)(s);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&l)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:k,Details:m};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateUserTokensInput {\n  id: ID\n  tokenID: ID!\n  userID: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createusertokensinputbidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateUserTokensInput.",(0,o.kt)("b",null,"id"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createusertokensinputbtokenidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateUserTokensInput.",(0,o.kt)("b",null,"tokenID"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createusertokensinputbuseridbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CreateUserTokensInput.",(0,o.kt)("b",null,"userID"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql/mutations/create-user-tokens"},(0,o.kt)("inlineCode",{parentName:"a"},"createUserTokens")),"  ",(0,o.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);