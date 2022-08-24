"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const l={id:"Ethers6Filter",title:"Interface: Ethers6Filter",sidebar_label:"Ethers6Filter",sidebar_position:0,custom_edit_url:null},o=void 0,a={unversionedId:"colonysdk/api/interfaces/Ethers6Filter",id:"colonysdk/api/interfaces/Ethers6Filter",title:"Interface: Ethers6Filter",description:"Ethers 6 supports mulitple addresses in a filter. Until then we have this",source:"@site/docs/colonysdk/api/interfaces/Ethers6Filter.md",sourceDirName:"colonysdk/api/interfaces",slug:"/colonysdk/api/interfaces/Ethers6Filter",permalink:"/docs/colonysdk/api/interfaces/Ethers6Filter",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Ethers6Filter",title:"Interface: Ethers6Filter",sidebar_label:"Ethers6Filter",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"ColonyMultiFilter",permalink:"/docs/colonysdk/api/interfaces/ColonyMultiFilter"},next:{title:"Ethers6FilterByBlockHash",permalink:"/docs/colonysdk/api/interfaces/Ethers6FilterByBlockHash"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"address",id:"address",level:3},{value:"fromBlock",id:"fromblock",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"toBlock",id:"toblock",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"topics",id:"topics",level:3},{value:"Inherited from",id:"inherited-from-2",level:4}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ethers 6 supports mulitple addresses in a filter. Until then we have this"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'"address"'),">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Ethers6Filter"))),(0,i.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/colonysdk/api/interfaces/ColonyFilter"},(0,i.kt)("inlineCode",{parentName:"a"},"ColonyFilter"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"address"},"address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"address"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromblock"},"fromBlock"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fromBlock"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Omit.fromBlock"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toblock"},"toBlock"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"toBlock"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockTag")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"Omit.toBlock"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topics"},"topics"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"topics"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[])[]"),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"Omit.topics"))}d.isMDXComponent=!0}}]);