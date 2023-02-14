"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,N=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(N,l(l({ref:t},k),{},{components:n})):a.createElement(N,l({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},l="Class: ColonyToken",i={unversionedId:"api/classes/ColonyToken",id:"api/classes/ColonyToken",title:"Class: ColonyToken",description:"Hierarchy",source:"@site/vendor/colonySDK/docs/api/classes/ColonyToken.md",sourceDirName:"api/classes",slug:"/api/classes/ColonyToken",permalink:"/colonysdk/api/classes/ColonyToken",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Class: ColonyNetwork",permalink:"/colonysdk/api/classes/ColonyNetwork"},next:{title:"Class: ColonyTxCreator<C, M, E, MD\\>",permalink:"/colonysdk/api/classes/ColonyTxCreator"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Methods",id:"methods",level:2},{value:"approve",id:"approve",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Event data",id:"event-data",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"decimals",id:"decimals",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"name",id:"name",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"setAuthority",id:"setauthority",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Event data",id:"event-data-1",level:4},{value:"setOwner",id:"setowner",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Event data",id:"event-data-2",level:4},{value:"symbol",id:"symbol",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-4",level:4}],k={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-colonytoken"},"Class: ColonyToken"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token"},(0,r.kt)("inlineCode",{parentName:"a"},"ERC20Token"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ColonyToken"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new ColonyToken"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"colonyNetwork"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),")"),(0,r.kt)("p",null,"Creates a new instance of a Colony deployed Token"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This does not deploy a new token, only connects to an exisiting one"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"colonyNetwork")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/classes/ColonyNetwork"},(0,r.kt)("inlineCode",{parentName:"a"},"ColonyNetwork"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"A ",(0,r.kt)("a",{parentName:"td",href:"/colonysdk/api/classes/ColonyNetwork"},"ColonyNetwork")," instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"token")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"MetaTxToken")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A token address or a full contract (like on a colony token client)")))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token"},"ERC20Token"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token#constructor"},"constructor")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"address"},"address"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"address"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token"},"ERC20Token"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token#address"},"address")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"approve"},"approve"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"approve"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spender?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/TxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"TxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"TokenERC20"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"approve"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"guy?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"src?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wad?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"Approve ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of the wallet owners holdings of the specified token"),(0,r.kt)("p",null,'In order for the wallet owner to stake tokens, that amount has to be approved and deposited into the Colony first. In the dapp the process is called "Activation" of a certain amount of the Colony\'s native token. The wallet must hold at least the amount of the token that will be approved.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { w } from '@colony/sdk';\n\n// Immediately executing async function\n(async function() {\n  // Approve 100 tokens to be \"activated\"\n  await colony.token.approve(w`100`).force();\n  // Deposit the tokens\n  await colonyNetwork.locking.deposit(token.address, w`100`).force();\n})();\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of the token to be approved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"spender?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Spender to approve the amount for. Defaults to the Colony Network")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/TxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"TxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"TokenERC20"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"approve"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"guy?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"src?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"wad?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("h4",{id:"event-data"},"Event data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"src")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address that approved the tokens from their wallet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"guy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the TokenLocking contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"wad")),(0,r.kt)("td",{parentName:"tr",align:"left"},"BigNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount that was approved")))),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token"},"ERC20Token"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token#approve"},"approve")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"decimals"},"decimals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"decimals"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,r.kt)("p",null,"Gets the token's decimals"),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"number"),">"),(0,r.kt)("p",null,"The token's decimals (e.g. 18)"),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token"},"ERC20Token"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token#decimals"},"decimals")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"name"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Gets the token's name"),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The token's name (e.g. Colony Network Token)"),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token"},"ERC20Token"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token#name"},"name")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setauthority"},"setAuthority"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setAuthority"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAuthorityAddress"),"): ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"MetaTxToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"setAuthority"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"authority?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"Sets the address of the TokenAuthority for this token"),(0,r.kt)("p",null,"Set the TokenAuthority for this token. Only has to be done once, after the TokenAuthority has been deployed. See ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/Colony#deploytokenauthority"},"Colony.deployTokenAuthority")," for more information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Only works for native tokens deployed with Colony (not imported tokens)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { w } from '@colony/sdk';\n\n// Immediately executing async function\n(async function() {\n  // Deploy the TokenAuthority contract\n  // (forced transaction example)\n  const [{ tokenAuthorityAddress }] = await colony.deployTokenAuthority().tx();\n  // Set the TokenAuthority for this token\n  // (forced transaction example)\n  await colony.token.setAuthority(tokenAuthorityAddress).tx();\n})();\n")),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tokenAuthorityAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address of the TokenAuthority contract")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"MetaTxToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"setAuthority"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"authority?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("h4",{id:"event-data-1"},"Event data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"authority")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the tokenAuthority that has been set")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setowner"},"setOwner"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setOwner"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"MetaTxToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"setOwner"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"owner?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"Sets the owner of the token"),(0,r.kt)("p",null,"Set the owner address for this token. Should usually be the colony. This will allow the Colony to always affect certain token parameters, event without the TokenAuthority deployed or used"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Only works for native tokens deployed with Colony (not imported tokens)."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address to set as the owner of the token (usually the colony)")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/MetaTxCreator"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaTxCreator")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"MetaTxToken"),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"setOwner"'),", { ",(0,r.kt)("inlineCode",{parentName:"p"},"owner?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }, ",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/enums/MetadataType"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataType")),">"),(0,r.kt)("p",null,"A transaction creator"),(0,r.kt)("h4",{id:"event-data-2"},"Event data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The address of the owner that has been set")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"symbol"},"symbol"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"symbol"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"Gets the token's symbol"),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,r.kt)("p",null,"The token's symbol (e.g. CLNY)"),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token"},"ERC20Token"),".",(0,r.kt)("a",{parentName:"p",href:"/colonysdk/api/classes/ERC20Token#symbol"},"symbol")))}d.isMDXComponent=!0}}]);