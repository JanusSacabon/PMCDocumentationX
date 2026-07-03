export const sops = [
  {
    type: "sop",
    slug: "store-opening-process",
    title: "Standard Operating Procedure: Store Opening Process",
    description: "Complete end-to-end process for telco coordination, permitting, installation, network deployment, and device requesting for all stores (Metro Manila & Provincial).",
    steps: 18,
    lastUpdated: "June 2026",
    sections: [
      { type: "heading", text: "Phase 1: Pre-Mobilization — Coordination & Planning" },
      {
        type: "step",
        number: 1,
        title: "Request Project Manager Assignment",
        content: "Message DBFM via Viber to ask who the Project Manager (PM) is for the assigned store."
      },
      {
        type: "step",
        number: 2,
        title: "Request Mobilization Date",
        content: "Ask the PM for the mobilization date — the date when we can move with the contractor to begin site work. This is also the date when the Telco or JAAS can start laying fiber.",
        note: "Ask the PM for the contractor to prioritize the back office."
      },
      {
        type: "step",
        number: 3,
        title: "Confirm Telco Providers",
        content: "Ask Sir George which telco providers are usable for the store, and request updates on the telco application forms. For site surveys, coordinate accordingly."
      },
      {
        type: "step",
        number: 4,
        title: "Understand Telco Responsibilities by Provider",
        content: "Different telco providers handle installation differently.",
        note: "Globe, Converge, PhilCom — They install the connection from the NAP box/facility to the store. PLDT — Coordinate with Sir Mark of JAAS."
      },
      { type: "heading", text: "Phase 2: Application & Approval" },
      {
        type: "step",
        number: 5,
        title: "Submit Application Form to Telco",
        content: "Submit the application form to the telco provider. Once they confirm approval, they may proceed with the installation during the mobilization date provided by the PM."
      },
      {
        type: "step",
        number: 6,
        title: "Request Admin Contact Details",
        content: "Request the admin contact details from DBFM. Coordinate with Ma'am Nina or Ma'am Daphne."
      },
      {
        type: "step",
        number: 7,
        title: "Telco Site Inspection & Layout Approval",
        content: "The telco provider will conduct a site inspection, create a layout plan, and submit it to the admin. Once approved, they may proceed with installation.",
        warning: "Do not proceed with installation until the admin has formally approved the layout plan."
      },
      { type: "heading", text: "Phase 3: Work Permits & Installation" },
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
        content: "After installation is completed, activation must be scheduled. Another work permit is required for activation — coordinate again with the PM."
      },
      {
        type: "step",
        number: 10,
        title: "Proceed with Network Deployment",
        content: "After activation is complete, proceed with the deployment and mobilization of network equipment."
      },
      { type: "heading", text: "Phase 4: PLDT-Specific Process" },
      {
        type: "step",
        number: 11,
        title: "Coordinate Layout Plan & Site Survey with Sir Mark",
        content: "Once the PM provides the mobilization date, ask Sir Mark to prepare the layout plan for admin approval — a work permit is needed. Sir Mark will handle the submission. For the site survey, ask both PLDT and JAAS to join."
      },
      {
        type: "step",
        number: 12,
        title: "Request Work Permit",
        content: "Request a work permit through the PM."
      },
      {
        type: "step",
        number: 13,
        title: "Get Admin Contact Details",
        content: "After the layout is submitted to the admin, ask Sir Mark for the admin's contact details."
      },
      {
        type: "step",
        number: 14,
        title: "Schedule Installation After Layout Approval",
        content: "Once the layout is approved, PLDT installation can be scheduled."
      },
      {
        type: "step",
        number: 15,
        title: "Obtain Fiber Cable Before Installation",
        content: "Before installation, obtain the fiber cable from PLDT. Ask Sir Mark for the layout measurements to determine the required fiber cable length. This allows requesting the correct fiber length from PLDT, to be installed by JAAS.",
        note: "Fiber installation should always have two lines for backup redundancy.",
        warning: "Ask Sir Mark if protective tubing or conduit can be installed for fiber cable protection."
      },
      {
        type: "step",
        number: 16,
        title: "Request Activation from PLDT",
        content: "After installation, request activation from PLDT. Once activation is completed, proceed with the setup of network devices."
      },
      { type: "heading", text: "Phase 5: Additional PLDT Coordination Notes" },
      {
        type: "list",
        items: [
          "After the admin endorses the application form to PLDT, ask Sir Mark to prepare the store layout.",
          "Once the application form is received, the PLDT team will need a Service Order from their side before they can release the Fiber Optic Cable (FOC).",
          "Coordinate via Viber and email with Sir Don or Sir Vince.",
          "For SM PLDT, contact Sir Carlo Dysangco via email and Viber for FOC requests.",
          "Ask Sir Mark to create the layout plan for the site for admin approval.",
          "Once the approved layout is returned to Sir Mark, schedule the installation.",
          "Coordinate with PLDT via Viber regarding the fiber cable request so Sir Mark can mobilize."
        ]
      },
      { type: "heading", text: "Phase 6: Requesting Network Devices" },
      {
        type: "list",
        items: [
          "Network devices for new stores — Ask Sir Poch.",
          "Ticket creation — Notify SD to create a ticket for the network device request.",
          "Extension wires (PMC) — Ask Jim Mercader.",
          "Extension wires (The Loop) — Ask Jolina Mariano.",
          "UPS (Power Mac AAR — Metro Manila) — Ask Ms. Sherlynn Ponferrada.",
          "UPS (The Loop) — Ask Mary Angelyn Estacio.",
          "UPS (Provincial) — Ask the Branch Head for the UPS, as it will be brought by the warehouse during turnover."
        ]
      },
      { type: "heading", text: "Phase 7: Provincial Site Process" },
      {
        type: "step",
        number: 17,
        title: "Request TRF from HR",
        content: "For provincial deployments, request a Travel Request Form (TRF) from HR 5–7 days before the flight schedule."
      },
      {
        type: "step",
        number: 18,
        title: "Remind Sir Poch for TRF Signing",
        content: "Remind Sir Poch two weeks in advance so the TRF can be signed by Sir Phody. Sir Poch will submit the documents to HR.",
        note: "Your responsibility is to remind Sir Poch regarding travel requirements.",
        warning: "The TRF should be processed only once the telco activation schedule is already confirmed or ongoing. The same process applies for the second visit during the store opening."
      },
      { type: "heading", text: "Important Reminders" },
      {
        type: "list",
        items: [
          "Work permits must always be processed through the Project Manager. If the store has already been turned over, go through the Branch Head instead.",
          "Fiber installation must always have two lines for backup redundancy.",
          "Always request protective tubing or conduit for fiber cable protection.",
          "TRF for provincial sites must be requested 5–7 days before the flight schedule.",
          "Remind Sir Poch two weeks in advance for TRF processing."
        ]
      }
    ]
  },
  {
    type: "sop",
    slug: "org-structure-contacts",
    title: "Organizational Structure & Key Contacts",
    description: "Reference document for Business Development, Design and Builds, project managers, contractors, and key contacts for store openings.",
    steps: 0,
    lastUpdated: "June 2026",
    sections: [
      { type: "heading", text: "BD — Business Development" },
      { type: "paragraph", text: "Leasing usually handles ocular and space-related questions." },
      { type: "contact-card", name: "Ma'am Nina", role: "Manager", category: "BD" },
      { type: "contact-card", name: "Ma'am Daphne Moontoon", role: "Supervisor (PMC)", category: "BD" },
      { type: "contact-card", name: "Ma'am Anna Grace Panelo", role: "Supervisor (The Loop)", category: "BD" },
      { type: "contact-card", name: "Ms. AG Panelo", role: "Ocular Visits (The Loop)", category: "BD", note: "For site surveys and ocular visits" },
      { type: "heading", text: "DB — Design and Builds" },
      { type: "paragraph", text: "Project managers, designers, project handlers." },
      { type: "contact-card", name: "Ma'am Camille", role: "Manager", category: "DB" },
      { type: "contact-card", name: "Sir Edison San Diego", role: "Supervisor (PMC)", category: "DB" },
      { type: "contact-card", name: "Sir Christian", role: "Supervisor (The Loop)", category: "DB" },
      { type: "heading", text: "Project Managers" },
      { type: "contact-card", name: "Cole Palad", role: "Project Manager — PMC", category: "PM" },
      { type: "contact-card", name: "Carlo Comandao", role: "Project Manager — PMC", category: "PM" },
      { type: "contact-card", name: "Aira Ibanez", role: "Project Manager — The Loop", category: "PM" },
      { type: "heading", text: "Contractors" },
      { type: "contact-card", name: "Magdamo", role: "Mindanao area", category: "Contractor" },
      { type: "contact-card", name: "3LR", role: "All-around Luzon, VisMin", category: "Contractor" },
      { type: "contact-card", name: "R2L", role: "All-around Luzon, VisMin", category: "Contractor" },
      { type: "contact-card", name: "DM Casteel", role: "Luzon", category: "Contractor" },
      { type: "contact-card", name: "Infinite Options", role: "Luzon", category: "Contractor" },
      { type: "heading", text: "Key Contacts — General Coordination" },
      { type: "contact-card", name: "DBFM", role: "PM Assignment & Admin Contacts", category: "General", note: "Start of process" },
      { type: "contact-card", name: "Sir George", role: "Telco Provider Confirmation", category: "General", note: "Pre-mobilization" },
      { type: "contact-card", name: "Ma'am Nina", role: "Admin Contact Details", category: "General", note: "During application" },
      { type: "contact-card", name: "Ma'am Daphne", role: "Admin Contact Details", category: "General", note: "During application" },
      { type: "contact-card", name: "Sir Poch", role: "Network Devices & TRF Submission", category: "General", note: "New stores / Provincial sites" },
      { type: "contact-card", name: "Sir Phody", role: "TRF Signing", category: "General", note: "Provincial sites only" },
      { type: "contact-card", name: "SD", role: "Network Device Ticket", category: "General", note: "Device requests" },
      { type: "heading", text: "Key Contacts — PLDT-Specific" },
      { type: "contact-card", name: "Sir Mark (JAAS)", role: "PLDT Layout & Fiber Coordination", category: "PLDT", note: "PLDT sites only" },
      { type: "contact-card", name: "Sir Don", role: "PLDT Coordination (Viber & Email)", category: "PLDT", note: "PLDT sites only" },
      { type: "contact-card", name: "Sir Vince", role: "PLDT Coordination (Viber & Email)", category: "PLDT", note: "PLDT sites only" },
      { type: "contact-card", name: "Sir Carlo Dysangco", role: "SM PLDT FOC Requests", category: "PLDT", note: "SM PLDT sites only" },
      { type: "heading", text: "Key Contacts — Other Telco" },
      { type: "contact-card", name: "Sir Adrian", role: "SM PhilCom Contact", category: "Telco", note: "SM PhilCom sites only" },
      { type: "heading", text: "Key Contacts — Device & Peripheral Requests" },
      { type: "contact-card", name: "Jim Mercader", role: "Extension Wire Requests (PMC)", category: "Devices", note: "Extension wires" },
      { type: "contact-card", name: "Jolina Mariano", role: "Extension Wire Requests (The Loop)", category: "Devices", note: "Extension wires" },
      { type: "contact-card", name: "Ms. Sherlynn Ponferrada", role: "UPS for Power Mac AAR", category: "Devices", note: "UPS Requests" },
      { type: "contact-card", name: "Mary Angelyn Estacio", role: "UPS for The Loop", category: "Devices", note: "UPS Requests" }
    ]
  }
];

export const deviceSetups = [
  {
    type: "device",
    slug: "extreme-switch-setup",
    title: "Extreme Switch Setup",
    description: "Console-based factory reset and initial configuration procedure for Extreme Networks switches.",
    steps: 8,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Console Connection" },
      { type: "step", number: 1, title: "Connect to Switch via Console", content: "Connect to the switch using an RJ45 console cable. Open Terminal on the Macbook." },
      { type: "step", number: 2, title: "Locate the Switch in Terminal", content: "Input the following commands in Terminal to locate the switch. Press Enter after each step.", code: "cd /dev\nls\nscreen tty.usb (press tab)" },
      { type: "step", number: 3, title: "Login to Switch", content: "Enter the login credentials.", code: "Username: admin\nPassword: (blank)", note: "Default credentials — just press Enter for the password." },
      { type: "heading", text: "Factory Reset" },
      { type: "step", number: 4, title: "Factory Reset the Switch", content: "Input the following command to factory reset the switch, then confirm.", code: "unconfig switch all\nyes", warning: "This erases all existing configuration on the switch. Ensure this is the correct device before proceeding." },
      { type: "step", number: 5, title: "Skip Security Configuration", content: "In the next security choice prompt, input quit to skip.", code: "quit" },
      { type: "heading", text: "Configuration & Finish" },
      { type: "step", number: 6, title: "Enter Store-Specific Configuration", content: "Switch configuration begins. Enter the store-specific switch configuration as provided.", note: "Refer to the Templates section for the specific store switch config." },
      { type: "step", number: 7, title: "Save and Disconnect", content: "Save the configuration, then unplug the console cable from the switch.", code: "save\nYes" },
      { type: "step", number: 8, title: "Power Down", content: "You can now unplug the power cord of the switch." }
    ]
  },
  {
    type: "device",
    slug: "fortinet-firewall-setup",
    title: "Fortinet Firewall Setup",
    description: "Initial configuration and restoration procedure for Fortinet firewalls at new store deployments.",
    steps: 13,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Initial Connection" },
      { type: "step", number: 1, title: "Connect to Firewall", content: "Connect an RJ45 cable from the Macbook into Port 1 of the Fortinet firewall." },
      { type: "step", number: 2, title: "Configure Network Settings", content: "Open Macbook Settings, turn off WiFi, and go to Network. Navigate to LAN and note the IP address of the firewall.", note: "The firewall IP is most likely 192.168.1.99." },
      { type: "step", number: 3, title: "Access Firewall Web Interface", content: "Copy the IP address and paste it into Safari. Log in with the default credentials.", code: "Username: admin\nPassword: (blank — just press Enter)" },
      { type: "heading", text: "Setup Wizard" },
      { type: "step", number: 4, title: "Set Temporary Password", content: "The firewall will prompt you to enter a new password. Enter the temporary password.", code: "test", warning: "This is a temporary password. The configuration file from Sir Ross will overwrite it with the production password." },
      { type: "step", number: 5, title: "Relogin with New Password", content: "Log in again with the temporary credentials.", code: "Username: admin\nPassword: test" },
      { type: "step", number: 6, title: "Complete Setup Wizard", content: "Go through the setup wizard sequence to skip automatic updates and cloud registration.", code: "Click: Begin\nClick: Later\nDisable automatic patch upgrades\nSave and Continue\nClick: Later" },
      { type: "heading", text: "Configuration Restoration" },
      { type: "step", number: 7, title: "Navigate to Restore", content: "Click Profile in the upper right corner, go to Configuration, then click Restore." },
      { type: "step", number: 8, title: "Upload Configuration File", content: "Get the configuration file from Sir Ross. Upload it in the File option, then click OK and confirm.", warning: "Verify the config file is for the correct store before uploading." },
      { type: "step", number: 9, title: "Wait for Reboot", content: "Wait for the firewall to reboot. This may take a few minutes." },
      { type: "heading", text: "Verification" },
      { type: "step", number: 10, title: "Check New IP Address", content: "Go to Network settings and check the newly assigned IP address.", note: "It should be 192.168.1.1." },
      { type: "step", number: 11, title: "Login to New IP", content: "Open Safari and enter the management URL. This should take you back to the login page.", code: "https://192.168.1.1:4444" },
      { type: "step", number: 12, title: "Verify Configuration", content: "Enter credentials and check the interfaces, addresses, policies, and everything needed for the store deployment.", note: "Confirm all settings match the store's network plan before proceeding." },
      { type: "heading", text: "Shutdown" },
      { type: "step", number: 13, title: "Properly Shutdown Firewall", content: "After everything is checked, properly shutdown the firewall by clicking Profile at the upper right corner.", warning: "Do not disconnect power without properly shutting down. This can corrupt the configuration." }
    ]
  },
  {
    type: "device",
    slug: "extreme-ap-setup",
    title: "Extreme Access Point Setup",
    description: "Physical setup, cloud onboarding, and verification procedure for Extreme Networks access points.",
    steps: 9,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Physical Setup" },
      { type: "step", number: 1, title: "Connect AP to Injector", content: "Connect the Access Point to an AP Injector. The injector connects to a power outlet (making the LAN cable PoE) and to the WAN for internet access." },
      { type: "step", number: 2, title: "Get the Serial Number", content: "Locate and note the serial number printed on the bottom side of the Access Point." },
      { type: "heading", text: "Cloud Onboarding" },
      { type: "step", number: 3, title: "Login to ExtremeCloud IQ", content: "Go to sso.extremeloudiq.com and log in with your credentials." },
      { type: "step", number: 4, title: "Navigate to Classic Dashboard", content: "On the upper right corner, click the grid icon (Apps), then click ExtremeCloud IQ (Classic)." },
      { type: "step", number: 5, title: "Add Device", content: "Click the + (Add) icon, then click Quick Add Devices, then select Manage your devices directly from the cloud." },
      { type: "step", number: 6, title: "Enter Device Details", content: "Input the serial number of the Access Point. CloudIQ Engine should be selected by default. Choose the store location and pick the policy type assigned to the store. Click Add Devices." },
      { type: "step", number: 7, title: "Rename the Access Point", content: "Input the serial number in the search bar to locate the AP. Check the box next to it, then click the Pen (Edit) icon. Change the Hostname using the naming format.", code: "Format: [Store]_[Location]_[AP Number]\nExample: TL_SM_City_Sucat_AP1" },
      { type: "heading", text: "Verification" },
      { type: "step", number: 8, title: "Wait for Reboot and Update", content: "Wait for the Access Point to reboot and complete its update. This may take several minutes." },
      { type: "step", number: 9, title: "Confirm SSIDs", content: "Open your WiFi settings. Once the store's SSIDs appear as available networks, the Access Point has been properly set up." }
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
    sections: [
      { type: "heading", text: "Console Connection & Login" },
      { type: "step", number: 1, title: "Connect and Login", content: "Connect console cable, open terminal, and navigate to the switch.", code: "cd /dev\nls\nscreen tty.usb (press tab)\n\nUsername: admin\nPassword: (blank)" },
      { type: "heading", text: "Factory Reset" },
      { type: "step", number: 2, title: "Factory Reset Switch", content: "Reset the switch to factory defaults and skip security setup.", code: "unconfig switch all\nYes\nQuit", warning: "This erases all existing configuration." },
      { type: "step", number: 3, title: "Delete Default Port Configs", content: "Clear all default port configurations.", code: "conf def del por all" },
      { type: "heading", text: "Port Configuration" },
      { type: "step", number: 4, title: "Set Port Display Strings", content: "Label the ports for firewall and access points.", code: "configure ports 1 display-string FW-TL_PMCF\nconfigure ports 2 display-string FW-The_Loop\nconfigure ports 9 display-string AP1\nconfigure ports 10 display-string AP2" },
      { type: "heading", text: "VLAN Configuration" },
      { type: "step", number: 5, title: "Create VLAN TL_PMCF (Tag 133)", content: "Create and configure the PMCF VLAN.", code: "cre vlan tl_pmcf tag 133\nconf \"tl_pmcf\" ipaddress 192.168.1.3/24\nconf \"tl_pmcf\" add po 1,3-20" },
      { type: "step", number: 6, title: "Create VLAN The_Loop (Tag 134)", content: "Create and configure The Loop VLAN with AP tagging.", code: "cre vlan The_Loop tag 134\nconf vlan \"The_Loop\" ipaddress 192.168.2.3/24\nconf \"The_Loop\" add por 9-11 t\nconf \"The_Loop\" add por 2,21-24" },
      { type: "heading", text: "Accounts & SNMP" },
      { type: "step", number: 7, title: "Create Accounts", content: "Set up admin, user, and individual accounts.", code: "Config account admin password\nNSP@ssword2026!\n\nConfig account user password\nNSUs3r2026!\n\nCreate Account User GianKarlo\nGKRamos@2025" },
      { type: "step", number: 8, title: "Set SNMP System Name", content: "Configure the SNMP system name for the switch.", code: "conf snmp sysName <switch-name>" },
      { type: "heading", text: "Save" },
      { type: "step", number: 9, title: "Save Configuration", content: "Save all changes to the switch.", code: "save\nYes" }
    ]
  },
  {
    type: "template",
    slug: "rbt-switch-config",
    title: "RBT Switch Configuration",
    description: "Extreme Networks switch configuration for RBT store. Includes VLANs for PCustomer, PEmployee, PMCF, and PDemo with AP tagging.",
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Reset & Port Configuration" },
      { type: "step", number: 1, title: "Delete All Port Configurations", content: "Clear all existing port configurations.", code: "configure default delete ports all" },
      { type: "step", number: 2, title: "Set Port Display Strings", content: "Label all ports for firewalls and access points.", code: "configure ports 1 display-string \"FW-PMCF\"\nconfigure ports 2 display-string \"FW-PDemo\"\nconfigure ports 3 display-string \"FW-PCustomer\"\nconfigure ports 4 display-string \"FW-PEmployee\"\nconfigure ports 9 display-string \"AP1\"\nconfigure ports 10 display-string \"AP2\"\nconfigure ports 11 display-string \"AP3\"" },
      { type: "heading", text: "VLAN Configuration" },
      { type: "step", number: 3, title: "Create VLAN PCustomer (Tag 140)", content: "Customer VLAN with AP tagging.", code: "create vlan \"PCustomer\" tag 140\nconfigure vlan \"PCustomer\" ipaddress 192.168.3.3/24\nconfigure vlan \"PCustomer\" add ports 3\nconfigure vlan \"PCustomer\" add ports 9-11 tagged" },
      { type: "step", number: 4, title: "Create VLAN PEmployee (Tag 150)", content: "Employee VLAN with AP tagging.", code: "create vlan \"PEmployee\" tag 150\nconfigure vlan \"PEmployee\" ipaddress 192.168.4.3/24\nconfigure vlan \"PEmployee\" add ports 4\nconfigure vlan \"PEmployee\" add ports 9-11 tagged" },
      { type: "step", number: 5, title: "Create VLAN PMCF (Tag 151)", content: "PMCF VLAN for corporate access.", code: "create vlan \"PMCF\" tag 151\nconfigure vlan \"PMCF\" ipaddress 192.168.1.3/24\nconfigure vlan \"PMCF\" add ports 1, 5-19, 20" },
      { type: "step", number: 6, title: "Create VLAN PDemo (Tag 130)", content: "Demo VLAN with AP tagging.", code: "create vlan \"PDemo\" tag 130\nconfigure vlan \"PDemo\" ipaddress 192.168.2.3/24\nconfigure vlan \"PDemo\" add ports 9-11 tagged\nconfigure vlan \"PDemo\" add ports 2, 21-24" },
      { type: "heading", text: "SNMP & Save" },
      { type: "step", number: 7, title: "Set SNMP System Name", content: "Configure the SNMP system name.", code: "configure snmp sysname \"Switch-System\"" },
      { type: "step", number: 8, title: "Save Configuration", content: "Save all changes to the switch.", code: "save\ny" }
    ]
  },
  {
    type: "template",
    slug: "blocking-ssh-telnet-exos",
    title: "Blocking SSH and Telnet in EXOS — Policy File",
    description: "Step-by-step guide with copyable commands to create and apply an EXOS policy file that blocks SSH and Telnet traffic.",
    lastUpdated: "July 2026",
    sections: [
      { type: "heading", text: "Create & Edit Policy" },
      { type: "step", number: 1, title: "Create or Edit the Policy File", content: "Open the built-in EXOS text editor to create the policy file.", code: "edit policy block_mgmt.pol", note: "If the switch asks whether you want to create a new file, select Yes." },
      { type: "step", number: 2, title: "Paste the Policy Configuration", content: "Copy and paste the configuration below into the editor.", code: "entry deny_ssh_and_telnet {\n    if {\n        protocol tcp;\n        destination-port 22-23;\n    }\n    then {\n        deny;\n    }\n}\n\nentry allow_all {\n    if {\n    }\n    then {\n        permit;\n    }\n}", note: "Save & Exit: Press Esc, then Shift + zz, then Enter." },
      { type: "heading", text: "Verify & Apply" },
      { type: "step", number: 3, title: "Verify the Policy Syntax", content: "Check for typos or syntax errors before applying.", code: "check policy block_mgmt", note: "Expected: \"Policy file check successful.\"" },
      { type: "step", number: 4, title: "Apply Policy to VLANs (AAR)", content: "Apply the block_mgmt policy to ingress traffic on AAR VLANs.", code: "configure access-list block_mgmt vlan PCustomer ingress\nconfigure access-list block_mgmt vlan PDemo ingress\nconfigure access-list block_mgmt vlan PEmployee ingress\nconfigure access-list block_mgmt vlan Extranet ingress" },
      { type: "step", number: 5, title: "Apply Policy to VLANs (The Loop)", content: "Apply the block_mgmt policy to ingress traffic on The Loop VLAN.", code: "configure access-list block_mgmt vlan The_Loop ingress" },
      { type: "heading", text: "Verify & Save" },
      { type: "step", number: 6, title: "Verify Application & Counters", content: "Check ACL counters to confirm the policy is active and blocking traffic.", code: "show access-list counter vlan PCustomer ingress", note: "Replace PCustomer with other VLAN names as needed." },
      { type: "step", number: 7, title: "Save Configuration", content: "Save the running configuration so changes persist after reboot.", code: "save", note: "Press y (Yes) when prompted." }
    ]
  }
];
