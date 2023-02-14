"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,p(p({ref:t},d),{},{components:a})):n.createElement(k,p({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},p="Class: PinataAdapter",o={unversionedId:"api/classes/PinataAdapter",id:"api/classes/PinataAdapter",title:"Class: PinataAdapter",description:"A Colony SDK IPFS adapter for Pinata (https://pinata.cloud)",source:"@site/vendor/colonySDK/docs/api/classes/PinataAdapter.md",sourceDirName:"api/classes",slug:"/api/classes/PinataAdapter",permalink:"/colonysdk/api/classes/PinataAdapter",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: OneTxPayment",permalink:"/colonysdk/api/classes/OneTxPayment"},next:{title:"Class: TxCreator<C, M, E, MD\\>",permalink:"/colonysdk/api/classes/TxCreator"}},i={},s=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Methods",id:"methods",level:2},{value:"getIpfsUrl",id:"getipfsurl",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"uploadJson",id:"uploadjson",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-2",level:4}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-pinataadapter"},"Class: PinataAdapter"),(0,r.kt)("p",null,"A Colony SDK IPFS adapter for Pinata (",(0,r.kt)("a",{parentName:"p",href:"https://pinata.cloud"},"https://pinata.cloud"),")"),(0,r.kt)("p",null,"In order to use this, sign up for Pinata (if you haven't already) and generate a token. Then either supply this token when instantiating the class (example below) or provide it via the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"COLONY_IPFS_PINATA_TOKEN")," (when using NodeJS). Then provide an instance of this class to the ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")," or ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyEventManager"},"ColonyEventManager")," classes (depending on your needs)."),(0,r.kt)("admonition",{title:"Tokens are sensitive data",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not check in your Pinata token into version control and ",(0,r.kt)("strong",{parentName:"p"},"DO NOT EMBED IT INTO YOUR FRONTEND BUNDLE"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ColonyNetwork, PinataAdapter } from '@colony/sdk';\nconst pinataAdapter = new PinataAdapter('[YOUR_PINANTA_JWT_TOKEN]');\n// Immediately executing async function\n(async function() {\n  const colonyNetwork = ColonyNetwork.init(signerOrProvider, { ipfsAdapter: pinataAdapter });\n})();\n")),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/colonysdk/api/interfaces/IpfsAdapter"},(0,r.kt)("inlineCode",{parentName:"a"},"IpfsAdapter")))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new PinataAdapter"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pinataToken?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pinataToken?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"'PINATA'")),(0,r.kt)("p",null,"Name for the IpfsAdapter. All uppercase please"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter#name"},"name")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getipfsurl"},"getIpfsUrl"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getIpfsUrl"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"cid"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Should return the whole URL to an IPFS resource on the corresponding gateway (e.g. https://my-ipfs-gateway/ipfs/QmXxxxXXxxXxXxXxxxXXxxxXxXXx)."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An IPFS hash (CID)")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"The URL to an ipfs resource"),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter#getipfsurl"},"getIpfsUrl")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"uploadjson"},"uploadJson"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"uploadJson"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"jsonString"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Function to upload a JSON string to IPFS. Takes the string as an argument (use ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," if needbe). Returns a promise that resolves to the IPFS hash (CID)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This function should ideally ",(0,r.kt)("strong",{parentName:"p"},"pin")," your data on the relevant service."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"jsonString")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"JSON string to upload (and pin) to IPFS")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Promise to IPFS hash (CID)"),(0,r.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter"},"IpfsAdapter"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/IpfsAdapter#uploadjson"},"uploadJson")))}m.isMDXComponent=!0}}]);