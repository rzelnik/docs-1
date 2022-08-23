"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={id:"ReputationOracleEndpoint",title:"Enumeration: ReputationOracleEndpoint",sidebar_label:"ReputationOracleEndpoint",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"colonyjs/api/enums/ReputationOracleEndpoint",id:"colonyjs/api/enums/ReputationOracleEndpoint",title:"Enumeration: ReputationOracleEndpoint",description:"HTTP endpoint of the official colony reputation oracle",source:"@site/docs/colonyjs/api/enums/ReputationOracleEndpoint.md",sourceDirName:"colonyjs/api/enums",slug:"/colonyjs/api/enums/ReputationOracleEndpoint",permalink:"/docs/colonyjs/api/enums/ReputationOracleEndpoint",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ReputationOracleEndpoint",title:"Enumeration: ReputationOracleEndpoint",sidebar_label:"ReputationOracleEndpoint",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"ReputationMinerEndpoints",permalink:"/docs/colonyjs/api/enums/ReputationMinerEndpoints"},next:{title:"TokenClientType",permalink:"/docs/colonyjs/api/enums/TokenClientType"}},p={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Custom",id:"custom",level:3},{value:"Gnosis",id:"gnosis",level:3},{value:"Goerli",id:"goerli",level:3},{value:"Mainnet",id:"mainnet",level:3},{value:"Xdai",id:"xdai",level:3},{value:"XdaiQa",id:"xdaiqa",level:3}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"HTTP endpoint of the official colony reputation oracle"),(0,r.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,r.kt)("h3",{id:"custom"},"Custom"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Custom")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"http://localhost:3000"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gnosis"},"Gnosis"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Gnosis")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://xdai.colony.io/reputation/xdai"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"goerli"},"Goerli"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Goerli")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://colony.io/reputation/goerli"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"mainnet"},"Mainnet"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Mainnet")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://colony.io/reputation/mainnet"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xdai"},"Xdai"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"Xdai")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://xdai.colony.io/reputation/xdai"')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"xdaiqa"},"XdaiQa"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"XdaiQa")," = ",(0,r.kt)("inlineCode",{parentName:"p"},'"https://qaxdai.colony.io/reputation/xdai"')))}s.isMDXComponent=!0}}]);