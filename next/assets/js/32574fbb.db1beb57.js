"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,y=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},l="Recovery (`IRecovery`)",i={unversionedId:"interfaces/irecovery",id:"interfaces/irecovery",title:"Recovery (`IRecovery`)",description:"This internal contract provides recovery functionality to both colonies and",source:"@site/vendor/colonyNetwork/docs/interfaces/irecovery.md",sourceDirName:"interfaces",slug:"/interfaces/irecovery",permalink:"/next/colonynetwork/interfaces/irecovery",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Meta Colony (`IMetaColony`)",permalink:"/next/colonynetwork/interfaces/imetacolony"},next:{title:"Reputation Mining Cycle (`IReputationMiningCycle`)",permalink:"/next/colonynetwork/interfaces/ireputationminingcycle"}},c={},d=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>approveExitRecovery()</code>",id:"-approveexitrecovery",level:3},{value:"\u25b8 <code>checkNotAdditionalProtectedVariable(uint256 _slot)</code>",id:"-checknotadditionalprotectedvariableuint256-_slot",level:3},{value:"\u25b8 <code>enterRecoveryMode()</code>",id:"-enterrecoverymode",level:3},{value:"\u25b8 <code>exitRecoveryMode()</code>",id:"-exitrecoverymode",level:3},{value:"\u25b8 <code>isInRecoveryMode():bool inRecoveryMode</code>",id:"-isinrecoverymodebool-inrecoverymode",level:3},{value:"\u25b8 <code>numRecoveryRoles():uint64 numRoles</code>",id:"-numrecoveryrolesuint64-numroles",level:3},{value:"\u25b8 <code>removeRecoveryRole(address _user)</code>",id:"-removerecoveryroleaddress-_user",level:3},{value:"\u25b8 <code>setRecoveryRole(address _user)</code>",id:"-setrecoveryroleaddress-_user",level:3},{value:"\u25b8 <code>setStorageSlotRecovery(uint256 _slot, bytes32 _value)</code>",id:"-setstorageslotrecoveryuint256-_slot-bytes32-_value",level:3}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recovery-irecovery"},"Recovery (",(0,a.kt)("inlineCode",{parentName:"h1"},"IRecovery"),")"),(0,a.kt)("p",null,'This internal contract provides recovery functionality to both colonies and\nthe Colony Network. It implements logic for assinging the "recovery" role\nto various addresses as well as for entering "recovery mode", a special state\nwhich allows for direct writes to a colony\'s underlying storage, meant to\nallow for recovery in case of critical bugs or security failures.'),(0,a.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,a.kt)("h3",{id:"-approveexitrecovery"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"approveExitRecovery()")),(0,a.kt)("p",null,"Indicate approval to exit recovery mode. Can only be called by user with recovery role."),(0,a.kt)("h3",{id:"-checknotadditionalprotectedvariableuint256-_slot"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"checkNotAdditionalProtectedVariable(uint256 _slot)")),(0,a.kt)("p",null,"Check whether the supplied slot is a protected variable specific to this contract"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: No return value, but should throw if protected.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_slot"),(0,a.kt)("td",{parentName:"tr",align:null},"uint256"),(0,a.kt)("td",{parentName:"tr",align:null},"The storage slot number to check.")))),(0,a.kt)("h3",{id:"-enterrecoverymode"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"enterRecoveryMode()")),(0,a.kt)("p",null,"Put colony network mining into recovery mode. Can only be called by user with recovery role."),(0,a.kt)("h3",{id:"-exitrecoverymode"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"exitRecoveryMode()")),(0,a.kt)("p",null,"Exit recovery mode, can be called by anyone if enough whitelist approvals are given."),(0,a.kt)("h3",{id:"-isinrecoverymodebool-inrecoverymode"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"isInRecoveryMode():bool inRecoveryMode")),(0,a.kt)("p",null,"Is colony network in recovery mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inRecoveryMode"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Return true if recovery mode is active, false otherwise")))),(0,a.kt)("h3",{id:"-numrecoveryrolesuint64-numroles"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"numRecoveryRoles():uint64 numRoles")),(0,a.kt)("p",null,"Return number of recovery roles."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Return Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"numRoles"),(0,a.kt)("td",{parentName:"tr",align:null},"uint64"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of users with the recovery role.")))),(0,a.kt)("h3",{id:"-removerecoveryroleaddress-_user"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"removeRecoveryRole(address _user)")),(0,a.kt)("p",null,"Remove colony recovery role. Can only be called by root role."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_user"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"User we want to remove recovery role from")))),(0,a.kt)("h3",{id:"-setrecoveryroleaddress-_user"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"setRecoveryRole(address _user)")),(0,a.kt)("p",null,"Set new colony recovery role. Can be called by root."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_user"),(0,a.kt)("td",{parentName:"tr",align:null},"address"),(0,a.kt)("td",{parentName:"tr",align:null},"User we want to give a recovery role to")))),(0,a.kt)("h3",{id:"-setstorageslotrecoveryuint256-_slot-bytes32-_value"},"\u25b8 ",(0,a.kt)("inlineCode",{parentName:"h3"},"setStorageSlotRecovery(uint256 _slot, bytes32 _value)")),(0,a.kt)("p",null,"Update value of arbitrary storage variable. Can only be called by user with recovery role."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: certain critical variables are protected from editing in this function")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_slot"),(0,a.kt)("td",{parentName:"tr",align:null},"uint256"),(0,a.kt)("td",{parentName:"tr",align:null},"Uint address of storage slot to be updated")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_value"),(0,a.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,a.kt)("td",{parentName:"tr",align:null},"word of data to be set")))))}s.isMDXComponent=!0}}]);