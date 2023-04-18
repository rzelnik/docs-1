"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,m=u["".concat(i,".").concat(y)]||u[y]||p[y]||l;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19721:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>y});var o=n(87462),a=n(67294),l=n(3905);const r={id:"create-colony-extension-input",title:"CreateColonyExtensionInput",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/inputs/create-colony-extension-input",id:"graphql/inputs/create-colony-extension-input",title:"CreateColonyExtensionInput",description:"No description",source:"@site/colony/graphql/inputs/create-colony-extension-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-colony-extension-input",permalink:"/next/graphql/inputs/create-colony-extension-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/create-colony-extension-input.mdx",tags:[],version:"current",frontMatter:{id:"create-colony-extension-input",title:"CreateColonyExtensionInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CreateColonyActionInput",permalink:"/next/graphql/inputs/create-colony-action-input"},next:{title:"CreateColonyFundsClaimInput",permalink:"/next/graphql/inputs/create-colony-funds-claim-input"}},c={},d=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>id</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>colonyId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbcolonyidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>hash</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbhashbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>installedBy</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbinstalledbybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>installedAt</b></code><Bullet /><code>AWSTimestamp!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbinstalledatbcodeawstimestamp--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>isDeprecated</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbisdeprecatedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>isDeleted</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbisdeletedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>isInitialized</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbisinitializedbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateColonyExtensionInput.<b>version</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-createcolonyextensioninputbversionbcodeint--",level:4},{value:"Member of",id:"member-of",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:s=!1}=e;const[i,c]=(0,a.useState)(s);return(0,l.kt)("details",(0,o.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&r)},g={Bullet:d,SpecifiedBy:p,Badge:u,toc:y,Details:m};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateColonyExtensionInput {\n  id: ID\n  colonyId: ID!\n  hash: String!\n  installedBy: String!\n  installedAt: AWSTimestamp!\n  isDeprecated: Boolean!\n  isDeleted: Boolean!\n  isInitialized: Boolean!\n  version: Int!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"id"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbcolonyidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"colonyId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbhashbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"hash"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbinstalledbybcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"installedBy"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbinstalledatbcodeawstimestamp--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"installedAt"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/awstimestamp"},(0,l.kt)("inlineCode",{parentName:"a"},"AWSTimestamp!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbisdeprecatedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"isDeprecated"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbisdeletedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"isDeleted"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbisinitializedbcodeboolean--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"isInitialized"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/boolean"},(0,l.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createcolonyextensioninputbversionbcodeint--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateColonyExtensionInput.",(0,l.kt)("b",null,"version"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/graphql/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/graphql/mutations/create-colony-extension"},(0,l.kt)("inlineCode",{parentName:"a"},"createColonyExtension")),"  ",(0,l.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);