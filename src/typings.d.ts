export {};

declare global {
  interface Window {
    app: { buildDate: string; commit: string; branch: string };
  }
}
