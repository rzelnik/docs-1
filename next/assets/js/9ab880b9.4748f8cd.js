"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9441],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(o),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return o?i.createElement(h,a(a({ref:t},d),{},{components:o})):i.createElement(h,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<r;u++)a[u]=o[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}c.displayName="MDXCreateElement"},1479:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=o(7462),n=(o(7294),o(3905));const r={description:"The Colony Network Bug Bounty Program",sidebar_position:7},a="Bug Bounty Program",l={unversionedId:"bug-bounty",id:"bug-bounty",title:"Bug Bounty Program",description:"The Colony Network Bug Bounty Program",source:"@site/vendor/colonyNetwork/docs/bug-bounty.md",sourceDirName:".",slug:"/bug-bounty",permalink:"/next/colonynetwork/bug-bounty",draft:!1,editUrl:"https://github.com/JoinColony/colonyNetwork/edit/develop/docs/bug-bounty.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"The Colony Network Bug Bounty Program",sidebar_position:7},sidebar:"sidebar",previous:{title:"Contributing",permalink:"/next/colonynetwork/contributing"}},s={},u=[{value:"Scope",id:"scope",level:2},{value:"Rules",id:"rules",level:2},{value:"Submission Guidelines",id:"submission-guidelines",level:3},{value:"Submission Branches",id:"submission-branches",level:3},{value:"Bug Severity and Bounties",id:"bug-severity-and-bounties",level:3},{value:"Ineligible Bugs",id:"ineligible-bugs",level:3},{value:"Eligibility and Participation Requirements",id:"eligibility-and-participation-requirements",level:2},{value:"Good Faith Participation",id:"good-faith-participation",level:3},{value:"Service Level Agreement",id:"service-level-agreement",level:2},{value:"Limitation of Liability",id:"limitation-of-liability",level:3},{value:"Ineligible Persons",id:"ineligible-persons",level:3},{value:"Additional Terms",id:"additional-terms",level:3},{value:"1. Definitions",id:"1-definitions",level:3},{value:"1.1 &quot;Bounty&quot;, &quot;Prize&quot;, &quot;Payout&quot;, &quot;Reward&quot;",id:"11-bounty-prize-payout-reward",level:3},{value:"1.2 &quot;Bug&quot;, &quot;Vulnerability&quot;, &quot;Exploit&quot;, &quot;Bug Report&quot;, &quot;Bug Report Issue&quot;",id:"12-bug-vulnerability-exploit-bug-report-bug-report-issue",level:3},{value:"1.4 &quot;Colony&quot;",id:"14-colony",level:3},{value:"1.7 &quot;Submitter&quot;, or &quot;Participant&quot;",id:"17-submitter-or-participant",level:3}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bug-bounty-program"},"Bug Bounty Program"),(0,n.kt)("p",null,"The Colony Network is a set of smart contracts designed to manage shared resources of multiple individuals in a secure and predictable manner. These digital assets could be of great value; it is therefore imperative that the system behaves as the Bagginses did before Bilbo: without ever doing anything unexpected."),(0,n.kt)("p",null,"To this end, Colony is offering substantial rewards to external developers who report bugs and flaws in the colonyNetwork contracts (",(0,n.kt)("a",{parentName:"p",href:"/next/colonynetwork/bug-bounty#service-level-agreement"},"terms apply"),")."),(0,n.kt)("p",null,"This bug bounty does ",(0,n.kt)("em",{parentName:"p"},"not")," apply to Colony tools such as Purser. See ",(0,n.kt)("a",{parentName:"p",href:"#ineligible-bugs"},"Ineligible bugs")," for more information."),(0,n.kt)("h2",{id:"scope"},"Scope"),(0,n.kt)("p",null,"This bug bounty program extends to all contracts within the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork"},"colonyNetwork Github repo"),"."),(0,n.kt)("p",null,"Bounties for potential bugs include, but are not limited to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reputation Mining vulnerabilities"),(0,n.kt)("li",{parentName:"ul"},"Task, Domain, and Skill workflow exploits"),(0,n.kt)("li",{parentName:"ul"},"Attacks during a network upgrade"),(0,n.kt)("li",{parentName:"ul"},"Authority and permissions")),(0,n.kt)("p",null,"More generally, if it lives in the repository","*"," and affects the Colony smart contracts, it's fair game."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"*"," There are some components of the colonyNetwork repository that are not created by the Colony team, but which still could be relevant to overall security. If a bug or exploit makes use of any external libraries or submodules, it will be considered on a case-by-case basis for eligibility.")),(0,n.kt)("h2",{id:"rules"},"Rules"),(0,n.kt)("h3",{id:"submission-guidelines"},"Submission Guidelines"),(0,n.kt)("p",null,"All bugs reported must be done through the creation of an issue in the colonyNetwork github repo, or ",(0,n.kt)("em",{parentName:"p"},"if the submitter wishes to disclose privately, or to remain anonymous")," by an email sent to ",(0,n.kt)("a",{parentName:"p",href:"mailto:security@colony.io."},"security@colony.io.")," Private submissions are still eligible for a bounty."),(0,n.kt)("p",null,"Unless there is a specific reason for a private disclosure, bugs should be submitted as issues on the colonyNetwork GitHub repository, and tagged with the 'bug' label."),(0,n.kt)("p",null,"It is requested that all submissions follow the format defined in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/blob/develop/.github/ISSUE_TEMPLATE.md"},"issue template")," -- clarity of description and thoroughness of documentation will be a consideration for reward amount, in addition to impact and likelihood."),(0,n.kt)("p",null,"In the case of private bug disclosure, all relevant materials should be sent in email to ",(0,n.kt)("inlineCode",{parentName:"p"},"security@colony.io")," -- and should follow the same template as a public issue."),(0,n.kt)("p",null,"Once submitted, the issue will be responded to, verified, accepted, and rewarded according to the timelines defined on our ",(0,n.kt)("a",{parentName:"p",href:"/next/colonynetwork/bug-bounty#service-level-agreement"},"service level agreement"),"."),(0,n.kt)("h3",{id:"submission-branches"},"Submission Branches"),(0,n.kt)("p",null,"Participants in the program are free to submit bugs on two different branches in the colonyNetwork codebase:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the current testnet release (tagged on the ",(0,n.kt)("inlineCode",{parentName:"li"},"develop")," branch) and deployed to G\xf6rli"),(0,n.kt)("li",{parentName:"ul"},"against the ",(0,n.kt)("inlineCode",{parentName:"li"},"master")," branch which will be tagged as the mainnet release for deployment")),(0,n.kt)("h3",{id:"bug-severity-and-bounties"},"Bug Severity and Bounties"),(0,n.kt)("p",null,"In the same manner as the ",(0,n.kt)("a",{parentName:"p",href:"https://bounty.ethereum.org/"},"Ethereum Bug Bounty Program"),", submissions will be evaluated by the Colony team according to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.owasp.org/index.php/OWASP_Risk_Rating_Methodology"},"OWASP risk rating methodology"),", which grades based on both ",(0,n.kt)("em",{parentName:"p"},"Impact")," and ",(0,n.kt)("em",{parentName:"p"},"Likelihood"),"."),(0,n.kt)("p",null,"It is at the ",(0,n.kt)("em",{parentName:"p"},"sole discretion of Colony")," to decide whether or not a bug report qualifies for a bounty, and to determine the severity of the issue"),(0,n.kt)("p",null,"Severity levels:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Note"),": Up to $500 USD (min. $100)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Low"),": Up to $2,000 USD (min. $500)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Medium"),": Up to $5,000 USD (min. $2,000)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"High"),": Up to $10,000 USD (min. $5,000)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Critical"),": Up to $20,000 USD (min. $10,000)")),(0,n.kt)("p",null,"Issues reported may or may not constitute a security risk for the colonyNetwork contracts. A higher severity will be awarded to vulnerabilities submitted that could potentially result in either the loss of funds, or a situation in which the contracts arrive in an undesirable state that cannot be rectified through existing contract mechanisms, such as 'emergency mode' or through a network upgrade. However, all submitted bugs and vulnerabilities will be considered for prizes."),(0,n.kt)("h3",{id:"ineligible-bugs"},"Ineligible Bugs"),(0,n.kt)("p",null,"Any vulnerabilities or flaws in other software tools created by Colony (e.g. colonyJS, purser, tailor, etc.) are not eligible. Flaws in these software tools are welcome disclosures, but will not be awarded bounties for this bug bounty program."),(0,n.kt)("p",null,"Additional examples of ineligible bugs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Attacks and vulnerabilities that depend on compromised keys or other security flaws outside the colonyNetwork codebase (keyloggers, intercepted communications, social engineering exploits, etc.)."),(0,n.kt)("li",{parentName:"ul"},"Attacks that are accounted for in the system design, i.e. Ethereum network spamming, malicious reputation mining, malfeasance in colony administration."),(0,n.kt)("li",{parentName:"ul"},"Critiques of the Colony Protocol and overall mechanism design. We welcome suggestions and constructive criticism, and ask that it be directed to ",(0,n.kt)("a",{parentName:"li",href:"mailto:hello@colony.io"},"hello@colony.io"),".")),(0,n.kt)("h2",{id:"eligibility-and-participation-requirements"},"Eligibility and Participation Requirements"),(0,n.kt)("p",null,"To participate in this bug bounty you must:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not be employed by Colony, a family member of a person employed by Colony, or a contractor of Colony."),(0,n.kt)("li",{parentName:"ul"},"Not be in violation of any national state, or local law or regulation with respect to any activities directly or indirectly related to the Bug Bounty Program")),(0,n.kt)("p",null,"To qualify for a bounty you must:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Be the first to report a specific vulnerability"),(0,n.kt)("li",{parentName:"ul"},"Report a vulnerability through the process outlined in the ",(0,n.kt)("a",{parentName:"li",href:"/next/colonynetwork/bug-bounty#rules"},"Rules")),(0,n.kt)("li",{parentName:"ul"},"Disclose the vulnerability responsibly and directly to Colony. Disclosure to other third parties before or during bug review will invalidate the submission"),(0,n.kt)("li",{parentName:"ul"},"Not seek or leverage the vulnerability for additional or external bounties or rewards")),(0,n.kt)("h3",{id:"good-faith-participation"},"Good Faith Participation"),(0,n.kt)("p",null,'All participants in the Bug Bounty Program must act in good faith when investigating vulnerabilities. "Good Faith" means:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Play by the Rules -- Abide by the terms and conditions specified herein. If you have any questions or concerns about the terms and conditions, please reach out directly to the Colony team about it"),(0,n.kt)("li",{parentName:"ul"},"Don't be a jerk. You should never illegally or in bad faith leverage the existence of a vulnerability or access to sensitive or confidential information, such as making extortionate demands or ransom requests or trying to shake us down. In other words, if you find a vulnerability, report it to us with no conditions attached"),(0,n.kt)("li",{parentName:"ul"},"Work for Good -- You should never leave a system or users in a more vulnerable state than when you found them. This means that you should not engage in testing or related activities that degrades, damages, or destroys information within our systems, or that may impact our users, such as denial of service, social engineering, or spam")),(0,n.kt)("p",null,"Failure to act in good faith will result in immediate disqualification from the Bug Bounty Program and ineligibility for receiving any benefit of the Bug Bounty Program"),(0,n.kt)("h2",{id:"service-level-agreement"},"Service Level Agreement"),(0,n.kt)("p",null,"After a vulnerability has been submitted either as an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JoinColony/colonyNetwork/issues"},"issue on GitHub")," or as an email to ",(0,n.kt)("inlineCode",{parentName:"p"},"security@colony.io"),", the Colony team will evaluate and determine if the vulnerability is eligible for a bounty within 3 days."),(0,n.kt)("p",null,"Accepted bounties will be graded and assigned a severity according to the team's assessment within 7 days, or a total of 10 days from first submission."),(0,n.kt)("p",null,"Once the severity and bounty is decided, the Colony team will begin work on patching the bug. In this case, a PR will be opened that references the issue of original report. This PR may request more information from the submitter of the bug, and may accept input from external developers for fixing. Participation in resolving a vulnerability is welcome but not required to receive a bounty."),(0,n.kt)("p",null,"When the PR closing the referenced issue is merged to the ",(0,n.kt)("inlineCode",{parentName:"p"},"/develop"),' branch (and, in the case of a live mainnet deployment, an upgrade has been successfully deployed), the issue will be considered "resolved" and payment can take place.'),(0,n.kt)("p",null,"Payment will be disbursed as DAI through the Gitcoin platform to the account which submitted the bounty report, unless otherwise requested by the submitter. Payment will take place as soon as possible following the report's resolution, but may take up to 30 days to process."),(0,n.kt)("p",null,"You must comply with all applicable laws in connection with your participation in this program. You are also responsible for any applicable taxes associated with any reward you receive."),(0,n.kt)("h3",{id:"limitation-of-liability"},"Limitation of Liability"),(0,n.kt)("p",null,"YOUR PARTICIPATION IN THE BUG BOUNTY PROGRAM IS AT YOUR OWN RISK. COLONY HEREBY DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE WITH RESPECT TO THE BUG BOUNTY PROGRAM. Colony SHALL NOT BE LIABLE FOR ANY DIRECT OR INDIRECT DAMAGES ARISING OUT OF OR RELATED TO YOUR PARTICIPATION OR INABILITY TO PARTICIPATE IN THE BUG BOUNTY PROGRAM. Colony assumes no responsibility for any computer, online, telephone transmission or technical malfunctions that may occur during participation in the bug bounty program, or for theft, destruction or unauthorized access to, or alteration of, your submission or any other materials submitted by you. Colony is not responsible for any incorrect or inaccurate information, whether caused by website users, other participants, or any of the equipment or programming associated with or utilized in the Competition, or for any technical or human error which may occur in the processing of submissions in the Competition. Colony assumes no responsibility for any error, interruption, defect, or delay in operation or transmission, failures or technical malfunction of the Internet, or any telephone network or lines, computer online systems, servers, computer equipment, software, email. Colony is not responsible for any injury or damage to participants or to any computer related to or resulting from participating or downloading materials in this program. Some jurisdictions may not allow certain limitations on liability and so the foregoing limitations may not apply to you."),(0,n.kt)("h3",{id:"ineligible-persons"},"Ineligible Persons"),(0,n.kt)("p",null,"The Bug Bounty Program is not open to any of the following persons (\u201cIneligible Persons\u201d): (1) anyone who is not at least the legal age of majority, at the time of Entry, to form valid contracts in their respective country, province or state of legal residence; or (2) in, a country, state, province or territory where the laws of the United States or local law prohibits participating or receiving a prize in the Bug Bounty program (including, but not limited to, Brazil, Quebec, and Cuba, Sudan, Iran, North Korea, Syria, Myanmar (formerly Burma) and any other country designated by the United States Treasury's Office of Foreign Assets Control). Employees, independent contractors under a current services agreement with Colony and members of their immediate families (defined as parents, children, siblings and spouse, regardless of where they reside and/or those living in the same household of each) are not eligible to participate in the Bug Bounty Program. Colony reserves the right to verify eligibility and to adjudicate on any dispute at any time."),(0,n.kt)("h3",{id:"additional-terms"},"Additional Terms"),(0,n.kt)("p",null,"We may modify the terms of this program or terminate this program at any time. We won\u2019t apply any changes we make to these program terms retroactively."),(0,n.kt)("p",null,"All conditions specified in the ",(0,n.kt)("a",{parentName:"p",href:"https://xdai.colony.io/terms-and-services"},"general terms agreement of colony.io")," apply to this program."),(0,n.kt)("h3",{id:"1-definitions"},"1. Definitions"),(0,n.kt)("h3",{id:"11-bounty-prize-payout-reward"},'1.1 "Bounty", "Prize", "Payout", "Reward"'),(0,n.kt)("p",null,"The monetary reward for submitting a vulnerability that is accepted, graded, and resolved by the process defined in the terms and conditions herein."),(0,n.kt)("h3",{id:"12-bug-vulnerability-exploit-bug-report-bug-report-issue"},'1.2 "Bug", "Vulnerability", "Exploit", "Bug Report", "Bug Report Issue"'),(0,n.kt)("p",null,"A disclosure of any software flaw or attack vector submitted to the bug bounty program, and any related documentation thereof."),(0,n.kt)("h3",{id:"14-colony"},'1.4 "Colony"'),(0,n.kt)("p",null,'This program is sponsored by Collectively Intelligent Ltd (3 Butler House, 49-51 Curtain Road, London, United Kingdom EC2A 3PT ("Colony"). Colony is responsible for any website hosting, marketing, bug report assessment, prize disbursement, and any other activities not listed here related to the Bug Bounty Program.'),(0,n.kt)("h3",{id:"17-submitter-or-participant"},'1.7 "Submitter", or "Participant"'),(0,n.kt)("p",null,"The individual or individuals disclosing a vulnerability in the bug bounty program. In the case of this program, this implies the owner of the Github account which creates and submits the bug report as an issue. This may also mean the holder of an Ethereum account requesting a prize for a submitted vulnerability, or the owner of the email address submitting a bounty privately to ",(0,n.kt)("a",{parentName:"p",href:"mailto:security@colony.io"},"security@colony.io")))}p.isMDXComponent=!0}}]);