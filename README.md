<div align="center">

# Neal Thomas

**API-first software engineer** &nbsp;·&nbsp; C# / .NET &nbsp;·&nbsp; Angular &nbsp;·&nbsp; React &nbsp;·&nbsp; SQL Server &nbsp;·&nbsp; AWS
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

My professional experience includes more than fifteen years of API and back-end development on C# / .NET and SQL Server, with Angular and React on the front end. I specialize in services that run reliably around the clock and user interfaces that people find easy to use. Most recently, I re-architected a polling Windows service into an event-driven **RabbitMQ** pipeline that handles **more than one million API requests, 24/7**. Before that, I built and maintained a proprietary accounting system on Angular and ASP.NET Core, covering the general ledger, receivables, payables, bank reconciliation, and financial reporting. AI-assisted tools such as Claude Code are part of my daily workflow.

## How the repositories are organized

All of my professional enterprise work lives in private repositories, so the public ones here stand in for it: they show how I write code and the stack I reach for. Each is mine end to end, design through deployment, and everything that is live runs serverless on AWS.

The layout is deliberate. **A repository is one thing that ships**, named after the domain it ships to. A site that needs a back end keeps its API in the same repository when the two are small and deploy together (`mvcprogrammer.com`), and splits into an API repository and a screen repository when they are separate deployables with separate release cadences (`sandkey` and `sandkey-display-web`). Every live project has a README that explains how to run it and a documented deploy, and every live site deploys from GitHub Actions through OIDC, so no AWS keys are stored anywhere.

| Repository | What it is | Tech |
| --- | --- | --- |
| **[mvcprogrammer.com](https://github.com/mvcprogrammer/mvcprogrammer.com)**<br><sub>[live](https://mvcprogrammer.com)</sub> | My portfolio site and the read-only Experience API behind it. The site follows the KISS principle: plain HTML, CSS, and vanilla JavaScript, no framework, no build step, no third-party scripts, strict Content Security Policy. The same page is also built with Angular, React, and Blazor WebAssembly as a side-by-side comparison; see [One site, four editions](#one-site-four-editions). The API is spec-first with OpenAPI 3.1 and tested over the in-process host. Since October 2026 a private visitor dashboard (React 19, Chart.js, behind Cognito) reads day files exported from the CloudFront logs by a scheduled workflow, so the site measures itself without a third-party tracker. What has shipped and what comes next is on the public [project board](https://github.com/users/mvcprogrammer/projects/1). | HTML · CSS · JavaScript · Angular 22 · React 19 · Blazor WebAssembly · C# / .NET 10 · Lambda · DynamoDB · OpenAPI 3.1 · S3 · CloudFront · GitHub Actions |
| **[sandkey-display-api](https://github.com/mvcprogrammer/sandkey-display-api)** | The API half of a touch-screen MLS kiosk in the window of a Clearwater Beach real estate office, running since 2009 and rebuilt in 2026. Reads live listings from the Stellar MLS feed, with secrets in SSM, rate limiting on the one endpoint that sends email, and OpenTelemetry tracing. Fully tested. Shipped and planned work for both halves is on the [kiosk project board](https://github.com/users/mvcprogrammer/projects/3). | ASP.NET Core on .NET 10 · Lambda · SAM / CloudFormation · SSM · SES · OpenTelemetry · xUnit |
| **[sandkey-display-web](https://github.com/mvcprogrammer/sandkey-display-web)**<br><sub>[try it live](https://display.lightsplitters.com/)</sub> | The screen half of the same kiosk. A React app that keeps the layout the office knows by heart, fits any window, and talks only to `sandkey-display-api`. Tracked on the same [kiosk project board](https://github.com/users/mvcprogrammer/projects/3). | React 18 · TypeScript · Vite · React Router · S3 · CloudFront |
| **[lightsplitters.com](https://github.com/mvcprogrammer/lightsplitters.com)**<br><sub>[live](https://lightsplitters.com)</sub> | The site for my photography studio, prerendered to static HTML. A second app in the same workspace is the template for every client's wedding site or family album, each served from its own S3 folder at its own subdomain with no AWS changes per client. Shipped and planned work is on its [project board](https://github.com/users/mvcprogrammer/projects/2). | Angular 22 · TypeScript · S3 · CloudFront Functions · Lambda + SES · Stripe |
| **[LegacyCPPFrom1999](https://github.com/mvcprogrammer/LegacyCPPFrom1999)** | Where it started. Code from a real-time day-trading platform I wrote in 1999 for a NASDAQ broker: pipe-delimited market data at hundreds of messages a second, fanned out over TCP to a floor of traders. Kept as history, not as a sample of how I write today. | C++ · TCP sockets |

## One site, four editions

mvcprogrammer.com is built four times from the same content and the same shared stylesheet, once in each front-end stack I work in. The editions mirror each other, so a change to one is made to the other three in the same commit, and they cross-link so each is a click away from the rest. Each edition keeps its own colophon describing its own stack, and since October 2026 each carries its own palette: one small file per edition overrides the shared design tokens with `light-dark()`, so the colors change and no rule is repeated.

| Edition | Stack | Palette | Light | Dark |
| --- | --- | --- | --- | --- |
| **[Default](https://mvcprogrammer.com)**<br><sub>repository root</sub> | Vanilla HTML, CSS, and JavaScript. No framework, no build step. | Eggshell paper with a terracotta accent and a coral hover; a warm charcoal after dark. | ![#f0ead6](https://img.shields.io/badge/-%20%20%20%20-f0ead6?style=flat-square) ![#a64a23](https://img.shields.io/badge/-%20%20%20%20-a64a23?style=flat-square) ![#d4602f](https://img.shields.io/badge/-%20%20%20%20-d4602f?style=flat-square) | ![#211e18](https://img.shields.io/badge/-%20%20%20%20-211e18?style=flat-square) ![#e0855c](https://img.shields.io/badge/-%20%20%20%20-e0855c?style=flat-square) ![#ffb088](https://img.shields.io/badge/-%20%20%20%20-ffb088?style=flat-square) |
| **[Angular](https://angular.mvcprogrammer.com)**<br><sub>`angular/`</sub> | Angular 22, standalone components, signals, Vitest. | Navy and brass: a cool, faintly blue page with navy buttons and a goldenrod hover; a true navy after dark with muted brass for buttons and links and a paler gold on hover. | ![#f3f5fa](https://img.shields.io/badge/-%20%20%20%20-f3f5fa?style=flat-square) ![#1b365d](https://img.shields.io/badge/-%20%20%20%20-1b365d?style=flat-square) ![#b7791f](https://img.shields.io/badge/-%20%20%20%20-b7791f?style=flat-square) | ![#0f1b33](https://img.shields.io/badge/-%20%20%20%20-0f1b33?style=flat-square) ![#e3b04b](https://img.shields.io/badge/-%20%20%20%20-e3b04b?style=flat-square) ![#f2cd7a](https://img.shields.io/badge/-%20%20%20%20-f2cd7a?style=flat-square) |
| **[React](https://react.mvcprogrammer.com)**<br><sub>`react/`</sub> | React 19, TypeScript, Vite, Vitest. | The react.dev documentation palette: cool slate surfaces, React blue for buttons and links, the logo cyan on hover. | ![#f6f7f9](https://img.shields.io/badge/-%20%20%20%20-f6f7f9?style=flat-square) ![#067394](https://img.shields.io/badge/-%20%20%20%20-067394?style=flat-square) ![#149eca](https://img.shields.io/badge/-%20%20%20%20-149eca?style=flat-square) | ![#23272f](https://img.shields.io/badge/-%20%20%20%20-23272f?style=flat-square) ![#58c4dc](https://img.shields.io/badge/-%20%20%20%20-58c4dc?style=flat-square) ![#61dafb](https://img.shields.io/badge/-%20%20%20%20-61dafb?style=flat-square) |
| **[Blazor](https://blazor.mvcprogrammer.com)**<br><sub>`blazor/`</sub> | Blazor WebAssembly on .NET 10, C# components in the browser, xUnit and bUnit. | .NET violet: the .NET brand purple on faint lavender, a deep violet-black with lilac buttons after dark, the Blazor gradient's pink on hover. | ![#f4f1fb](https://img.shields.io/badge/-%20%20%20%20-f4f1fb?style=flat-square) ![#512bd4](https://img.shields.io/badge/-%20%20%20%20-512bd4?style=flat-square) ![#c2187a](https://img.shields.io/badge/-%20%20%20%20-c2187a?style=flat-square) | ![#1a1430](https://img.shields.io/badge/-%20%20%20%20-1a1430?style=flat-square) ![#b49cff](https://img.shields.io/badge/-%20%20%20%20-b49cff?style=flat-square) ![#ff7ac8](https://img.shields.io/badge/-%20%20%20%20-ff7ac8?style=flat-square) |

Swatches are page, accent, and hover, in that order. The default edition is the screenshot at the top of this page; the other three:

<div align="center">

| Angular | React | Blazor |
| :---: | :---: | :---: |
| <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mvcprogrammer/mvcprogrammer.com/main/docs/images/mvcprogrammer-com-angular-dark.png"><img alt="The Angular edition, home page" src="https://raw.githubusercontent.com/mvcprogrammer/mvcprogrammer.com/main/docs/images/mvcprogrammer-com-angular-light.png" width="300"></picture> | <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mvcprogrammer/mvcprogrammer.com/main/docs/images/mvcprogrammer-com-react-dark.png"><img alt="The React edition, home page" src="https://raw.githubusercontent.com/mvcprogrammer/mvcprogrammer.com/main/docs/images/mvcprogrammer-com-react-light.png" width="300"></picture> | <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/mvcprogrammer/mvcprogrammer.com/main/docs/images/mvcprogrammer-com-blazor-dark.png"><img alt="The Blazor edition, home page" src="https://raw.githubusercontent.com/mvcprogrammer/mvcprogrammer.com/main/docs/images/mvcprogrammer-com-blazor-light.png" width="300"></picture> |
| <sub>[angular.mvcprogrammer.com](https://angular.mvcprogrammer.com)</sub> | <sub>[react.mvcprogrammer.com](https://react.mvcprogrammer.com)</sub> | <sub>[blazor.mvcprogrammer.com](https://blazor.mvcprogrammer.com)</sub> |

</div>

## Tech stack

| Area | Tools |
| --- | --- |
| **Back end** | C# / .NET 10 and .NET Core, ASP.NET Core Web API and MVC, minimal APIs, EF Core, Dapper, MediatR, SignalR, OpenAPI, RabbitMQ, Hangfire, Polly |
| **Front end** | Angular, React, TypeScript, vanilla JavaScript, HTML / CSS, Vite |
| **Data** | SQL Server: complex queries, stored procedures, indexing, execution plans, performance tuning, deadlock diagnosis. DynamoDB single-table design |
| **Cloud and delivery** | AWS Lambda, S3, CloudFront, Route 53, IAM, SSM, SAM / CloudFormation, GitHub Actions with OIDC, Azure DevOps, Docker |
| **Quality** | xUnit, NUnit, NSubstitute, Moq, Telerik JustMock, WebApplicationFactory integration tests, analyzers as build errors, OpenTelemetry, Serilog, Datadog |
| **AI** | Claude AI pair programming in day-to-day .NET work; two years on an enterprise AI Transition Team |
| **Domains** | Accounting (GL, AR/AP, bank reconciliation, QuickBooks API) · Healthcare (HL7 v2, FHIR, HIPAA) · Real estate (Stellar MLS via the Bridge Data Output API) · Financial trading systems |

<br>

<div align="center">
<sub>Résumé, freelance, and contact: <a href="https://mvcprogrammer.com/#resume">mvcprogrammer.com</a></sub>
</div>
