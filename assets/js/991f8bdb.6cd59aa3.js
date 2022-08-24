"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8241],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=d(t),m=a,u=k["".concat(p,".").concat(m)]||k[m]||c[m]||o;return t?r.createElement(u,i(i({ref:n},s),{},{components:t})):r.createElement(u,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9503:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const o={id:"ColonyEvent",title:"Interface: ColonyEvent",sidebar_label:"ColonyEvent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"colonysdk/api/interfaces/ColonyEvent",id:"colonysdk/api/interfaces/ColonyEvent",title:"Interface: ColonyEvent",description:"An Event that came from a contract within the Colony Network",source:"@site/docs/colonysdk/api/interfaces/ColonyEvent.md",sourceDirName:"colonysdk/api/interfaces",slug:"/colonysdk/api/interfaces/ColonyEvent",permalink:"/docs/colonysdk/api/interfaces/ColonyEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ColonyEvent",title:"Interface: ColonyEvent",sidebar_label:"ColonyEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"ColonyNetwork",permalink:"/docs/colonysdk/api/classes/ColonyNetwork"},next:{title:"ColonyFilter",permalink:"/docs/colonysdk/api/interfaces/ColonyFilter"}},p={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"data",id:"data",level:3},{value:"eventName",id:"eventname",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"eventSource",id:"eventsource",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"fromBlock",id:"fromblock",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"getMetadata",id:"getmetadata",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Returns",id:"returns",level:5},{value:"toBlock",id:"toblock",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"topics",id:"topics",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"transactionHash",id:"transactionhash",level:3}],s={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An Event that came from a contract within the Colony Network"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter"},(0,a.kt)("inlineCode",{parentName:"a"},"ColonyFilter"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ColonyEvent"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"address"},"address"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"address"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter#address"},"address")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"data"},"data"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"data"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"eventname"},"eventName"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"eventName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The full event signature of this event (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenMinted(uint256))")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter#eventname"},"eventName")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"eventsource"},"eventSource"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"eventSource"),": keyof ",(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/EventSources"},(0,a.kt)("inlineCode",{parentName:"a"},"EventSources"))),(0,a.kt)("p",null,"The Colony contract the event originated from"),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter#eventsource"},"eventSource")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromblock"},"fromBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"fromBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter#fromblock"},"fromBlock")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getmetadata"},"getMetadata"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"getMetadata"),": () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"annotationMessage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyAvatarHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyDisplayName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyTokens"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"domainColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"domainName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"domainPurpose"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"annotationMessage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyAvatarHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyDisplayName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyTokens"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"domainColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"domainName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"domainPurpose"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<{ ",(0,a.kt)("inlineCode",{parentName:"p"},"annotationMessage"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyAvatarHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyDisplayName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyTokens"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]  } ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"domainColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"domainName"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"domainPurpose"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }",">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"toblock"},"toBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"toBlock"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter#toblock"},"toBlock")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"topics"},"topics"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"topics"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[])[]"),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter"},"ColonyFilter"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter#topics"},"topics")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")))}c.isMDXComponent=!0}}]);