"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6776],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,g=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(g,s(s({ref:e},d),{},{components:a})):n.createElement(g,s({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2377:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},s="Whitelist Extension (`Whitelist`)",o={unversionedId:"colonynetwork/interfaces/whitelist",id:"colonynetwork/interfaces/whitelist",title:"Whitelist Extension (`Whitelist`)",description:"Alongside the Coin Machine Extension, a colony may use the Whitelist extension to filter wallet addresses allowed to take part in a token sale on Coin Machine.",source:"@site/docs/colonynetwork/interfaces/whitelist.md",sourceDirName:"colonynetwork/interfaces",slug:"/colonynetwork/interfaces/whitelist",permalink:"/docs/colonynetwork/interfaces/whitelist",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/interfaces/whitelist.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Motions & Disputes Extension (`VotingReputation`)",permalink:"/docs/colonynetwork/interfaces/votingreputation"},next:{title:"Contributing",permalink:"/docs/colonynetwork/contributing"}},i={},p=[{value:"Interface Methods",id:"interface-methods",level:2},{value:"\u25b8 <strong><code>approveUsers(address[] memory _users, bool _status)</code></strong>",id:"-approveusersaddress-memory-_users-bool-_status",level:3},{value:"\u25b8 <strong><code>deprecate(bool _deprecated)</code></strong>",id:"-deprecatebool-_deprecated",level:3},{value:"\u25b8 <strong><code>finishUpgrade()</code></strong>",id:"-finishupgrade",level:3},{value:"\u25b8 <strong><code>getAgreementHash():string hash</code></strong>",id:"-getagreementhashstring-hash",level:3},{value:"\u25b8 <strong><code>getApproval(address _user):bool status</code></strong>",id:"-getapprovaladdress-_userbool-status",level:3},{value:"\u25b8 <strong><code>getMetatransactionNonce(address userAddress):uint256 nonce</code></strong>",id:"-getmetatransactionnonceaddress-useraddressuint256-nonce",level:3},{value:"\u25b8 <strong><code>getSignature(address _user):bool status</code></strong>",id:"-getsignatureaddress-_userbool-status",level:3},{value:"\u25b8 <strong><code>getUseApprovals():bool useApprovals</code></strong>",id:"-getuseapprovalsbool-useapprovals",level:3},{value:"\u25b8 <strong><code>identifier():bytes32 identifier</code></strong>",id:"-identifierbytes32-identifier",level:3},{value:"\u25b8 <strong><code>initialise(bool _useApprovals, string memory _agreementHash)</code></strong>",id:"-initialisebool-_useapprovals-string-memory-_agreementhash",level:3},{value:"\u25b8 <strong><code>install(address _colony)</code></strong>",id:"-installaddress-_colony",level:3},{value:"\u25b8 <strong><code>isApproved(address _user):bool approved</code></strong>",id:"-isapprovedaddress-_userbool-approved",level:3},{value:"\u25b8 <strong><code>signAgreement(string memory _agreementHash)</code></strong>",id:"-signagreementstring-memory-_agreementhash",level:3},{value:"\u25b8 <strong><code>uninstall()</code></strong>",id:"-uninstall",level:3},{value:"\u25b8 <strong><code>version():uint256 version</code></strong>",id:"-versionuint256-version",level:3}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whitelist-extension-whitelist"},"Whitelist Extension (",(0,r.kt)("inlineCode",{parentName:"h1"},"Whitelist"),")"),(0,r.kt)("p",null,"Alongside the Coin Machine Extension, a colony may use the Whitelist extension to filter wallet addresses allowed to take part in a token sale on Coin Machine."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://colony.gitbook.io/colony/extensions/whitelist"},"here")," for more information."),(0,r.kt)("h2",{id:"interface-methods"},"Interface Methods"),(0,r.kt)("h3",{id:"-approveusersaddress-memory-_users-bool-_status"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"approveUsers(address[] memory _users, bool _status)"))),(0,r.kt)("p",null,"Sets user statuses in the whitelist"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_users"),(0,r.kt)("td",{parentName:"tr",align:null},"address[]"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of user addresses")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_status"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"The whitelist status to set")))),(0,r.kt)("h3",{id:"-deprecatebool-_deprecated"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"deprecate(bool _deprecated)"))),(0,r.kt)("p",null,"Called when deprecating (or undeprecating) the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_deprecated"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the extension should be deprecated or undeprecated")))),(0,r.kt)("h3",{id:"-finishupgrade"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"finishUpgrade()"))),(0,r.kt)("p",null,"Called when upgrading the extension"),(0,r.kt)("h3",{id:"-getagreementhashstring-hash"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getAgreementHash():string hash"))),(0,r.kt)("p",null,"Get the agreementHash"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The agreement hash")))),(0,r.kt)("h3",{id:"-getapprovaladdress-_userbool-status"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getApproval(address _user):bool status"))),(0,r.kt)("p",null,"Get the user's approval status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_user"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the user")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's approval status")))),(0,r.kt)("h3",{id:"-getmetatransactionnonceaddress-useraddressuint256-nonce"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getMetatransactionNonce(address userAddress):uint256 nonce"))),(0,r.kt)("p",null,"Gets the next nonce for a meta-transaction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's address")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nonce"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The nonce")))),(0,r.kt)("h3",{id:"-getsignatureaddress-_userbool-status"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getSignature(address _user):bool status"))),(0,r.kt)("p",null,"Get the user's signature status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_user"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the user")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"The user's signature status")))),(0,r.kt)("h3",{id:"-getuseapprovalsbool-useapprovals"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"getUseApprovals():bool useApprovals"))),(0,r.kt)("p",null,"Get the useApprovals boolean"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useApprovals"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether ",(0,r.kt)("inlineCode",{parentName:"td"},"useApprovals")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"-identifierbytes32-identifier"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"identifier():bytes32 identifier"))),(0,r.kt)("p",null,"Returns the identifier of the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes32"),(0,r.kt)("td",{parentName:"tr",align:null},"The extension's identifier")))),(0,r.kt)("h3",{id:"-initialisebool-_useapprovals-string-memory-_agreementhash"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"initialise(bool _useApprovals, string memory _agreementHash)"))),(0,r.kt)("p",null,"Initialise the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_useApprovals"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not to require administrative approval")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_agreementHash"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An agreement hash (such as an IPFS URI)")))),(0,r.kt)("h3",{id:"-installaddress-_colony"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"install(address _colony)"))),(0,r.kt)("p",null,"Configures the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_colony"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The colony in which the extension holds permissions")))),(0,r.kt)("h3",{id:"-isapprovedaddress-_userbool-approved"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"isApproved(address _user):bool approved"))),(0,r.kt)("p",null,"Get the user's overall whitelist status"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_user"),(0,r.kt)("td",{parentName:"tr",align:null},"address"),(0,r.kt)("td",{parentName:"tr",align:null},"The address of the user")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"approved"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," when the user is approved")))),(0,r.kt)("h3",{id:"-signagreementstring-memory-_agreementhash"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"signAgreement(string memory _agreementHash)"))),(0,r.kt)("p",null,"The user's signature on the agreement"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_agreementHash"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The agreement hash being signed")))),(0,r.kt)("h3",{id:"-uninstall"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"uninstall()"))),(0,r.kt)("p",null,"Called when uninstalling the extension"),(0,r.kt)("h3",{id:"-versionuint256-version"},"\u25b8 ",(0,r.kt)("strong",{parentName:"h3"},(0,r.kt)("inlineCode",{parentName:"strong"},"version():uint256 version"))),(0,r.kt)("p",null,"Returns the version of the extension"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"uint256"),(0,r.kt)("td",{parentName:"tr",align:null},"The extension's version number")))))}m.isMDXComponent=!0}}]);