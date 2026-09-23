# Hi, I'm Neal Thomas

**Senior Full-Stack Software Engineer** · C# / .NET Core · Angular · SQL Server · AWS
Tampa Bay area, Florida · 15+ years building enterprise business applications

[![Website](https://img.shields.io/badge/mvcprogrammer.com-0A66C2?style=flat&logo=googlechrome&logoColor=white)](https://mvcprogrammer.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mvcprogrammer/)
[![Email](https://img.shields.io/badge/mvc.programmer%40gmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:mvc.programmer@gmail.com)

I build back ends that run around the clock and front ends people like using. Most recently I re-architected a legacy polling Windows service into an event-driven **RabbitMQ** pipeline that processes **1M+ API requests, 24/7**. Before that I built and maintained a proprietary accounting system (general ledger, receivables, payables, bank reconciliation, financial reporting) on Angular and ASP.NET Core.

---

## Live projects

Both sites are mine end to end: design, code, infrastructure, and deployment. Both run on **AWS**.

### [mvcprogrammer.com](https://mvcprogrammer.com) · this repo

My portfolio, written in **plain HTML, CSS, and vanilla JavaScript**. No framework, no build step, no dependencies.

- **Hand-written front end:** mobile-first responsive CSS, automatic light/dark theme via `prefers-color-scheme`, self-hosted fonts, accessible markup (ARIA, semantic landmarks), and structured data (JSON-LD) for search.
- **Serverless static hosting on AWS:** private **S3** bucket behind **CloudFront** with Origin Access Control, **ACM** TLS certificate, **Route 53** DNS, HTTP/2 + HTTP/3.
- **Hardened by default:** a strict Content Security Policy (no inline script, nothing third-party), HSTS, and security headers set by a CloudFront response headers policy; a **CloudFront Function** redirects `www` to the apex.
- **CI/CD with no stored secrets:** **GitHub Actions** deploys every push to `main`, syncing to S3 and invalidating CloudFront, authenticated with **OIDC** and a least-privilege IAM role.

Full infrastructure walkthrough: [docs/DEPLOY.md](docs/DEPLOY.md)

### [lightsplitters.com](https://lightsplitters.com)

The website for LightSplitters, my photography studio, built as an **Angular** (TypeScript) single-page application and hosted on **AWS**.

- Component and service architecture in Angular with TypeScript
- Image-heavy galleries (weddings, engagements, studio portraits, pets) tuned for fast loading
- Deployed and served on AWS

> Two sites, two deliberate choices: vanilla JavaScript where a framework would be overhead, Angular where an app structure pays off.

---

## Tech stack

| Area | Tools |
| --- | --- |
| **Languages** | C#, TypeScript, JavaScript, SQL (T-SQL) |
| **Front end** | Angular 2+, vanilla JS, HTML / CSS, REST API consumption |
| **.NET & APIs** | .NET / .NET Core, ASP.NET Core Web API & MVC, EF Core, Dapper, MediatR, AutoMapper, SignalR / WebSockets, Swagger / OpenAPI, OAuth 2.0 / JWT |
| **Databases** | SQL Server: complex queries, stored procedures, indexing, execution plans, performance tuning, deadlock diagnosis |
| **Messaging & concurrency** | RabbitMQ, AWS SQS / SNS, Hangfire, Polly, async/await, TPL, `Parallel.ForEachAsync`, `SemaphoreSlim` |
| **Cloud & DevOps** | AWS (S3, CloudFront, Route 53, ACM, IAM, EC2, Lambda, RDS, CloudWatch), GitHub Actions, Azure DevOps, Docker, Git |
| **Observability** | Serilog, Seq, Datadog, CloudWatch |
| **Architecture** | SOLID, CQRS, dependency injection, event-driven design, microservices, legacy modernization |
| **Testing** | xUnit, NUnit, Moq, unit & integration testing |
| **Domains** | Accounting (GL, AR/AP, bank reconciliation, QuickBooks API) · Healthcare (HL7 v2, FHIR, HIPAA) |
| **AI-assisted dev** | Claude / Claude Code, ChatGPT, LangChain |

---

## Highlights

- **Event-driven at scale:** designed a RabbitMQ publish/subscribe topology with durable queues, dead-letter handling, and Polly retries with exponential backoff, so traffic spikes are absorbed by the queue instead of dropped.
- **Healthcare interoperability:** always-on HL7 v2 and FHIR integrations with external systems in a HIPAA-regulated environment.
- **Accounting systems:** built a proprietary accounting platform designed to run without a traditional month-end close; CQRS with MediatR and real-time updates over SignalR.
- **Modernization:** led a platform migration from .NET Framework 3.x to .NET Core MVC.

---

<sub>Résumé and code samples: [mvcprogrammer.com](https://mvcprogrammer.com)</sub>
