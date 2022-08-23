"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4597],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?o.createElement(y,a(a({ref:n},p),{},{components:t})):o.createElement(y,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4296:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(7462),i=(t(7294),t(3905));const r={description:"Colony Network Extensions",sidebar_position:1},a="Extensions",s={unversionedId:"colonynetwork/concepts/extensions",id:"colonynetwork/concepts/extensions",title:"Extensions",description:"Colony Network Extensions",source:"@site/docs/colonynetwork/concepts/extensions.md",sourceDirName:"colonynetwork/concepts",slug:"/colonynetwork/concepts/extensions",permalink:"/docs/colonynetwork/concepts/extensions",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/concepts/extensions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Colony Network Extensions",sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/colonynetwork/concepts/overview"},next:{title:"Upgrade design",permalink:"/docs/colonynetwork/concepts/upgrades"}},l={},c=[{value:"CoinMachine",id:"coinmachine",level:2},{value:"OneTxPayment",id:"onetxpayment",level:2},{value:"VotingReputation",id:"votingreputation",level:2},{value:"Whitelist",id:"whitelist",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extensions"},"Extensions"),(0,i.kt)("p",null,"Starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"glider"),", the Colony contracts provide the option of expanding the basic functionality of a colony through the use of ",(0,i.kt)("em",{parentName:"p"},"extensions"),"."),(0,i.kt)("p",null,"Extensions are other smart contracts that have been given permissions to interact with a colony in a specified domain. Extensions can be used for many purposes, such as bundling transactions, automating certain actions, enabling stake-based permissionless functionality, or something else entirely. Their implementations are intentionally disconnected from the colonyNetwork codebase (stored in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/tree/develop/contracts/extensions"},"/contracts/extensions")," folder in the network) to allow for greater design flexibility unbounded by the network protocol."),(0,i.kt)("p",null,"Currently there are four extensions 'officially' supported, but more may be added in the future. These extensions are written with dapp support in mind, and emit events to inform a user interface whether a colony has an extension enabled or not. Adding and removing an extension from a colony is restricted to those with ",(0,i.kt)("inlineCode",{parentName:"p"},"Root")," permissions on the colony."),(0,i.kt)("p",null,'To support easily installation and upgrading of extensions, the Colony Network maintains a repository of "official" extensions. These extensions can be installed, upgraded, deprecated, and uninstalled through the colony itself by Root users.'),(0,i.kt)("p",null,"For example, to enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"OneTxPayment")," extension on a ",(0,i.kt)("inlineCode",{parentName:"p"},"colony")," instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"IColony"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'const extensionId = soliditySha3("FundingQueue");\nawait colony.deployExtension(extensionId, 3); // Install version 3\n\nconst extensionAddress = await colonyNetwork.getExtensionInstallation(oneTxExtensionId, colony.address);\nconst oneTxExtension = await OneTxPayment.at(extensionAddress);\n')),(0,i.kt)("p",null,"Once the extension is setup, it will need the ",(0,i.kt)("inlineCode",{parentName:"p"},"Administration")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Funding")," permission in at least one domain in your colony to function. Permissions can be given is any domain you require the extension to work in, here is an example of permitting it those in the root with domainId 1."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"await colony.setFundingRole(1, UINT256_MAX, oneTxExtension.address, 1, true);\nawait colony.setAdministrationRole(1, UINT256_MAX, oneTxExtension.address, 1, true);\n")),(0,i.kt)("h2",{id:"coinmachine"},"CoinMachine"),(0,i.kt)("p",null,"A simple mechanism for continually selling tokens (",(0,i.kt)("a",{parentName:"p",href:"https://blog.colony.io/introducing-coin-machine/"},"blog post"),")."),(0,i.kt)("p",null,"Must be able to mint tokens, so requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"Root")," permission."),(0,i.kt)("h2",{id:"onetxpayment"},"OneTxPayment"),(0,i.kt)("p",null,"Ordinarily payments require more than one transaction, because the payment lifecycle requires more than one permissioned ",(0,i.kt)("a",{parentName:"p",href:"../tldr/permissions"},"role"),"."),(0,i.kt)("p",null,"In some use cases, there might be a need for one authorized individual to be able to create, funds, and finalize a payment within a single transaction."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OneTxPayment")," extension adds this functionality by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"makePayment")," function which requires the caller to have ",(0,i.kt)("em",{parentName:"p"},"both")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Funding")," and administration ability within the domain of the payment."),(0,i.kt)("p",null,"Extension therefore requires ",(0,i.kt)("inlineCode",{parentName:"p"},"Administration")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Funding")," roles to function."),(0,i.kt)("h2",{id:"votingreputation"},"VotingReputation"),(0,i.kt)("p",null,"Colony's basic decentralized decision-making mechanism. Allows participants to create, support, and pass motions encoding arbitrary transactions."),(0,i.kt)("p",null,"Requires different permissions depending on usage, as the extension must be able to execute the encoded action."),(0,i.kt)("h2",{id:"whitelist"},"Whitelist"),(0,i.kt)("p",null,"Alongside the Coin Machine Extension, a colony may use the Whitelist extension to filter wallet addresses allowed to take part in a token sale on Coin Machine."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/extensions/whitelist"},"here")," for more information."))}d.isMDXComponent=!0}}]);