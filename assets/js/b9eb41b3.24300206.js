"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=d(n),u=r,N=k["".concat(p,".").concat(u)]||k[u]||m[u]||i;return n?a.createElement(N,o(o({ref:t},s),{},{components:n})):a.createElement(N,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o="Class: OneTxPayment",l={unversionedId:"api/classes/OneTxPayment",id:"api/classes/OneTxPayment",title:"Class: OneTxPayment",description:"OneTxPayment (One Transaction Payment)",source:"@site/vendor/colonySDK/docs/api/classes/OneTxPayment.md",sourceDirName:"api/classes",slug:"/api/classes/OneTxPayment",permalink:"/colonysdk/api/classes/OneTxPayment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: MetaTxCreator<C, M, E, MD\\>",permalink:"/colonysdk/api/classes/MetaTxCreator"},next:{title:"Class: PinataAdapter",permalink:"/colonysdk/api/classes/PinataAdapter"}},p={},d=[{value:"<code>OneTxPayment</code> (One Transaction Payment)",id:"onetxpayment-one-transaction-payment",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"version",id:"version",level:3},{value:"extensionType",id:"extensiontype",level:3},{value:"supportedVersions",id:"supportedversions",level:3},{value:"Methods",id:"methods",level:2},{value:"pay",id:"pay",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Event data",id:"event-data",level:4},{value:"upgrade",id:"upgrade",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Event data",id:"event-data-1",level:4},{value:"getLatestSupportedVersion",id:"getlatestsupportedversion",level:3},{value:"Returns",id:"returns-2",level:4}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-onetxpayment"},"Class: OneTxPayment"),(0,r.kt)("h2",{id:"onetxpayment-one-transaction-payment"},(0,r.kt)("inlineCode",{parentName:"h2"},"OneTxPayment")," (One Transaction Payment)"),(0,r.kt)("p",null,"Ordinarily payments require more than one transaction, because the payment lifecycle requires more than one permissioned role."),(0,r.kt)("p",null,"In some use cases, there might be a need for one authorized individual to be able to create, funds, and finalize a payment within a single transaction."),(0,r.kt)("p",null,"The OneTxPayment extension adds this functionality by adding a makePayment function which requires the caller to have both Funding and administration ability within the domain of the payment."),(0,r.kt)("p",null,"Extension therefore requires Administration and Funding roles to function."),(0,r.kt)("p",null,"Note: if you deployed your Colony using the Dapp, the OneTxPayment extension is already installed for you"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new OneTxPayment"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"colony"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"oneTxPaymentClient"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colony")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/classes/Colony"},(0,r.kt)("inlineCode",{parentName:"a"},"Colony")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oneTxPaymentClient")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"OneTxPaymentClientV4"))))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"address"},"address"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"version"},"version"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"version"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extensiontype"},"extensionType"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"extensionType"),": ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/Extension#onetxpayment"},(0,r.kt)("inlineCode",{parentName:"a"},"OneTxPayment"))," = ",(0,r.kt)("inlineCode",{parentName:"p"},"Extension.OneTxPayment")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"supportedversions"},"supportedVersions"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"supportedVersions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),"[]"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"pay"},"pay"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"pay"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"recipient"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"teamId?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAddress?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"OneTxPaymentClientV4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"makePaymentFundedFromDomain"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"agent?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"fundamentalId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"nPayouts?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"Make a payment to a single or multiple addresses using one or more tokens"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"OneTxPayment")," extension to be installed for the Colony (this is usually the case for Colonies created via the Dapp). Note that most tokens use 18 decimals, so add a bunch of zeros or use our ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"toWei")," functions (see example)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Id, Tokens, w } from '@colony/sdk';\n\n// Immediately executing async function\n(async function() {\n  // Pay 10 XDAI (on Gnosis chain) from the root domain to the following address\n  // (forced transaction example)\n  await colony.ext.oneTx.pay(\n     '0xb77D57F4959eAfA0339424b83FcFaf9c15407461',\n     w`10`,\n     Id.RootDomain,\n     Tokens.Gnosis.XDAI,\n  ).tx();\n})();\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"recipient")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wallet address of account to send the funds to (also awarded reputation when sending the native token) - can also be an array of addresses to pay")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount to pay in wei - can also be an array of amounts for the different tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"teamId?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The team to use to send the funds from. Has to have funding of at least the amount you need to send. See ",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/classes/Colony#movefundstoteam"},"Colony.moveFundsToTeam"),". Defaults to the Colony's root team")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenAddress?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the token to make the payment in. Default is the Colony's native token - can also be an array of token addresses (needs to be the same length as ",(0,r.kt)("inlineCode",{parentName:"td"},"amount"),")")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"OneTxPaymentClientV4"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"makePaymentFundedFromDomain"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"agent?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"fundamentalId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"nPayouts?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("h4",{id:"event-data"},"Event data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"agent")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that is responsible for triggering this event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fundamentalId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The newly added payment id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nPayouts")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of payouts in total")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"upgrade"},"upgrade"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"upgrade"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"toVersion?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyClientV11"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"upgradeExtension"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"colony?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"extensionId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"version?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"Upgrade this extension to the next or a custom version"),(0,r.kt)("p",null,"This method upgrades this extension to a specified version or, if no version is provided to the next higher version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only users with ",(0,r.kt)("em",{parentName:"li"},"Root")," role are allowed to upgrade an extension (or another extension with appropriate permissions)"),(0,r.kt)("li",{parentName:"ul"},"Downgrading of extensions is not possible")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"toVersion?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify a custom version to upgrade the extension to")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ColonyTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ColonyClientV11"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"upgradeExtension"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"colony?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"extensionId?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"version?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("h4",{id:"event-data-1"},"Event data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extensionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Extension id (name of the extension) that was upgraded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"oldVersion")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version of the colony before the upgrade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"newVersion")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version of the colony after the upgrade")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getlatestsupportedversion"},"getLatestSupportedVersion"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"getLatestSupportedVersion"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"4")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"4")))}m.isMDXComponent=!0}}]);