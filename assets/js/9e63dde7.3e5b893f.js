"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8488],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),k=s(r),f=o,m=k["".concat(p,".").concat(f)]||k[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=k;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"ColonyFilter",title:"Interface: ColonyFilter",sidebar_label:"ColonyFilter",sidebar_position:0,custom_edit_url:null},l=void 0,a={unversionedId:"colonysdk/api/interfaces/ColonyFilter",id:"colonysdk/api/interfaces/ColonyFilter",title:"Interface: ColonyFilter",description:"A Colony extended ethers Filter to keep track of where events are coming from",source:"@site/docs/colonysdk/api/interfaces/ColonyFilter.md",sourceDirName:"colonysdk/api/interfaces",slug:"/colonysdk/api/interfaces/ColonyFilter",permalink:"/docs/colonysdk/api/interfaces/ColonyFilter",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ColonyFilter",title:"Interface: ColonyFilter",sidebar_label:"ColonyFilter",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"ColonyEvent",permalink:"/docs/colonysdk/api/interfaces/ColonyEvent"},next:{title:"ColonyMultiFilter",permalink:"/docs/colonysdk/api/interfaces/ColonyMultiFilter"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"eventName",id:"eventname",level:3},{value:"eventSource",id:"eventsource",level:3},{value:"fromBlock",id:"fromblock",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"toBlock",id:"toblock",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"topics",id:"topics",level:3},{value:"Inherited from",id:"inherited-from-3",level:4}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Colony extended ethers Filter to keep track of where events are coming from"),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter"},(0,o.kt)("inlineCode",{parentName:"a"},"Ethers6Filter"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ColonyFilter"))),(0,o.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyEvent"},(0,o.kt)("inlineCode",{parentName:"a"},"ColonyEvent"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"address"},"address"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"address"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter"},"Ethers6Filter"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter#address"},"address")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"eventname"},"eventName"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"eventName"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The full event signature of this event (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"TokenMinted(uint256))")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"eventsource"},"eventSource"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"eventSource"),": keyof ",(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/EventSources"},(0,o.kt)("inlineCode",{parentName:"a"},"EventSources"))),(0,o.kt)("p",null,"The Colony contract the event originated from"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fromblock"},"fromBlock"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"fromBlock"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter"},"Ethers6Filter"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter#fromblock"},"fromBlock")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"toblock"},"toBlock"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"toBlock"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,o.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter"},"Ethers6Filter"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter#toblock"},"toBlock")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"topics"},"topics"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"topics"),": (",(0,o.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[])[]"),(0,o.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter"},"Ethers6Filter"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/Ethers6Filter#topics"},"topics")))}d.isMDXComponent=!0}}]);