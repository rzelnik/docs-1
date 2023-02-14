"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=m(n),k=r,c=u["".concat(o,".").concat(k)]||u[k]||p[k]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={},l="One Transaction Payment Extension (`OneTxPayment`)",d={unversionedId:"interfaces/extensions/onetxpayment",id:"interfaces/extensions/onetxpayment",title:"One Transaction Payment Extension (`OneTxPayment`)",description:"Ordinarily payments require more than one transaction, because the payment lifecycle requires more than one permissioned role.",source:"@site/vendor/colonyNetwork/docs/interfaces/extensions/onetxpayment.md",sourceDirName:"interfaces/extensions",slug:"/interfaces/extensions/onetxpayment",permalink:"/colonynetwork/interfaces/extensions/onetxpayment",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Funding Queue (`FundingQueue`)",permalink:"/colonynetwork/interfaces/extensions/fundingqueue"},next:{title:"Staked Expenditure (`StakedExpenditure`)",permalink:"/colonynetwork/interfaces/extensions/stakedexpenditure"}},o={},m=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <code>deprecate(bool _deprecated)</code>",id:"-deprecatebool-_deprecated",level:3},{value:"\u25b8 <code>finishUpgrade()</code>",id:"-finishupgrade",level:3},{value:"\u25b8 <code>getCapabilityRoles(bytes4 _sig):bytes32 _roles</code>",id:"-getcapabilityrolesbytes4-_sigbytes32-_roles",level:3},{value:"\u25b8 <code>getMetatransactionNonce(address userAddress):uint256 nonce</code>",id:"-getmetatransactionnonceaddress-useraddressuint256-nonce",level:3},{value:"\u25b8 <code>identifier():bytes32 _identifier</code>",id:"-identifierbytes32-_identifier",level:3},{value:"\u25b8 <code>install(address _colony)</code>",id:"-installaddress-_colony",level:3},{value:"\u25b8 <code>makePayment(uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _callerPermissionDomainId, uint256 _callerChildSkillIndex, address[] memory _workers, address[] memory _tokens, uint256[] memory _amounts, uint256 _domainId, uint256 _skillId)</code>",id:"-makepaymentuint256-_permissiondomainid-uint256-_childskillindex-uint256-_callerpermissiondomainid-uint256-_callerchildskillindex-address-memory-_workers-address-memory-_tokens-uint256-memory-_amounts-uint256-_domainid-uint256-_skillid",level:3},{value:"\u25b8 <code>makePaymentFundedFromDomain(uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _callerPermissionDomainId, uint256 _callerChildSkillIndex, address[] memory _workers, address[] memory _tokens, uint256[] memory _amounts, uint256 _domainId, uint256 _skillId)</code>",id:"-makepaymentfundedfromdomainuint256-_permissiondomainid-uint256-_childskillindex-uint256-_callerpermissiondomainid-uint256-_callerchildskillindex-address-memory-_workers-address-memory-_tokens-uint256-memory-_amounts-uint256-_domainid-uint256-_skillid",level:3},{value:"\u25b8 <code>uninstall()</code>",id:"-uninstall",level:3},{value:"\u25b8 <code>version():uint256 _version</code>",id:"-versionuint256-_version",level:3}],s={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"one-transaction-payment-extension-onetxpayment"},"One Transaction Payment Extension (",(0,r.kt)("inlineCode",{parentName:"h1"},"OneTxPayment"),")"),(0,r.kt)("p",null,"Ordinarily payments require more than one transaction, because the payment lifecycle requires more than one permissioned ",(0,r.kt)("a",{parentName:"p",href:"/colonynetwork/tldr/permissions"},"role"),"."),(0,r.kt)("p",null,"In some use cases, there might be a need for one authorized individual to be able to create, funds, and finalize a payment within a single transaction."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OneTxPayment")," extension adds this functionality by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"makePayment")," function which requires the caller to have ",(0,r.kt)("em",{parentName:"p"},"both")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Funding")," and administration ability within the domain of the payment."),(0,r.kt)("p",null,"Extension therefore requires ",(0,r.kt)("inlineCode",{parentName:"p"},"Administration")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Funding")," roles to function."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: if you deployed your Colony using the Dapp, the ",(0,r.kt)("inlineCode",{parentName:"em"},"OneTxPayment")," extension is already installed for you")),(0,r.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,r.kt)("h3",{id:"-deprecatebool-_deprecated"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"deprecate(bool _deprecated)")),(0,r.kt)("p",null,"Called when deprecating (or undeprecating) the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_deprecated"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the extension should be deprecated or undeprecated")))),(0,r.kt)("h3",{id:"-finishupgrade"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"finishUpgrade()")),(0,r.kt)("p",null,"Called when upgrading the extension"),(0,r.kt)("h3",{id:"-getcapabilityrolesbytes4-_sigbytes32-_roles"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"getCapabilityRoles(bytes4 _sig):bytes32 _roles")),(0,r.kt)("p",null,"Return the permissions required for each function"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_sig"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes4"),(0,r.kt)("td",{parentName:"tr",align:null},"The function signature")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_roles"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"The byte32 of permissions required")))),(0,r.kt)("h3",{id:"-getmetatransactionnonceaddress-useraddressuint256-nonce"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"getMetatransactionNonce(address userAddress):uint256 nonce")),(0,r.kt)("p",null,"Gets the next nonce for a meta-transaction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's address")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The nonce")))),(0,r.kt)("h3",{id:"-identifierbytes32-_identifier"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"identifier():bytes32 _identifier")),(0,r.kt)("p",null,"Returns the identifier of the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"The extension's identifier")))),(0,r.kt)("h3",{id:"-installaddress-_colony"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"install(address _colony)")),(0,r.kt)("p",null,"Configures the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_colony"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The colony in which the extension holds permissions")))),(0,r.kt)("h3",{id:"-makepaymentuint256-_permissiondomainid-uint256-_childskillindex-uint256-_callerpermissiondomainid-uint256-_callerchildskillindex-address-memory-_workers-address-memory-_tokens-uint256-memory-_amounts-uint256-_domainid-uint256-_skillid"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"makePayment(uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _callerPermissionDomainId, uint256 _callerChildSkillIndex, address[] memory _workers, address[] memory _tokens, uint256[] memory _amounts, uint256 _domainId, uint256 _skillId)")),(0,r.kt)("p",null,"Completes a colony payment in a single transaction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Assumes that each entity holds administration and funding roles in the root domain")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_permissionDomainId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The domainId in which the ",(0,r.kt)("em",{parentName:"td"},"contract")," has permissions to add a payment and fund it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_childSkillIndex"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the _permissionDomainId skill.children array to get")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_callerPermissionDomainId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The domainId in which the ",(0,r.kt)("em",{parentName:"td"},"caller")," has the administration permission (must have funding in root)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_callerChildSkillIndex"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the _callerPermissionDomainId skill.children array to get")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_workers"),(0,r.kt)("td",{parentName:"tr",align:null},"address[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The addresses of the recipients of the payment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"address[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Addresses of the tokens the payments are being made in. 0x00 for Ether.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_amounts"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256[]"),(0,r.kt)("td",{parentName:"tr",align:null},"amounts of the tokens being paid out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_domainId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The domainId the payment should be coming from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_skillId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The skillId that the payment should be marked with, possibly awarding reputation in this skill.")))),(0,r.kt)("h3",{id:"-makepaymentfundedfromdomainuint256-_permissiondomainid-uint256-_childskillindex-uint256-_callerpermissiondomainid-uint256-_callerchildskillindex-address-memory-_workers-address-memory-_tokens-uint256-memory-_amounts-uint256-_domainid-uint256-_skillid"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"makePaymentFundedFromDomain(uint256 _permissionDomainId, uint256 _childSkillIndex, uint256 _callerPermissionDomainId, uint256 _callerChildSkillIndex, address[] memory _workers, address[] memory _tokens, uint256[] memory _amounts, uint256 _domainId, uint256 _skillId)")),(0,r.kt)("p",null,"Completes a colony payment in a single transaction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: Assumes that each entity holds administration and funding roles in the same domain,   although contract and caller can have the permissions in different domains. Payment is taken from domain funds - if the domain does not have sufficient funds, call will fail.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_permissionDomainId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The domainId in which the ",(0,r.kt)("em",{parentName:"td"},"contract")," has permissions to add a payment and fund it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_childSkillIndex"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the _permissionDomainId skill.children array to get")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_callerPermissionDomainId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The domainId in which the ",(0,r.kt)("em",{parentName:"td"},"caller")," has permissions to add a payment and fund it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_callerChildSkillIndex"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"Index of the _callerPermissionDomainId skill.children array to get")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_workers"),(0,r.kt)("td",{parentName:"tr",align:null},"address[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The addresses of the recipients of the payment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"address[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The addresses of the token the payments are being made in. 0x00 for Ether.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_amounts"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256[]"),(0,r.kt)("td",{parentName:"tr",align:null},"The amounts of the tokens being paid out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_domainId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The domainId the payment should be coming from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_skillId"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The skillId that the payment should be marked with, possibly awarding reputation in this skill.")))),(0,r.kt)("h3",{id:"-uninstall"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"uninstall()")),(0,r.kt)("p",null,"Called when uninstalling the extension"),(0,r.kt)("h3",{id:"-versionuint256-_version"},"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"h3"},"version():uint256 _version")),(0,r.kt)("p",null,"Returns the version of the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_version"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The extension's version number")))))}p.isMDXComponent=!0}}]);