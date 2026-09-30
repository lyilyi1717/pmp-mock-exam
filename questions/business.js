window.PMP_Q = (window.PMP_Q || []).concat([
  {
    id: "BE-001",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Compliance",
    q: "During execution of a medical device project, the quality lead reports that one deliverable may not meet a mandatory safety standard. The engineering lead suggests releasing on schedule and patching later, noting that the regulator rarely audits this category. What should the project manager do?",
    options: [
      "Proceed with the release since audits are rare, and record the decision in the lessons learned register.",
      "Escalate immediately to the sponsor and request a decision on whether to halt the project.",
      "Work with the compliance officer to analyze the gap against the standard and plan corrective action before release.",
      "Ask the team to add extra testing in the next phase to catch similar issues in future deliverables."
    ],
    answer: 2,
    trap: "Option B is tempting because compliance is serious, but it escalates before the PM has assessed the gap; PMI expects the PM to analyze first and bring facts and options. Option A treats a mandatory requirement as optional.",
    explanation: "Regulatory compliance is non-negotiable. The PM first analyzes the nature and extent of the gap with compliance experts, then plans corrective action (and escalates if it exceeds PM authority) before releasing a non-compliant deliverable."
  },
  {
    id: "BE-002",
    domain: "Business Environment",
    approach: "agile",
    topic: "Compliance",
    q: "An agile team building a banking application keeps documentation lightweight. Internal audit informs the team that regulators require traceability from each requirement to its test evidence, and audits will occur every quarter. What is the BEST way to ensure ongoing compliance?",
    options: [
      "Incorporate the required traceability evidence into the team's Definition of Done so it is produced every iteration.",
      "Assign a technical writer to produce all compliance documentation just before each quarterly audit.",
      "Ask the auditor to accept the team's existing user stories and burndown charts as sufficient evidence.",
      "Switch the entire project to a predictive approach so that full documentation is produced up front."
    ],
    answer: 0,
    trap: "Option B is what many practitioners do, but it batches compliance work at the end, creating compliance debt and audit risk. Option D overreacts; agile can satisfy regulatory needs.",
    explanation: "Building compliance evidence into the Definition of Done makes compliance continuous and verifiable each increment, which is the agile way to handle regulatory requirements."
  },
  {
    id: "BE-003",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Benefits Management",
    q: "A project will deliver a new CRM system. The business case expects a 10% reduction in customer churn, but those benefits will not materialize until about 18 months after project closure. Who is typically accountable for tracking and realizing these benefits after the project closes?",
    options: [
      "The project manager, who will continue to monitor the benefits until they are fully realized.",
      "The project team, through a post-implementation review conducted after deployment.",
      "The PMO, which owns benefits realization for all completed projects.",
      "The benefits owner identified in the benefits management plan."
    ],
    answer: 3,
    trap: "Option A is tempting because PMs care about value, but the PM's role normally ends at project closure; long-term realization belongs to the business.",
    explanation: "The benefits management plan names a benefits owner (usually in the business/operations) accountable for monitoring and realizing benefits over the timeframe that extends beyond the project."
  },
  {
    id: "BE-004",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Project Selection (NPV)",
    q: "A selection committee can fund only one project. Project A: NPV $120,000 over 3 years, IRR 18%. Project B: NPV $95,000 over 1 year, IRR 22%. Project C: NPV $150,000 over 5 years, IRR 15%. Project D: NPV $80,000, payback period 8 months. Based on financial value, which project should be selected?",
    options: [
      "Project B, because it has the highest IRR.",
      "Project C, because it has the highest NPV.",
      "Project A, because it balances NPV against a shorter duration.",
      "Project D, because it has the fastest payback period."
    ],
    answer: 1,
    trap: "Option A (highest IRR) is the classic trap; when NPV and IRR conflict for mutually exclusive projects, NPV wins. Option C wrongly penalizes duration, which NPV already accounts for.",
    explanation: "NPV already discounts cash flows for the time value of money, so project length is irrelevant once NPV is known. Highest NPV is $150,000 (Project C)."
  },
  {
    id: "BE-005",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Opportunity Cost",
    q: "An organization must choose between two mutually exclusive projects. Project X has an NPV of $250,000 and Project Y has an NPV of $180,000. The organization selects Project X. What is the opportunity cost of this decision?",
    options: [
      "$70,000",
      "$250,000",
      "$180,000",
      "$430,000"
    ],
    answer: 2,
    trap: "Option A ($70,000) is the difference between the two NPVs, which many candidates calculate; opportunity cost is the value of the best alternative given up, not the difference.",
    explanation: "Opportunity cost = value of the next-best option forgone. Choosing X means giving up Y's NPV of $180,000."
  },
  {
    id: "BE-006",
    domain: "Business Environment",
    approach: "hybrid",
    topic: "Payback Period",
    q: "A process automation initiative requires an initial investment of $400,000. It is expected to generate net savings of $50,000 per month for the first 4 months, then $100,000 per month thereafter. What is the payback period?",
    options: [
      "8 months",
      "4 months",
      "5 months",
      "6 months"
    ],
    answer: 3,
    trap: "Option A (8 months) comes from dividing $400,000 by the initial $50,000 rate and ignoring that inflows increase after month 4.",
    explanation: "Cumulative: months 1-4 = 4 x $50,000 = $200,000. Month 5 = $300,000, month 6 = $400,000. Investment is recovered at the end of month 6."
  },
  {
    id: "BE-007",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Return on Investment",
    q: "A project costs $200,000 and is expected to deliver total benefits of $260,000. Ignoring the time value of money, what is the project's return on investment (ROI)?",
    options: [
      "30%",
      "130%",
      "23%",
      "77%"
    ],
    answer: 0,
    trap: "Option B (130%) is the benefit-to-cost ratio (260/200 = 1.3) expressed as a percentage, not ROI. Option C divides net gain by benefits instead of cost.",
    explanation: "ROI = (benefits - cost) / cost = ($260,000 - $200,000) / $200,000 = $60,000 / $200,000 = 30%."
  },
  {
    id: "BE-008",
    domain: "Business Environment",
    approach: "hybrid",
    topic: "EEFs vs OPAs",
    q: "A project manager is identifying factors that will influence planning for a new project in an unfamiliar country. Which of the following are enterprise environmental factors? (Choose two.)",
    options: [
      "Government regulations and industry standards in the host country",
      "Templates and forms from previous projects",
      "The organization's lessons learned repository",
      "Organizational culture and political climate",
      "The organization's change control procedures"
    ],
    answer: [0, 3],
    trap: "Options B, C, and E are tempting because they strongly influence the project, but they are organizational process assets (plans, processes, policies, procedures, knowledge bases) that the team can use and update.",
    explanation: "EEFs are conditions not under the team's control, internal (culture, structure) or external (regulations, market, standards). Regulations and organizational culture are both EEFs."
  },
  {
    id: "BE-009",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Net Present Value",
    q: "A project requires an investment of $100,000 today and will return a single payment of $121,000 at the end of year 2. The organization's required rate of return (discount rate) is 10%. What is the NPV, and what does it indicate?",
    options: [
      "$21,000; the project should be accepted because it returns more than it costs.",
      "$0; the project earns exactly the organization's 10% required rate of return.",
      "$10,000; the project exceeds the required return by 10%.",
      "-$21,000; the project should be rejected."
    ],
    answer: 1,
    trap: "Option A ignores discounting and simply subtracts cost from undiscounted return, the most common real-world shortcut.",
    explanation: "PV = $121,000 / (1.10)^2 = $121,000 / 1.21 = $100,000. NPV = $100,000 - $100,000 = $0, meaning the project's IRR equals the 10% discount rate."
  },
  {
    id: "BE-010",
    domain: "Business Environment",
    approach: "agile",
    topic: "External Environment Changes",
    q: "Midway through a release, the product owner learns that a new government accessibility regulation will take effect in six months and will apply to the product under development. What should the project manager do FIRST?",
    options: [
      "Immediately add accessibility stories to the current sprint so the team can start compliance work.",
      "Work with the product owner to assess the regulation's impact and update and reprioritize the product backlog.",
      "Submit a formal change request to the change control board for approval of new scope.",
      "Escalate the regulation to the sponsor and request additional funding."
    ],
    answer: 1,
    trap: "Option A feels proactive, but it disrupts the committed sprint before the impact is understood; in agile, new work goes to the backlog and is prioritized by the product owner.",
    explanation: "External changes must be assessed for impact first. In an agile context, the resulting work is captured and prioritized in the product backlog with the product owner."
  },
  {
    id: "BE-011",
    domain: "Business Environment",
    approach: "predictive",
    topic: "External Environment Changes",
    q: "A project to launch a new mobile banking product is on schedule and on budget. A major competitor unexpectedly releases a similar product at a lower price, and the sponsor is worried. What should the project manager do?",
    options: [
      "Fast-track the remaining activities to launch before the competitor gains more market share.",
      "Continue executing the approved baseline, since scope changes require a formal request.",
      "Recommend canceling the project because the market opportunity has been lost.",
      "Analyze the impact on the business case and benefits with the sponsor, then recommend through governance whether to continue, change, or stop."
    ],
    answer: 3,
    trap: "Option A is the instinctive practitioner response, but it acts on the schedule before understanding whether the business case is still valid.",
    explanation: "A market shift threatens the project's value proposition. The PM assesses its effect on the business case and benefits and supports the sponsor and governance in deciding the path forward."
  },
  {
    id: "BE-012",
    domain: "Business Environment",
    approach: "hybrid",
    topic: "External Environment Changes",
    q: "A government announces new import tariffs that may raise the cost of key components by 15% starting next quarter. The project will purchase most of these components in the following quarter. What should the project manager do?",
    options: [
      "Add the tariff to the risk register, analyze its probability and impact, and plan appropriate responses.",
      "Record the tariff in the issue log and assign an owner to resolve it.",
      "Use the management reserve to cover the expected cost increase.",
      "Submit a change request to increase the cost baseline by 15%."
    ],
    answer: 0,
    trap: "Option B is tempting because the tariff was announced, but its effect on the project has not occurred yet; an uncertain future event is a risk, not an issue.",
    explanation: "The cost impact is still uncertain and in the future, so it is a risk. The PM records it, analyzes it, and plans responses (e.g., buying early, alternate suppliers) before requesting reserves or baseline changes."
  },
  {
    id: "BE-013",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Organizational Change",
    q: "A new ERP system has been deployed, but many end users continue using spreadsheets and say the old way works fine. Adoption is well below the target in the benefits management plan. What is the BEST action for the project manager?",
    options: [
      "Ask the sponsor to issue a directive requiring all staff to use the new system immediately.",
      "Schedule additional training sessions on the new system's features for all users.",
      "Meet with the affected users to understand their concerns, then address them through targeted communication and change champions.",
      "Delay further rollout until all users agree that the new system is better."
    ],
    answer: 2,
    trap: "Option B is the reflexive fix, but it assumes the cause is lack of skill without first understanding why users resist; Option A forces compliance without addressing root causes.",
    explanation: "Organizational change management starts by understanding the sources of resistance and then addressing them with engagement, communication of benefits, and change agents from within the user community."
  },
  {
    id: "BE-014",
    domain: "Business Environment",
    approach: "agile",
    topic: "Organizational Change",
    q: "The team's final increment passes all acceptance criteria and is technically ready for release. However, the receiving business unit has not updated its operating procedures or trained its staff. What should the project manager do NEXT?",
    options: [
      "Release as planned, since the deliverable meets acceptance criteria and the business will adapt.",
      "Assess organizational readiness with the business unit and plan transition activities, such as training and procedure updates, as part of the release.",
      "Postpone the release indefinitely until the business unit confirms it is ready.",
      "Close the project, since the accepted deliverables have been handed over."
    ],
    answer: 1,
    trap: "Option A looks correct because acceptance criteria are met, but value is only realized when the organization can actually adopt the product.",
    explanation: "Delivering value includes a successful transition. The PM assesses readiness and plans the transition activities needed for the business to use the product and realize benefits."
  },
  {
    id: "BE-015",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Governance (PMO Types)",
    q: "In your organization, project managers are assigned from functional departments. The PMO requires every project to use its standard templates and methodology and conducts periodic compliance reviews, but it does not directly manage projects. What type of PMO is this?",
    options: [
      "Supportive",
      "Directive",
      "Enterprise",
      "Controlling"
    ],
    answer: 3,
    trap: "Option B (Directive) is tempting because the PMO enforces rules, but a directive PMO directly manages projects and assigns its own project managers; this PMO only requires compliance.",
    explanation: "A controlling PMO provides support and requires compliance (templates, methodologies, reviews), giving it a moderate degree of control. Supportive is consultative only; directive directly manages projects."
  },
  {
    id: "BE-016",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Organizational Structures",
    q: "A project manager works part-time on the project and spends most of her day on departmental duties. The functional manager controls the budget and team members' assignments, and the project manager mainly coordinates and communicates status. Which organizational structure is MOST likely in place?",
    options: [
      "Weak matrix",
      "Strong matrix",
      "Projectized",
      "Balanced matrix"
    ],
    answer: 0,
    trap: "Option D (Balanced matrix) is tempting because two managers are involved, but in a balanced matrix the PM is typically full-time with low-to-moderate authority and shared budget control.",
    explanation: "In a weak matrix the PM role is part-time (coordinator/expediter) with low authority, and the functional manager controls budget and resources."
  },
  {
    id: "BE-017",
    domain: "Business Environment",
    approach: "hybrid",
    topic: "Organizational Structures",
    q: "In a strong matrix organization, a functional manager informs you that he intends to reassign your lead engineer to another initiative next week. The engineer is working on critical path activities. What should you do?",
    options: [
      "Refuse the request, because in a strong matrix the project manager has final authority over resources.",
      "Escalate the issue to the sponsor and ask them to block the reassignment.",
      "Meet with the functional manager, review the impact on the project, and negotiate a solution that meets both parties' needs.",
      "Accept the reassignment and replan the critical path activities with the remaining team."
    ],
    answer: 2,
    trap: "Option A overstates PM authority; even in a strong matrix, team members still report to functional managers and resources are negotiated. Option B escalates before attempting to resolve it.",
    explanation: "Matrix organizations require negotiation between the PM and functional managers. The PM presents the impact and collaborates on a solution before escalating."
  },
  {
    id: "BE-018",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Project Charter",
    q: "You have been told you will manage a new project, but the project charter has not yet been signed. A functional manager offers to let two of his staff start detailed design work with you right away. What should you do?",
    options: [
      "Begin detailed design with the offered staff, using informal commitments until the charter is signed.",
      "Work with the sponsor to get the charter approved, since it formally authorizes the project and your authority to apply resources.",
      "Write and sign the charter yourself so that work can begin immediately.",
      "Start the work and create the charter retroactively once the design is complete."
    ],
    answer: 1,
    trap: "Option A seems efficient, but work performed before formal authorization lacks sponsor backing and the PM has no authority yet to commit organizational resources.",
    explanation: "The charter, issued by the sponsor or initiator, formally authorizes the project and gives the PM authority to apply organizational resources. The PM helps get it approved before committing resources."
  },
  {
    id: "BE-019",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Benefits Management",
    q: "A project manager is reviewing a draft benefits management plan with the sponsor. Which of the following should be included in this plan? (Choose two.)",
    options: [
      "The detailed work breakdown structure",
      "Target benefits and the timeframe for realizing them",
      "Resource calendars for team members",
      "The benefits owner responsible for monitoring realization",
      "Quality metrics for each deliverable"
    ],
    answer: [1, 3],
    trap: "Option E is tempting because quality contributes to value, but deliverable quality metrics belong in the quality management plan; the WBS and resource calendars are project management plan components.",
    explanation: "The benefits management plan documents target benefits, strategic alignment, timeframe for realization, benefits owner, metrics, assumptions, and risks."
  },
  {
    id: "BE-020",
    domain: "Business Environment",
    approach: "hybrid",
    topic: "Portfolio Alignment",
    q: "Your project is halfway through execution and is on schedule and on budget. The executive team announces a new corporate strategy, and your project's objectives no longer appear aligned with it. What should you do?",
    options: [
      "Raise the misalignment with the sponsor so the portfolio governance body can decide whether to continue, change, or terminate the project.",
      "Continue executing, since the project is performing well against its approved baselines.",
      "Terminate the project immediately to avoid wasting further resources.",
      "Re-scope the project yourself to align with the new strategy, then inform stakeholders."
    ],
    answer: 0,
    trap: "Option B is tempting because performance is good, but a project that no longer supports strategy may no longer deliver value; good performance does not equal alignment.",
    explanation: "Projects exist to deliver strategic value. The PM surfaces the misalignment and lets the sponsor and portfolio governance decide; termination or re-scoping is not the PM's unilateral call."
  },
  {
    id: "BE-021",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Program Alignment",
    q: "Your project is one of four components in a program. You learn that a delay in another component project will postpone a benefit your deliverable depends on. What is the BEST course of action?",
    options: [
      "Negotiate directly with the other project manager to change their schedule to protect your benefit.",
      "Adjust your own schedule to match the delay without informing anyone, since it only affects timing.",
      "Escalate the issue to the portfolio review board for a decision.",
      "Inform the program manager, who is responsible for managing interdependencies among program components."
    ],
    answer: 3,
    trap: "Option A feels collaborative, but resolving a program-level dependency bilaterally bypasses program governance, which may have priorities you are unaware of. Option C skips the program level.",
    explanation: "Program management coordinates interdependencies between components to optimize overall benefits. The program manager is the right level to resolve this."
  },
  {
    id: "BE-022",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Ethics (Bribery)",
    q: "During a procurement evaluation, a vendor's sales director offers you an expensive watch as a 'token of appreciation for considering our proposal.' Your organization's policy prohibits gifts from bidders. What should you do?",
    options: [
      "Accept the gift but disclose it to your manager so there is a record.",
      "Politely decline the gift and continue the evaluation without mentioning it.",
      "Decline the gift and report the offer according to organizational policy.",
      "Accept the gift only if its value is below the local customary threshold."
    ],
    answer: 2,
    trap: "Option B is what many people do to avoid conflict, but it hides an improper attempt to influence a procurement decision; PMI's responsibility and fairness standards require reporting it.",
    explanation: "An expensive gift from a bidder during evaluation is an attempt to influence the decision. The PM declines it and reports it through proper channels to protect the integrity of the procurement."
  },
  {
    id: "BE-023",
    domain: "Business Environment",
    approach: "hybrid",
    topic: "Ethics (Conflict of Interest)",
    q: "You are leading the vendor selection for a large software contract. You discover that one of the bidding companies is owned by your brother-in-law. You are confident you can evaluate all bids objectively. What should you do?",
    options: [
      "Proceed with the evaluation, since you are able to remain impartial.",
      "Reject your brother-in-law's bid to avoid any appearance of favoritism.",
      "Ask your brother-in-law to withdraw his company's bid.",
      "Disclose the relationship to the sponsor and procurement, and recuse yourself from the evaluation if required."
    ],
    answer: 3,
    trap: "Option A is tempting because intent seems good, but PMI's Code requires disclosing actual or potential conflicts of interest regardless of confidence in one's objectivity. Option B is unfair to the vendor.",
    explanation: "Under the fairness standard, practitioners proactively disclose conflicts of interest to appropriate stakeholders and refrain from participating in decisions unless they approve."
  },
  {
    id: "BE-024",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Ethics (Cultural Gifts)",
    q: "You are managing a project in a country where exchanging small gifts at milestones is customary. At a milestone celebration, the client presents you with a modest local handicraft. Your company's policy permits gifts of nominal value and requires that they be recorded. What should you do?",
    options: [
      "Accept the gift graciously and record it in accordance with company policy.",
      "Refuse the gift, explaining that PMI prohibits project managers from accepting any gifts.",
      "Accept the gift and reciprocate with a more valuable gift to strengthen the relationship.",
      "Refuse the gift and report the client for attempting to influence you."
    ],
    answer: 0,
    trap: "Option B sounds ethically safe, but PMI does not prohibit all gifts; refusing a customary nominal gift that policy permits can be disrespectful and damage the relationship.",
    explanation: "The Code of Ethics values respect for other cultures while complying with organizational policy and law. A nominal, customary gift allowed by policy can be accepted and recorded."
  },
  {
    id: "BE-025",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Ethics (Reporting Violations)",
    q: "While reviewing shared documents, you discover evidence that another project manager in your organization falsified safety test results that were submitted to a regulator. What should you do?",
    options: [
      "Confront the project manager privately and give them a chance to correct the results.",
      "Report the conduct to appropriate management, providing the supporting facts.",
      "Report the project manager directly to PMI's Ethics Review Committee.",
      "Take no action, since it is not your project and you are not accountable for it."
    ],
    answer: 1,
    trap: "Option A works for minor interpersonal issues, but falsifying safety data submitted to a regulator is a serious, potentially illegal violation affecting public safety; it must be reported through proper channels.",
    explanation: "PMI's responsibility standard requires reporting unethical or illegal conduct to appropriate management, based on facts. Reporting to PMI alone skips the organization's own channels."
  },
  {
    id: "BE-026",
    domain: "Business Environment",
    approach: "hybrid",
    topic: "Ethics (Honesty)",
    q: "Your project is three weeks behind schedule. Before a board meeting, the sponsor asks you to show the project as 'green' because she expects the team to catch up next month. What should you do?",
    options: [
      "Comply, since the sponsor owns the communication to the board and has more context.",
      "Report the project as green, but add a footnote mentioning minor schedule pressure.",
      "Explain to the sponsor that you must report accurate status, and offer to present a recovery plan alongside the true status.",
      "Go directly to the board chair with the real status without informing the sponsor."
    ],
    answer: 2,
    trap: "Option B looks like a compromise, but it still misrepresents status; honesty requires accurate, truthful reporting. Option D bypasses the sponsor without first addressing the concern with her.",
    explanation: "PMI's honesty standard requires truthful communication. The PM holds firm on accurate status while supporting the sponsor with a recovery plan, preserving both integrity and the relationship."
  },
  {
    id: "BE-027",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Financial Selection Methods",
    q: "A portfolio committee wants to compare candidate projects using methods that account for the time value of money. Which of the following methods meet this requirement? (Choose two.)",
    options: [
      "Simple payback period",
      "Net present value (NPV)",
      "Simple return on investment (ROI)",
      "Benefit-cost ratio calculated from undiscounted totals",
      "Internal rate of return (IRR)"
    ],
    answer: [1, 4],
    trap: "Option A is tempting because payback is about timing, but simple payback treats a dollar received in year 3 the same as one received today, so it ignores the time value of money.",
    explanation: "NPV discounts future cash flows at a required rate; IRR is the discount rate at which NPV equals zero. Both explicitly incorporate the time value of money."
  },
  {
    id: "BE-028",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Sustainability",
    q: "Your construction project must dispose of hazardous by-products. Option 1 is legal in the host country and 30% cheaper, but causes significant environmental harm. Option 2 is more costly but aligns with your organization's published sustainability policy. What should you do?",
    options: [
      "Choose Option 1, since it is fully legal and protects the project budget.",
      "Choose Option 2 and quietly cover the extra cost from the contingency reserve.",
      "Let the team vote on which option to use, since they will carry out the work.",
      "Analyze both options, including environmental impact and policy alignment, and recommend Option 2 to the sponsor for a decision."
    ],
    answer: 3,
    trap: "Option A is tempting because it is legal and cheaper, but PMI's responsibility standard asks practitioners to consider society and the environment and to follow organizational policy, not just the law.",
    explanation: "The PM analyzes options transparently, including sustainability impacts and policy alignment, and brings a recommendation to the sponsor, since the cost impact may exceed the PM's authority."
  },
  {
    id: "BE-029",
    domain: "Business Environment",
    approach: "hybrid",
    topic: "EEFs vs OPAs",
    q: "A project manager is preparing cost estimates for a new project. Which of the following is an organizational process asset she can use?",
    options: [
      "A commercial cost-estimating database the company subscribes to",
      "Historical cost data and lessons learned from the company's past projects",
      "Current regional labor market conditions",
      "The company's organizational culture regarding estimating"
    ],
    answer: 1,
    trap: "Option A is tempting because it is 'the company's' database, but published commercial databases are enterprise environmental factors; only the organization's own historical information and knowledge bases are OPAs.",
    explanation: "OPAs include the organization's plans, processes, policies, procedures, and knowledge bases such as historical information and lessons learned. Market conditions, culture, and commercial databases are EEFs."
  },
  {
    id: "BE-030",
    domain: "Business Environment",
    approach: "predictive",
    topic: "Business Case",
    q: "Your project has spent 70% of its budget. Updated forecasts show that total costs will now exceed the projected benefits in the business case. What should you do?",
    options: [
      "Present the updated cost and benefit forecasts to the sponsor so the business case can be reevaluated.",
      "Continue the project, since most of the budget has already been spent and stopping would waste it.",
      "Reduce quality and testing to bring costs back in line with the business case.",
      "Submit a change request for additional funding to complete the approved scope."
    ],
    answer: 0,
    trap: "Option B is the sunk-cost fallacy; money already spent should not drive the decision. Option D assumes the project should continue before the sponsor has reassessed its viability.",
    explanation: "When the business case is no longer valid, the sponsor and governance must decide whether to continue, change, or terminate. The PM provides the updated forecast to enable that decision."
  },
  {
    id: "TR-001",
    domain: "Process",
    approach: "predictive",
    topic: "Risk Response (FIRST)",
    q: "A key supplier has just declared bankruptcy. This risk was identified during planning, and a contingency plan to switch to a pre-qualified alternate supplier is documented in the risk register. What should the project manager do FIRST?",
    options: [
      "Analyze the impact of the bankruptcy on the schedule and cost baselines.",
      "Implement the contingency plan documented in the risk register.",
      "Notify the sponsor and request direction on how to proceed.",
      "Add the bankruptcy to the risk register as a newly identified risk."
    ],
    answer: 1,
    trap: "Option A is tempting because 'assess first' is usually right, but the analysis was already done in planning; when an identified risk occurs, the planned response is executed.",
    explanation: "When a previously identified risk materializes and a response is already planned, the PM implements that response (Implement Risk Responses), then updates documents and informs stakeholders."
  },
  {
    id: "TR-002",
    domain: "Process",
    approach: "predictive",
    topic: "Validate Scope vs Control Quality (EXCEPT)",
    q: "A new team member is confused about the Validate Scope process. Each of the following statements about Validate Scope is true EXCEPT:",
    options: [
      "It is primarily concerned with formal acceptance of deliverables by the customer or sponsor.",
      "It is typically performed after Control Quality has verified the deliverables.",
      "Its primary concern is the correctness of deliverables and meeting quality requirements.",
      "Its outputs include accepted deliverables."
    ],
    answer: 2,
    trap: "Option B sounds suspicious to some candidates, but it is true; verified deliverables from Control Quality are an input to Validate Scope. The EXCEPT asks for the false statement.",
    explanation: "Correctness and meeting quality requirements is the focus of Control Quality. Validate Scope focuses on customer acceptance of the deliverables, so option C is the false statement."
  },
  {
    id: "TR-003",
    domain: "Process",
    approach: "predictive",
    topic: "Contingency vs Management Reserve",
    q: "A severe flood damages a warehouse storing project materials. This event was not identified in the risk register, and replacing the materials will cost $80,000. Which funding approach is MOST appropriate?",
    options: [
      "Use the contingency reserve, since it is part of the cost baseline and within the PM's control.",
      "Use the contingency reserve after adding the flood to the risk register.",
      "Submit a change request to reduce scope by $80,000 so the budget is not exceeded.",
      "Use the management reserve after obtaining approval per the organization's governance, since the event was not an identified risk."
    ],
    answer: 3,
    trap: "Option B is tempting because it 'follows the process' by logging the risk, but contingency reserves are for identified risks (known-unknowns); adding a risk after the fact does not change that.",
    explanation: "Unidentified risks (unknown-unknowns) are funded from management reserve, which is outside the cost baseline and typically requires management approval; its use results in a baseline change."
  },
  {
    id: "TR-004",
    domain: "Process",
    approach: "agile",
    topic: "Issue vs Risk",
    q: "During the daily standup, a developer reports that the shared test environment has been down since yesterday, and two stories are now blocked. What should the team lead do?",
    options: [
      "Treat it as an impediment: log it and work immediately to remove it so the team can continue.",
      "Record it in the risk register with a high probability and high impact rating.",
      "Wait until the sprint retrospective to discuss how to prevent environment outages.",
      "Ask the team to discuss the root cause in detail during the standup until it is resolved."
    ],
    answer: 0,
    trap: "Option B is tempting because it sounds like good risk management, but the event has already happened; it is an issue/impediment, not a risk. Option D turns the standup into a problem-solving meeting.",
    explanation: "A current problem blocking work is an issue (impediment). The servant leader's job is to remove impediments promptly; prevention can be discussed later in the retrospective."
  },
  {
    id: "TR-005",
    domain: "Process",
    approach: "hybrid",
    topic: "Avoid vs Mitigate",
    q: "The team identifies a significant risk that an unproven open-source library will fail under production load. The team decides to replace it with a mature, proven commercial library, which eliminates the risk entirely. Which risk response strategy is this?",
    options: [
      "Mitigate",
      "Transfer",
      "Avoid",
      "Accept"
    ],
    answer: 2,
    trap: "Option A (Mitigate) is tempting because the change reduces risk, but mitigation only reduces probability or impact; changing the plan to eliminate the threat is avoidance. Buying a commercial product is not Transfer unless liability shifts to the vendor.",
    explanation: "Avoidance changes the project plan to eliminate the threat or protect the project from its impact. Replacing the source of the risk removes it entirely."
  },
  {
    id: "TR-006",
    domain: "Process",
    approach: "predictive",
    topic: "Crashing vs Fast Tracking",
    q: "A project is behind schedule and the sponsor asks for schedule compression. Which of the following are examples of fast tracking? (Choose two.)",
    options: [
      "Adding a second shift of workers to critical path activities",
      "Starting coding before the design is fully complete",
      "Paying the team overtime to finish critical activities sooner",
      "Removing low-priority features from the scope",
      "Performing user acceptance test preparation in parallel with system testing, which were planned sequentially"
    ],
    answer: [1, 4],
    trap: "Options A and C are tempting because they shorten the schedule, but adding resources or overtime is crashing (adds cost). Option D is a scope reduction, not compression.",
    explanation: "Fast tracking performs activities in parallel that were planned sequentially, increasing risk and possible rework. Starting coding early and overlapping test preparation with testing both do this."
  },
  {
    id: "TR-007",
    domain: "Process",
    approach: "predictive",
    topic: "Scope Acceptance (NEXT)",
    q: "All deliverables have passed quality control. The customer refuses to sign acceptance, saying one feature does not match what they expected. The requirements traceability matrix shows the feature was built exactly to the approved requirement. What should the project manager do NEXT?",
    options: [
      "Explain to the customer that quality control has verified the deliverable, so it meets requirements.",
      "Direct the team to rework the feature immediately to satisfy the customer.",
      "Escalate the dispute to the sponsor for a decision on acceptance.",
      "Review the requirement and acceptance criteria with the customer to determine whether this is a new request that should go through change control."
    ],
    answer: 3,
    trap: "Option A is a true statement but does not resolve the acceptance problem; verification is not acceptance. Option B gold-plates or changes scope without change control.",
    explanation: "The PM clarifies with the customer against the documented acceptance criteria. If the customer wants something different from what was approved, it is a change request processed through integrated change control."
  },
  {
    id: "TR-008",
    domain: "Process",
    approach: "predictive",
    topic: "Change Control (FIRST)",
    q: "The sponsor asks you to add a new reporting module to a project that is in the middle of execution. What should you do FIRST?",
    options: [
      "Evaluate the impact of the requested change on scope, schedule, cost, quality, and risk.",
      "Submit a change request to the change control board for approval.",
      "Implement the module, since the sponsor has authority over the project.",
      "Update the scope baseline to include the new module."
    ],
    answer: 0,
    trap: "Option B is the trap that skips a step: going to the CCB is correct eventually, but without an impact analysis the board cannot make an informed decision.",
    explanation: "The PM first analyzes the impact of the change so that the change request submitted to the CCB includes the information needed for a decision. Baselines are updated only after approval."
  },
  {
    id: "TR-009",
    domain: "People",
    approach: "agile",
    topic: "Servant Leadership (NOT)",
    q: "A newly appointed agile team lead asks which behaviors align with servant leadership. Which of the following is NOT consistent with servant leadership?",
    options: [
      "Removing impediments that block the team's progress",
      "Assigning tasks to individual team members and tracking each person's utilization",
      "Facilitating the team's decision making rather than making decisions for them",
      "Shielding the team from outside interruptions during the iteration"
    ],
    answer: 1,
    trap: "Option D is tempting because 'shielding' sounds controlling, but protecting the team from distractions is a core servant leader behavior. The question asks which is NOT consistent.",
    explanation: "Agile teams are self-organizing and pull their own work. Assigning tasks and tracking individual utilization is command-and-control, contrary to servant leadership."
  },
  {
    id: "TR-010",
    domain: "People",
    approach: "hybrid",
    topic: "Conflict Resolution (BEST)",
    q: "Two senior engineers strongly disagree about the architecture for a critical component. Both positions have merit, the relationship is important for the rest of the project, and the decision is due next week. Which conflict resolution approach is BEST?",
    options: [
      "Compromise, asking each engineer to give up part of their approach",
      "Smoothing, emphasizing areas of agreement to reduce tension",
      "Collaborating, working with both engineers to examine the data and reach a consensus solution",
      "Forcing, having the project manager select the approach to meet the deadline"
    ],
    answer: 2,
    trap: "Option A is tempting because it is quick and seems fair, but compromise is lose-lose and can yield a weaker technical solution; with time available, collaboration produces a win-win and commitment.",
    explanation: "Collaborating/problem solving incorporates multiple viewpoints, leads to consensus and commitment, and is PMI's preferred approach when time allows and the relationship matters."
  }
]);
