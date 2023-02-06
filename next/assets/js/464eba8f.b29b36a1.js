"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905)),o=n(2991);const c={id:"index",sidebar_position:2},a="Guides",s={unversionedId:"guides/index",id:"guides/index",title:"Guides",description:"",source:"@site/vendor/colonyJS/docs/guides/index.md",sourceDirName:"guides",slug:"/guides/",permalink:"/next/colonyjs/guides/",draft:!1,editUrl:"https://github.com/JoinColony/colonyJS/edit/main/docs/guides/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"index",sidebar_position:2},sidebar:"sidebar",previous:{title:"Getting started",permalink:"/next/colonyjs/getting-started"},next:{title:"Upgrading the ColonyNetwork version",permalink:"/next/colonyjs/guides/upgrading-the-colonynetwork-version"}},l={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"guides"},"Guides"),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),i=n(6010),o=n(3438),c=n(9960),a=n(3919),s=n(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},n)}function p(e){let{href:t,icon:n,title:o,description:c}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},n," ",o),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",d),title:c},c))}function f(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const c=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}}}]);