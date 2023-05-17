import "dotenv/config";

export interface AppConfig {
  BASE_URL: string;
}

export default {
  name: "maestro-blog-app",
  version: "1.0.0",
  extra: {
    BASE_URL: process.env.BASE_URL,
  },
};
