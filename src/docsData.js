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
    slug: "store-network-deployment",
    title: "Store Network Deployment Guide",
    description: "Step-by-step procedure for deploying network infrastructure at new store locations.",
    steps: 13,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Pre-Deployment Preparation" },
      { type: "paragraph", text: "Before heading to the site, ensure all equipment is accounted for and pre-configured where possible. This SOP covers the standard deployment for a single-floor retail location." },
      {
        type: "step",
        number: 1,
        title: "Verify Equipment Checklist",
        content: "Confirm the following items are packed and ready: Catalyst switch, Fortigate/SD-WAN edge device, patch cables (12x Cat6), console cable, power strips, UPS unit, label maker, and laptop with console access.",
        note: "Keep a digital copy of this checklist on your phone. Take photos of all serial numbers before leaving the office."
      },
      {
        type: "step",
        number: 2,
        title: "Pre-Configure Switch",
        content: "At the office, connect to the switch via console and load the base configuration template. Verify VLANs, management IP, and SSH access before packing.",
        code: "enable\nconfigure terminal\nhostname STORE-XXX-SW01\nip default-gateway 10.XXX.0.1\ninterface vlan 1\n ip address 10.XXX.0.10 255.255.255.0\n no shutdown\nexit\nline vty 0 15\n transport input ssh\n login local\nexit\nusername admin privilege 15 secret [REDACTED]\nend\nwrite memory",
        note: "Use the switch base config template from the Templates section. Replace XXX with the store number."
      },
      {
        type: "step",
        number: 3,
        title: "Site Arrival — Power Audit",
        content: "Upon arrival, locate the IT closet or designated network area. Verify available power outlets. Check UPS load capacity before connecting equipment.",
        warning: "Do NOT connect any equipment to power before confirming the outlet is properly grounded."
      },
      {
        type: "step",
        number: 4,
        title: "Rack or Mount Equipment",
        content: "Mount the switch and SD-WAN device on the provided rack or wall mount bracket. Leave at least 1U of space above and below for ventilation."
      },
      {
        type: "step",
        number: 5,
        title: "Connect Uplink / ISP Circuit",
        content: "Connect the ISP-provided handoff to the WAN port of the SD-WAN device. Confirm link lights. If no link, contact ISP NOC.",
        note: "Document the ISP circuit ID, static IP, and NOC contact number in your deployment report."
      },
      { type: "heading", text: "Switch Configuration" },
      {
        type: "step",
        number: 6,
        title: "Console into Switch and Verify Config",
        content: "Connect console cable and verify the pre-loaded configuration. Check VLAN database and interface status.",
        code: "show version\nshow vlan brief\nshow ip interface brief\nshow running-config"
      },
      {
        type: "step",
        number: 7,
        title: "Configure Access Ports",
        content: "Assign access VLANs to all edge ports connecting workstations, printers, and APs.",
        code: "interface range gigabitEthernet 0/1-24\n switchport mode access\n switchport access vlan 10\n spanning-tree portfast\n spanning-tree bpduguard enable\n no shutdown\nexit"
      },
      {
        type: "step",
        number: 8,
        title: "Configure Trunk Ports",
        content: "Configure uplinks as trunks for inter-switch connections or APs carrying multiple VLANs.",
        code: "interface gigabitEthernet 0/25\n switchport mode trunk\n switchport trunk allowed vlan 10,20,30\n no shutdown\nexit"
      },
      { type: "heading", text: "SD-WAN / Edge Device" },
      {
        type: "step",
        number: 9,
        title: "Power On SD-WAN Device",
        content: "Connect power to the edge device and wait for full boot (approximately 3-5 minutes). Status LED should turn solid green."
      },
      {
        type: "step",
        number: 10,
        title: "Verify Cloud Registration",
        content: "Log into the SD-WAN cloud dashboard and verify the new device appears online with the correct configuration profile.",
        note: "If the device does not appear within 10 minutes, check WAN connectivity and DNS settings."
      },
      { type: "heading", text: "Verification & Handoff" },
      {
        type: "step",
        number: 11,
        title: "Connectivity Testing",
        content: "Connect a test laptop to a data port. Verify DHCP lease, internet access, internal services, and DNS resolution.",
        code: "ipconfig /all\nping 8.8.8.8\nping 10.0.0.5\nnslookup internal.company.com"
      },
      {
        type: "step",
        number: 12,
        title: "Label Everything",
        content: "Label all cables on both ends. Label the switch, SD-WAN device, and UPS with store code and installation date."
      },
      {
        type: "step",
        number: 13,
        title: "Documentation & Sign-Off",
        content: "Complete the deployment report with serial numbers, IP addresses, circuit ID, rack photos, and issues encountered. Get store manager sign-off.",
        note: "Upload the deployment report to the shared drive within 24 hours."
      }
    ]
  },
  {
    type: "sop",
    slug: "sdwan-onboarding",
    title: "SD-WAN Device Onboarding",
    description: "Procedure for adding a new SD-WAN edge device to the cloud management platform.",
    steps: 8,
    lastUpdated: "April 2026",
    sections: [
      { type: "heading", text: "Prerequisites" },
      { type: "list", items: [
        "Cloud management dashboard access (admin credentials)",
        "Device serial number and MAC address",
        "Site static WAN IP (if applicable)",
        "LAN subnet plan for the site"
      ]},
      { type: "heading", text: "Procedure" },
      {
        type: "step",
        number: 1,
        title: "Create Site in Dashboard",
        content: "Log into the SD-WAN cloud dashboard. Navigate to Sites > Add Site. Fill in site name, address, and time zone.",
        note: "Naming convention: STORE-NUMBER-CITY. Example: STORE-142-MAKATI"
      },
      {
        type: "step",
        number: 2,
        title: "Claim Device",
        content: "Navigate to Devices > Claim Device. Enter the device serial number and MAC address. Assign to the site created in Step 1."
      },
      {
        type: "step",
        number: 3,
        title: "Assign Configuration Profile",
        content: "Select the appropriate configuration profile. For standard retail stores, use the Retail-Branch-Standard profile.",
        warning: "Do NOT assign HQ profile to branch devices. This will cause IP conflicts."
      },
      {
        type: "step",
        number: 4,
        title: "Configure WAN Interface",
        content: "Set the WAN interface. For static IP, enter the ISP-provided details. For DHCP, leave as default.",
        code: "Interface: WAN1\nConnection: Static IP\nIP: [ISP-PROVIDED]\nSubnet: [ISP-PROVIDED]\nGateway: [ISP-PROVIDED]\nDNS: 8.8.8.8, 1.1.1.1"
      },
      {
        type: "step",
        number: 5,
        title: "Configure LAN Networks",
        content: "Add site VLANs and subnets. Standard: Data VLAN 10, Voice VLAN 20, Guest VLAN 30.",
        code: "VLAN 10 - Data: 10.X.10.0/24 DHCP\nVLAN 20 - Voice: 10.X.20.0/24 DHCP\nVLAN 30 - Guest: 10.X.30.0/24 DHCP Isolated"
      },
      {
        type: "step",
        number: 6,
        title: "Configure VPN Tunnels",
        content: "Verify auto-VPN is enabled. The device will automatically build tunnels to hub devices per template policy."
      },
      {
        type: "step",
        number: 7,
        title: "Review and Push Config",
        content: "Review all settings. Click Push Configuration. The device will receive config on next check-in."
      },
      {
        type: "step",
        number: 8,
        title: "Verify Device Online Status",
        content: "Wait 2-3 minutes. Navigate to Devices and verify the device shows Online with green status. Confirm VPN tunnels are up.",
        note: "If offline, check WAN connectivity, DNS, NTP sync, and firewall rules allowing HTTPS outbound."
      }
    ]
  },
  {
    type: "sop",
    slug: "fiber-troubleshooting",
    title: "Fiber Link Troubleshooting",
    description: "Systematic approach to diagnose and resolve fiber optic link issues in the field.",
    steps: 11,
    lastUpdated: "May 2026",
    sections: [
      { type: "heading", text: "Initial Assessment" },
      { type: "paragraph", text: "Fiber issues typically manifest as complete link loss, intermittent flapping, or high error rates. Follow this procedure in order." },
      {
        type: "step",
        number: 1,
        title: "Check Physical Link Indicators",
        content: "On both ends, check SFP/transceiver LED indicators. No light means no transmit signal. Also check switch port status LED."
      },
      {
        type: "step",
        number: 2,
        title: "Verify SFP Compatibility",
        content: "Confirm both SFPs are the same type (single-mode vs multi-mode) and same speed. Mismatched SFPs are the number one cause of fiber link failures.",
        warning: "Single-mode SFPs require single-mode fiber (yellow jacket). Multi-mode SFPs require multi-mode fiber (orange/aqua jacket). Mixing will not work."
      },
      { type: "heading", text: "Layer 1 Diagnostics" },
      {
        type: "step",
        number: 3,
        title: "Check SFP Diagnostics",
        content: "On managed switches, view Digital Optical Monitoring data showing TX power, RX power, temperature, and voltage.",
        code: "show interfaces transceiver detail\nshow interfaces gigabitEthernet 0/25 transceiver"
      },
      {
        type: "step",
        number: 4,
        title: "Interpret Power Levels",
        content: "Compare RX power against the receiver sensitivity (typically -17dBm to -24dBm). Below threshold indicates excessive loss.",
        note: "Healthy short link RX: -3dBm to -12dBm. Below -20dBm is marginal. Below -24dBm is likely down."
      },
      {
        type: "step",
        number: 5,
        title: "Clean Connectors",
        content: "Using a fiber cleaning tool or lint-free wipes with isopropyl alcohol, clean both SFP port and fiber connector end-face. Reconnect and re-test.",
        note: "80% of failed fiber links are fixed by cleaning. Always clean before replacing hardware."
      },
      { type: "heading", text: "Advanced Diagnostics" },
      {
        type: "step",
        number: 6,
        title: "Swap SFP Modules",
        content: "Replace the SFP on one end with a known-good compatible SFP. If the link comes up, the removed SFP is faulty."
      },
      {
        type: "step",
        number: 7,
        title: "Roll the Fiber Pair",
        content: "Swap TX and RX connectors at one end. If link comes up, the fiber pair was reversed during installation."
      },
      {
        type: "step",
        number: 8,
        title: "Use a Visual Fault Locator",
        content: "Connect a VFL (red laser pen) to one end. Walk to the other end and look for the red light. No light indicates a break.",
        warning: "Never look directly into the fiber end or VFL output. Use a phone camera or paper reflection."
      },
      {
        type: "step",
        number: 9,
        title: "OTDR Testing",
        content: "If available, use an Optical Time Domain Reflectometer to identify exact break locations or excessive loss points.",
        note: "OTDR testing requires training. Escalate to fiber team if not certified."
      },
      { type: "heading", text: "Resolution & Escalation" },
      {
        type: "step",
        number: 10,
        title: "Replace Patch Cables",
        content: "If cleaning and swapping SFPs do not resolve the issue, replace the fiber patch cable entirely."
      },
      {
        type: "step",
        number: 11,
        title: "Escalate to Fiber Team",
        content: "If all steps fail, escalate with site location, fiber pair ID, link loss measurements, and steps already taken.",
        note: "Include site code, circuit ID, TX/RX power readings from both ends, and timestamp of last known working state."
      }
    ]
  }
];

export const templates = [
  {
    type: "template",
    slug: "switch-base-config",
    title: "Switch Base Configuration",
    description: "Standard base configuration template for Cisco Catalyst access switches deployed at store locations.",
    lastUpdated: "May 2026",
    content: "! === STORE SWITCH BASE CONFIG ===\n! Template version: 2.1\n! Last updated: May 2026\n\nenable\nconfigure terminal\n\n! --- Device Identity ---\nhostname STORE-XXX-SW01\nbanner motd # STORE XXX - ACCESS SWITCH - UNAUTHORIZED ACCESS PROHIBITED #\n\n! --- Management ---\ninterface vlan 1\n description MANAGEMENT\n ip address 10.XXX.0.10 255.255.255.0\n no shutdown\nexit\nip default-gateway 10.XXX.0.1\n\n! --- AAA ---\naaa new-model\nusername admin privilege 15 secret [SET_STRONG_PASSWORD]\nenable secret [SET_ENABLE_SECRET]\nline vty 0 15\n transport input ssh\n login local\nexit\nip ssh version 2\ncrypto key generate rsa modulus 2048\n\n! --- VLANs ---\nvlan 10\n name DATA\nexit\nvlan 20\n name VOICE\nexit\nvlan 30\n name GUEST\nexit\nvlan 99\n name MGMT_NATIVE\nexit\n\n! --- Spanning Tree ---\nspanning-tree mode rapid-pvst\nspanning-tree portfast default\nspanning-tree portfast bpduguard default\n\n! --- NTP ---\nntp server 10.0.0.5\nclock timezone PHT 8\n\n! --- Syslog ---\nlogging 10.0.0.10\nlogging trap notifications\n\n! --- SNMP (Read-Only) ---\nsnmp-server community [READONLY_STRING] RO\nsnmp-server location STORE-XXX\nsnmp-server contact NOC@company.com\n\n! --- Save ---\nend\nwrite memory\ncopy running-config startup-config"
  },
  {
    type: "template",
    slug: "vlan-template",
    title: "VLAN Configuration",
    description: "Standard VLAN assignment template for different port types in retail stores.",
    lastUpdated: "April 2026",
    content: "! === VLAN CONFIGURATION TEMPLATE ===\n! Template version: 2.0\n\n! --- Create VLANs ---\nvlan 10\n name DATA\nexit\nvlan 20\n name VOICE\nexit\nvlan 30\n name GUEST\nexit\nvlan 40\n name CCTV\nexit\nvlan 99\n name MGMT_NATIVE\nexit\n\n! --- Data Port (Workstation/Printer) ---\ninterface GigabitEthernet0/X\n description USER_DATA_PORT\n switchport mode access\n switchport access vlan 10\n switchport voice vlan 20\n spanning-tree portfast\n spanning-tree bpduguard enable\n no shutdown\nexit\n\n! --- Voice Port (IP Phone only) ---\ninterface GigabitEthernet0/X\n description VOICE_ONLY\n switchport mode access\n switchport access vlan 20\n spanning-tree portfast\n no shutdown\nexit\n\n! --- CCTV Port ---\ninterface GigabitEthernet0/X\n description CCTV_CAMERA\n switchport mode access\n switchport access vlan 40\n spanning-tree portfast\n no shutdown\nexit\n\n! --- Trunk Port (Uplink to Distribution) ---\ninterface GigabitEthernet0/24\n description UPLINK_TO_DISTRIBUTION\n switchport mode trunk\n switchport trunk native vlan 99\n switchport trunk allowed vlan 10,20,30,40,99\n no shutdown\nexit\n\n! --- Guest AP Port ---\ninterface GigabitEthernet0/X\n description GUEST_AP\n switchport mode trunk\n switchport trunk native vlan 30\n switchport trunk allowed vlan 10,20,30\n no shutdown\nexit\n\n! --- Verify ---\nshow vlan brief\nshow interfaces trunk"
  },
  {
    type: "template",
    slug: "acl-template",
    title: "Access Control List Template",
    description: "Standard ACL templates for securing management access and guest isolation at store locations.",
    lastUpdated: "May 2026",
    content: "! === ACL TEMPLATES ===\n! Template version: 2.1\n\n! --- Management ACL (Apply to VTY lines) ---\nip access-list extended MGMT-ACCESS\n permit ip 10.0.0.0 0.0.0.255 any\n permit ip host 10.0.0.5 any\n permit ip host 10.0.0.10 any\n deny ip any any log\nexit\n\nline vty 0 15\n access-class MGMT-ACCESS in\nexit\n\n! --- Guest Isolation ACL ---\nip access-list extended GUEST-ISOLATION\n permit udp any any eq bootps\n permit udp any any eq bootpc\n permit udp any host 8.8.8.8 eq domain\n permit udp any host 1.1.1.1 eq domain\n permit tcp any any eq 80\n permit tcp any any eq 443\n deny ip any 10.0.0.0 0.255.255.255 log\n deny ip any 192.168.0.0 0.0.255.255 log\n deny ip any 172.16.0.0 0.15.255.255 log\n permit ip any any\nexit\n\ninterface vlan 30\n description GUEST\n ip access-group GUEST-ISOLATION in\nexit\n\n! --- Verify ACLs ---\nshow access-lists\nshow ip access-lists"
  }
];
