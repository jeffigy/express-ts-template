import "dotenv/config";

export const PORT = process.env.PORT || 3000;
export const CORS_WHITELIST = process.env.CORS_WHITELIST
  ? process.env.CORS_WHITELIST.split(",")
  : [];
