import { TriggerClient } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "v2-test-project-hZg3",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});
