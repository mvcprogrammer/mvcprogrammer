<div align="center">

# Neal Thomas

**Senior full-stack engineer** &nbsp;·&nbsp; C# / .NET &nbsp;·&nbsp; Angular &nbsp;·&nbsp; React &nbsp;·&nbsp; SQL Server &nbsp;·&nbsp; AWS
<br>Tampa Bay, Florida

[![mvcprogrammer.com](https://img.shields.io/badge/mvcprogrammer.com-2f62d9?style=flat-square&logo=googlechrome&logoColor=white)](https://mvcprogrammer.com)
&nbsp;[![LinkedIn](https://img.shields.io/badge/LinkedIn-2f62d9?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mvcprogrammer/)
&nbsp;[![Email](https://img.shields.io/badge/Email-2f62d9?style=flat-square&logo=minutemailer&logoColor=white)](mailto:neal.thomas@mvcprogrammer.com)

<br>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mvcprogrammer/mvcprogrammer.com/main/docs/images/mvcprogrammer-com-dark.png">
  <img alt="mvcprogrammer.com, the home page" src="https://raw.githubusercontent.com/mvcprogrammer/mvcprogrammer.com/main/docs/images/mvcprogrammer-com-light.png" width="920">
</picture>

</div>

<br>

I build back ends that run around the clock and front ends people like using. Fifteen-plus years on C# / .NET and SQL Server, with Angular and React on top. Most recently I re-architected a polling Windows service into an event-driven **RabbitMQ** pipeline that processes **1M+ API requests, 24/7**. Before that I built and maintained a proprietary accounting system (general ledger, receivables, payables, bank reconciliation, financial reporting) on Angular and ASP.NET Core. AI-assisted tools like Claude Code are part of my daily workflow.

## How the repositories are organized

All of my professional enterprise work lives in private repositories, so the public ones here stand in for it: they show how I write code and the stack I reach for. Each is mine end to end, design through deployment, and everything that is live runs serverless on AWS.

The layout is deliberate. **A repository is one thing that ships**, named after the domain it ships to. A site that needs a back end keeps its API in the same repository when the two are small and deploy together (`mvcprogrammer.com`), and splits into an API repository and a screen repository when they are separate deployables with separate release cadences (`sandkey` and `sandkey-display-web`). Every live project has a README that explains how to run it and a documented deploy, and every live site deploys from GitHub Actions through OIDC, so no AWS keys are stored anywhere.

| Repository | What it is | Tech |
| --- | --- | --- |
| **[mvcprogrammer.com](https://github.com/mvcprogrammer/mvcprogrammer.com)**<br><sub>[live](https://mvcprogrammer.com)</sub> | My portfolio site and the read-only Experience API behind it. The site follows the KISS principle: plain HTML, CSS, and vanilla JavaScript, no framework, no build step, no third-party scripts, strict Content Security Policy. The API is spec-first with OpenAPI 3.1 and tested over the in-process host. | HTML · CSS · JavaScript · C# / .NET 10 · Lambda · DynamoDB · OpenAPI 3.1 · S3 · CloudFront · GitHub Actions |
| **[sandkey](https://github.com/mvcprogrammer/sandkey)** | The API half of a touch-screen MLS kiosk in the window of a Clearwater Beach real estate office, running since 2009 and rebuilt in 2026. Reads live listings from the Stellar MLS feed, with secrets in SSM, rate limiting on the one endpoint that sends email, and OpenTelemetry tracing. Fully tested. | ASP.NET Core on .NET 10 · Lambda · SAM / CloudFormation · SSM · SES · OpenTelemetry · xUnit |
| **[sandkey-display-web](https://github.com/mvcprogrammer/sandkey-display-web)**<br><sub>[try it live](https://display.lightsplitters.com/)</sub> | The screen half of the same kiosk. A React app that keeps the layout the office knows by heart, fits any window, and talks only to `sandkey`. | React 18 · TypeScript · Vite · React Router · S3 · CloudFront |
| **[lightsplitters.com](https://github.com/mvcprogrammer/lightsplitters.com)**<br><sub>[live](https://lightsplitters.com)</sub> | The site for my photography studio, prerendered to static HTML. A second app in the same workspace is the template for every client's wedding site or family album, each served from its own S3 folder at its own subdomain with no AWS changes per client. | Angular 22 · TypeScript · S3 · CloudFront Functions · Lambda + SES · Stripe |
| **[LegacyCPPFrom1999](https://github.com/mvcprogrammer/LegacyCPPFrom1999)** | Where it started. Code from a real-time day-trading platform I wrote in 1999 for a NASDAQ broker: pipe-delimited market data at hundreds of messages a second, fanned out over TCP to a floor of traders. Kept as history, not as a sample of how I write today. | C++ · TCP sockets |

## Tech stack

| Area | Tools |
| --- | --- |
| **Back end** | C# / .NET 10 and .NET Core, ASP.NET Core Web API and MVC, minimal APIs, EF Core, Dapper, MediatR, SignalR, OpenAPI, RabbitMQ, Hangfire, Polly |
| **Front end** | Angular, React, TypeScript, vanilla JavaScript, HTML / CSS, Vite |
| **Data** | SQL Server: complex queries, stored procedures, indexing, execution plans, performance tuning, deadlock diagnosis. DynamoDB single-table design |
| **Cloud and delivery** | AWS Lambda, S3, CloudFront, Route 53, IAM, SSM, SAM / CloudFormation, GitHub Actions with OIDC, Azure DevOps, Docker |
| **Quality** | xUnit, NUnit, NSubstitute, Moq, Telerik JustMock, WebApplicationFactory integration tests, analyzers as build errors, OpenTelemetry, Serilog, Datadog |
| **Domains** | Accounting (GL, AR/AP, bank reconciliation, QuickBooks API) · Healthcare (HL7 v2, FHIR, HIPAA) · Real estate (Stellar MLS via the Bridge Data Output API) · Financial trading systems |

<br>

<div align="center">
<sub>Résumé, freelance, and contact: <a href="https://mvcprogrammer.com/#resume">mvcprogrammer.com</a></sub>
</div>
