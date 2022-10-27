"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,g=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"getting-started",sidebar_position:1},i="Getting started",s={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"",source:"@site/vendor/colonyJS/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/colonyjs/getting-started",draft:!1,editUrl:"https://github.com/JoinColony/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"getting-started",sidebar_position:1},sidebar:"sidebar",previous:{title:"Welcome",permalink:"/colonyjs/"},next:{title:"Guides",permalink:"/colonyjs/guides/"}},l={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { providers, utils, Wallet } from 'ethers';\nimport { getColonyNetworkClient, Id, Network, Tokens } from '@colony/colony-js';\n\nconst { formatEther } = utils;\n\nconst provider = new providers.JsonRpcProvider('https://xdai.colony.io/rpc2/');\n\nconst start = async () => {\n  // Get a wallet instance\n  const wallet = new Wallet(\n    // This is a random private key (don't use this one for anything else and _definitely_ do not send valuables to the corresponding address)\n    '0x0355596cdb5e5242ad082c4fe3f8bbe48c9dba843fe1f99dd8272f487e70efae',\n    provider,\n  );\n\n  // Check out the logs to see the wallet address\n  console.log('Wallet Address:', wallet.address);\n\n  // Get a network client instance for Gnosis Chain\n  const networkClient = await getColonyNetworkClient(\n    Network.Gnosis,\n    wallet,\n  );\n\n  // Let's connect to the Meta Colony\n  const metaColonyClient = await networkClient.getMetaColonyClient()\n  // And check out it's CLNY funding\n  const funding = await metaColonyClient.getFundingPotBalance(Id.RootPot, Tokens.Gnosis.CLNY);\n  // We can also see its address\n  const { address } = metaColonyClient;\n  console.info(`${formatEther(funding)} CLNY in root domain of MetaColony with address: ${address}`);\n};\n\nstart();\n")))}p.isMDXComponent=!0}}]);