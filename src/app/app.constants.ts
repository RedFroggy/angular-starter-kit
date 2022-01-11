export const APP_VERSION = {
  buildDate: new Date(parseInt(process.env.BUILD_TIMESTAMP, 10)).toLocaleString(),
  commit: process.env.GIT_COMMITHASH,
  branch: process.env.GIT_BRANCH,
};
