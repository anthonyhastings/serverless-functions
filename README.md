[![Netlify Status](https://api.netlify.com/api/v1/badges/da0b8765-c861-499d-a2ab-fafdb0530015/deploy-status)](https://app.netlify.com/sites/gifted-allen-341b9a/deploys)

# Serverless Functions

## Introduction
![Demonstration](https://raw.githubusercontent.com/anthonyhastings/serverless-functions/master/demonstration.gif)

This repository showcases using serverless architecture in order to perform back-end tasks without having to manage / run / maintain a service running a back-end application. A serverless platform provides a clear separation between infrastructure services and applications running on top of the platform.

There are a number of benefits in choosing serverless over a traditional service, such as:

  - **Reduced operational costs** - Functions are "pay per execution". Compared to running an application on a server 24/7, functions will be cheaper as you'll only be charged for the time your functions ran.
  - **Automatic Scaling** - FaaS providers create more instances of functions as required when more traffic comes in. The provider will keep lambdas running for a period of time once they've completed, incase more traffic arrives.
  - **Faster development** - More time can be spent in the logic of the application rather than managing services and their infrastructure.

## Instructions
The application is a Preact application that fetches show information upon load, and fires off voting requests whenever buttons are clicked. The front-end application and the serverless functions are powered by [Netlify](https://www.netlify.com/), and use a Postgres database from [Heroku](https://www.heroku.com/) with a GraphQL layer on top powered by [Hasura](https://hasura.io/).

1. Ensure your heroku database is populated with the contents of `schema.sql`.
1. Link your Hasura GraphQL API to the Heroku database.
1. Create a Netlify site for this project and add the following environment variables into the site settings panel:

      | name | description |
      | ---- | ----------- |
      | **HASURA_GRAPHQL_ENDPOINT** | Used by functions to fetch and push data. |
      | **HASURA_ADMIN_SECRET** | Acts as authorization to interact with GraphQL API. |

1. Install node dependencies and ensure the Netlify CLI is installed:

   ```yarn global add netlify-cli && yarn install```

1. Start the application:

   ```yarn start```

_Note:_ If your local project doesn't have a `.env` file then Netlify CLI will automatically source values from the remote project.

_Note:_ Console logs from inside of serverless functions are available to view in the Netlify site's "Functions" section, and will stay available for up to an hour after they're run.

## Further Information
- [The Power of Serverless](https://serverless.css-tricks.com/)
- [What is AWS Lambda or Serverless?](https://hackernoon.com/what-is-aws-lambda-or-serverless-f0a006e9d56c)
- [AWS Lambda function scaling](https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html)
- [Netlify Functions](https://www.netlify.com/products/functions/)
