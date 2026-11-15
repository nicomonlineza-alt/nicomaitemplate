import { createFileRoute } from "@tanstack/react-router";

import { AdminPortal } from "@/components/admin/admin-portal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Workspace overview · Nicom-AI" },
      {
        name: "description",
        content: "A private business workspace for coordinating an AI workforce, customers, approvals, and operations.",
      },
      { property: "og:title", content: "Workspace overview · Nicom-AI" },
      {
        property: "og:description",
        content: "A private business workspace for coordinating an AI workforce, customers, approvals, and operations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminPortal,
});