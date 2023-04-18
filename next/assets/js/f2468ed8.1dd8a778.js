"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const l={description:"Structure and Architecture of the Colony Network Files",sidebar_position:0},r="Overview",i={unversionedId:"concepts/overview",id:"concepts/overview",title:"Overview",description:"Structure and Architecture of the Colony Network Files",source:"@site/vendor/colonyNetwork/docs/concepts/overview.md",sourceDirName:"concepts",slug:"/concepts/overview",permalink:"/next/colonynetwork/concepts/overview",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/concepts/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{description:"Structure and Architecture of the Colony Network Files",sidebar_position:0},sidebar:"sidebar",previous:{title:"Concepts",permalink:"/next/colonynetwork/concepts/"},next:{title:"Extensions",permalink:"/next/colonynetwork/concepts/extensions"}},s={},p=[{value:"Smart Contracts Architecture",id:"smart-contracts-architecture",level:2},{value:"Logic Entities",id:"logic-entities",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The colonyNetwork repository is developed as free software; if you are interested in contributing, or want to report an issue or bug, please see the")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork"},(0,a.kt)("em",{parentName:"a"},"GitHub repository."))),(0,a.kt)("p",null,"The Colony Network is a large set of contracts that together define how all colonies operate and interact with people and other smart contracts on the Ethereum blockchain."),(0,a.kt)("p",null,"Colony is designed to be modular, upgradable, and eternally backwards-compatible. This is achieved through a sophisticated contract architecture that requires a bit of exposition. It is recommended that any developer seeking to understand the Colony Network solidity implementation first read the ",(0,a.kt)("a",{parentName:"p",href:"https://colony.io/whitepaper.pdf"},"Colony White Paper"),", or at the very least, the ",(0,a.kt)("a",{parentName:"p",href:"../tldr/"},"White Paper TL;DR"),"."),(0,a.kt)("h2",{id:"smart-contracts-architecture"},"Smart Contracts Architecture"),(0,a.kt)("p",null,"The Colony Network contracts are separated out into four functional layers, and four logical entities outlined below. This design is to an extent mandated by the ",(0,a.kt)("a",{parentName:"p",href:"/next/colonynetwork/concepts/upgrades"},"contract upgrade mechanism")," we use."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Interface, Logic, Data",src:n(2944).Z,width:"438",height:"362"})," Starting from the layer closes to the user:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Interface layer")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IColony.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IMetaColony.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IColonyNetwork.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IReputationMiningCycle.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ITokenLocking.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IRecovery.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IEtherRouter.sol"))),(0,a.kt)("p",null,"All public and external functions from the logic contracts for an entity are composed into a single interface. For example the Colony interface - ",(0,a.kt)("inlineCode",{parentName:"p"},"IColony.sol")," is a superset of the public and external functions from the logic contracts for a Colony entity, i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"Colony.sol"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyFunding.sol"),", etc."),(0,a.kt)("p",null,"This layer represents the Colony Network API, documented in the ",(0,a.kt)("a",{parentName:"p",href:"../interfaces"},"Interface section")," of the documentation."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Logic layer")),(0,a.kt)("p",null,"All function declarations live in this layer, which constitutes the majority of the colonyNetwork code. Functions that implement a feature or set of related actions are grouped together into a single contract. There are often several logic contracts representing a single logical entity."),(0,a.kt)("p",null,"For example, the logic for a colony is distributed across ",(0,a.kt)("inlineCode",{parentName:"p"},"Colony.sol"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyFunding.sol"),", and so on. Likewise for the ColonyNetwork and ReputationMiningCycle entities."),(0,a.kt)("p",null,"Note that this logic distribution is possible due to the ",(0,a.kt)("a",{parentName:"p",href:"/next/colonynetwork/concepts/upgrades"},"contract upgrade mechanism"),", in which all functions are called from the same underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"EtherRouter")," delegate proxy instance, regardless of where they are implemented."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Access layer")),(0,a.kt)("p",null,"Access management in the network is handled by a group of contracts that underpin all of the application layers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CommonAuthority.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyAuthority.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyNetworkAuthority.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DomainRoles.sol"))),(0,a.kt)("p",null,"These are based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"DSRoles")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DSAuth")," implementations from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dapphub/dappsys-monolithic"},"dappsys library of contracts"),'. For a full list of these contracts, see the "Roles and Authority" point below. Also see the ',(0,a.kt)("a",{parentName:"p",href:"/next/colonynetwork/tldr/permissions"},"modular permissions section")," for design details."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data Layer")),(0,a.kt)("p",null,"Data structures, enums, constants and events are declared in a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"*DataTypes.sol")," contract, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyDataTypes.sol"),"."),(0,a.kt)("p",null,"For clarity, all storage variables are held separately in a ",(0,a.kt)("inlineCode",{parentName:"p"},"*Storage.sol")," contract, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ColonyStorage.sol"),". Storage variable declaration ordering is crucial to be maintained; network upgrades and recovery depend on a consistent and clear storage layout. All variables are commented with slot numbers to support developers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Integrations")," Colony supports an ENS integration, which defines a custom ENS registry for use with colonies and the Colony Network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENS.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ENSRegistry.sol"))),(0,a.kt)("p",null,"Colony also supports the creation of extension contracts for use with other smart contracts or dapps. There are four officially supported extensions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CoinMachine.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FundingQueue.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OneTxPayment.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VotingReputation.sol"))),(0,a.kt)("h2",{id:"logic-entities"},"Logic Entities"),(0,a.kt)("p",null,"Broadly speaking, the Colony Network can be divided into four logical entities:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Colony")),(0,a.kt)("p",null,"Defines the state of an individual colony, such as funding pots, tasks, domains, and skills."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Colony.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyFunding.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyStaking.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyExpenditure.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyPayment.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyTask.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyStorage.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyDataTypes.sol"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Colony Network")),(0,a.kt)("p",null,"Defines a global state shared by all colonies, such as reputation, token auctions and ENS."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyNetwork.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyNetworkAuction.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyNetworkENS.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyNetworkMining.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyNetworkStorage.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ColonyNetworkDataTypes.sol"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reputation Mining Cycle")),(0,a.kt)("p",null,"Define a consensus protocol for validators of the global reputation state."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ReputationMiningCycle.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ReputationMiningCycleRespond.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ReputationMiningCycleStorage.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ReputationMiningCycleDataTypes.sol"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Token locking")),(0,a.kt)("p",null,"Allowing witholding access to deposited tokens from all colonies in the network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TokenLocking.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TokenLockingStorage.sol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TokenLockingDataTypes.sol"))))}u.isMDXComponent=!0},2944:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/colonyNetwork_diagram_r12-53b2bb69d3410aca15f462fef5d42a36.png"}}]);