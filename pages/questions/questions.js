import React from 'react';

export default [
  {
    title: 'How to implement authentication using GraphQL?',
    description: 'Authentication with GraphQL',
    askedBy: 'Jordan Gonen',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Authentication', 'OAuth'],
    url: '/questions/authentication-with-graphql/',
    answer: (
      <div>
        <p>
          Authentication with GraphQL can be handled in many ways. The standard is currently token
          authentication using a JSON Web Token (JWT). Along with each request, for authenticated
          requests, include the JWT auth token in the header of the request under:
        </p>
        <pre>
          <code>
            {'{ Authentication: Bearer YOUR_JWT_TOKEN }'}
          </code>
        </pre>
        <p>
          This will in turn be validated by the GraphQL server processing the request, and the
          server will parse out the token, verify it with a particular valid user, and associate
          all data processing with that user for permissioning workflows and more.
        </p>
      </div>
    ),
  },
  {
    title: 'What companies are using GraphQL in production?',
    description: 'Companies that use GraphQL at scale.',
    askedBy: 'Gina Lynch',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Production'],
    url: '/questions/companies-using-graphql-in-production/',
    answer: (
      <div>
        <p>
          More and more large companies are using GraphQL in production! Apart from Facebook
          (since they created the technology), companies like Twitter, The Financial Times, Intuit,
          have already adopted GraphQL as the standard for their backends and running it at scale.
        </p>
        <p>
          Here's a high level overview of the companies using GraphQL in the industry:
        </p>
        <p>
          <ul>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>Pinterest</li>
            <li>Twitter</li>
            <li>The Financial Times</li>
            <li>Intuit</li>
            <li>Beek.io</li>
            <li>CreditKarma</li>
            <li>Concur</li>
            <li>Coursera</li>
            <li>Hudl</li>
            <li>Conde Nast</li>
            <li>Salesforce</li>
          </ul>
        </p>
        <p>
          As a matter of fact, GitHub has spearheaded the movement in the industry by providing the
          first-ever public GraphQL API for their source control platform so you can make commits,
          pull requests, and star repositories all through GraphQL.
        </p>
        <p>
          A more complete list of companies using GraphQL in production can be found at the
          <a href="http://graphql.org/users/" target="_blank">
            &nbsp;official GraphQL.org website.
          </a>
        </p>
      </div>
    ),
  },
  {
    title: 'What\'s the easiest way to integrate a third-party service with GraphQL?',
    description: 'Integrate 3rd-party services (i.e. Stripe, Auth0) with GraphQL',
    askedBy: 'Gina Lynch',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', '3rd-Party Service', 'Integration'],
    url: '/questions/easiest-way-to-integrate-a-third-party-service-with-graphql/',
    answer: (
      <div>
        <p>
          GraphQL is data source agnostic. This means that GraphQL is not opinionated on
          where you are supplying your data from, whether it be through a cloud-hosted database,
          on-premise database, or even another 3rd-party cloud service. Normally, cloud services
          are built with REST, meaning there are a whole slew of endpoints and you must sift
          through their entire documentation to understand what data you can retrieve. And at the
          end of the day, you'll have to essentially map their REST endpoints to individual GraphQL
          queries and mutations for your frontend app.
        </p>
        <p>
          If you're not particularly fluent in mapping a REST API to a GraphQL query, you
          can easily accomplish this with Scaphold by storing your API keys in our integrations
          portal, and violá - you now have GraphQL queries and mutations that map exactly to the
          API of the third-party-service. You can read more about individual integrations
          that <a href="https://scaphold.io/docs/#integrations" target="_blank">we have available here</a>.
        </p>
      </div>
    ),
  },
  {
    title: 'GraphQL Analytics',
    description: 'Solutions for analyzing your GraphQL API.',
    askedBy: 'Jordan Gonen',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Analytics', 'Production'],
    url: '/questions/graphql-analytics/',
    answer: (
      <div>
        <p>
          If you're running GraphQL in production, chances are you're probably looking for analytics
          solutions so you can monitor your GraphQL API when it matters.
        </p>
        <p>
          The best solution so far that targets GraphQL backends is <a href="http://www.apollodata.com/optics" target="_blank">Apollo Optics</a>.
          It provides a wonderful GUI dashboard that will allow you to understand which parts
          of your GraphQL queries slows down your request time the most, so you can optimize
          how you fetch your data.
        </p>
        <img src="http://www.apollodata.com/images/ss-optics-apollodata-660x560@2x.png" alt="Apollo Optics Dashboard" />
        <p>
          Apart from that, Scaphold has built an in-house analytics service so that you can monitor
          your Scaphold apps in production. In addition to a dashboard that displays your data
          storage, response times, and traffic, you can also get granular information with raw logs
          of traffic that goes through your API.

          Pairing this with Apollo Optics analytics gives you the best of both worlds: fine-tuned
          query monitoring, as well as detailed overall system metrics. Your users will certainly
          appreciate it.
        </p>
      </div>
    ),
  },
  {
    title: 'Can I use social logins with GraphQL?',
    description: 'GraphQL and Auth0 Authentication.',
    askedBy: 'Vince Ning',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Auth0', 'Social', 'Lock'],
    url: '/questions/graphql-auth0-social-authentication/',
    answer: (
      <div>
        <p>
          Social login work similarly to normal login flows through GraphQL.
          But first you must understand how OAuth works. OAuth has become the industry
          standard for most social logins (i.e. Facebook, Google, GitHub, etc...), and
          it's a way for a 3rd-party service to be able to authenticate you on behalf of
          an auth provider. There are two main ways to accomplish this on Scaphold.
        </p>
        <ol>
          <li>
            <h5><b>Use a service like Auth0 Lock.</b></h5>
            <p>
              This is a very convenient service that Auth0 provides. It's essentially a
              client-side login form that provides hooks to each social auth provider.
              Once your user logs in, you'll receive an <code>id_token</code>, upon which
              you will send it through the mutation <code>loginWithAuth0Lock</code> to Scaphold.
            </p>
          </li>
          <li>
            <h5><b>Roll your own client-side flow.</b></h5>
            <p>
              When you authenticate via an OAuth provider through their client-side SDK,
              you will receive an <code>access_token</code>, upon which you will send it
              through the mutation <code>loginWithAuth0Social</code> to Scaphold.
            </p>
          </li>
        </ol>
        <p>
          In both cases, once Scaphold verifies that this token is valid, Scaphold will
          issue you a JWT token just like the normal login flow, and you can then store it in
          local storage and send it with every request in the header.
        </p>
        <p>
          You can read more about how Scaphold does social login
          through <a href="/blog/2016-06-28-social-auth-graphql/">our blog post here</a>. You
          can also check out our <a href="https://scaphold.io/docs/#social-auth" target="_blank">
          detailed docs here</a>.
        </p>
      </div>
    ),
  },
  {
    title: 'How to implement mobile push notifications with GraphQL?',
    description: 'GraphQL & mobile push notifications.',
    askedBy: 'Sean Cheng',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Android', 'iOS', 'Push'],
    url: '/questions/graphql-mobile-push-notifications/',
    answer: `
      Android and iOS mobile push notifications can be a crucial part of your mobile applications. However, it's
      definitely not the easiest process to set up, let alone setting it up with GraphQL.
      Normally, you'd have to save your authentication key file to be able to interact with
      GCM or APNS for push notifications as well as manage your device tokens. With Scaphold, you can
      upload your key in the integrations portal, and you'll immediately be able to push to other
      users in your app. Scaphold stores the key on AWS and you can start pushing device tokens
      that associate with your currently authenticated user. From then on, you can send Android or iOS push
      notifications directly to users given their IDs with the exposed GraphQL mutations and that user will
      receive the push notification on his or her device.
    `,
  },
  // {
  //   title: 'GraphQL vs. REST',
  //   description: '',
  //   askedBy: 'Vince Ning',
  //   answeredBy: 'Vince Ning',
  //   createdAt: '2017-01-06 00:00:00',
  //   tags: ['GraphQL', 'REST'],
  //   url: '/questions/graphql-vs-rest/',
  //   answer: `
  //     Android and iOS mobile push notifications can be a crucial part of your mobile applications. However, it's
  //     definitely not the easiest process to set up, let alone setting it up with GraphQL.
  //     Normally, you'd have to save your authentication key file to be able to interact with
  //     GCM or APNS for push notifications as well as manage your device tokens. With Scaphold, you can
  //     upload your key in the integrations portal, and you'll immediately be able to push to other
  //     users in your app. Scaphold stores the key on AWS and you can start pushing device tokens
  //     that associate with your currently authenticated user. From then on, you can send Android or iOS push
  //     notifications directly to users given their IDs with the exposed GraphQL mutations and that user will
  //     receive the push notification on his or her device.
  //   `,
  // },
  // {
  //   title: 'How to create an app on Scaphold?',
  //   description: 'Steps to create a Scaphold app.',
  //   askedBy: 'Sean Cheng',
  //   answeredBy: 'Vince Ning',
  //   createdAt: '2017-01-07 00:00:00',
  //   tags: ['GraphQL', 'Create', 'App'],
  //   url: '/questions/how-to-create-an-app-on-scaphold/',
  //   answer: (
  //     <div>
  //       There are a couple
  //     </div>
  //   ),
  // },
  {
    title: 'How to handle payments with GraphQL?',
    description: 'Using the Stripe integration.',
    askedBy: 'Vince Ning',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Integration', 'Stripe'],
    url: '/questions/how-to-handle-payments-with-graphql/',
    answer: (
      <div>
        <p>
          On Scaphold, you can easily integrate payments through GraphQL by enabling the
          Stripe integration. After connecting your Stripe account with Scaphold through
          the integrations portal, you'll have the full power fo Stripe to be able to work
          with customers, charges, subscriptions, and more, just as you would if you were
          using Stripe's REST API. This way all your payments are now standardized through
          GraphQL and sit alongside the rest of your queries and mutations.
        </p>
        <p>
          We've built a small donations site at <a href="https://give.scaphold.io/" target="_blank">https://give.scaphold.io</a> and <a href="https://github.com/scaphold-io/save-the-world-tutorial" target="_blank">open sourced the code here</a> so
          you can see how payments work in a real live application.
        </p>
        <p>
          You can read more about implementation details <a href="https://scaphold.io/docs/#payments" target="_blank">here in our documentation</a> as well.
        </p>
      </div>
    ),
  },
  {
    title: 'How to implement custom business logic?',
    description: 'Using AWS Lambda with Scaphold.',
    askedBy: 'Vince Ning',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'AWS Lambda', 'Custom'],
    url: '/questions/how-to-implement-custom-business-logic/',
    answer: (
      <div>
        <p>
          On Scaphold, you can easily implement custom logic (i.e. business logic) for your
          app workflow through GraphQL by enabling the Custom integration. There's a couple
          steps involved:
        </p>
        <ol>
          <li>
            Host your custom logic on a cloud provider like <a href="https://aws.amazon.com/lambda/" target="_blank">AWS Lambda</a> or <a href="https://azure.microsoft.com/en-us/services/functions/" target="_blank">Azure Functions</a>.
            You may also host it yourself anywhere as long as you get a URL that Scaphold
            can make a request to.
          </li>
          <li>
            With the URL that points to your hosted microservice, enable the Custom integration
            on Scaphold and define the configuration for the data you want sent over to your
            webhook, and when you want it to fire.
          </li>
        </ol>
        <p>
          We've written up a short tutorial on <a href="blog/2016-07-14-2016-07-14-pokemon-go-graphql-with-aws-lambda/" target="_blank">how to get set up with AWS Lambda here</a>.
        </p>
        <p>
          You can read more about implementation details <a href="https://scaphold.io/docs/#webhooks" target="_blank">here in our documentation</a> as well.
        </p>
      </div>
    ),
  },
  {
    title: 'How to send emails with GraphQL?',
    description: 'Using the Mailgun integration.',
    askedBy: 'Vince Ning',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Integration', 'Mailgun'],
    url: '/questions/how-to-send-emails-with-graphql/',
    answer: (
      <div>
        On Scaphold, you can easily send emails through GraphQL by enabling the Mailgun integration.
        After connecting your Mailgun account with Scaphold through the integrations portal, you'll
        have the full power of Mailgun, so you'll be able to work with mailing lists, email
        addresses, and send emails. This can be applied in all sorts of places in your app
        workflow, perhaps as a way to welcome new users once they've signed up. You can read more
        about implementation details <a href="https://scaphold.io/docs/#email" target="_blank">here in our documentation</a>.
      </div>
    ),
  },
  {
    title: 'Best way to migrate data to Scaphold',
    description: 'Moving to Scaphold from another service.',
    askedBy: 'Vince Ning',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Migration', 'BaaS'],
    url: '/questions/migrating-data-to-scaphold/',
    answer: (
      <div>
        <p>
          The best way to migrate data to Scaphold currently is through a couple steps:
        </p>
        <ol>
          <li>
            Dump your data into a CSV or JSON format. Doesn't really matter which - it should be
            standard so that your script can work.
          </li>
          <li>
            Make sure you remove your old IDs upon inserting your data into Scaphold. Each time
            a new piece of data is inserted, you'll receive a new globally unique opaque ID. Take
            this ID and update it across your app's data so that connections will work automatically
            in your Scaphold app with your data.
          </li>
        </ol>
        <p>
          We're working on a way for you to be able to migrate your data from various databases
          directly, and we'd love your suggestions!
        </p>
      </div>
    ),
  },
  // {
  //   title: 'Scaphold vs. Other GraphQL Backend as a Service Sites',
  //   description: 'Comparison in GraphQL backend services',
  //   askedBy: 'Vince Ning',
  //   answeredBy: 'Vince Ning',
  //   createdAt: '2017-01-06 00:00:00',
  //   tags: ['GraphQL', 'Reindex', 'Graph.cool'],
  //   url: '/questions/scaphold-vs-other-graphql-baas/',
  //   answer: (
  //     <div>
  //       <p>

  //       </p>
  //       <p>

  //       </p>
  //     </div>
  //   ),
  // },
  // {
  //   title: 'Scaphold vs. Parse and Firebase',
  //   description: 'Comparison in between GraphQL backend vs. REST backend',
  //   askedBy: 'Vince Ning',
  //   answeredBy: 'Vince Ning',
  //   createdAt: '2017-01-06 00:00:00',
  //   tags: ['GraphQL', 'Parse', 'Firebase'],
  //   url: '/questions/scaphold-vs-parse-and-firebase/',
  //   answer: (
  //     <div>
  //       <p>

  //       </p>
  //       <p>

  //       </p>
  //     </div>
  //   ),
  // },
  {
    title: 'What is GraphQL?',
    description: 'Conceptual idea behind GraphQL.',
    askedBy: 'Vince Ning',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Facebook'],
    url: '/questions/what-is-graphql/',
    answer: `
      GraphQL is a new application level query language recently released by Facebook.
      Since its release, developer communities around the world have speculated that GraphQL
      may very well be the future of APIs. Particularly, the ReactJS community has embraced
      GraphQL as a more functional replacement for REST. Coupled with the growing popularity
      of RelayJS, a GraphQL-optimized network layer for ReactJS apps, adoption has been
      accelerated tremendously. Our mission at Scaphold is to champion GraphQL so that you,
      the technological creators of the world, can begin to use this awesome technology.
      The Scaphold platform offers a feature-rich, backend solution that empowers any developer
      to start building GraphQL-powered apps in just a few clicks. Sign up today at
      https://scaphold.io to get started!
    `,
  },
  // {
  //   title: 'What is real-time GraphQL Subscriptions?',
  //   description: 'Conceptual idea behind GraphQL.',
  //   askedBy: 'Vince Ning',
  //   answeredBy: 'Vince Ning',
  //   createdAt: '2017-01-06 00:00:00',
  //   tags: ['GraphQL', 'Real-time', 'Subscriptions'],
  //   url: '/questions/what-is-real-time-graphql-subscriptions/',
  //   answer: `
  //     GraphQL is a new application level query language recently released by Facebook.
  //     Since its release, developer communities around the world have speculated that GraphQL
  //     may very well be the future of APIs. Particularly, the ReactJS community has embraced
  //     GraphQL as a more functional replacement for REST. Coupled with the growing popularity
  //     of RelayJS, a GraphQL-optimized network layer for ReactJS apps, adoption has been
  //     accelerated tremendously. Our mission at Scaphold is to champion GraphQL so that you,
  //     the technological creators of the world, can begin to use this awesome technology.
  //     The Scaphold platform offers a feature-rich, backend solution that empowers any developer
  //     to start building GraphQL-powered apps in just a few clicks. Sign up today at
  //     https://scaphold.io to get started!
  //   `,
  // },
  // {
  //   title: 'What is Scaphold?',
  //   description: 'Conceptual idea behind GraphQL.',
  //   askedBy: 'Vince Ning',
  //   answeredBy: 'Vince Ning',
  //   createdAt: '2017-01-06 00:00:00',
  //   tags: ['GraphQL', 'Scaphold'],
  //   url: '/questions/what-is-scaphold/',
  //   answer: `
  //     GraphQL is a new application level query language recently released by Facebook.
  //     Since its release, developer communities around the world have speculated that GraphQL
  //     may very well be the future of APIs. Particularly, the ReactJS community has embraced
  //     GraphQL as a more functional replacement for REST. Coupled with the growing popularity
  //     of RelayJS, a GraphQL-optimized network layer for ReactJS apps, adoption has been
  //     accelerated tremendously. Our mission at Scaphold is to champion GraphQL so that you,
  //     the technological creators of the world, can begin to use this awesome technology.
  //     The Scaphold platform offers a feature-rich, backend solution that empowers any developer
  //     to start building GraphQL-powered apps in just a few clicks. Sign up today at
  //     https://scaphold.io to get started!
  //   `,
  // },
  {
    title: 'When is GraphQL Summit?',
    description: 'Looking to attend a GraphQL event?',
    askedBy: 'Vince Ning',
    answeredBy: 'Vince Ning',
    createdAt: '2017-01-06 00:00:00',
    tags: ['GraphQL', 'Events'],
    url: '/questions/when-is-graphql-summit/',
    answer: (
      <div>
        <p>
          GraphQL Summit is an event held annually and hosted by the Meteor Development Group.
          The conference attracts a whole host of influencers in the GraphQL community and
          features talks about GraphQL standards and future features.
        </p>
        <p>
          The first-ever GraphQL Summit was held in late August 2016, and the next one will be
          held in the fall of 2017. You can <a href="http://www.graphql.com/summit/" target="_blank">read more about the details
          as they unveil here.</a>
        </p>
      </div>
    ),
  },
];
