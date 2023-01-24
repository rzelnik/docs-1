"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={},l="Interface: Ethers6FilterByBlockHash",o={unversionedId:"api/interfaces/Ethers6FilterByBlockHash",id:"api/interfaces/Ethers6FilterByBlockHash",title:"Interface: Ethers6FilterByBlockHash",description:"Ethers 6 supports mulitple addresses in a filter. Until then we have this",source:"@site/vendor/colonySDK/docs/api/interfaces/Ethers6FilterByBlockHash.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Ethers6FilterByBlockHash",permalink:"/next/colonysdk/api/interfaces/Ethers6FilterByBlockHash",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: Ethers6Filter",permalink:"/next/colonysdk/api/interfaces/Ethers6Filter"},next:{title:"Interface: EventSources",permalink:"/next/colonysdk/api/interfaces/EventSources"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"blockHash",id:"blockhash",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"topics",id:"topics",level:3},{value:"Inherited from",id:"inherited-from-1",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-ethers6filterbyblockhash"},"Interface: Ethers6FilterByBlockHash"),(0,i.kt)("p",null,"Ethers 6 supports mulitple addresses in a filter. Until then we have this"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"FilterByBlockHash"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"address"'),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Ethers6FilterByBlockHash"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"address"},"address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"address"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blockhash"},"blockHash"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Omit.blockHash"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topics"},"topics"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"topics"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[])[]"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"Omit.topics"))}d.isMDXComponent=!0}}]);