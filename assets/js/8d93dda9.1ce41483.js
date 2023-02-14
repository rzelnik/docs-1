"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=s(n),u=r,f=y["".concat(p,".").concat(u)]||y[u]||d[u]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},96285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},l="Interface: ColonyMetadata",i={unversionedId:"api/interfaces/ColonyMetadata",id:"api/interfaces/ColonyMetadata",title:"Interface: ColonyMetadata",description:"Properties",source:"@site/vendor/colonySDK/docs/api/interfaces/ColonyMetadata.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ColonyMetadata",permalink:"/colonysdk/api/interfaces/ColonyMetadata",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: ColonyFilter",permalink:"/colonysdk/api/interfaces/ColonyFilter"},next:{title:"Interface: ColonyMultiFilter",permalink:"/colonysdk/api/interfaces/ColonyMultiFilter"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"colonyAvatarHash",id:"colonyavatarhash",level:3},{value:"colonyDisplayName",id:"colonydisplayname",level:3},{value:"colonyName",id:"colonyname",level:3},{value:"colonySafes",id:"colonysafes",level:3},{value:"colonyTokens",id:"colonytokens",level:3},{value:"isWhitelistActivated",id:"iswhitelistactivated",level:3},{value:"verifiedAddresses",id:"verifiedaddresses",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interface-colonymetadata"},"Interface: ColonyMetadata"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"colonyavatarhash"},"colonyAvatarHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"colonyAvatarHash"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"colonydisplayname"},"colonyDisplayName"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"colonyDisplayName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"colonyname"},"colonyName"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"colonyName"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"colonysafes"},"colonySafes"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"colonySafes"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"SafeMetadata"),"[]"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"colonytokens"},"colonyTokens"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"colonyTokens"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"iswhitelistactivated"},"isWhitelistActivated"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"isWhitelistActivated"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verifiedaddresses"},"verifiedAddresses"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"verifiedAddresses"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"))}d.isMDXComponent=!0}}]);