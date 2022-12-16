"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={description:"How to uninstall the Extension and change parameters."},a="Uninstallation",s={unversionedId:"use/motions-and-disputes/uninstallation",id:"use/motions-and-disputes/uninstallation",title:"Uninstallation",description:"How to uninstall the Extension and change parameters.",source:"@site/colony/use/motions-and-disputes/uninstallation.md",sourceDirName:"use/motions-and-disputes",slug:"/use/motions-and-disputes/uninstallation",permalink:"/next/use/motions-and-disputes/uninstallation",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/motions-and-disputes/uninstallation.md",tags:[],version:"current",frontMatter:{description:"How to uninstall the Extension and change parameters."},sidebar:"use",previous:{title:"Parameters",permalink:"/next/use/motions-and-disputes/parameters"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"uninstallation"},"Uninstallation"),(0,i.kt)("p",null,"Changing the parameters of the Governance extension in your colony requires an uninstall and fresh install."),(0,i.kt)("p",null,"Before uninstalling, this extension must first be deprecated. After you deprecate the extension, currently ongoing actions using this extension may be completed, but it will not be possible to create new Motions."),(0,i.kt)("p",null,"To remove the extension:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Select the installed "Governance (Reputation Weighted)" extension on the Extensions page.'),(0,i.kt)("li",{parentName:"ol"},'Click on "Deprecate", click "Confirm", and confirm the transaction in your wallet.'),(0,i.kt)("li",{parentName:"ol"},"If applicable, wait for outstanding actions using this extension to complete, and ensure members' stakes have been reclaimed."),(0,i.kt)("li",{parentName:"ol"},'Click on "Uninstall", acknowledge the warning that ',(0,i.kt)("em",{parentName:"li"},"this deletes all actions associated with the Governance (Reputation Weighted) extension and that unclaimed funds will be lost permanently"),', click on "Confirm" and confirm the transaction in your wallet.')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Uninstalling the Governance (Reputation Weighted) extension results in ",(0,i.kt)("strong",{parentName:"p"},"all actions associated with this extension being lost"),". This includes all Motions as well as funds from stakes in ongoing Motions that have not been claimed between deprecating and uninstalling the extension. A remedy is currently in development but not in effect until noted here.")))}p.isMDXComponent=!0}}]);