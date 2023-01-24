"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8742],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=d(n),s=a,u=k["".concat(p,".").concat(s)]||k[s]||m[s]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Interface: TxCreatorConfig<C, M, E, MD>",l={unversionedId:"api/interfaces/TxCreatorConfig",id:"api/interfaces/TxCreatorConfig",title:"Interface: TxCreatorConfig<C, M, E, MD\\>",description:"Type parameters",source:"@site/vendor/colonySDK/docs/api/interfaces/TxCreatorConfig.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/TxCreatorConfig",permalink:"/colonysdk/api/interfaces/TxCreatorConfig",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: TxConfig<M\\>",permalink:"/colonysdk/api/interfaces/TxConfig"},next:{title:"Namespace: Tokens",permalink:"/colonysdk/api/modules/Tokens"}},p={},d=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"args",id:"args",level:3},{value:"colonyNetwork",id:"colonynetwork",level:3},{value:"contract",id:"contract",level:3},{value:"eventData",id:"eventdata",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"metadataType",id:"metadatatype",level:3},{value:"method",id:"method",level:3},{value:"txConfig",id:"txconfig",level:3}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-txcreatorconfigc-m-e-md"},"Interface: TxCreatorConfig<C, M, E, MD",">"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"C"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"M"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"E"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"MD"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"args"},"args"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"args"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"[] ","|"," () => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),"[]",">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"colonynetwork"},"colonyNetwork"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"colonyNetwork"),": ",(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyNetwork"},(0,a.kt)("inlineCode",{parentName:"a"},"ColonyNetwork"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"contract"},"contract"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"contract"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"C")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"eventdata"},"eventData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"eventData"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"receipt"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">"),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"receipt"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">"),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"receipt")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"ContractReceipt"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"E"),">"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"metadatatype"},"metadataType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"metadataType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"MD")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"method"},"method"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"method"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"M")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"txconfig"},"txConfig"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"txConfig"),": ",(0,a.kt)("a",{parentName:"p",href:"/colonysdk/api/interfaces/TxConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"TxConfig")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"MD"),">"))}m.isMDXComponent=!0}}]);