"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=d(a),N=r,c=k["".concat(l,".").concat(N)]||k[N]||m[N]||i;return a?n.createElement(c,o(o({ref:t},s),{},{components:a})):n.createElement(c,o({ref:t},s))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},59250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={},o="Class: MetaTxCreator<C, M, E, MD>",p={unversionedId:"api/classes/MetaTxCreator",id:"api/classes/MetaTxCreator",title:"Class: MetaTxCreator<C, M, E, MD\\>",description:"An umbrella API for all kinds of transactions",source:"@site/vendor/colonySDK/docs/api/classes/MetaTxCreator.md",sourceDirName:"api/classes",slug:"/api/classes/MetaTxCreator",permalink:"/next/colonysdk/api/classes/MetaTxCreator",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: ERC2612Token",permalink:"/next/colonysdk/api/classes/ERC2612Token"},next:{title:"Class: OneTxPayment",permalink:"/next/colonysdk/api/classes/OneTxPayment"}},l={},d=[{value:"Create a standard transaction (&quot;force&quot; in dApp)",id:"create-a-standard-transaction-force-in-dapp",level:2},{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Methods",id:"methods",level:2},{value:"metaTx",id:"metatx",level:3},{value:"Returns",id:"returns",level:4},{value:"tx",id:"tx",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-metatxcreatorc-m-e-md"},"Class: MetaTxCreator<C, M, E, MD",">"),(0,r.kt)("p",null,"An umbrella API for all kinds of transactions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaTxCreator")," allows for a simple API to cover all the different cases of transactions within the Colony Network. The ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaTxCreator")," supports sending a standard transaction (",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator#tx"},"MetaTxCreator.tx"),") as well as metatransactions (",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/MetaTxCreator#metatx"},"MetaTxCreator.metaTx"),")."),(0,r.kt)("h2",{id:"create-a-standard-transaction-force-in-dapp"},'Create a standard transaction ("force" in dApp)'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/colonysdk/api/classes/MetaTxCreator#tx"},"MetaTxCreator.tx"),": force a Colony transaction, knowing you have the permissions to do so"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/colonysdk/api/classes/MetaTxCreator#metatx"},"MetaTxCreator.metaTx"),": same as ",(0,r.kt)("inlineCode",{parentName:"li"},"tx()"),", but send as a gasless metatransaction")),(0,r.kt)("p",null,"Learn more about these functions in their individual documentation"),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/MetaTxBaseContract"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxBaseContract")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"C"),"[",(0,r.kt)("inlineCode",{parentName:"td"},'"functions"'),"]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"EventData"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"TxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),">"),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"MetaTxCreator"))),(0,r.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/ColonyTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyTxCreator"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new MetaTxCreator"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"M"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"__namedParameters"),")"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/MetaTxBaseContract"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxBaseContract")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"EventData"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.args")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[] ","|"," () => ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"unknown"),"[]",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.colonyNetwork")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/classes/ColonyNetwork"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyNetwork")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.contract")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"C"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.eventData?")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"receipt"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"ContractReceipt"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"E"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.metadataType?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"MD"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.method")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"M"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"__namedParameters.txConfig?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/next/colonysdk/api/interfaces/TxConfig"},(0,r.kt)("inlineCode",{parentName:"a"},"TxConfig")),"<",(0,r.kt)("inlineCode",{parentName:"td"},"MD"),">")))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator"},"TxCreator"),".",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator#constructor"},"constructor")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"metatx"},"metaTx"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"metaTx"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," = getColonyMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DecisionMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DecisionMetadata"))," = getDecisionDetailsFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," = getDomainMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),"]",">",">","] ","|"," [",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),"]",">"),(0,r.kt)("p",null,"Forces an action using a gasless metatransaction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony ",(0,r.kt)("a",{parentName:"p",href:"/develop/dev-learning/permissions"},"here"),"."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," = getColonyMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DecisionMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DecisionMetadata"))," = getDecisionDetailsFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," = getDomainMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),"]",">",">","] ","|"," [",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ParsedLogTransactionReceipt"},(0,r.kt)("inlineCode",{parentName:"a"},"ParsedLogTransactionReceipt")),"]",">"),(0,r.kt)("p",null,"A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tx"},"tx"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"tx"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," = getColonyMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DecisionMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DecisionMetadata"))," = getDecisionDetailsFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," = getDomainMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),"]",">",">","] ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,'Create a standard transaction ("force" in dApp)'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The user sending this transaction has to have the appropriate permissions to do so. Learn more about permissions in Colony ",(0,r.kt)("a",{parentName:"p",href:"/develop/dev-learning/permissions"},"here"),"."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),", () => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),": () => ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"annotation"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," = getAnnotationMsgFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/ColonyMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyMetadata"))," = getColonyMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"decision"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DecisionMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DecisionMetadata"))," = getDecisionDetailsFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"domain"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/interfaces/DomainMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"DomainMetadata"))," = getDomainMetadataFromResponse; ",(0,r.kt)("inlineCode",{parentName:"p"},"misc"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"res"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"MiscMetadata")," = getMiscDataFromResponse }","[",(0,r.kt)("inlineCode",{parentName:"p"},"MD"),"]",">",">","] ","|"," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractReceipt"),"]",">"),(0,r.kt)("p",null,"A tupel of event data and contract receipt (and a function to retrieve metadata if applicable)"),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator"},"TxCreator"),".",(0,r.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/TxCreator#tx"},"tx")))}m.isMDXComponent=!0}}]);