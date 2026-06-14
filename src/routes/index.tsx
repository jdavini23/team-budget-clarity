import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TeamBudget — Real-time budgets for youth sports teams" },
      {
        name: "description",
        content:
          "TeamBudget gives parents, coaches, and treasurers live financial transparency for every youth sports team. Track fees, receipts, and spending in one place.",
      },
      { property: "og:title", content: "TeamBudget — Real-time budgets for youth sports teams" },
      {
        property: "og:description",
        content:
          "Stop chasing receipts and answering 'where did my $500 go?' TeamBudget brings live budget transparency to youth sports teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
