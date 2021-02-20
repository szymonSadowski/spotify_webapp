declare namespace NodeJS {
  export interface ProcessEnv {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    REDIRECT_URL: string;
    FRONT_URL: string;
    PORT: string;
  }
}
