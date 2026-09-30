window.PMP_Q = (window.PMP_Q || []).concat([
  {
    id: "PR-001",
    domain: "Process",
    approach: "predictive",
    topic: "Integrated change control",
    q: "During execution, a customer representative asks a developer directly to add a new report to the system. The developer tells the project manager the change looks small. What should the project manager do FIRST?",
    options: [
      "Submit a change request to the change control board immediately",
      "Allow the developer to add the report because the effort is minor",
      "Analyze the impact of the requested change on scope, schedule, cost, quality, and risk",
      "Refuse the request and escalate the customer's behavior to the sponsor"
    ],
    answer: 2,
    trap: "Option A is tempting because change requests do go to the CCB, but PMI expects the project manager to evaluate the impact first so the CCB can make an informed decision. Submitting without analysis skips a step.",
    explanation: "PMI sequence: evaluate impact, submit a change request with that analysis, CCB decides, then update plans and communicate. Impact analysis comes first."
  },
  {
    id: "PR-002",
    domain: "Process",
    approach: "predictive",
    topic: "Integrated change control",
    q: "The CCB rejected a change request to add a feature. The requesting stakeholder tells the project manager that the sponsor informally agreed with the feature in a hallway conversation and asks the team to build it anyway. What should the project manager do?",
    options: [
      "Record the rejection in the change log, communicate the decision to the requester, and explain that any reconsideration must go back through integrated change control",
      "Implement the feature because the sponsor has higher authority than the CCB",
      "Implement the feature and fund it from the contingency reserve",
      "Ask the sponsor to sign off on the feature directly so the team can start"
    ],
    answer: 0,
    trap: "Option B is tempting because the sponsor is senior, but an informal hallway comment does not override the documented change control process. Option D likewise bypasses the CCB defined in the change management plan.",
    explanation: "Decisions on change requests follow the change management plan. The PM documents the decision in the change log, communicates it, and routes any appeal back through the formal process."
  },
  {
    id: "PR-003",
    domain: "Process",
    approach: "predictive",
    topic: "Gold plating",
    q: "While reviewing a baselined deliverable, the project manager discovers that a developer added extra functionality without approval because it would 'delight the customer'. What is the BEST action?",
    options: [
      "Keep the functionality because the customer will likely appreciate it",
      "Remove the functionality immediately without further discussion",
      "Update the scope baseline so it matches the delivered product",
      "Assess the impact of the unauthorized change, handle it through integrated change control, and reinforce the change process with the team"
    ],
    answer: 3,
    trap: "Option C is tempting because it makes the documents consistent, but changing the baseline without approval is never acceptable to PMI. Baselines change only through approved change requests.",
    explanation: "Gold plating is an unapproved change. The PM assesses its impact (cost, risk, quality), processes it through change control (keep or revert), and coaches the team to prevent recurrence."
  },
  {
    id: "PR-004",
    domain: "Process",
    approach: "predictive",
    topic: "Schedule baseline change",
    q: "A functional manager, citing resource conflicts, demands that the project manager move several milestones in the schedule baseline. The change management plan names a CCB as the approval authority for baseline changes. What should the project manager do?",
    options: [
      "Update the schedule baseline because the functional manager controls the resources",
      "Document the request as a change request, analyze its impact, and submit it to the CCB",
      "Escalate to the sponsor to override the functional manager",
      "Absorb the conflict by consuming schedule reserve without telling anyone"
    ],
    answer: 1,
    trap: "Option A is tempting because in a matrix organization the functional manager holds resource power, but no individual can change a baseline outside the approved change control process.",
    explanation: "Baselines change only through approved change requests. The PM analyzes impact and submits the request to the authority named in the change management plan."
  },
  {
    id: "PR-005",
    domain: "Process",
    approach: "predictive",
    topic: "Mandatory change",
    q: "A new government regulation affecting one of the project's deliverables takes effect in three months. Compliance is mandatory. What should the project manager do FIRST?",
    options: [
      "Implement the required changes immediately because mandatory changes bypass change control",
      "Tell the customer the scope is frozen and the regulation will be handled in a later project",
      "Add the regulation to the risk register and monitor it",
      "Assess the impact of the regulation on the project and submit a change request through integrated change control"
    ],
    answer: 3,
    trap: "Option A is tempting because the change is non-negotiable, but mandatory changes still go through integrated change control; the CCB decides how to implement them and the baselines must be updated formally.",
    explanation: "Even mandatory changes need impact analysis and a formal change request so baselines, plans, and stakeholders are updated consistently."
  },
  {
    id: "PR-006",
    domain: "Process",
    approach: "predictive",
    topic: "Approved change implementation",
    q: "The CCB has just approved a change request that adds two new deliverables to the project. What should the project manager do NEXT?",
    options: [
      "Instruct the team to begin work on the new deliverables immediately",
      "Update the project management plan, baselines, and project documents, and communicate the change to affected stakeholders",
      "Close the change request in the change log",
      "Conduct a lessons learned session on why the change was needed"
    ],
    answer: 1,
    trap: "Option A is tempting because the change is approved, but work should start only after the plan and baselines reflect it so performance can be measured against the updated baseline.",
    explanation: "After approval, the PM updates the plan, baselines, and documents, and communicates. Then the team executes the approved change in Direct and Manage Project Work."
  },
  {
    id: "PR-007",
    domain: "Process",
    approach: "predictive",
    topic: "Configuration management",
    q: "Several versions of the approved design specification are circulating, and team members are building against different versions. What should the project manager do?",
    options: [
      "Apply the configuration management plan to identify, control, and record the approved version and its status",
      "Submit a change request to approve the latest version",
      "Log the problem in the issue log and ask the sponsor to choose a version",
      "Re-baseline the scope to match the newest version"
    ],
    answer: 0,
    trap: "Option B is tempting because it sounds like proper change control, but the problem is version control of already approved items, which is configuration management, not a new change.",
    explanation: "Configuration management (identification, status accounting, verification and audit) ensures everyone works from the correct approved version of a product or document."
  },
  {
    id: "PR-008",
    domain: "Process",
    approach: "predictive",
    topic: "Change requests",
    q: "Which TWO of the following situations require a formal change request in a predictive project? (Choose two.)",
    options: [
      "Adding a feature to the baselined project scope statement",
      "Reassigning a task between two team members within the same work package with no impact on cost or dates",
      "Repairing a deliverable that failed quality inspection (defect repair)",
      "Logging a new entry in the issue log",
      "Holding an additional coordination meeting with the team"
    ],
    answer: [0, 2],
    trap: "Option B is tempting because it touches the plan, but internal task reassignment with no baseline impact is normal day-to-day management. Many practitioners also forget that defect repair (option C) is a type of change request in PMI terms.",
    explanation: "PMI lists corrective actions, preventive actions, defect repairs, and updates to baselined documents as change requests. Scope baseline changes always need one."
  },
  {
    id: "PR-009",
    domain: "Process",
    approach: "predictive",
    topic: "WBS",
    q: "While creating the WBS, a team member proposes adding items such as 'hold design meeting' and 'write code for login' as the lowest level. What should the project manager do?",
    options: [
      "Accept them, because activities form the lowest level of the WBS",
      "Move them to the WBS dictionary as work package descriptions",
      "Explain that the WBS decomposes deliverables down to work packages, and activities are defined later from those work packages",
      "Replace the WBS with a detailed schedule, since activities are already known"
    ],
    answer: 2,
    trap: "Option A is tempting because many practitioners build task-based WBSs, but in PMI terms the WBS is deliverable-oriented. Its lowest level is the work package, and activities come from Define Activities.",
    explanation: "The WBS is a hierarchical decomposition of the total scope into deliverables and work packages. Activities are created in Define Activities and listed in the activity list."
  },
  {
    id: "PR-010",
    domain: "Process",
    approach: "predictive",
    topic: "Validate scope vs control quality",
    q: "The quality control team has inspected a major deliverable and confirmed it meets all specifications. What should happen NEXT?",
    options: [
      "Close the project, since the deliverable is complete",
      "Repeat Control Quality with the customer present",
      "Perform Validate Scope with the customer to obtain formal acceptance",
      "Transition the deliverable to operations"
    ],
    answer: 2,
    trap: "Option D is tempting because the product is technically done, but handing it over before formal customer acceptance skips Validate Scope. Verified deliverables must become accepted deliverables first.",
    explanation: "Control Quality checks correctness (verified deliverables). Validate Scope obtains the customer's formal acceptance (accepted deliverables), which is required before closing or transition."
  },
  {
    id: "PR-011",
    domain: "Process",
    approach: "hybrid",
    topic: "Scope creep",
    q: "Customer representatives keep asking for small tweaks during review meetings, and the team has been accommodating them. The schedule is now slipping. What should the project manager do?",
    options: [
      "Reinforce the change control process so all requests are submitted as change requests with impact analysis, and assess the impact of changes already made",
      "Crash the remaining critical path activities to recover the schedule",
      "Ask the sponsor for additional budget to cover the extra work",
      "Stop inviting customer representatives to review meetings"
    ],
    answer: 0,
    trap: "Option B is tempting because it attacks the visible symptom (the delay), but it does not fix the root cause, which is uncontrolled scope creep.",
    explanation: "Scope creep is prevented through the change control process. The PM must address the root cause and evaluate the already accepted changes."
  },
  {
    id: "PR-012",
    domain: "Process",
    approach: "predictive",
    topic: "WBS dictionary",
    q: "Team members are unsure what work package 3.2.1 includes, who is responsible, and what its acceptance criteria are. Which document should the project manager point them to?",
    options: [
      "Project scope statement",
      "Requirements traceability matrix",
      "Project charter",
      "WBS dictionary"
    ],
    answer: 3,
    trap: "Option B is tempting because the RTM links requirements to deliverables, but it does not describe each work package's detailed content, owner, and acceptance criteria.",
    explanation: "The WBS dictionary gives detailed information for each WBS component: description of work, responsible organization, milestones, cost estimates, and acceptance criteria."
  },
  {
    id: "PR-013",
    domain: "Process",
    approach: "hybrid",
    topic: "Control scope",
    q: "During a status review, the project manager finds that the team built a module against an outdated version of the requirements. What should the project manager do NEXT?",
    options: [
      "Ask the customer to accept the module as-is during Validate Scope",
      "Determine the cause and degree of the variance from the scope baseline and decide whether corrective action or a change request is needed",
      "Update the requirements documentation so it matches the module as built",
      "Record the problem only in the lessons learned register"
    ],
    answer: 1,
    trap: "Option C is tempting because it makes the documents consistent quickly, but it changes approved requirements to fit the mistake. That is an unapproved change.",
    explanation: "Control Scope compares work performance against the scope baseline, analyzes variances, and results in change requests (such as corrective action) when needed."
  },
  {
    id: "PR-014",
    domain: "Process",
    approach: "predictive",
    topic: "Requirements traceability",
    q: "An executive asks whether every business objective in the business case is addressed by a project deliverable and how each will be tested. Which tool BEST answers this?",
    options: [
      "Stakeholder register",
      "Work breakdown structure",
      "Scope management plan",
      "Requirements traceability matrix"
    ],
    answer: 3,
    trap: "Option B is tempting because the WBS shows all deliverables, but it does not link them back to business objectives or forward to tests.",
    explanation: "The RTM links each requirement to its origin (such as business objectives) and traces it through design, development, and test cases."
  },
  {
    id: "PR-015",
    domain: "Process",
    approach: "predictive",
    topic: "Critical path and float",
    q: "A project has these activities: A (3 days, start), B (4 days, after A), C (6 days, after A), D (5 days, after B), E (2 days, after C), F (3 days, after D and E). What is the total float of activity E?",
    options: [
      "0 days",
      "1 day",
      "2 days",
      "3 days"
    ],
    answer: 1,
    trap: "Option A is tempting because E feeds directly into the critical activity F, but feeding a critical activity does not make E critical; its path is shorter.",
    explanation: "Paths: A-B-D-F = 3+4+5+3 = 15 (critical); A-C-E-F = 3+6+2+3 = 14. E: ES 9, EF 11, LF 12, LS 10, so float = 1 day."
  },
  {
    id: "PR-016",
    domain: "Process",
    approach: "predictive",
    topic: "Critical path delay",
    q: "Activities: A (4 days) and B (6 days) both start at project start. C (5 days) follows A. D (2 days) follows B. E (3 days) follows both C and D. If activity B is delayed by 3 days, what is the new project duration?",
    options: [
      "14 days",
      "15 days",
      "12 days",
      "13 days"
    ],
    answer: 0,
    trap: "Option B is tempting because it adds the 3-day delay straight onto the 12-day duration, but B has 1 day of float, which absorbs part of the delay.",
    explanation: "Original: A-C-E = 12 (critical), B-D-E = 11, so B has 1 day of float. With B at 9 days: B-D-E = 9+2+3 = 14, now the longest path. The project ends 2 days later, at 14 days."
  },
  {
    id: "PR-017",
    domain: "Process",
    approach: "predictive",
    topic: "Schedule compression",
    q: "Which TWO statements about schedule compression are correct? (Choose two.)",
    options: [
      "Crashing should target the activities with the cheapest crash cost regardless of which path they are on",
      "Fast tracking performs activities in parallel that would normally be done in sequence, increasing the risk of rework",
      "Both crashing and fast tracking reduce the project scope",
      "Crashing adds resources to critical path activities, choosing those with the least incremental cost per unit of time saved",
      "Fast tracking is best applied to activities with mandatory (hard logic) dependencies"
    ],
    answer: [1, 3],
    trap: "Option A is tempting because it minimizes spending, but crashing non-critical activities buys no reduction in project duration. Option E reverses the rule: fast tracking works on discretionary dependencies.",
    explanation: "Crashing adds cost to shorten critical activities (cheapest per day first); fast tracking overlaps activities and adds risk. Neither changes scope."
  },
  {
    id: "PR-018",
    domain: "Process",
    approach: "predictive",
    topic: "Crashing",
    q: "The project must be shortened by 2 days. There is one critical path, and all other paths have at least 3 days of float. Crash options: critical activity A at $1,000/day (max 2 days), critical activity B at $800/day (max 1 day), critical activity C at $1,500/day (max 3 days), and non-critical activity D at $300/day (max 2 days). What is the cheapest way to achieve the 2-day reduction?",
    options: [
      "Crash D by 2 days for $600",
      "Crash A by 2 days for $2,000",
      "Crash B by 1 day and A by 1 day for $1,800",
      "Crash C by 2 days for $3,000"
    ],
    answer: 2,
    trap: "Option A is tempting because it is the lowest cost, but D is not on the critical path, so crashing it does not shorten the project at all.",
    explanation: "Crash the cheapest critical activities first: B for 1 day ($800), then A for 1 day ($1,000), for a total of $1,800 for 2 days."
  },
  {
    id: "PR-019",
    domain: "Process",
    approach: "predictive",
    topic: "Three-point estimating",
    q: "Using beta (PERT) distribution, an activity has an optimistic estimate of 4 days, a most likely estimate of 7 days, and a pessimistic estimate of 16 days. What is the expected duration?",
    options: [
      "9 days",
      "7 days",
      "8 days",
      "10 days"
    ],
    answer: 2,
    trap: "Option A is tempting because it is the triangular (simple) average (4+7+16)/3 = 9, but the question asks for the beta/PERT estimate, which weights the most likely value by 4.",
    explanation: "PERT = (O + 4M + P) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 days. Standard deviation = (P - O) / 6 = 2 days."
  },
  {
    id: "PR-020",
    domain: "Process",
    approach: "predictive",
    topic: "Schedule compression",
    q: "The project is 10 days behind schedule. The sponsor asks the project manager to recover without increasing the budget. Several critical path activities have discretionary dependencies. What is the BEST approach?",
    options: [
      "Fast track critical path activities that have discretionary dependencies",
      "Crash the critical path activities with the lowest crash cost",
      "Fast track activities that are not on the critical path",
      "Approve overtime for all team members"
    ],
    answer: 0,
    trap: "Option B is tempting because crashing is the go-to fix for delays, but crashing adds cost, which violates the sponsor's constraint.",
    explanation: "Fast tracking overlaps activities (usually those with discretionary dependencies) without direct extra cost, though it adds risk. It must target the critical path to shorten the project."
  },
  {
    id: "PR-021",
    domain: "Process",
    approach: "predictive",
    topic: "Resource optimization",
    q: "A key specialist is over-allocated in weeks 6 through 8. The project manager must resolve this WITHOUT changing the project end date. Which technique should be used?",
    options: [
      "Resource leveling",
      "Crashing",
      "Fast tracking",
      "Resource smoothing"
    ],
    answer: 3,
    trap: "Option A is tempting because leveling is the best-known fix for over-allocation, but leveling can change the critical path and push out the end date.",
    explanation: "Resource smoothing adjusts activities only within their free and total float, so the critical path and end date are not changed (though not all over-allocations may be resolved)."
  },
  {
    id: "PR-022",
    domain: "Process",
    approach: "predictive",
    topic: "Dependencies",
    q: "The team has always completed a full design review before starting coding because it is considered best practice, although nothing technically prevents overlap. The sponsor wants the schedule compressed. Which dependency is the best candidate for fast tracking?",
    options: [
      "A mandatory dependency, since the team treats it as required",
      "A discretionary dependency based on best practice",
      "An external dependency controlled by a third party",
      "A lag between two hard-logic activities"
    ],
    answer: 1,
    trap: "Option A is tempting because the team treats the review as required, but a dependency based on preference or best practice is discretionary (soft logic), not mandatory.",
    explanation: "Discretionary dependencies are set by the team based on best practice and can be changed. That makes them the natural candidates for fast tracking."
  },
  {
    id: "PR-023",
    domain: "Process",
    approach: "predictive",
    topic: "Leads and lags",
    q: "Activity A takes 5 days and starts at the beginning of the project. Activity B takes 4 days and has a finish-to-start relationship with A plus a 3-day lag. What is the earliest finish of B (in project days)?",
    options: [
      "Day 9",
      "Day 6",
      "Day 15",
      "Day 12"
    ],
    answer: 3,
    trap: "Option A is tempting because it chains the durations but ignores the lag. Option B treats the lag as a lead (subtracting 3 days).",
    explanation: "EF(A) = 5; ES(B) = 5 + 3 lag = 8; EF(B) = 8 + 4 = 12."
  },
  {
    id: "PR-024",
    domain: "Process",
    approach: "hybrid",
    topic: "Schedule control",
    q: "A vendor informs the project manager that delivery of a critical component will be 5 days late. The team wants the project manager to update the schedule so the dates are 'realistic'. What should the project manager do?",
    options: [
      "Update the schedule baseline to reflect the new vendor date",
      "Analyze the impact and recovery options, and if a baseline change is still needed, submit a change request",
      "Use management reserve to pay the vendor for expedited delivery",
      "Wait and report the delay in the next monthly status report"
    ],
    answer: 1,
    trap: "Option A is tempting because it makes the schedule reflect reality, but the baseline can only change through approved change requests. Forecasts can change; the baseline cannot on its own.",
    explanation: "The PM evaluates impact and options such as compression or resequencing. If the baseline must change, a change request goes to the CCB."
  },
  {
    id: "PR-025",
    domain: "Process",
    approach: "predictive",
    topic: "Earned value",
    q: "At the end of month 4: EV = $40,000, AC = $50,000, PV = $45,000. Which statement describes the project status?",
    options: [
      "Over budget and behind schedule",
      "Under budget and behind schedule",
      "Over budget and ahead of schedule",
      "Under budget and ahead of schedule"
    ],
    answer: 0,
    trap: "Option B is tempting if CV is computed as AC - EV (+$10,000), which reverses the sign. The correct formula is CV = EV - AC.",
    explanation: "CPI = EV/AC = 40/50 = 0.80 (over budget). SPI = EV/PV = 40/45 = 0.89 (behind schedule)."
  },
  {
    id: "PR-026",
    domain: "Process",
    approach: "predictive",
    topic: "Estimate at completion",
    q: "BAC = $200,000, EV = $80,000, AC = $100,000. The project manager expects the current cost performance to continue for the rest of the project. What is the EAC?",
    options: [
      "$220,000",
      "$160,000",
      "$250,000",
      "$300,000"
    ],
    answer: 2,
    trap: "Option A is tempting because it uses AC + (BAC - EV), but that formula assumes the variance was atypical. The scenario says performance will continue (typical).",
    explanation: "CPI = 80/100 = 0.8. EAC = BAC / CPI = 200,000 / 0.8 = $250,000."
  },
  {
    id: "PR-027",
    domain: "Process",
    approach: "predictive",
    topic: "Earned value interpretation",
    q: "A project reports CPI = 1.10 and SPI = 0.85. Which TWO statements are correct? (Choose two.)",
    options: [
      "The project is over budget",
      "The project is ahead of schedule",
      "The project is earning more value per dollar spent than planned",
      "The TCPI (based on BAC) must be above 1.0 to finish on budget",
      "The team has completed less work than planned by this date"
    ],
    answer: [2, 4],
    trap: "Option D is tempting because an index below 1 somewhere feels like it must require catching up, but with CPI above 1 the remaining work can be done at lower efficiency, so TCPI based on BAC is below 1.0.",
    explanation: "CPI > 1 means under budget (more value per dollar). SPI < 1 means less work done than planned (behind schedule)."
  },
  {
    id: "PR-028",
    domain: "Process",
    approach: "predictive",
    topic: "Estimate at completion",
    q: "BAC = $500,000, EV = $200,000, AC = $260,000. The overrun was caused by a one-time equipment failure that is not expected to recur. What is the EAC?",
    options: [
      "$650,000",
      "$500,000",
      "$560,000",
      "$460,000"
    ],
    answer: 2,
    trap: "Option A is tempting because BAC/CPI is the most-used EAC formula, but it assumes the variance will continue. This variance is atypical.",
    explanation: "Atypical variance: EAC = AC + (BAC - EV) = 260,000 + (500,000 - 200,000) = $560,000."
  },
  {
    id: "PR-029",
    domain: "Process",
    approach: "predictive",
    topic: "Estimate at completion",
    q: "BAC = $180,000, EV = $100,000, AC = $120,000. The original estimates are now considered fundamentally flawed, so the team produced a new bottom-up estimate of $90,000 for the remaining work. What is the EAC?",
    options: [
      "$210,000",
      "$216,000",
      "$200,000",
      "$270,000"
    ],
    answer: 0,
    trap: "Option B is tempting because it uses BAC/CPI (180,000 / 0.833 = $216,000), but when the original plan is flawed PMI uses a new bottom-up ETC instead.",
    explanation: "EAC = AC + bottom-up ETC = 120,000 + 90,000 = $210,000."
  },
  {
    id: "PR-030",
    domain: "Process",
    approach: "predictive",
    topic: "TCPI",
    q: "BAC = $100,000, EV = $40,000, AC = $50,000. Management insists the project must finish within the original budget. What is the TCPI?",
    options: [
      "0.80",
      "1.25",
      "0.83",
      "1.20"
    ],
    answer: 3,
    trap: "Option B is tempting because 1/CPI = 1/0.8 = 1.25 looks like the efficiency needed to 'undo' the overrun, but TCPI measures the efficiency needed on the remaining work with the remaining funds.",
    explanation: "TCPI (BAC) = (BAC - EV) / (BAC - AC) = (100,000 - 40,000) / (100,000 - 50,000) = 60,000 / 50,000 = 1.20."
  },
  {
    id: "PR-031",
    domain: "Process",
    approach: "predictive",
    topic: "Variance at completion",
    q: "BAC = $300,000, EV = $120,000, AC = $150,000. Cost performance is expected to continue at the current rate. What is the VAC?",
    options: [
      "-$30,000",
      "-$75,000",
      "+$75,000",
      "-$45,000"
    ],
    answer: 1,
    trap: "Option A is tempting because it is the current cost variance (EV - AC), but VAC projects the variance at completion (BAC - EAC).",
    explanation: "CPI = 120/150 = 0.8. EAC = 300,000 / 0.8 = $375,000. VAC = BAC - EAC = 300,000 - 375,000 = -$75,000."
  },
  {
    id: "PR-032",
    domain: "Process",
    approach: "predictive",
    topic: "Estimate at completion",
    q: "BAC = $200,000, EV = $80,000, AC = $100,000, PV = $100,000. The project has a firm completion date, so both cost and schedule performance are expected to affect the remaining work. What is the EAC?",
    options: [
      "$250,000",
      "$220,000",
      "$312,500",
      "$287,500"
    ],
    answer: 3,
    trap: "Option A is tempting because it uses BAC/CPI and ignores schedule performance. Option C divides the whole BAC by CPI x SPI instead of only the remaining work.",
    explanation: "CPI = 0.8, SPI = 0.8, CPI x SPI = 0.64. EAC = AC + (BAC - EV) / (CPI x SPI) = 100,000 + 120,000 / 0.64 = 100,000 + 187,500 = $287,500."
  },
  {
    id: "PR-033",
    domain: "Process",
    approach: "predictive",
    topic: "Cost and schedule variance",
    q: "EV = $75,000, AC = $90,000, PV = $70,000. What are the cost variance and schedule variance?",
    options: [
      "CV = +$15,000; SV = -$5,000",
      "CV = -$15,000; SV = +$5,000",
      "CV = -$20,000; SV = +$5,000",
      "CV = -$15,000; SV = -$20,000"
    ],
    answer: 1,
    trap: "Option A is tempting if the formulas are reversed (AC - EV and PV - EV). Negative variances mean bad news, and both variances always start with EV.",
    explanation: "CV = EV - AC = 75,000 - 90,000 = -$15,000. SV = EV - PV = 75,000 - 70,000 = +$5,000."
  },
  {
    id: "PR-034",
    domain: "Process",
    approach: "predictive",
    topic: "Earned value",
    q: "A $400,000 project is 30% complete, but it was planned to be 40% complete by now. $150,000 has been spent. What are EV, CPI, and SPI?",
    options: [
      "EV = $120,000; CPI = 0.80; SPI = 0.75",
      "EV = $150,000; CPI = 1.00; SPI = 0.94",
      "EV = $160,000; CPI = 1.07; SPI = 1.00",
      "EV = $120,000; CPI = 1.25; SPI = 1.33"
    ],
    answer: 0,
    trap: "Option D is tempting because it has the right EV, but the ratios are inverted (AC/EV and PV/EV). CPI and SPI always put EV in the numerator.",
    explanation: "EV = 30% x 400,000 = $120,000; PV = 40% x 400,000 = $160,000. CPI = 120/150 = 0.80. SPI = 120/160 = 0.75."
  },
  {
    id: "PR-035",
    domain: "Process",
    approach: "predictive",
    topic: "Estimate to complete",
    q: "BAC = $250,000, EV = $100,000, AC = $125,000. Current cost performance is expected to continue. How much MORE money is expected to be spent to complete the project?",
    options: [
      "$150,000",
      "$312,500",
      "$187,500",
      "$125,000"
    ],
    answer: 2,
    trap: "Option B is tempting because it is the EAC, but the question asks for the remaining cost (ETC), not the total forecast.",
    explanation: "CPI = 100/125 = 0.8. EAC = 250,000 / 0.8 = $312,500. ETC = EAC - AC = 312,500 - 125,000 = $187,500."
  },
  {
    id: "PR-036",
    domain: "Process",
    approach: "predictive",
    topic: "Cost of quality",
    q: "Which TWO of the following are costs of conformance? (Choose two.)",
    options: [
      "Rework of defective components",
      "Training the team on quality standards",
      "Warranty claims from customers",
      "Scrap of rejected materials",
      "Inspection and testing of deliverables"
    ],
    answer: [1, 4],
    trap: "Option A is tempting because rework is money spent 'on quality', but it is an internal failure cost, which is a cost of nonconformance.",
    explanation: "Cost of conformance = prevention costs (training, documentation) + appraisal costs (testing, inspection). Rework, scrap, and warranty are failure costs (nonconformance)."
  },
  {
    id: "PR-037",
    domain: "Process",
    approach: "predictive",
    topic: "Control charts",
    q: "A control chart shows seven consecutive measurements above the mean, all within the upper and lower control limits. What does this indicate?",
    options: [
      "The process is in control because all points are within the control limits",
      "The product is out of specification and must be rejected",
      "The process is considered out of control, and the cause should be investigated",
      "The control limits should be widened to reflect current performance"
    ],
    answer: 2,
    trap: "Option A is tempting because the points are inside the limits, but the rule of seven says seven consecutive points on one side of the mean indicate a non-random pattern.",
    explanation: "Under the rule of seven, a run of seven consecutive points on one side of the mean signals an assignable cause, so the process is treated as out of control."
  },
  {
    id: "PR-038",
    domain: "Process",
    approach: "predictive",
    topic: "Manage quality",
    q: "The project manager wants an independent review to find out whether project activities follow organizational quality policies and to identify ineffective processes. Which process is being performed?",
    options: [
      "Manage Quality",
      "Control Quality",
      "Validate Scope",
      "Plan Quality Management"
    ],
    answer: 0,
    trap: "Option B is tempting because it sounds like checking quality, but Control Quality inspects the product/deliverables. Audits of the processes belong to Manage Quality.",
    explanation: "Quality audits are a tool of Manage Quality: they check process compliance and identify gaps and improvements."
  },
  {
    id: "PR-039",
    domain: "Process",
    approach: "predictive",
    topic: "Control vs specification limits",
    q: "A measurement falls outside the upper control limit but is still within the customer's specification limits. What should the project manager do?",
    options: [
      "Nothing, because the product still meets the customer's specifications",
      "Reject the product because it is defective",
      "Ask the customer to widen the specification limits",
      "Investigate the process for an assignable cause, since the process is out of control"
    ],
    answer: 3,
    trap: "Option A is tempting because the customer is satisfied, but control limits describe process stability. A point outside them means the process is unstable even if the product is acceptable.",
    explanation: "Control limits (typically +/-3 sigma) show whether the process is stable. Specification limits show customer requirements. A point outside the control limits requires investigation."
  },
  {
    id: "PR-040",
    domain: "Process",
    approach: "predictive",
    topic: "Quality tools",
    q: "The team has logged hundreds of defects across 12 defect categories. The project manager wants to focus corrective effort on the few categories causing most of the defects. Which tool should be used?",
    options: [
      "Cause-and-effect (fishbone) diagram",
      "Pareto chart",
      "Scatter diagram",
      "Control chart"
    ],
    answer: 1,
    trap: "Option A is tempting because it is the classic root-cause tool, but a fishbone explores the causes of one problem. It does not rank categories by frequency.",
    explanation: "A Pareto chart orders categories by frequency (the 80/20 rule), so the team can prioritize the vital few."
  },
  {
    id: "PR-041",
    domain: "Process",
    approach: "predictive",
    topic: "Cost of quality",
    q: "To save money, the sponsor proposes cutting the team's quality training and adding more final inspections instead. What is the BEST response from the project manager?",
    options: [
      "Agree, because inspection is the cheapest way to ensure quality",
      "Agree, because quality is the responsibility of the quality department",
      "Agree, provided the customer performs acceptance testing",
      "Explain that prevention is generally cheaper than inspection and that quality should be planned and built in"
    ],
    answer: 3,
    trap: "Option A is tempting because inspections catch defects, but PMI holds that quality is planned in, not inspected in, and prevention costs less than finding and fixing defects.",
    explanation: "Prevention over inspection is a core PMI quality principle; preventing defects is less costly than appraisal and failure costs."
  },
  {
    id: "PR-042",
    domain: "Process",
    approach: "hybrid",
    topic: "Implement risk responses",
    q: "A risk identified during planning has just occurred: a key supplier went bankrupt. What should the project manager do FIRST?",
    options: [
      "Inform the sponsor and wait for direction",
      "Implement the planned response documented in the risk register",
      "Create a workaround to handle the impact",
      "Perform qualitative risk analysis on the event"
    ],
    answer: 1,
    trap: "Option C is tempting because it is a quick practical fix, but workarounds are for unplanned (unidentified) risks. An identified risk already has a planned response.",
    explanation: "When an identified risk occurs, the risk owner carries out the planned response (contingency plan) in the risk register, using contingency reserve if needed."
  },
  {
    id: "PR-043",
    domain: "Process",
    approach: "predictive",
    topic: "Workarounds",
    q: "An event nobody anticipated, and that is not in the risk register, has just disrupted a critical activity. What should the project manager do?",
    options: [
      "Develop a workaround to address the immediate impact, then record it in the issue log and review risk identification for similar threats",
      "Implement the contingency plan from the risk register",
      "Draw from the contingency reserve to fund the response",
      "Take no action because the event was not identified during planning"
    ],
    answer: 0,
    trap: "Option C is tempting because reserves exist for surprises, but contingency reserve funds identified risks (known unknowns). Unidentified risks are covered by management reserve, which needs approval.",
    explanation: "Workarounds are unplanned responses to emergent risks that have occurred. Afterward, the issue is documented and risk identification is revisited."
  },
  {
    id: "PR-044",
    domain: "Process",
    approach: "predictive",
    topic: "Reserves",
    q: "Unforeseen work, never identified as a risk, will cost $20,000. The project still has $50,000 of unused contingency reserve. What should the project manager do?",
    options: [
      "Use the contingency reserve because the funds are available",
      "Absorb the cost by extending the schedule",
      "Request use of management reserve through the change control process with sponsor/management approval",
      "Reduce scope elsewhere to free up $20,000"
    ],
    answer: 2,
    trap: "Option A is tempting because the money is within the PM's control, but contingency reserve is allocated to identified risks. Unknown-unknowns are funded from management reserve, which is outside the cost baseline and requires approval.",
    explanation: "Management reserve is not part of the cost baseline. Using it needs management approval and a change request, after which the cost baseline is updated."
  },
  {
    id: "PR-045",
    domain: "Process",
    approach: "predictive",
    topic: "Risk owner",
    q: "A risk that a vendor may deliver late has been assigned to the procurement lead as risk owner. Its trigger condition has just appeared. Who should implement the risk response?",
    options: [
      "The project manager, personally",
      "The sponsor",
      "The assigned risk owner",
      "The vendor"
    ],
    answer: 2,
    trap: "Option A is tempting because the PM is accountable for the project, but PMI assigns each risk to a risk owner who monitors triggers and carries out the agreed response.",
    explanation: "The risk owner is responsible for monitoring the risk and implementing the response. The PM oversees and supports the process."
  },
  {
    id: "PR-046",
    domain: "Process",
    approach: "predictive",
    topic: "Risk responses (opportunities)",
    q: "Which TWO are valid response strategies for a positive risk (opportunity)? (Choose two.)",
    options: [
      "Exploit",
      "Transfer",
      "Mitigate",
      "Share",
      "Avoid"
    ],
    answer: [0, 3],
    trap: "Option B is tempting because 'transfer' and 'share' both hand part of the risk to a third party, but transfer is a threat response. Share is its opportunity counterpart.",
    explanation: "Opportunity responses: escalate, exploit, share, enhance, accept. Threat responses: escalate, avoid, transfer, mitigate, accept."
  },
  {
    id: "PR-047",
    domain: "Process",
    approach: "predictive",
    topic: "Escalate risk response",
    q: "The project manager identifies a risk that a planned corporate restructuring could affect several programs, including this project. Responding to it is outside the project manager's authority. What should the project manager do?",
    options: [
      "Escalate the risk to the appropriate owner at program or portfolio level and record it as escalated",
      "Develop a mitigation plan and fund it from the project's contingency reserve",
      "Accept the risk and take no further action",
      "Transfer the risk by purchasing insurance"
    ],
    answer: 0,
    trap: "Option B is tempting because mitigation is the default proactive response, but the risk is beyond the project's scope and the PM's authority, so escalation is the correct strategy.",
    explanation: "Escalate applies when the threat or opportunity is outside the project scope or the PM's authority. Once the owner accepts it, the project typically stops monitoring it."
  },
  {
    id: "PR-048",
    domain: "Process",
    approach: "predictive",
    topic: "Secondary risk",
    q: "To mitigate the risk of late deliveries, the project manager adds a second supplier. This creates a new risk that parts from the two suppliers may be incompatible. What is this new risk called?",
    options: [
      "Residual risk",
      "Risk trigger",
      "Workaround",
      "Secondary risk"
    ],
    answer: 3,
    trap: "Option A is tempting because both terms describe risk left after a response, but residual risk is what remains of the original risk. A new risk created by the response is a secondary risk.",
    explanation: "Secondary risks arise as a direct result of implementing a risk response and should be identified, analyzed, and planned for."
  },
  {
    id: "PR-049",
    domain: "Process",
    approach: "predictive",
    topic: "Residual risk",
    q: "The project buys insurance against equipment damage, but a $10,000 deductible still applies to any claim. What is the remaining $10,000 exposure called?",
    options: [
      "Secondary risk",
      "Residual risk",
      "Unknown-unknown",
      "Issue"
    ],
    answer: 1,
    trap: "Option A is tempting because the exposure exists after a response, but it is not a new risk caused by the response. It is the part of the original risk that remains.",
    explanation: "Residual risk is the risk that remains after responses are implemented. It is usually accepted, sometimes with a contingency reserve."
  },
  {
    id: "PR-050",
    domain: "Process",
    approach: "predictive",
    topic: "Expected monetary value",
    q: "A project has two risks: a 30% chance of a threat costing $50,000, and a 20% chance of an opportunity saving $20,000. What is the combined expected monetary value?",
    options: [
      "-$19,000",
      "+$11,000",
      "-$30,000",
      "-$11,000"
    ],
    answer: 3,
    trap: "Option A is tempting if the opportunity is treated as another cost (-15,000 - 4,000). Opportunities have positive EMV and offset threats.",
    explanation: "EMV = (0.30 x -50,000) + (0.20 x +20,000) = -15,000 + 4,000 = -$11,000."
  },
  {
    id: "PR-051",
    domain: "Process",
    approach: "predictive",
    topic: "Risk register",
    q: "A new team member tells the project manager she is worried that a third-party API may change before launch. What should the project manager do FIRST?",
    options: [
      "Develop a response plan for the API change",
      "Check the risk register to see whether this risk has already been identified",
      "Escalate the concern to the sponsor",
      "Perform quantitative risk analysis on the API change"
    ],
    answer: 1,
    trap: "Option A is tempting because it is proactive, but the PM should first check whether the risk is already registered and has a response, to avoid duplicate or conflicting plans.",
    explanation: "Consulting the risk register comes first. If the risk is new, it is recorded, analyzed, and assigned a response and owner."
  },
  {
    id: "PR-052",
    domain: "Process",
    approach: "predictive",
    topic: "Risk responses (threats)",
    q: "The team lacks expertise for a high-impact installation. The project manager hires a specialist firm under a firm-fixed-price contract so the financial impact of installation problems falls on the firm. Which risk response is this?",
    options: [
      "Transfer",
      "Mitigate",
      "Share",
      "Avoid"
    ],
    answer: 0,
    trap: "Option C is tempting because a third party is involved, but 'share' is a response to opportunities. Shifting a threat's impact and ownership to a third party is transfer.",
    explanation: "Transfer shifts ownership and impact of a threat to a third party (via contracts, insurance, warranties). It usually involves paying a risk premium."
  },
  {
    id: "PR-053",
    domain: "Process",
    approach: "predictive",
    topic: "Risk acceptance",
    q: "Qualitative analysis shows several risks with low probability and low impact. What is the MOST appropriate way to handle them?",
    options: [
      "Avoid them by removing the related scope",
      "Develop detailed mitigation plans for each one",
      "Accept them and place them on a watch list for periodic review",
      "Escalate them to the sponsor"
    ],
    answer: 2,
    trap: "Option B is tempting because it seems thorough, but spending effort on detailed responses for low-priority risks is not cost-effective.",
    explanation: "Low-priority risks are commonly accepted (passively or with a small reserve) and placed on a watch list in the risk register for monitoring."
  },
  {
    id: "PR-054",
    domain: "Process",
    approach: "predictive",
    topic: "Point of total assumption",
    q: "A fixed-price-incentive-fee (FPIF) contract has a target cost of $100,000, a target profit of $10,000, a target price of $110,000, a ceiling price of $120,000, and a buyer/seller share ratio of 80/20. What is the point of total assumption (PTA)?",
    options: [
      "$120,000",
      "$150,000",
      "$112,500",
      "$110,000"
    ],
    answer: 2,
    trap: "Option B is tempting if the seller's share (20%) is used as the divisor (10,000 / 0.2 = 50,000), but the formula uses the buyer's share.",
    explanation: "PTA = ((Ceiling price - Target price) / Buyer's share) + Target cost = (10,000 / 0.8) + 100,000 = 12,500 + 100,000 = $112,500."
  },
  {
    id: "PR-055",
    domain: "Process",
    approach: "predictive",
    topic: "Contract types",
    q: "Which TWO contract types place the MOST cost risk on the buyer? (Choose two.)",
    options: [
      "Firm fixed price (FFP)",
      "Cost plus fixed fee (CPFF)",
      "Fixed price incentive fee (FPIF)",
      "Time and materials (T&M) without a not-to-exceed limit",
      "Fixed price with economic price adjustment (FP-EPA)"
    ],
    answer: [1, 3],
    trap: "Option E is tempting because the price can go up, but the adjustment is limited to defined economic factors (such as inflation). The seller still carries most of the cost risk.",
    explanation: "In cost-reimbursable contracts (such as CPFF) and open-ended T&M contracts, the buyer pays actual costs, so the buyer bears the cost risk. Fixed-price contracts put most cost risk on the seller."
  },
  {
    id: "PR-056",
    domain: "Process",
    approach: "predictive",
    topic: "CPIF calculation",
    q: "A cost-plus-incentive-fee contract has a target cost of $200,000, a target fee of $20,000, and a buyer/seller share ratio of 70/30. The seller's actual cost is $180,000. What is the total amount the buyer pays?",
    options: [
      "$206,000",
      "$214,000",
      "$200,000",
      "$220,000"
    ],
    answer: 0,
    trap: "Option B is tempting if the seller is given the buyer's 70% share of the underrun (fee = 20,000 + 14,000). The seller receives only its own 30% share.",
    explanation: "Underrun = 200,000 - 180,000 = 20,000. Seller's share = 30% x 20,000 = 6,000. Fee = 20,000 + 6,000 = 26,000. Total = 180,000 + 26,000 = $206,000."
  },
  {
    id: "PR-057",
    domain: "Process",
    approach: "predictive",
    topic: "Claims administration",
    q: "The seller submits a claim stating that certain completed work was outside the contract scope. The buyer disagrees. What is the preferred way to resolve this?",
    options: [
      "Terminate the contract for cause",
      "Refer the claim immediately to litigation",
      "Pay the claim to preserve the relationship",
      "Negotiate a settlement according to the contract terms, and use alternative dispute resolution if negotiation fails"
    ],
    answer: 3,
    trap: "Option B is tempting when legal positions harden, but PMI prefers negotiation first, then ADR (mediation/arbitration). Litigation is the last resort.",
    explanation: "Claims (contested changes) are documented, processed, and resolved per the contract, first by negotiation and then by ADR if needed."
  },
  {
    id: "PR-058",
    domain: "Process",
    approach: "predictive",
    topic: "Contract type selection",
    q: "The buyer needs two specialist engineers to start next week for a short augmentation effort. The scope of work cannot yet be precisely defined. Which contract type is MOST appropriate?",
    options: [
      "Firm fixed price",
      "Time and materials with a not-to-exceed limit",
      "Cost plus incentive fee",
      "Fixed price with economic price adjustment"
    ],
    answer: 1,
    trap: "Option A is tempting because it gives the buyer the lowest risk, but a fixed price requires a well-defined scope. Without one, sellers will add large contingencies or refuse.",
    explanation: "T&M contracts suit staff augmentation and quick starts with undefined scope. A not-to-exceed value limits the buyer's cost exposure."
  },
  {
    id: "PR-059",
    domain: "Process",
    approach: "predictive",
    topic: "Contract change control",
    q: "A seller's project lead verbally agrees with one of the buyer's engineers to add extra functionality, and the seller plans to invoice for it. What should the buyer's project manager do?",
    options: [
      "Let the seller proceed and approve payment afterward",
      "Draft and sign a new contract for the additional work",
      "Reprimand the engineer and take no further action",
      "Route the requested change through the contract change control system via the authorized procurement administrator"
    ],
    answer: 3,
    trap: "Option A is tempting because the work is useful, but only people with contracting authority can change the contract, and all changes must go through contract change control.",
    explanation: "Contract changes follow the contract change control system and must be approved by the authorized procurement/contract administrator in writing."
  },
  {
    id: "PR-060",
    domain: "Process",
    approach: "predictive",
    topic: "Closing procurements",
    q: "A seller reports that all work under its contract is complete and requests final payment. What should the buyer's project manager ensure BEFORE the contract is closed?",
    options: [
      "That final payment is released immediately to maintain goodwill",
      "That all deliverables are accepted, contractual obligations are met, and open claims are resolved",
      "That the contract is terminated for convenience",
      "That the seller is added to the preferred-seller list"
    ],
    answer: 1,
    trap: "Option A is tempting because the seller says the work is done, but payment and closure come only after acceptance of deliverables and resolution of claims and obligations.",
    explanation: "Procurement closure requires verifying deliverables are accepted, resolving claims, finalizing payment, and archiving procurement records."
  },
  {
    id: "PR-061",
    domain: "Process",
    approach: "predictive",
    topic: "Communication channels",
    q: "A project has 12 stakeholders, including the project manager. Four new stakeholders are added. By how many do the potential communication channels increase?",
    options: [
      "54",
      "4",
      "120",
      "58"
    ],
    answer: 0,
    trap: "Option C is tempting because it is the new total number of channels, but the question asks for the increase.",
    explanation: "Channels = n(n-1)/2. Before: 12 x 11 / 2 = 66. After: 16 x 15 / 2 = 120. Increase = 120 - 66 = 54."
  },
  {
    id: "PR-062",
    domain: "Process",
    approach: "hybrid",
    topic: "Communications management",
    q: "A key stakeholder complains that she is not receiving the project information she needs. What should the project manager do FIRST?",
    options: [
      "Add the stakeholder to every project distribution list",
      "Immediately send her all past status reports",
      "Review the communications management plan to find out how her information needs were defined, and update it as necessary",
      "Escalate the complaint to the sponsor"
    ],
    answer: 2,
    trap: "Option A is tempting because it resolves the complaint quickly, but flooding the stakeholder with everything may not meet her actual needs. The plan should be reviewed and fixed first.",
    explanation: "The communications management plan defines who receives what information, when, and how. A gap means the plan must be reviewed and updated."
  },
  {
    id: "PR-063",
    domain: "Process",
    approach: "predictive",
    topic: "Stakeholder register",
    q: "Midway through execution, the project manager learns that a regional regulatory officer has authority to approve one of the deliverables. This person was never identified. What should the project manager do FIRST?",
    options: [
      "Send the officer the latest project status report",
      "Invite the officer to the next CCB meeting",
      "Add the officer to the stakeholder register and analyze their interest, influence, and expectations",
      "Continue as planned, since stakeholder identification was completed during initiation"
    ],
    answer: 2,
    trap: "Option A is tempting because it engages the stakeholder quickly, but without first analyzing the officer's needs and influence the PM cannot plan appropriate engagement.",
    explanation: "Stakeholder identification is iterative. New stakeholders are added to the register and analyzed, then the engagement and communications plans are updated."
  },
  {
    id: "PR-064",
    domain: "Process",
    approach: "predictive",
    topic: "Close project or phase",
    q: "Which TWO activities are part of closing a predictive project? (Choose two.)",
    options: [
      "Release the team before lessons learned are finalized so they can join other projects",
      "Update the cost baseline to match actual costs",
      "Confirm formal acceptance and transition of the final product, service, or result",
      "Begin Validate Scope for all deliverables",
      "Finalize lessons learned and archive project documents in organizational process assets"
    ],
    answer: [2, 4],
    trap: "Option A is tempting because resources are scarce, but releasing the team too early loses their input to lessons learned and final documentation. Option B rewrites the baseline instead of reporting final variance.",
    explanation: "Close Project or Phase confirms acceptance and transition, finalizes lessons learned, archives records, and then releases resources."
  },
  {
    id: "PR-065",
    domain: "Process",
    approach: "hybrid",
    topic: "Lessons learned",
    q: "The team suggests saving all lessons learned for a single session at project closure to avoid 'wasting time' during execution. What should the project manager do?",
    options: [
      "Explain that lessons learned should be captured throughout the project in the lessons learned register and transferred to the organizational repository at closure",
      "Agree, since lessons learned are an output of Close Project or Phase",
      "Agree, but hold the session only at the end of each phase",
      "Collect lessons learned only if the project fails to meet its objectives"
    ],
    answer: 0,
    trap: "Option B is tempting because lessons learned are finalized at closure, but PMI expects them to be captured continuously so they can improve the current project too.",
    explanation: "The lessons learned register is created early and updated throughout. At closure it is finalized and moved into the lessons learned repository (OPA)."
  },
  {
    id: "PR-066",
    domain: "Process",
    approach: "predictive",
    topic: "Early termination",
    q: "The sponsor cancels the project halfway through because of a change in business strategy. What should the project manager do?",
    options: [
      "Stop all work and release the team immediately",
      "Refuse the cancellation and escalate to the steering committee",
      "Complete the remaining deliverables first, then close the project",
      "Follow the closure process: document the reasons and level of completion, hand over completed deliverables, capture lessons learned, and archive records"
    ],
    answer: 3,
    trap: "Option A is tempting because the project is over, but terminated projects still require formal closure, including documenting why and how far the work progressed.",
    explanation: "Close Project or Phase applies to terminated projects too: investigate and document reasons, transfer finished and unfinished deliverables, finalize lessons learned, and archive."
  },
  {
    id: "PR-067",
    domain: "Process",
    approach: "predictive",
    topic: "Final acceptance",
    q: "All deliverables meet the documented acceptance criteria, but the customer refuses to sign final acceptance. What should the project manager do?",
    options: [
      "Close the project without the customer's signature",
      "Review the acceptance criteria and validation records with the customer to understand the objection, and follow the agreed dispute or escalation process if needed",
      "Add the extra features the customer wants so they will sign",
      "Refer the matter to the legal department immediately"
    ],
    answer: 1,
    trap: "Option C is tempting because it pleases the customer, but it is gold plating/unapproved scope. Any new requirement must go through change control.",
    explanation: "The PM first finds out why the customer objects, referring to the agreed acceptance criteria. Disputes are handled per the contract or governance process."
  },
  {
    id: "PR-068",
    domain: "Process",
    approach: "predictive",
    topic: "Compliance",
    q: "An internal audit finds that the team skipped a safety test required by industry regulations on a delivered component. What should the project manager do?",
    options: [
      "Wait for the external audit to decide whether action is needed",
      "Halt all project work until the next steering committee meeting",
      "Ask the team to run the test quietly and update the records without documenting the gap",
      "Assess the severity of the non-compliance with the compliance subject matter experts, document it, and plan corrective action through the change control process"
    ],
    answer: 3,
    trap: "Option C is tempting because it fixes the problem fast, but hiding a compliance gap is unethical and removes the audit trail regulators expect.",
    explanation: "Compliance gaps are analyzed with SMEs, documented transparently, and corrected through formal corrective actions and change control."
  },
  {
    id: "PR-069",
    domain: "Process",
    approach: "predictive",
    topic: "Compliance",
    q: "The contract requires all subcontractors to hold a current ISO certification. The project manager discovers that a subcontractor's certification expired last month. What should the project manager do?",
    options: [
      "Continue as usual and ask the subcontractor to renew at some point",
      "Review the contract and compliance requirements, notify procurement, and require a corrective plan before accepting further deliverables",
      "Terminate the subcontract immediately",
      "Replace the subcontractor quietly without informing the customer"
    ],
    answer: 1,
    trap: "Option C is tempting because it removes the non-compliance, but termination is an extreme first step. The contract terms and procurement process determine the proper remedy.",
    explanation: "The PM assesses the requirement and its impact, involves the procurement authority, and manages the gap as a compliance issue/risk per the contract terms."
  },
  {
    id: "PR-070",
    domain: "Process",
    approach: "hybrid",
    topic: "Hybrid change control",
    q: "In a hybrid project, hardware is delivered with a predictive, baselined scope and software is built in agile sprints. The product owner asks to change a baselined hardware specification. What should the project manager do?",
    options: [
      "Process the request through formal integrated change control, because the hardware scope is baselined",
      "Add the request to the product backlog and let the team prioritize it",
      "Implement the change in the next sprint",
      "Reject the request, since changes are not allowed in predictive work"
    ],
    answer: 0,
    trap: "Option B is tempting because the product owner uses the backlog for software, but the hardware component is governed by a predictive baseline and needs formal change control.",
    explanation: "In hybrid projects, each component follows its governance. Baselined predictive scope changes go through integrated change control and the CCB."
  }
]);
