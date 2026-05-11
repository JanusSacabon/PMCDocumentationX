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
  },
  {
    type: "sop",
    slug: "extreme-switch-setup",
    title: "Extreme Switch Setup",
    description: "Console-based factory reset and initial configuration procedure for Extreme Networks switches.",
    steps: 8,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Console Connection" },
      {
        type: "step",
        number: 1,
        title: "Connect to Switch via Console",
        content: "Connect to the switch using an RJ45 console cable. Open Terminal on the Macbook."
      },
      {
        type: "step",
        number: 2,
        title: "Locate the Switch in Terminal",
        content: "Input the following commands in Terminal to locate the switch. Press Enter after each step.",
        code: "cd /dev\nls\nscreen tty.usb (press tab)"
      },
      {
        type: "step",
        number: 3,
        title: "Login to Switch",
        content: "Enter the login credentials.",
        code: "Username: admin\nPassword: (blank)",
        note: "Default credentials — just press Enter for the password."
      },
      { type: "heading", text: "Factory Reset" },
      {
        type: "step",
        number: 4,
        title: "Factory Reset the Switch",
        content: "Input the following command to factory reset the switch, then confirm.",
        code: "unconfig switch all\nyes",
        warning: "This erases all existing configuration on the switch. Ensure this is the correct device before proceeding."
      },
      {
        type: "step",
        number: 5,
        title: "Skip Security Configuration",
        content: "In the next security choice prompt, input quit to skip.",
        code: "quit"
      },
      { type: "heading", text: "Configuration & Finish" },
      {
        type: "step",
        number: 6,
        title: "Enter Store-Specific Configuration",
        content: "Switch configuration begins. Enter the store-specific switch configuration as provided.",
        note: "Refer to the switch configuration template for the specific store."
      },
      {
        type: "step",
        number: 7,
        title: "Save and Disconnect",
        content: "Save the configuration, then unplug the console cable from the switch.",
        code: "save\nYes"
      },
      {
        type: "step",
        number: 8,
        title: "Power Down",
        content: "You can now unplug the power cord of the switch."
      }
    ]
  },
    {
    type: "sop",
    slug: "fortinet-firewall-setup",
    title: "Fortinet Firewall Setup",
    description: "Initial configuration and restoration procedure for Fortinet firewalls at new store deployments.",
    steps: 13,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Initial Connection" },
      {
        type: "step",
        number: 1,
        title: "Connect to Firewall",
        content: "Connect an RJ45 cable from the Macbook into Port 1 of the Fortinet firewall."
      },
      {
        type: "step",
        number: 2,
        title: "Configure Network Settings",
        content: "Open Macbook Settings, turn off WiFi, and go to Network. Navigate to LAN and get the IP address of the firewall.",
        note: "The firewall IP is most likely 192.168.1.99."
      },
      {
        type: "step",
        number: 3,
        title: "Access Firewall Web Interface",
        content: "Copy the IP address and paste it into Safari. Log in with the default credentials.",
        code: "Username: admin\nPassword: (blank)"
      },
      { type: "heading", text: "Initial Setup Wizard" },
      {
        type: "step",
        number: 4,
        title: "Set Temporary Password",
        content: "The firewall will prompt you to enter a new password. Enter the temporary password.",
        code: "test",
        warning: "This is a temporary password for initial setup. The configuration file will set the production password."
      },
      {
        type: "step",
        number: 5,
        title: "Relogin with New Password",
        content: "Log in again with the temporary credentials.",
        code: "Username: admin\nPassword: test"
      },
      {
        type: "step",
        number: 6,
        title: "Complete Setup Wizard",
        content: "Go through the setup wizard sequence to skip automatic updates and cloud registration.",
        code: "Click: Begin\nClick: Later\nDisable automatic patch upgrades\nSave and Continue\nClick: Later"
      },
      { type: "heading", text: "Configuration Restoration" },
      {
        type: "step",
        number: 7,
        title: "Navigate to Restore",
        content: "Click Profile in the upper right corner, go to Configuration, then click Restore."
      },
      {
        type: "step",
        number: 8,
        title: "Upload Configuration File",
        content: "Get the configuration file from Sir Ross. Upload it in the File option, then click OK and confirm.",
        warning: "Verify the config file is for the correct store before uploading."
      },
      {
        type: "step",
        number: 9,
        title: "Wait for Reboot",
        content: "Wait for the firewall to reboot. This may take a few minutes."
      },
      { type: "heading", text: "Verification" },
      {
        type: "step",
        number: 10,
        title: "Check New IP Address",
        content: "Go to Network settings and check the newly assigned IP address.",
        note: "It should be 192.168.1.1."
      },
      {
        type: "step",
        number: 11,
        title: "Login to New IP",
        content: "Open Safari and enter the management URL. This should take you back to the login page.",
        code: "https://192.168.1.1:4444"
      },
      {
        type: "step",
        number: 12,
        title: "Verify Configuration",
        content: "Enter credentials and check the interfaces, addresses, policies, and everything needed for the store deployment.",
        note: "Confirm all settings match the store's network plan before proceeding."
      },
      { type: "heading", text: "Shutdown" },
      {
        type: "step",
        number: 13,
        title: "Properly Shutdown Firewall",
        content: "After everything is checked, properly shutdown the firewall by clicking Profile at the upper right corner.",
        warning: "Do not disconnect power without properly shutting down. This can corrupt the configuration."
      }
    ]
  },
  
  {
    type: "sop",
    slug: "extreme-ap-setup",
    title: "Extreme Access Point Setup",
    description: "Physical setup, cloud onboarding, and verification procedure for Extreme Networks access points.",
    steps: 9,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Physical Setup" },
      {
        type: "step",
        number: 1,
        title: "Connect AP to Injector",
        content: "Connect the Access Point to an AP Injector. The injector connects to a power outlet (making the LAN cable PoE) and to the WAN for internet access."
      },
      {
        type: "step",
        number: 2,
        title: "Get the Serial Number",
        content: "Locate and note the serial number printed on the bottom side of the Access Point."
      },
      { type: "heading", text: "Cloud Onboarding" },
      {
        type: "step",
        number: 3,
        title: "Login to ExtremeCloud IQ",
        content: "Go to sso.extremeloudiq.com and log in with your credentials."
      },
      {
        type: "step",
        number: 4,
        title: "Navigate to Classic Dashboard",
        content: "On the upper right corner, click the grid icon (Apps), then click ExtremeCloud IQ (Classic)."
      },
      {
        type: "step",
        number: 5,
        title: "Add Device",
        content: "Click the + (Add) icon, then click Quick Add Devices, then select Manage your devices directly from the cloud."
      },
      {
        type: "step",
        number: 6,
        title: "Enter Device Details",
        content: "Input the serial number of the Access Point. CloudIQ Engine should be selected by default. Choose the store location and pick the policy type assigned to the store. Click Add Devices."
      },
      {
        type: "step",
        number: 7,
        title: "Rename the Access Point",
        content: "Input the serial number in the search bar to locate the AP. Check the box next to it, then click the Pen (Edit) icon. Change the Hostname using the naming format.",
        code: "Format: [Store]_[Location]_[AP Number]\nExample: TL_SM_City_Sucat_AP1"
      },
      { type: "heading", text: "Verification" },
      {
        type: "step",
        number: 8,
        title: "Wait for Reboot and Update",
        content: "Wait for the Access Point to reboot and complete its update. This may take several minutes."
      },
      {
        type: "step",
        number: 9,
        title: "Confirm SSIDs",
        content: "Open your WiFi settings. Once the store's SSIDs appear as available networks, the Access Point has been properly set up."
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
    content: "! === THE LOOP SWITCH CONFIG ===\n! Requires console cable to configure\n! Last updated: May 2026\n\n! --- Connect via Console ---\n! 1. Connect console cable\n! 2. Open terminal\n! 3. Run: cd /dev\n! 4. Run: ls\n! 5. Run: screen tty.usb !(press tab, no space)\n\n! --- Login ---\nUsername: admin\nPassword: !(blank)\n\n! --- Factory Reset ---\nUnconfig switch all !(to factory reset)\nYes\nQuit\n\n! --- Delete Default Ports Config ---\nconf def del por all\n\n! --- Port Display Strings ---\nconfigure ports 1 display-string FW-TL_PMCF\nconfigure ports 2 display-string FW-The_Loop\nconfigure ports 9 display-string AP1\nconfigure ports 10 display-string AP2\n\n! --- VLAN: TL_PMCF (Tag 133) ---\ncre vlan tl_pmcf tag 133\nconf \"tl_pmcf\" ipaddress 192.168.1.3/24\nconf \"tl_pmcf\" add po 1,3-20\n\n! --- VLAN: The_Loop (Tag 134) ---\ncre vlan The_Loop tag 134\nconf vlan \"The_Loop\" ipaddress 192.168.2.3/24\nconf \"The_Loop\" add por 9-11 t\nconf \"The_Loop\" add por 2,21-24\n\n! --- Account: Admin ---\nConfig account admin password\nNSP@ssword2026!\n\n! --- Account: User ---\nConfig account user password\nNSUs3r2026!\n\n! --- Account: GianKarlo ---\nCreate Account User GianKarlo\nGKRamos@2025\n\n! --- SNMP ---\nconf snmp sysName <switch-name>\n\n! --- Save ---\nsave\nYes"
  },
  {
    type: "template",
    slug: "rbt-switch-config",
    title: "RBT Switch Configuration",
    description: "Extreme Networks switch configuration for RBT store. Includes VLANs for PCustomer, PEmployee, PMCF, and PDemo with AP tagging.",
    lastUpdated: "May 2026",
    content: "! === RBT SWITCH CONFIG ===\n! Extreme Networks Switch\n! Last updated: May 2026\n\n! --- Delete All Port Configurations ---\nconfigure default delete ports all\n\n! --- Port Display Strings ---\nconfigure ports 1 display-string \"FW-PMCF\"\nconfigure ports 2 display-string \"FW-PDemo\"\nconfigure ports 3 display-string \"FW-PCustomer\"\nconfigure ports 4 display-string \"FW-PEmployee\"\nconfigure ports 9 display-string \"AP1\"\nconfigure ports 10 display-string \"AP2\"\nconfigure ports 11 display-string \"AP3\"\n\n! --- VLAN: PCustomer (Tag 140) ---\ncreate vlan \"PCustomer\" tag 140\nconfigure vlan \"PCustomer\" ipaddress 192.168.3.3/24\nconfigure vlan \"PCustomer\" add ports 3\nconfigure vlan \"PCustomer\" add ports 9-11 tagged\n\n! --- VLAN: PEmployee (Tag 150) ---\ncreate vlan \"PEmployee\" tag 150\nconfigure vlan \"PEmployee\" ipaddress 192.168.4.3/24\nconfigure vlan \"PEmployee\" add ports 4\nconfigure vlan \"PEmployee\" add ports 9-11 tagged\n\n! --- VLAN: PMCF (Tag 151) ---\ncreate vlan \"PMCF\" tag 151\nconfigure vlan \"PMCF\" ipaddress 192.168.1.3/24\nconfigure vlan \"PMCF\" add ports 1, 5-19, 20\n\n! --- VLAN: PDemo (Tag 130) ---\ncreate vlan \"PDemo\" tag 130\nconfigure vlan \"PDemo\" ipaddress 192.168.2.3/24\nconfigure vlan \"PDemo\" add ports 9-11 tagged\nconfigure vlan \"PDemo\" add ports 2, 21-24\n\n! --- SNMP ---\nconfigure snmp sysname \"Switch-System\"\n\n! --- Save ---\nsave\ny"
  }
];
