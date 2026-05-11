export const docs = [
  {
    type: "sop",
    slug: "store-opening-process",
    title: "Store Opening Process",
    description: "Complete end-to-end process for telco coordination, permitting, installation, and network deployment for new store openings.",
    steps: 14,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Pre-Mobilization: Coordination & Planning" },
      {
        type: "step",
        number: 1,
        title: "Message DBFM for Project Manager Assignment",
        content: "Message DBFM through Viber and ask who the Project Manager (PM) is for the assigned store."
      },
      {
        type: "step",
        number: 2,
        title: "Request Mobilization Date",
        content: "Ask the PM for the mobilization date — the date when we can move with the contractor to begin site work."
      },
      {
        type: "step",
        number: 3,
        title: "Confirm Telco Providers",
        content: "Ask Sir George which telco providers are usable for the store and request updates regarding the telco application forms."
      },
      {
        type: "step",
        number: 4,
        title: "Understand Telco Responsibilities by Provider",
        content: "Different telco providers handle installation differently.",
        note: "For Globe, Converge, and PhilCom — they usually install the connection from the NAP box/facility to the store. For PLDT, coordinate with Sir Mark of JAAS."
      },
      { type: "heading", text: "Application & Approval" },
      {
        type: "step",
        number: 5,
        title: "Submit Application Form to Telco",
        content: "Submit the application form to the telco provider. Once they confirm approval, they can proceed with the installation during the mobilization date provided by the PM."
      },
      {
        type: "step",
        number: 6,
        title: "Request Admin Contact Details",
        content: "Request the admin contact details from DBFM — coordinate with Ma'am Nina or Ma'am Daphne."
      },
      {
        type: "step",
        number: 7,
        title: "Telco Site Inspection & Layout Approval",
        content: "The telco provider will conduct a site inspection, create a layout plan, and submit it to the admin. Once approved by the admin, they may proceed with the installation.",
        warning: "Do not proceed with installation until the admin has formally approved the layout plan."
      },
      { type: "heading", text: "Work Permits & Installation" },
      {
        type: "step",
        number: 8,
        title: "Process Work Permit (Pre-Installation)",
        content: "Before the telco can begin installation, process the work permit through the PM (DBFM).",
        warning: "Work permits must always be processed through the PM. Never skip this step."
      },
      {
        type: "step",
        number: 9,
        title: "Schedule Activation & Process Second Work Permit",
        content: "After the installation is completed, activation must be scheduled. Another work permit is required for activation, so coordinate again with the PM."
      },
      {
        type: "step",
        number: 10,
        title: "Proceed with Network Deployment",
        content: "After activation is complete, proceed with the deployment and mobilization of the network equipment.",
        note: "Refer to the Store Network Deployment Guide SOP for detailed equipment deployment steps."
      },
      { type: "heading", text: "PLDT-Specific Process" },
      {
        type: "step",
        number: 11,
        title: "PLDT: Coordinate Layout Plan with Sir Mark",
        content: "Once the PM provides the mobilization date, ask Sir Mark to prepare the layout plan for admin approval. Sir Mark will handle the submission. Coordinate through Viber with Sir Don or Sir Vince for updates."
      },
      {
        type: "step",
        number: 12,
        title: "PLDT: Obtain Fiber Cable Before Installation",
        content: "Before installation, obtain the fiber cable from PLDT. Ask Sir Mark for the layout measurements to determine the required fiber cable length for the site. This allows requesting the correct fiber length from PLDT to be installed by JAAS.",
        note: "Fiber installation should always have two lines for backup redundancy.",
        warning: "Ask Sir Mark if protective tubing or conduit can be installed for fiber cable protection."
      },
      {
        type: "step",
        number: 13,
        title: "PLDT: Schedule Installation & Request Activation",
        content: "Once the layout is approved and fiber cable is obtained, PLDT installation can be scheduled. After installation, request activation from PLDT. Once activation is completed, proceed with network device setup."
      },
      { type: "heading", text: "Provincial Site Deployments" },
      {
        type: "step",
        number: 14,
        title: "Process TRF for Provincial Travel",
        content: "For provincial deployments, a Travel Request Form (TRF) must be requested from HR 5–7 days before the flight schedule.",
        note: "Remind Sir Poch two weeks in advance so the TRF can be signed by Sir Phody. Sir Poch will submit the documents to HR. Your responsibility is to remind Sir Poch regarding the travel requirements.",
        warning: "The TRF should be processed only once the telco activation schedule is already confirmed or ongoing. The same process applies for the second visit during the store opening."
      }
    ]
  }
];

export const templates = [
  {
    type: "template",
    slug: "the-loop-switch-config",
    title: "The Loop Switch Configuration",
    description: "Extreme Networks switch configuration for The Loop store. Requires console cable.",
    lastUpdated: "May 2026",
    content: "! === THE LOOP SWITCH CONFIG ===\n! Requires console cable to configure\n! Last updated: May 2026\n\n! --- Connect via Console ---\n! 1. Connect console cable\n! 2. Open terminal\n! 3. Run: cd /dev\n! 4. Run: ls\n! 5. Run: screen tty.usb (press tab, no space)\n\n! --- Login ---\nUsername: admin\nPassword: (blank)\n\n! --- Factory Reset ---\nUnconfig switch all (to factory reset)\nYes\nQuit\n\n! --- Delete Default Ports Config ---\nconf def del por all\n\n! --- Port Display Strings ---\nconfigure ports 1 display-string FW-TL_PMCF\nconfigure ports 2 display-string FW-The_Loop\nconfigure ports 9 display-string AP1\nconfigure ports 10 display-string AP2\n\n! --- VLAN: TL_PMCF (Tag 133) ---\ncre vlan tl_pmcf tag 133\nconf \"tl_pmcf\" ipaddress 192.168.1.3/24\nconf \"tl_pmcf\" add po 1,3-20\n\n! --- VLAN: The_Loop (Tag 134) ---\ncre vlan The_Loop tag 134\nconf vlan \"The_Loop\" ipaddress 192.168.2.3/24\nconf \"The_Loop\" add por 9-11 t\nconf \"The_Loop\" add por 2,21-24\n\n! --- Account: Admin ---\nConfig account admin password\nNSP@ssword2026!\n\n! --- Account: User ---\nConfig account user password\nNSUs3r2026!\n\n! --- Account: GianKarlo ---\nCreate Account User GianKarlo\nGKRamos@2025\n\n! --- SNMP ---\nconf snmp sysName <switch-name>\n\n! --- Save ---\nsave\nYes"
  }
];
