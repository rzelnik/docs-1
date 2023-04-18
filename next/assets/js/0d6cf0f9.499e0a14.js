"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},a=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(b,s(s({ref:t},a),{},{components:n})):o.createElement(b,s({ref:t},a))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42615:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>c,Bullet:()=>a,Details:()=>b,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var o=n(87462),r=n(67294),i=n(3905);const s={id:"model-subscription-user-tokens-filter-input",title:"ModelSubscriptionUserTokensFilterInput",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/inputs/model-subscription-user-tokens-filter-input",id:"graphql/inputs/model-subscription-user-tokens-filter-input",title:"ModelSubscriptionUserTokensFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-subscription-user-tokens-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-subscription-user-tokens-filter-input",permalink:"/next/graphql/inputs/model-subscription-user-tokens-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-subscription-user-tokens-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-subscription-user-tokens-filter-input",title:"ModelSubscriptionUserTokensFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelSubscriptionUserFilterInput",permalink:"/next/graphql/inputs/model-subscription-user-filter-input"},next:{title:"ModelSubscriptionWatchedColoniesFilterInput",permalink:"/next/graphql/inputs/model-subscription-watched-colonies-filter-input"}},u={},a=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),c=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionUserTokensFilterInput.<b>id</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputbidbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionUserTokensFilterInput.<b>tokenID</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputbtokenidbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionUserTokensFilterInput.<b>userID</b></code><Bullet /><code>ModelSubscriptionIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputbuseridbcodemodelsubscriptionidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionUserTokensFilterInput.<b>and</b></code><Bullet /><code>[ModelSubscriptionUserTokensFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputbandbcodemodelsubscriptionusertokensfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelSubscriptionUserTokensFilterInput.<b>or</b></code><Bullet /><code>[ModelSubscriptionUserTokensFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputborbcodemodelsubscriptionusertokensfilterinput--",level:4},{value:"Member of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:l=!1}=e;const[p,u]=(0,r.useState)(l);return(0,i.kt)("details",(0,o.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&s)},k={Bullet:a,SpecifiedBy:d,Badge:c,toc:m,Details:b};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelSubscriptionUserTokensFilterInput {\n  id: ModelSubscriptionIDInput\n  tokenID: ModelSubscriptionIDInput\n  userID: ModelSubscriptionIDInput\n  and: [ModelSubscriptionUserTokensFilterInput]\n  or: [ModelSubscriptionUserTokensFilterInput]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputbidbcodemodelsubscriptionidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionUserTokensFilterInput.",(0,i.kt)("b",null,"id"))),(0,i.kt)(a,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputbtokenidbcodemodelsubscriptionidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionUserTokensFilterInput.",(0,i.kt)("b",null,"tokenID"))),(0,i.kt)(a,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputbuseridbcodemodelsubscriptionidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionUserTokensFilterInput.",(0,i.kt)("b",null,"userID"))),(0,i.kt)(a,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionIDInput"))," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputbandbcodemodelsubscriptionusertokensfilterinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionUserTokensFilterInput.",(0,i.kt)("b",null,"and"))),(0,i.kt)(a,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-user-tokens-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelSubscriptionUserTokensFilterInput]"))," ",(0,i.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelsubscriptionusertokensfilterinputborbcodemodelsubscriptionusertokensfilterinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelSubscriptionUserTokensFilterInput.",(0,i.kt)("b",null,"or"))),(0,i.kt)(a,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-subscription-user-tokens-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelSubscriptionUserTokensFilterInput]"))," ",(0,i.kt)(c,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-subscription-user-tokens-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelSubscriptionUserTokensFilterInput")),"  ",(0,i.kt)(c,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(a,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-create-user-tokens"},(0,i.kt)("inlineCode",{parentName:"a"},"onCreateUserTokens")),"  ",(0,i.kt)(c,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,i.kt)(a,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-delete-user-tokens"},(0,i.kt)("inlineCode",{parentName:"a"},"onDeleteUserTokens")),"  ",(0,i.kt)(c,{class:"secondary",text:"subscription",mdxType:"Badge"}),(0,i.kt)(a,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/subscriptions/on-update-user-tokens"},(0,i.kt)("inlineCode",{parentName:"a"},"onUpdateUserTokens")),"  ",(0,i.kt)(c,{class:"secondary",text:"subscription",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);