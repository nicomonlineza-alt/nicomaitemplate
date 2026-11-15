# Nicom AI Command Center

Build the Nicom-AI Admin Master application in this repository.

This is the MASTER ADMIN PORTAL TEMPLATE for Nicom-AI. It will eventually be cloned/adapted for individual business clients, so build it as a clean, modular, reusable application rather than a one-off dashboard.

DESIGN REFERENCE
Use the Landin Framer website (https://landin.framer.website/) as the primary visual/design inspiration: recreate the visual language, quality, spacing, typography, cards, navigation, responsive behaviour and overall premium feel of the reference, but DO NOT simply copy its content or branding. The result should feel like a modern business operating system rather than a marketing website.

NICOM-AI BRAND DIRECTION
Use a dark, modern, premium technology aesthetic:
- Dark background (#0A0D12 / deep obsidian slate)
- Glassmorphism where appropriate (backdrop-blur, subtle borders, translucent surface layers)
- Subtle gradients
- Neon green (#10B981 / #00FF87) and neon blue (#0EA5E9 / #38BDF8) accent colours
- Clean modern typography
- Soft borders and shadows
- Subtle grain/texture where appropriate
- Rounded cards
- Excellent spacing
- Smooth but restrained animations
- Professional enough for a serious business, futuristic without becoming gimmicky
- Excellent on desktop, tablet, and mobile

CORE CONCEPT
This project is ONLY the private AI Workforce Admin Portal where the business owner/manager controls their AI workforce, customers, sales, marketing, accounting, documents, reports, and integrations.
Keep the code modular so components and configuration can later be reused across multiple client portals:
- Reusable configuration for company name, logo, brand colours, company information, AI employees, enabled modules, user roles, integrations.

MAIN NAVIGATION
- Professional sidebar/navigation system with:
  1. Dashboard
  2. AI Workforce
  3. Sales & Leads
  4. Customers
  5. Marketing
  6. Accounting
  7. Documents
  8. Reports
  9. Integrations
  10. Settings
  11. Audit Log
- Collapses elegantly on smaller screens / mobile drawer.
- Top navigation/header with company name/logo, quick search, notifications, user profile, and quick settings.

DASHBOARD
Polished business overview answering "What is happening in my business right now?":
- Business overview KPI widgets
- AI workforce status overview
- Tasks & pending human approval queue
- Sales pipeline mini-widget
- New leads & recent customer interactions
- Marketing activity & accounting summary
- Recent activity feed & notifications
- Use realistic demo data.

AI WORKFORCE
Dedicated section with 4 AI employees:
1. JOHN — AI Manager / Operations Director (oversees workforce, plans daily priorities, allocates work, coordinates departments, monitors activity, escalates important decisions)
2. JENNY — AI Accounts Manager (invoices, payment follow-up, transaction allocation, bookkeeping assistance, financial documents, spreadsheets)
3. CATHY — AI Sales & Marketing Manager (prospecting, lead capture/qualification, outreach, pipeline follow-up, closing assistance, onboarding, advertising & promotions)
4. SAUN — AI Technical Support Manager (tech support, product/service knowledge, troubleshooting, customer assistance, technical investigations, escalation)

Each employee profile/dashboard includes:
- Role & responsibilities
- Visual status indicator (Active, Working, Waiting, Needs Approval, Offline)
- Current tasks, completed tasks, activity history, performance metrics, recent actions
- Pending human approvals (AI actions with significant business consequences require human sign-off; built around permissions, approvals, and auditability)
- Employee-specific configuration and prompts/skills

SALES & LEADS
- CRM pipeline view with stages: Prospecting, Contacted, Qualified, Ongoing, Closing, Won, Lost
- Lead cards & list table with contact info, company, source, assigned AI employee, last contact, next action, notes
- Pipeline statistics and conversion visualization

CUSTOMERS
- Customer directory & search/filter
- Detailed customer profile drawer/page: contact info, company, communication history, sales history, notes, assigned AI employee, tasks, documents

MARKETING
- Campaigns overview & performance
- Content calendar & social media posts
- Leads generated per channel (LinkedIn, Email, WhatsApp, Instagram, Website, Facebook)
- AI-generated content drafts with review & approval queue

ACCOUNTING
- Administrative financial overview: invoices list with status (Paid, Pending, Overdue), payments, outstanding amounts, transaction table, monthly summary, AI accounting activity logs

DOCUMENTS
- Document management with categories/folders, search, upload button, recent documents, AI-generated documents, and documents requiring approval

REPORTS
- Analytics dashboard with charts for sales performance, marketing ROI, AI workforce productivity/task completion, customer retention, and financial summary

INTEGRATIONS
- Cards for HubSpot, Supabase, OpenAI, Google Gemini, Wix, Dropbox, WhatsApp, Email, Social Media
- Status indicators (Connected / Not Connected), description, configuration drawer/modal, last sync time, settings

SETTINGS & MULTI-TENANT CONFIGURATION
- Company & Branding config: company name, logo, primary/secondary/accent color pickers, favicon
- Users & modular roles: Owner, Administrator, Manager, Staff with clear permission toggles
- AI Workforce permission controls (actions allowed autonomously vs requiring approval)
- Security & notifications settings

AUDIT LOG
- Complete chronological audit log with date/time, actor (User or specific AI employee like Cathy or John), action, module, result, and approval status tag

Ensure responsive behavior across desktop, tablet, and mobile, with clean component architecture and polished typography and spacing. Use realistic sample data throughout.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0dbe926e-26da-41d1-ac9f-6b44608d68e4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
