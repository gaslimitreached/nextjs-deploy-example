import { join } from 'path';
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NextJs } from 'cdk-construct-nextjs';

export class NextJsOpenNextStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const site = new NextJs(this, 'NextJsSite', {
      path: join(__dirname, '../../web'),
    });

    // Display endpoint url to screen
    new CfnOutput(this, 'DistributionDomainName', {
      value: `https://${site.distribution.distributionDomainName}`,
    });
  }
}
