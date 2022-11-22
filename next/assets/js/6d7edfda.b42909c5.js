"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,y=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={description:"The process of upgrading your Colony's contract and your installed extensions contracts."},i="Upgrade Colony and Extensions",s={unversionedId:"craft/advanced-features/upgrade-colony-and-extensions",id:"craft/advanced-features/upgrade-colony-and-extensions",title:"Upgrade Colony and Extensions",description:"The process of upgrading your Colony's contract and your installed extensions contracts.",source:"@site/colony/craft/advanced-features/upgrade-colony-and-extensions.md",sourceDirName:"craft/advanced-features",slug:"/craft/advanced-features/upgrade-colony-and-extensions",permalink:"/next/craft/advanced-features/upgrade-colony-and-extensions",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/craft/advanced-features/upgrade-colony-and-extensions.md",tags:[],version:"current",frontMatter:{description:"The process of upgrading your Colony's contract and your installed extensions contracts."},sidebar:"craft",previous:{title:"Safe Control (Gnosis Safe)",permalink:"/next/craft/advanced-features/safe-control-gnosis-safe"},next:{title:"Additional Guides",permalink:"/next/craft/additional-guides/"}},l={},c=[{value:"How to upgrade Colony",id:"how-to-upgrade-colony",level:3},{value:"Upgrading Extensions",id:"upgrading-extensions",level:3}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade-colony-and-extensions"},"Upgrade Colony and Extensions"),(0,a.kt)("p",null,"Colony has been set up in a way that allows for functionality to be added over time, while your Colony contract itself is immutable on the blockchain, you are able to call new Colony contracts that are released which includes additional functionality."),(0,a.kt)("p",null,"Upgrading is completely optional, you're able to continue to use your existing contracts for as long as you like, they will never be removed."),(0,a.kt)("h3",{id:"how-to-upgrade-colony"},"How to upgrade Colony"),(0,a.kt)("p",null,"Upgrading is simple, you will likely see a banner on your Colony that informs you of the latest released version. Such as the below screenshot:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Banner showing that there is a new version of Colony available.",src:n(8020).Z,width:"1252",height:"462"})),(0,a.kt)("p",null,"There is a 'Learn More' link in the banner with more details on the new version. Clicking on the 'Upgrade' button will give you a modal that allows you to upgrade. As of the below screenshot:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Modal for upgrading your Colony to the latest version.",src:n(7338).Z,width:"806",height:"745"})),(0,a.kt)("p",null,"Upgrading your Colony is community decision, so, requesting an upgrade will require the Motion process. However, it can be forced if you have the permissions to do so."),(0,a.kt)("p",null,"Once upgrade, any new functionality will be available to you right away within your Colony. Although, it is not uncommon for Colony contract releases to happen before the features are made available in the UI."),(0,a.kt)("h3",{id:"upgrading-extensions"},"Upgrading Extensions"),(0,a.kt)("p",null,"Upgrading your extensions will require you to check the extensions themselves. To do so you will navigate to your 'Extensions' page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Extensions page, shows the version number under each extension name.",src:n(8707).Z,width:"1175",height:"575"})),(0,a.kt)("p",null,"You will then need to click into each extension to check if there is an option to upgrade it to a newer version. You can see this in the below screenshot."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Extension that is able to be upgraded to a newer version.",src:n(3532).Z,width:"1355",height:"773"})),(0,a.kt)("p",null,"Clicking the Upgrade button will create a transaction that upgrades the extension. If upgraded successfully, you will see the new version listed in the 'Version installed' row."),(0,a.kt)("p",null,"Any extensions that are not installed will not need to be upgraded, as it will auto install the latest version when it is installed."))}u.isMDXComponent=!0},8707:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/249fdc8f-c496-4c5c-acbe-de90e2a77d93 (1)-35c356fa3c39096e112014869ec5e403.png"},3532:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/478072dc-6c23-43fa-afa6-2d96246d2f07-8a4646956ab5b3f5170f98c801911eae.png"},8020:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/50c33c3e-b618-4b72-b2c9-ca5590bc8b92-7f73737807659546ec188860f8edad63.png"},7338:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/b4c7f953-b75a-42cd-ae54-059123ebccef-eec79556574a89481b5e2f0adf60c4af.png"}}]);