import OpenAI from "openai";
const config = useRuntimeConfig();

export const client = new OpenAI({
  apiKey: config.openaiApiKey,
});

export const assistant = config.openaiAssistantId;
