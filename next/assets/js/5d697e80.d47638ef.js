"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,y=h["".concat(r,".").concat(u)]||h[u]||d[u]||s;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const s={description:"A guide on how to create a colony programmatically. The deployment of a colony requires a handful of transactions for it to be up and running and fully usable. This guide explains how to go through the whole process using Colony SDK",sidebar_position:2},i="Creating a colony",l={unversionedId:"guides/colony-creation",id:"guides/colony-creation",title:"Creating a colony",description:"A guide on how to create a colony programmatically. The deployment of a colony requires a handful of transactions for it to be up and running and fully usable. This guide explains how to go through the whole process using Colony SDK",source:"@site/vendor/colonySDK/docs/guides/colony-creation.md",sourceDirName:"guides",slug:"/guides/colony-creation",permalink:"/next/colonysdk/guides/colony-creation",draft:!1,editUrl:"https://github.com/JoinColony/colonySDK/edit/main/docs/guides/colony-creation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"A guide on how to create a colony programmatically. The deployment of a colony requires a handful of transactions for it to be up and running and fully usable. This guide explains how to go through the whole process using Colony SDK",sidebar_position:2},sidebar:"sidebar",previous:{title:"How to create transactions",permalink:"/next/colonysdk/guides/transactions"},next:{title:"Metadata within Colony",permalink:"/next/colonysdk/guides/metadata"}},r={},p=[{value:"Step 1 - Deploying the Colony contract (and optionally its token)",id:"step-1---deploying-the-colony-contract-and-optionally-its-token",level:2},{value:"Step 2 - Instantiate the Colony for the first time",id:"step-2---instantiate-the-colony-for-the-first-time",level:2},{value:"Step 3 - Set the Colony as owner of the token",id:"step-3---set-the-colony-as-owner-of-the-token",level:2},{value:"Step 4 - Install the <code>OneTxPayment</code> extension",id:"step-4---install-the-onetxpayment-extension",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-a-colony"},"Creating a colony"),(0,a.kt)("p",null,"Even though deploying a Colony is technically just a matter of issuing one transaction, for the colony to be properly set up and usable in the dApp, some extra steps are necessary. In this guide we'll walk you through the whole process of creating the right transactions and explain what happens on the way."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Keep in mind that some of these transactions are optional and depend on your specific situation.")),(0,a.kt)("p",null,"For a full example see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonySDK/blob/main/examples/node/create.ts"},"here"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"These examples assume that the user executing the transactions has funds in their wallet to pay for gas. If you'd like to use gasless transactions instead, use ",(0,a.kt)("inlineCode",{parentName:"p"},"metaTx()")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"tx()"),".")),(0,a.kt)("h2",{id:"step-1---deploying-the-colony-contract-and-optionally-its-token"},"Step 1 - Deploying the Colony contract (and optionally its token)"),(0,a.kt)("p",null,"The most important step. Here the actualy colony contract will be deployed. This happens by executing a contract method on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyNetwork")," (as opposed to a deploy-transaction):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Create actual colony (deploys Colony contract)\nconst [{ colonyAddress, tokenAddress, tokenAuthorityAddress }] = await colonyNetwork\n  .createColony({ name: 'Test token', symbol: 'TOT' }, 'colonytestname')\n  .tx();\n")),(0,a.kt)("p",null,"One can specify the token name, its symbol and even its decimals (even though it's recommended to leave that at the default value). This will deploy a special ERC20 token that integrates well with Colony (e.g. it supports permissions, minting and gasless transactions out of the box). For its contract code see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/blob/develop/contracts/metaTxToken/MetaTxToken.sol"},"here"),"."),(0,a.kt)("p",null,"You can also use an already existing token. For that, instead of passing in the token's details as the first argument, just use the token's address (it needs to be in the same chain your Colony is deployed in), like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Use USDC on Gnosis chain as the native token\nconst [{ colonyAddress }] = await colonyNetwork\n  .createColony('0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83', 'anothertestname')\n  .tx();\n")),(0,a.kt)("p",null,"As the second argument a label for the Colony is assigned. These are unique, so pick one that's not already taken. The ",(0,a.kt)("inlineCode",{parentName:"p"},"createColony")," method will check that. Alternatively, the ",(0,a.kt)("inlineCode",{parentName:"p"},"colonyNetwork.getColonyAddress(label)")," function can be used. The label is used by the dApp as a short name and for looking up the Colony's address."),(0,a.kt)("p",null,"**If the own token was used and no extension installation is desired we would be done here. This is not recommended though, as one will at least need the ",(0,a.kt)("inlineCode",{parentName:"p"},"OneTxPayment")," extension to properly use Colony at this stage."),(0,a.kt)("h2",{id:"step-2---instantiate-the-colony-for-the-first-time"},"Step 2 - Instantiate the Colony for the first time"),(0,a.kt)("p",null,"Let's instantiate the colony (this is the code used to instantiate an existing colony) and the token:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const colony = await colonyNetwork.getColony(colonyAddress);\nconst { token } = colony;\n")),(0,a.kt)("h2",{id:"step-3---set-the-colony-as-owner-of-the-token"},"Step 3 - Set the Colony as owner of the token"),(0,a.kt)("p",null,"The token authority is a contract that glues the token and the colony together and makes it possible for the colony to manage and move the token. The first transaction is needed to set the token's ",(0,a.kt)("inlineCode",{parentName:"p"},"authority"),' to the one that was just deployed. After that we set the Colony to one of the token\'s "owners", so that it has permissions to access extra token functions (like ',(0,a.kt)("inlineCode",{parentName:"p"},"mint"),"). If your token was newly created in step 1 you will want to do this! If the token does not support the ",(0,a.kt)("inlineCode",{parentName:"p"},"setAuthority")," method, this step should be skipped. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Set the token's authority to the freshly deployed one (see step 1)\nawait token.setAuthority(tokenAuthorityAddress).tx();\n// Set the token's owner (the colony), to have permissions to execute authorized functions (like `mint`)\nawait colony.token.setOwner(colony.address).tx();\n")),(0,a.kt)("h2",{id:"step-4---install-the-onetxpayment-extension"},"Step 4 - Install the ",(0,a.kt)("inlineCode",{parentName:"h2"},"OneTxPayment")," extension"),(0,a.kt)("p",null,"As mentioned earlier, this step is technically optional as well but if the colony is supposed to be used productively, a form of payment extension is needed. Currently only the ",(0,a.kt)("inlineCode",{parentName:"p"},"OneTxPayment")," extension is supported. Install it like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const [{ extensionId, version }] = await colony\n  .installExtension(SupportedExtension.oneTx)\n  .tx();\nawait colony.updateExtensions();\nconst [{ user, setTo, role }] = await colony\n  .setRoles(colony.ext.oneTx.address, [\n    ColonyRole.Administration,\n    ColonyRole.Funding,\n  ])\n  .tx();\n")),(0,a.kt)("p",null,"Here we install the extension using the ",(0,a.kt)("inlineCode",{parentName:"p"},"installExtension")," method. This extension is an own contract that was deployed in this transaction. To get its address, we re-initialize the extensions on the colony using ",(0,a.kt)("inlineCode",{parentName:"p"},"updateExtensions"),". After that, ",(0,a.kt)("inlineCode",{parentName:"p"},"oneTx")," will be available on ",(0,a.kt)("inlineCode",{parentName:"p"},"colony.ext"),".\nFinally, we assign the ",(0,a.kt)("strong",{parentName:"p"},"Administration")," and ",(0,a.kt)("strong",{parentName:"p"},"Funding")," roles of the colony's ",(0,a.kt)("inlineCode",{parentName:"p"},"Root")," team to the extension that we just deployed. The OneTxPayment extension needs these permissions to function properly."),(0,a.kt)("h2",{id:"thats-it"},"That's it!"),(0,a.kt)("p",null,"We have successfully deployed a colony that can be used from the dApp as well. Explore what's possible within a colony using Colony SDK ",(0,a.kt)("a",{parentName:"p",href:"/next/colonysdk/api/classes/Colony"},"here"),"."))}d.isMDXComponent=!0}}]);