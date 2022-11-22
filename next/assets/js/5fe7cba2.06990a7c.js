"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[869],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const o={description:"How to uninstall the Extension and change parameters."},i="Uninstallation",s={unversionedId:"craft/advanced-features/extensions/governance/uninstallation",id:"craft/advanced-features/extensions/governance/uninstallation",title:"Uninstallation",description:"How to uninstall the Extension and change parameters.",source:"@site/colony/craft/advanced-features/extensions/governance/uninstallation.md",sourceDirName:"craft/advanced-features/extensions/governance",slug:"/craft/advanced-features/extensions/governance/uninstallation",permalink:"/next/craft/advanced-features/extensions/governance/uninstallation",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/advanced-features/extensions/governance/uninstallation.md",tags:[],version:"current",frontMatter:{description:"How to uninstall the Extension and change parameters."},sidebar:"craft",previous:{title:"Parameters",permalink:"/next/craft/advanced-features/extensions/governance/parameters"},next:{title:"\u2705 Whitelist",permalink:"/next/craft/advanced-features/extensions/whitelist/"}},l={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uninstallation"},"Uninstallation"),(0,r.kt)("p",null,"Changing the parameters of the Governance extension in your colony requires an uninstall and fresh install."),(0,r.kt)("p",null,"Before uninstalling, this extension must first be deprecated. After you deprecate the extension, currently ongoing actions using this extension may be completed, but it will not be possible to create new Motions."),(0,r.kt)("p",null,"To remove the extension:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Select the installed "Governance (Reputation Weighted)" extension on the Extensions page.'),(0,r.kt)("li",{parentName:"ol"},'Click on "Deprecate", click "Confirm", and confirm the transaction in your wallet.'),(0,r.kt)("li",{parentName:"ol"},"If applicable, wait for outstanding actions using this extension to complete, and ensure members' stakes have been reclaimed."),(0,r.kt)("li",{parentName:"ol"},'Click on "Uninstall", acknowledge the warning that ',(0,r.kt)("em",{parentName:"li"},"this deletes all actions associated with the Governance (Reputation Weighted) extension and that unclaimed funds will be lost permanently"),', click on "Confirm" and confirm the transaction in your wallet.')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Uninstalling the Governance (Reputation Weighted) extension results in ",(0,r.kt)("strong",{parentName:"p"},"all actions associated with this extension being lost"),". This includes all Motions as well as funds from stakes in ongoing Motions that have not been claimed between deprecating and uninstalling the extension. A remedy is currently in development but not in effect until noted here.")))}p.isMDXComponent=!0}}]);