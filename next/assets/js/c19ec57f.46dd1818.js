"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3721],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6677:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={id:"index",description:"Documentation for the Colony Network Smart Contracts",sidebar_position:2},i="The Colony Network",l={unversionedId:"index",id:"index",title:"The Colony Network",description:"Documentation for the Colony Network Smart Contracts",source:"@site/vendor/colonyNetwork/docs/index.md",sourceDirName:".",slug:"/",permalink:"/next/colonynetwork/",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"index",description:"Documentation for the Colony Network Smart Contracts",sidebar_position:2},sidebar:"sidebar",previous:{title:"Reputation Mining Client",permalink:"/next/colonynetwork/guides/reputation-mining"},next:{title:"Whitepaper tl;dr",permalink:"/next/colonynetwork/tldr/"}},s={},p=[{value:"Want to jump right in?",id:"want-to-jump-right-in",level:2},{value:"The Colony Ecosystem",id:"the-colony-ecosystem",level:2},{value:"The Colony Protocol",id:"the-colony-protocol",level:3},{value:"The Colony Network",id:"the-colony-network-1",level:3},{value:"Colony SDK",id:"colony-sdk",level:3},{value:"Developer Portal",id:"developer-portal",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-colony-network"},"The Colony Network"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/JoinColony/brand/v1.0.0/logo_network.svg",alt:null})),(0,r.kt)("p",null,"Colony is a platform for organizations that operate via software rather than paperwork and management hierarchy."),(0,r.kt)("p",null,"At its core, a colony is a set of smart contracts that describe all aspects of a traditional organization, as well as some new capabilities that would only be possible using a decentralized protocol like Ethereum."),(0,r.kt)("p",null,"It's infrastructure for the future of the firm, built to organize and incentivize teams, projects, and communities."),(0,r.kt)("h2",{id:"want-to-jump-right-in"},"Want to jump right in?"),(0,r.kt)("p",null,"Feeling like an eager beaver? Jump in to the ",(0,r.kt)("a",{parentName:"p",href:"quick-start"},"quick start docs")," and get the Smart Contracts running on your machine:"),(0,r.kt)("h2",{id:"the-colony-ecosystem"},"The Colony Ecosystem"),(0,r.kt)("h3",{id:"the-colony-protocol"},"The Colony Protocol"),(0,r.kt)("p",null,"The Colony White Paper describes a complete protocol for organizations, with crypto-economic processes for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ownership and permissions"),(0,r.kt)("li",{parentName:"ul"},"Reputation"),(0,r.kt)("li",{parentName:"ul"},"Dispute resolution and decision-making"),(0,r.kt)("li",{parentName:"ul"},"Work management and delegation"),(0,r.kt)("li",{parentName:"ul"},"Financial management, including rewards and payments")),(0,r.kt)("p",null,"To learn more about the Colony Protocol, dig in to the ",(0,r.kt)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"Colony White Paper")," or read the ",(0,r.kt)("a",{parentName:"p",href:"tldr/"},"White Paper TL;DR")),(0,r.kt)("h3",{id:"the-colony-network-1"},"The Colony Network"),(0,r.kt)("p",null,"The Colony Network is the infrastructure upon which all colonies run."),(0,r.kt)("p",null,"The colonyNetwork repository contains the solidity implementation of Colony, which is developed as free software. See our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/blob/develop/.github/CONTRIBUTING.md"},"guidelines")," if you're interested in contributing to the colonyNetwork codebase. Developers interested in contributing to the Colony Network are encouraged to look at the code on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork"},"GitHub"),", and to come say hi on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/feVZWwysqM"},"Discord"),"."),(0,r.kt)("p",null,"The current colonyNetwork release is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/releases/tag/flwss"},(0,r.kt)("inlineCode",{parentName:"a"},"flwss"))," (Fuchsia Lightweight Spaceship). It implements some, but not all, of the Colony Protocol:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ownership and permissions (through roles)"),(0,r.kt)("li",{parentName:"ul"},"Reputation"),(0,r.kt)("li",{parentName:"ul"},"Funding Pots and payments"),(0,r.kt)("li",{parentName:"ul"},"Domains and Skills"),(0,r.kt)("li",{parentName:"ul"},"Tasks and work ratings")),(0,r.kt)("p",null,"The Colony Network is maintained and improved by the ",(0,r.kt)("a",{parentName:"p",href:"/next/colonynetwork/tldr/metacolony"},"Meta Colony")," (which is, itself, a colony on the network with special permissions)."),(0,r.kt)("p",null,"Membership in the Metacolony is open to all (and heartily encouraged!), but changes such as ",(0,r.kt)("a",{parentName:"p",href:"/next/colonynetwork/concepts/upgrades"},"network upgrades")," require a minimum ",(0,r.kt)("em",{parentName:"p"},"reputation")," within the Metacolony to proceed."),(0,r.kt)("h3",{id:"colony-sdk"},"Colony SDK"),(0,r.kt)("p",null,"The Colony SDK is a JavaScript library designed to make interaction with the Colony Network as straightforward as possible for (d)app developers."),(0,r.kt)("p",null,"Using the Colony SDK, all of the functions of a colony can be imported and called as methods within a JavaScript application. It runs on all modern browsers as well as in an NodeJS environment."),(0,r.kt)("p",null,"Things like parsing returned parameters from a transaction, and signing transactions with a wallet provider are all handled by this library while providing a small API with sane defaults."),(0,r.kt)("p",null,"To learn more about how to use the Colony SDK with your dapp, or to get specific info about the Colony SDK API, see its ",(0,r.kt)("a",{parentName:"p",href:"https://docs.colony.io/colonysdk"},"docs"),"."),(0,r.kt)("h3",{id:"developer-portal"},"Developer Portal"),(0,r.kt)("p",null,"If you didn't get here from there, have a look at our Developer Portal to ",(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/colony/Colony-Developer-Portal-2155ba0a012e46f9991bbd693b04de2b"},"get started"),"."),(0,r.kt)("p",null,"Or, if you're feeling old skool and just want to chat, send an email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:build@colony.io"},"chris@colony.io")," or ping chmanie#5800 on Discord!"))}u.isMDXComponent=!0}}]);