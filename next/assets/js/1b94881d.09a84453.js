"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81510],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var r=n.createContext({}),c=function(e){var t=n.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):d(d({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(o),m=l,y=s["".concat(r,".").concat(m)]||s[m]||u[m]||i;return o?n.createElement(y,d(d({ref:t},p),{},{components:o})):n.createElement(y,d({ref:t},p))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=o.length,d=new Array(i);d[0]=s;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:l,d[1]=a;for(var c=2;c<i;c++)d[c]=o[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},65429:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>s,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>a,default:()=>k,frontMatter:()=>d,metadata:()=>r,toc:()=>m});var n=o(87462),l=o(67294),i=o(3905);const d={id:"model-colony-action-filter-input",title:"ModelColonyActionFilterInput",hide_table_of_contents:!1},a=void 0,r={unversionedId:"graphql/inputs/model-colony-action-filter-input",id:"graphql/inputs/model-colony-action-filter-input",title:"ModelColonyActionFilterInput",description:"No description",source:"@site/colony/graphql/inputs/model-colony-action-filter-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/model-colony-action-filter-input",permalink:"/next/graphql/inputs/model-colony-action-filter-input",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/graphql/inputs/model-colony-action-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"model-colony-action-filter-input",title:"ModelColonyActionFilterInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ModelColonyActionConditionInput",permalink:"/next/graphql/inputs/model-colony-action-condition-input"},next:{title:"ModelColonyActionTypeInput",permalink:"/next/graphql/inputs/model-colony-action-type-input"}},c={},p=()=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(l.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,i.kt)(l.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>id</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>colonyId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbcolonyidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>type</b></code><Bullet /><code>ModelColonyActionTypeInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbtypebcodemodelcolonyactiontypeinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>blockNumber</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbblocknumberbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>createdAt</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbcreatedatbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>initiatorAddress</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbinitiatoraddressbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>recipientAddress</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbrecipientaddressbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>amount</b></code><Bullet /><code>ModelStringInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbamountbcodemodelstringinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>tokenAddress</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbtokenaddressbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>fromDomainId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbfromdomainidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>toDomainId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbtodomainidbcodemodelidinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>fundamentalChainId</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbfundamentalchainidbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>newColonyVersion</b></code><Bullet /><code>ModelIntInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbnewcolonyversionbcodemodelintinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>and</b></code><Bullet /><code>[ModelColonyActionFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbandbcodemodelcolonyactionfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>or</b></code><Bullet /><code>[ModelColonyActionFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputborbcodemodelcolonyactionfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>not</b></code><Bullet /><code>ModelColonyActionFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbnotbcodemodelcolonyactionfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ModelColonyActionFilterInput.<b>colonyActionsId</b></code><Bullet /><code>ModelIDInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-modelcolonyactionfilterinputbcolonyactionsidbcodemodelidinput-",level:4},{value:"Member of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:o,children:d,startOpen:a=!1}=e;const[r,c]=(0,l.useState)(a);return(0,i.kt)("details",(0,n.Z)({},r?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},r?t:o),r&&d)},f={Bullet:p,SpecifiedBy:u,Badge:s,toc:m,Details:y};function k(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ModelColonyActionFilterInput {\n  id: ModelIDInput\n  colonyId: ModelIDInput\n  type: ModelColonyActionTypeInput\n  blockNumber: ModelIntInput\n  createdAt: ModelStringInput\n  initiatorAddress: ModelIDInput\n  recipientAddress: ModelIDInput\n  amount: ModelStringInput\n  tokenAddress: ModelIDInput\n  fromDomainId: ModelIDInput\n  toDomainId: ModelIDInput\n  fundamentalChainId: ModelIntInput\n  newColonyVersion: ModelIntInput\n  and: [ModelColonyActionFilterInput]\n  or: [ModelColonyActionFilterInput]\n  not: ModelColonyActionFilterInput\n  colonyActionsId: ModelIDInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"id"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbcolonyidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"colonyId"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbtypebcodemodelcolonyactiontypeinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"type"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-action-type-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelColonyActionTypeInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbblocknumberbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"blockNumber"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbcreatedatbcodemodelstringinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbinitiatoraddressbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"initiatorAddress"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbrecipientaddressbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"recipientAddress"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbamountbcodemodelstringinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"amount"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-string-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelStringInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbtokenaddressbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"tokenAddress"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbfromdomainidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"fromDomainId"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbtodomainidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"toDomainId"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbfundamentalchainidbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"fundamentalChainId"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbnewcolonyversionbcodemodelintinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"newColonyVersion"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-int-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIntInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbandbcodemodelcolonyactionfilterinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"and"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-action-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelColonyActionFilterInput]"))," ",(0,i.kt)(s,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputborbcodemodelcolonyactionfilterinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"or"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-action-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[ModelColonyActionFilterInput]"))," ",(0,i.kt)(s,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbnotbcodemodelcolonyactionfilterinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"not"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-colony-action-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelColonyActionFilterInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-modelcolonyactionfilterinputbcolonyactionsidbcodemodelidinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ModelColonyActionFilterInput.",(0,i.kt)("b",null,"colonyActionsId"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/graphql/inputs/model-idinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelIDInput"))," ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql/queries/get-actions-by-colony"},(0,i.kt)("inlineCode",{parentName:"a"},"getActionsByColony")),"  ",(0,i.kt)(s,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/queries/list-colony-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"listColonyActions")),"  ",(0,i.kt)(s,{class:"secondary",text:"query",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/graphql/inputs/model-colony-action-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ModelColonyActionFilterInput")),"  ",(0,i.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);