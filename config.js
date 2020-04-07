module.exports = {
  platform: 'gitlab',
  endpoint: 'https://gitlab.com/api/v4',
  token: process.env.GITLAB_TOKEN,
  repositories: ['red-froggy/angular-starter-kit','red-froggy/angular-cli'],
  logLevel: 'info',
  requireConfig: true,
  onboarding: true,
  onboardingConfig: {
    extends: ['config:base'],
    prConcurrentLimit: 5
  },
  enabledManagers: ['npm']
};
