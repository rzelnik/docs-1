"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9550],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={description:"How to uninstall the Extension and change parameters."},a="Uninstallation",l={unversionedId:"extensions/whitelist/uninstallation",id:"extensions/whitelist/uninstallation",title:"Uninstallation",description:"How to uninstall the Extension and change parameters.",source:"@site/colony/explore/extensions/whitelist/uninstallation.md",sourceDirName:"extensions/whitelist",slug:"/extensions/whitelist/uninstallation",permalink:"/explore/extensions/whitelist/uninstallation",draft:!1,tags:[],version:"current",frontMatter:{description:"How to uninstall the Extension and change parameters."},sidebar:"sidebar",previous:{title:"Setting up KYC",permalink:"/explore/extensions/whitelist/setting-up-kyc"},next:{title:"Get Started (deprecated)",permalink:"/explore/get-started/"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uninstallation"},"Uninstallation"),(0,o.kt)("p",null,"If you intent to make any changes to your whitelist, such as removing, changing or adding an agreement, removing or adding KYC, changing the list of whitelisted wallet addresses or other alterations, you can only do so by deprecating, uninstalling and reinstalling the Whitelist Extension. This will remove any previous agreement or whitelist from your ongoing and upcoming token sales through Coin Machine in your colony."),(0,o.kt)("p",null,"To remove the extension:"),(0,o.kt)("p",null,"1",".",' Select the installed "Whitelist" extension on the Extensions page.'),(0,o.kt)("p",null,"2",".",' Click on "Deprecate", click "Confirm", and confirm the transaction in your wallet.'),(0,o.kt)("p",null,"3",".",' Click on "Uninstall", acknowledge the warning, click on "Confirm" and confirm the transaction in your wallet.'))}p.isMDXComponent=!0}}]);