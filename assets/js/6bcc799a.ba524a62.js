"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=l(n),k=r,d=y["".concat(s,".").concat(k)]||y[k]||u[k]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={description:"How to choose your colony's native token during the colony creation process."},i="Select Native Token",c={unversionedId:"create-a-colony/select-native-token",id:"create-a-colony/select-native-token",title:"Select Native Token",description:"How to choose your colony's native token during the colony creation process.",source:"@site/colony/explore/create-a-colony/select-native-token.md",sourceDirName:"create-a-colony",slug:"/create-a-colony/select-native-token",permalink:"/explore/create-a-colony/select-native-token",draft:!1,tags:[],version:"current",frontMatter:{description:"How to choose your colony's native token during the colony creation process."},sidebar:"sidebar",previous:{title:"Native Token Address",permalink:"/explore/create-a-colony/native-token-address"},next:{title:"Teams",permalink:"/explore/teams/"}},s={},l=[{value:"Use an existing ERC20 Token",id:"use-an-existing-erc20-token",level:3},{value:"Create a New Token",id:"create-a-new-token",level:3}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"select-native-token"},"Select Native Token"),(0,r.kt)("p",null,"Every colony has its own ",(0,r.kt)("a",{parentName:"p",href:"/explore/key-concepts/native-tokens"},"native token"),". Payment in a colony\u2019s native token confers ",(0,r.kt)("a",{parentName:"p",href:"../key-concepts/reputation/"},(0,r.kt)("strong",{parentName:"a"},"reputation"))," in the team from which it was received."),(0,r.kt)("p",null,"Users can decide to adopt an existing ERC20 token as their native token (e.g. if your project already has a token), or to create a new one."),(0,r.kt)("h3",{id:"use-an-existing-erc20-token"},"Use an existing ERC20 Token"),(0,r.kt)("p",null,"Select this option if your project already has an existing token."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5423).Z,width:"2878",height:"1634"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're using an existing ERC20 token as your native token, please use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/for-users/bridges/omnibridge"},"xDai bridged version of the contract"),".")),(0,r.kt)("h3",{id:"create-a-new-token"},"Create a New Token"),(0,r.kt)("p",null,"Select this option if your project doesn't have a token yet, and wishes to have more control over their token using Colony."," "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2099).Z,width:"2874",height:"1636"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Pro Tip")," \ud83d\ude0e ",(0,r.kt)("strong",{parentName:"p"},":")," you can use emojis for your token symbol! \ud83d\ude01"," ")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You cannot change your colony's ",(0,r.kt)("a",{parentName:"p",href:"/explore/create-a-colony/select-native-token"},"Native Token"),". Please choose carefully.")))}u.isMDXComponent=!0},5423:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ExistingToken-8979074c68154e83f47015d95645d29b.gif"},2099:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/NewToken-0e2fdae944630fec37b962b3c351fb93.gif"}}]);