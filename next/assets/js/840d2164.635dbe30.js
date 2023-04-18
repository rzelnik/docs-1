"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71248],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(r),y=o,v=p["".concat(s,".").concat(y)]||p[y]||u[y]||a;return r?n.createElement(v,i(i({ref:t},l),{},{components:r})):n.createElement(v,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={description:"What is Recovery Mode in Colony, and how to use it in case of danger."},i="Entering and Exiting Recovery Mode",c={unversionedId:"use/advanced-features/recovery-mode",id:"use/advanced-features/recovery-mode",title:"Entering and Exiting Recovery Mode",description:"What is Recovery Mode in Colony, and how to use it in case of danger.",source:"@site/colony/use/advanced-features/recovery-mode.md",sourceDirName:"use/advanced-features",slug:"/use/advanced-features/recovery-mode",permalink:"/next/use/advanced-features/recovery-mode",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/advanced-features/recovery-mode.md",tags:[],version:"current",frontMatter:{description:"What is Recovery Mode in Colony, and how to use it in case of danger."},sidebar:"use",previous:{title:"Gasless Transactions",permalink:"/next/use/advanced-features/gasless-transactions"},next:{title:"Upgrade Colony and Extensions",permalink:"/next/use/advanced-features/upgrade-colony-and-extensions"}},s={},d=[{value:"Activate Recovery Mode",id:"activate-recovery-mode",level:3},{value:"Exit Recovery Mode",id:"exit-recovery-mode",level:3}],l={toc:d};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"entering-and-exiting-recovery-mode"},"Entering and Exiting Recovery Mode"),(0,o.kt)("p",null,"If you believe that something dangerous is happening in your colony (e.g. it is under attack), recovery mode will disable the colony and prevent further activity until the issue is brought to resolution."),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"/next/learn/advanced-concepts/recovery-mode"},"this article"),"."),(0,o.kt)("h3",{id:"activate-recovery-mode"},"Activate Recovery Mode"),(0,o.kt)("p",null,"To activate Recovery Mode, navigate to ",(0,o.kt)("strong",{parentName:"p"},"New Action > Advanced > Recovery")," and click Confirm after carefully reading the warning message."," "),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(52429).Z,width:"2878",height:"1636"})),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"While in recovery mode the colony is disabled and no actions may be taken.")),(0,o.kt)("h3",{id:"exit-recovery-mode"},"Exit Recovery Mode"),(0,o.kt)("p",null,"A Recovery permission holder may update storage slots to rectify the issue that caused the user to take this action."),(0,o.kt)("p",null,"The majority of Recovery permission holders must be assured that the issue is resolved and the colony is secure, and sign a transaction to approve exiting recovery mode. After that is done, the colony can be reactivated."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(67890).Z,width:"2878",height:"1636"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Approvals are reset each time storage slots are updated.")),(0,o.kt)("p",null,"When enough permission holders have signed to exit recovery mode, as long as no further storage slots are updated, a recovery permission holder may now sign a transaction to reactivate the colony."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(10472).Z,width:"2878",height:"1634"})))}u.isMDXComponent=!0},10472:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ExitRecovery-cd20a18c12498588aae37c0c9966c3cd.gif"},52429:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Recovery-59b33ac26b0533ba03b634a3b7ee45e3.gif"},67890:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/SignRecovery-ee7bdd732408b90342c981a14c0c60bb.gif"}}]);