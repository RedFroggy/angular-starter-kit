#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { StaticSite } from './static-site';

/**
 * This stack relies on getting the domain name from CDK context.
 * Use 'cdk synth -c domain=mystaticsite.com -c subdomain=www -c certificateArn=mycert' -c contentsPath=contents-site"
 * Or add the following to cdk.json:
 * {
 *   "context": {
 *     "domain": "mystaticsite.com",
 *     "subdomain": "www",
 *     "certificateArn": "mycert",
 *     "contentsPath": "/contents-site",
 *   }
 * }
 **/
class AngularStarterKitStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);

    // tslint:disable-next-line:no-unused-expression
    new StaticSite(this, 'StaticSite', {
      domainName: this.node.tryGetContext('domain'),
      siteSubDomain: this.node.tryGetContext('subdomain'),
      certificateArn: this.node.tryGetContext('certificateArn'),
      contentsPath: this.node.tryGetContext('contentsPath'),
    });
  }
}

const app = new cdk.App();

// tslint:disable-next-line:no-unused-expression
new AngularStarterKitStack(app, 'AngularStarterKit', {
  env: {
    // Stack must be in us-east-1, because the ACM certificate for a
    // global CloudFront distribution must be requested in us-east-1.
    region: 'us-east-1',
  },
});

app.synth();
