"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),m=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const o={description:"How to create teams in Colony.",sidebar_position:4},i="Create & Edit Teams",s={unversionedId:"use/teams/create-team",id:"use/teams/create-team",title:"Create & Edit Teams",description:"How to create teams in Colony.",source:"@site/colony/use/teams/create-team.md",sourceDirName:"use/teams",slug:"/use/teams/create-team",permalink:"/next/use/teams/create-team",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/teams/create-team.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"How to create teams in Colony.",sidebar_position:4},sidebar:"use",previous:{title:"Managing Permissions in Teams",permalink:"/next/use/teams/permissions"},next:{title:"Governance",permalink:"/next/use/governance/"}},c={},m=[{value:"Create New Team",id:"create-new-team",level:3},{value:"<strong>Edit Team</strong>",id:"edit-team",level:3}],p={toc:m};function l(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create--edit-teams"},"Create & Edit Teams"),(0,r.kt)("p",null,"A colony is structured like a traditional organization: in ",(0,r.kt)("strong",{parentName:"p"},"Teams"),"."),(0,r.kt)("p",null,"You'll always find ",(0,r.kt)("strong",{parentName:"p"},"Root"),', which is the "colony-wide team". You can decide to create as many teams as you wish, each representing a different area of your organization.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Currently, you cannot create sub-teams, or delete teams.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of a Colony structure.",src:a(8989).Z,width:"374",height:"512"})),(0,r.kt)("h3",{id:"create-new-team"},"Create New Team"),(0,r.kt)("p",null,"To create a new Team, navigate to ",(0,r.kt)("strong",{parentName:"p"},"New Action > Manage Teams > Create New Team")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"How to create a new team in Colony.",src:a(9823).Z,width:"2878",height:"1634"})),(0,r.kt)("p",null,"You can decide the ",(0,r.kt)("strong",{parentName:"p"},"Team")," name, define its purpose, and explain why you are creating it. You can change a Team's details later, but ",(0,r.kt)("strong",{parentName:"p"},"you cannot delete a Team.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/next/use/teams/permissions#architecture"},"Architecture")," or ",(0,r.kt)("a",{parentName:"p",href:"/next/use/teams/permissions#root"},"Root")," permissions are needed to create teams.")),(0,r.kt)("h3",{id:"edit-team"},(0,r.kt)("strong",{parentName:"h3"},"Edit Team")),(0,r.kt)("p",null,"To make changes to a Team name & description, navigate to ",(0,r.kt)("strong",{parentName:"p"},"New Action > Manage Teams > Edit Teams")," to change the Team name & description."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"How to edit teams in Colony.",src:a(3787).Z,width:"2878",height:"1636"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/next/use/teams/permissions#architecture"},"Architecture")," or ",(0,r.kt)("a",{parentName:"p",href:"/next/use/teams/permissions#root"},"Root")," permissions are needed to edit teams.")))}l.isMDXComponent=!0},8989:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Domains-2-1-12b0d7f80efd3ed83e2383452d46cc4c.png"},3787:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EditTeam-c6ebab6f15f1b0760d9c309fdc898c10.gif"},9823:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/NewTeam-53f3d6458b47da0a4b85954e0ab424f8.gif"}}]);