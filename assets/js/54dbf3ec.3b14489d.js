"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||c;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),c=n(2991);const i={description:"The Colony Network Interfaces API",sidebar_position:5},a="Interfaces",s={unversionedId:"interfaces/index",id:"interfaces/index",title:"Interfaces",description:"The Colony Network Interfaces API",source:"@site/vendor/colonyNetwork/docs/interfaces/index.md",sourceDirName:"interfaces",slug:"/interfaces/",permalink:"/colonynetwork/interfaces/",draft:!1,editUrl:"https://github.com/JoinColony/interfaces/index.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"The Colony Network Interfaces API",sidebar_position:5},sidebar:"sidebar",previous:{title:"Upgrade design",permalink:"/colonynetwork/concepts/upgrades"},next:{title:"Coin Machine Extension (`CoinMachine`)",permalink:"/colonynetwork/interfaces/coinmachine"}},l={},u=[],f={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interfaces"},"Interfaces"),(0,o.kt)(c.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(6010),c=n(3438),i=n(9960),a=n(3919),s=n(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",f="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},n)}function m(e){let{href:t,icon:n,title:c,description:i}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:c},n," ",c),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",f),title:i},i))}function d(e){let{item:t}=e;const n=(0,c.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:n}=e;const o=(0,a.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(m,{href:n.href,icon:o,title:n.label,description:null==i?void 0:i.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{className:t}=e;const n=(0,c.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const i=(0,c.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}}}]);