"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,c=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(c,i(i({ref:t},h),{},{components:n})):o.createElement(c,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={description:"The Parameters required when setting up this Extension and their Default Values.",sidebar_position:2},i="Parameters",s={unversionedId:"use/governance/motions-and-disputes/parameters",id:"use/governance/motions-and-disputes/parameters",title:"Parameters",description:"The Parameters required when setting up this Extension and their Default Values.",source:"@site/colony/use/governance/motions-and-disputes/parameters.md",sourceDirName:"use/governance/motions-and-disputes",slug:"/use/governance/motions-and-disputes/parameters",permalink:"/next/use/governance/motions-and-disputes/parameters",draft:!1,editUrl:"https://github.com/JoinColony/docs/edit/main/colony/use/governance/motions-and-disputes/parameters.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"The Parameters required when setting up this Extension and their Default Values.",sidebar_position:2},sidebar:"use",previous:{title:"Installation",permalink:"/next/use/governance/motions-and-disputes/installation"},next:{title:"Creating a Motion",permalink:"/next/use/governance/motions-and-disputes/creating-a-motion"}},l={},u=[{value:"Required Stake",id:"required-stake",level:3},{value:"Voter Reward",id:"voter-reward",level:3},{value:"Minimum Stake",id:"minimum-stake",level:3},{value:"End Vote Threshold",id:"end-vote-threshold",level:3},{value:"Staking Phase Duration",id:"staking-phase-duration",level:3},{value:"Voting Phase Duration",id:"voting-phase-duration",level:3},{value:"Reveal Phase Duration",id:"reveal-phase-duration",level:3},{value:"Escalation Phase Duration",id:"escalation-phase-duration",level:3}],h={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"To use Governance, it must first be enabled. Enabling this extension requires that you set some additional parameters. These parameters cannot be changed after enabling it. To do so, you must uninstall the extension, and then install and enable it again with new parameters. Note that uninstalling the extension results in all Motions being lost."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you intend to set up a colony ",(0,a.kt)("strong",{parentName:"p"},"for testing purposes only"),", you may want to adjust some of the default settings in order to speed up some processes while testing in real-time with other users, such as on a call. ",(0,a.kt)("em",{parentName:"p"},'For that purpose, we recommend setting the "End Vote Threshold" to 50% and the duration of all four phases to 0.1 hours.')," For asynchronous testing and a more realistic experience, you may want to stick the default values listed below.")),(0,a.kt)("h3",{id:"required-stake"},"Required Stake"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What percentage of the team\u2019s reputation, in token terms, should need to stake on each side of a motion?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value: 1%")),(0,a.kt)("p",null,"E.g., if a team has 100 reputation points between them, and the Required Stake is 1%, then 1 token would need to be staked to either support or object to a motion."),(0,a.kt)("h3",{id:"voter-reward"},"Voter Reward"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"In a dispute, what percentage of the losing side\u2019s stake should be awarded to the voters?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value: 20%")),(0,a.kt)("p",null,"E.g., if both the colony members who create a motion, and the colony members who raise an objection stake 50 tokens, and the Voter Reward is 20%, then the voters will share 20 tokens between them, proportional to their reputations (i.e. 20% of the combined stake of both side of the dispute).\\\n\\\nFor unbalanced voting outcomes the reward calculation is on a linear scale between 0 and 100% of the defined Voter Reward. The remainder will be shared between the stakers proportional to the outcome of the vote. The calculation for this is: \\\n\\\n",(0,a.kt)("em",{parentName:"p"},"rewardFactor = (2 ","*"," Winning Votes Count / (Winning Votes Count + Losing Votes Count)) - 1"),"\\\n",(0,a.kt)("em",{parentName:"p"},"totalReward = rewardFactor ","*"," Voter Reward Value")),(0,a.kt)("h3",{id:"minimum-stake"},"Minimum Stake"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"What is the minimum percentage of the total stake that each staker should have to provide?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value: 1%")),(0,a.kt)("p",null,"E.g., 1% means anybody who wishes to stake must provide at least 1% of the Required Stake. 100% means that one person must provide the entire stake."),(0,a.kt)("h3",{id:"end-vote-threshold"},"End Vote Threshold"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"At what threshold of reputation having voted should the voting period to end?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value: 70%")),(0,a.kt)("p",null,"E.g., If the End Vote Threshold is 70%, then the voting period will end as soon as 70% of the reputation in a team has cast their vote. This helps votes get settled faster. If you want to ensure everyone gets to vote if they want to, set the value to 100%."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 50%.")),(0,a.kt)("h3",{id:"staking-phase-duration"},"Staking Phase Duration"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How long do you want to allow each side of a motion to get staked?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value: 72 hours")),(0,a.kt)("p",null,"E.g., if the staking phase is 72 hours, then once a motion is created members will have 72 hours to provide the full stake required to back the motion. If the motion does not receive the full stake in 72 hours, it will fail. Once the motion has been fully staked, the staking period will reset and members will have a further 72 hours in which to \u201cObject\u201d by staking against the motion if they wish to take the decision to a vote. If the full stake for the objection is not staked, then the motion will automatically pass."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 0.1 hours.")),(0,a.kt)("h3",{id:"voting-phase-duration"},"Voting Phase Duration"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How long do you want to give members to cast their votes?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value: 72 hours")),(0,a.kt)("p",null,"E.g., if the vote duration is 72 hours, then after both sides of the motion are fully staked, members with reputation in the team will have 72 hours in which to vote, unless the \u201cEnd Vote Threshold\u201d is reached, in which case the vote will end early."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 0.1 hours.")),(0,a.kt)("h3",{id:"reveal-phase-duration"},"Reveal Phase Duration"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How long do you want to give members to reveal their votes?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value: 72 hours")),(0,a.kt)("p",null,"E.g., votes in colony are secret while the vote is ongoing, and so must be revealed once votes have been cast. If the reveal phase is 72 hours long, then members will have 72 hours to reveal their votes, otherwise their votes will not be counted and they will not receive a share of the voter reward. If all votes are revealed before the end of the reveal phase, then the reveal phase will end."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 0.1 hours.")),(0,a.kt)("h3",{id:"escalation-phase-duration"},"Escalation Phase Duration"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How long do you wish to allow for members to escalate a dispute to a higher team?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Default value: 72 hours")),(0,a.kt)("p",null,"E.g., if the escalation phase is 72 hours, once the outcome of a vote is known, if the loser feels the outcome was for any reason incorrect, then they will have 72 hours in which to escalate the dispute to a higher team in the colony by increasing the stake to meet the required stake of that higher team."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For testing purposes, we recommend a value of 0.1 hours.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please note that Dispute escalation is not yet supported.")))}p.isMDXComponent=!0}}]);