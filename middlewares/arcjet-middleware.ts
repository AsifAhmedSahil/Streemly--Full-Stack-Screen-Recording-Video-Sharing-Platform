import { createMiddleware, detectBot, shield } from "@arcjet/next";
import aj from "@/lib/arject";

const arcjetRules = aj
  .withRule(shield({ mode: "LIVE" }))
  .withRule(detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE", "GOOGLE_CRAWLER"] }));

export const arcjetMiddleware = createMiddleware(arcjetRules);
