export type PortalModule = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

export type PortalConfig = {
  company: { name: string; descriptor: string; initials: string };
  branding: { primary: string; secondary: string; accent: string };
  modules: PortalModule[];
  roles: { name: string; scope: string }[];
  integrations: { name: string; category: string; description: string; connected: boolean }[];
};

export const portalConfig: PortalConfig = {
  company: { name: "Nicom AI", descriptor: "Business workspace", initials: "N" },
  branding: { primary: "#10B981", secondary: "#0EA5E9", accent: "#38BDF8" },
  modules: [
    { id: "overview", label: "Dashboard", description: "Business overview and approvals", enabled: true },
    { id: "workforce", label: "AI Workforce", description: "Team status, tasks, and permissions", enabled: true },
    { id: "sales", label: "Sales & Leads", description: "Lead flow and pipeline management", enabled: true },
    { id: "customers", label: "Customers", description: "Customer records and communication", enabled: true },
    { id: "marketing", label: "Marketing", description: "Campaigns and content approvals", enabled: true },
    { id: "accounting", label: "Accounting", description: "Invoices and finance administration", enabled: true },
    { id: "documents", label: "Documents", description: "Business documents and review", enabled: true },
    { id: "reports", label: "Reports", description: "Sales, finance, and productivity", enabled: true },
    { id: "integrations", label: "Integrations", description: "Connected services and sync", enabled: true },
    { id: "settings", label: "Settings", description: "Workspace, people, and safeguards", enabled: true },
    { id: "audit", label: "Audit Log", description: "Chronological activity record", enabled: true },
  ],
  roles: [
    { name: "Owner", scope: "Full workspace control" },
    { name: "Administrator", scope: "People, settings, and operations" },
    { name: "Manager", scope: "Department workflows and approvals" },
    { name: "Staff", scope: "Assigned work and customer records" },
  ],
  integrations: [
    { name: "HubSpot", category: "CRM", description: "Contacts, companies, and deal stages", connected: false },
    { name: "Supabase", category: "Data", description: "Workspace database and authentication", connected: false },
    { name: "OpenAI", category: "AI", description: "Language and content workflows", connected: false },
    { name: "Google Gemini", category: "AI", description: "Research and multimodal assistance", connected: false },
    { name: "Wix", category: "Website", description: "Website events and business enquiries", connected: false },
    { name: "Dropbox", category: "Files", description: "Shared business documents", connected: false },
    { name: "WhatsApp", category: "Messaging", description: "Customer conversations and follow-up", connected: false },
    { name: "Email", category: "Messaging", description: "Business inbox and campaign delivery", connected: false },
    { name: "Social media", category: "Publishing", description: "Content scheduling and performance", connected: false },
  ],
};

export const aiEmployees = [
  {
    id: "john",
    name: "John",
    initials: "JO",
    role: "AI Manager · Operations Director",
    department: "Operations",
    status: "Working",
    tone: "green",
    tasks: 8,
    completed: 124,
    score: 96,
    focus: "Coordinating daily priorities",
    responsibilities: ["Oversees the AI workforce", "Plans daily priorities and allocates work", "Coordinates departments and monitors activity", "Coordinates website and social tasks", "Escalates important decisions to the owner"],
    activity: ["Reviewed team priorities · 9:42 am", "Assigned campaign review to Cathy · 9:15 am", "Escalated quarterly plan for approval · 8:50 am"],
  },
  {
    id: "jenny",
    name: "Jenny",
    initials: "JE",
    role: "AI Accounts Manager",
    department: "Finance",
    status: "Needs approval",
    tone: "blue",
    tasks: 5,
    completed: 87,
    score: 92,
    focus: "Preparing invoice INV-2048",
    responsibilities: ["Prepares invoices and payment reminders", "Assists with transaction allocation", "Supports bookkeeping and account administration", "Prepares financial documents and spreadsheets"],
    activity: ["Prepared invoice draft INV-2048 · 9:28 am", "Reconciled 12 sample transactions · 8:46 am", "Flagged payment mismatch for review · Yesterday"],
  },
  {
    id: "cathy",
    name: "Cathy",
    initials: "CA",
    role: "AI Sales & Marketing Manager",
    department: "Growth",
    status: "Active",
    tone: "violet",
    tasks: 12,
    completed: 156,
    score: 89,
    focus: "Qualifying new inbound leads",
    responsibilities: ["Prospecting, lead capture, and qualification", "Plans outreach and pipeline follow-up", "Supports closing and customer onboarding", "Prepares advertising, promotions, and marketing communications"],
    activity: ["Qualified 3 sample leads · 9:37 am", "Drafted a LinkedIn campaign post · 9:08 am", "Prepared a follow-up for review · 8:31 am"],
  },
  {
    id: "saun",
    name: "Saun",
    initials: "SA",
    role: "AI Technical Support Manager",
    department: "Support",
    status: "Waiting",
    tone: "amber",
    tasks: 3,
    completed: 203,
    score: 98,
    focus: "Waiting on customer information",
    responsibilities: ["Provides product and service knowledge", "Investigates technical issues and troubleshooting", "Assists customers with clear technical guidance", "Escalates complex issues to the right person"],
    activity: ["Resolved a sample setup question · 9:21 am", "Asked for diagnostic details · 8:58 am", "Escalated a complex access issue · Yesterday"],
  },
] as const;

export const leadRecords = [
  { name: "Olivia Chen", company: "Northstar Studio", email: "olivia@northstar.studio", source: "Website", employee: "Cathy", stage: "Qualified", value: "$12,400", next: "Discovery call" },
  { name: "Marcus Bell", company: "Fieldwork Co.", email: "marcus@fieldwork.co", source: "LinkedIn", employee: "Cathy", stage: "Ongoing", value: "$8,600", next: "Send proposal" },
  { name: "Priya Shah", company: "Kite & Key", email: "priya@kiteandkey.com", source: "Referral", employee: "John", stage: "Contacted", value: "$6,200", next: "Check in Thursday" },
  { name: "Daniel Foster", company: "Moderna Labs", email: "daniel@modernalabs.io", source: "Email", employee: "Cathy", stage: "Closing", value: "$18,900", next: "Review terms" },
  { name: "Amara James", company: "House of Form", email: "amara@houseofform.co", source: "Instagram", employee: "Cathy", stage: "Prospecting", value: "$4,800", next: "First introduction" },
  { name: "Ethan Park", company: "Cedar Health", email: "ethan@cedarhealth.com", source: "Website", employee: "John", stage: "Won", value: "$14,200", next: "Onboarding" },
] as const;

export const customerRecords = [
  { name: "Sofia Rivera", company: "Arc Studio", email: "sofia@arcstudio.co", status: "Active customer", owner: "Cathy", spend: "$24,800", last: "Today, 9:16 am" },
  { name: "Liam Okafor", company: "Evergreen Group", email: "liam@evergreen.group", status: "Active customer", owner: "John", spend: "$18,200", last: "Yesterday" },
  { name: "Emma Chen", company: "Goodland Retail", email: "emma@goodland.store", status: "Onboarding", owner: "Saun", spend: "$9,600", last: "Yesterday" },
  { name: "Noah Wilson", company: "Coda Works", email: "noah@codaworks.com", status: "Active customer", owner: "Cathy", spend: "$15,400", last: "Tue, 14 Oct" },
] as const;

export const approvalsSeed = [
  { id: 1, title: "Invoice INV-2048 · $2,400", detail: "Payment request prepared by Jenny", person: "Jenny", module: "Accounting", time: "9:28 am", kind: "Invoice" },
  { id: 2, title: "Q4 welcome campaign", detail: "Email campaign draft by Cathy", person: "Cathy", module: "Marketing", time: "9:08 am", kind: "Campaign" },
  { id: 3, title: "Quarterly priorities", detail: "Operations plan submitted by John", person: "John", module: "Operations", time: "8:50 am", kind: "Plan" },
];