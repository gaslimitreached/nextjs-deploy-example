# NextJs Construct Usage Example

This example deploys the example [open-next](https://github.com/serverless-stack/open-next) application to AWS Lambda using [AWS CDK](https://aws.amazon.com/cdk/).

## What's inside?

This turborepo uses [yarn](https://yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `web`: [open-next](https://github.com/serverless-stack/open-next/tree/main/example) example app
- `ui`: a stub React component library shared by both `web` and `docs` applications (unused)
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo (includes cdk.json)

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd nextjs-deploy-example
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd nextjs-deploy-example
yarn run dev
```

### Open Next

To build with [open-next](https://open-next.js.org/):

```
yarn run opennext
```

### Synth

To [synthesize](https://cdkworkshop.com/30-python/20-create-project/400-synth.html) the cloudformation template:

```
yarn run synth
```

### Deploy

To [deploy](https://cdkworkshop.com/60-go/20-create-project/500-deploy.html) the stack:

```
yarn run deploy
```
**Info**: The deployment uses default credentials from `~/.aws/credentials` and can take several minutes.

**Warning**: The deploy command does not ask for confirmation.

**Warning**: The AWS region is defined at `apps/hosting/bin/hosting.ts`. AWS Lambda@Edge (yet to be implemented) requires the region to be `us-east-1`.


### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Apprisals

- The repo uses npm [pre & post scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts) to run the open-next build task.

## Useful Links

NextJs:

- [Open Next](https://github.com/serverless-stack/open-next)
- [NextJs](https://nextjs.org/)

Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
