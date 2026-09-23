# Hi, I'm Neal Thomas

**Senior Full-Stack Software Engineer** · C# / .NET Core · Angular · SQL Server · AWS
Tampa Bay area, Florida · 15+ years building enterprise business applications

[![Website](https://img.shields.io/badge/mvcprogrammer.com-0A66C2?style=flat&logo=googlechrome&logoColor=white)](https://mvcprogrammer.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mvcprogrammer/)
[![Email](https://img.shields.io/badge/mvc.programmer%40gmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:mvc.programmer@gmail.com)

I build back ends that run around the clock and front ends people like using. Most recently I re-architected a legacy polling Windows service into an event-driven **RabbitMQ** pipeline that processes **1M+ API requests, 24/7**. Before that I built and maintained a proprietary accounting system (general ledger, receivables, payables, bank reconciliation, financial reporting) on Angular and ASP.NET Core.

---

## Live projects

Each of these is mine end to end: design, code, infrastructure, and deployment. All three run on **AWS**.

### [SandKey](https://github.com/mvcprogrammer/sandkey) · .NET 10 API on AWS Lambda

The backend for a touch-screen property kiosk in a Clearwater Beach real estate office. It serves active MLS listings from the Bridge Data Output (Stellar MLS) feed and emails listing details to visitors who ask for them. The kiosk has run since 2009. This is the 2026 rebuild: a legacy ASP.NET Core 6 MVC app redone as a clean, fully tested, serverless API.

- **Serverless .NET:** ASP.NET Core on **.NET 10**, hosted in **AWS Lambda** (arm64, ReadyToRun) through `Amazon.Lambda.AspNetCoreServer.Hosting`. The same build runs locally under Kestrel.
- **Infrastructure as code:** one **AWS SAM / CloudFormation** stack creates Lambda and its function URL, a private **S3** bucket for the web bundle, the **ACM** certificate, the **Route 53** alias, and a **CloudFront** distribution. That distribution routes `/api/*` to Lambda and everything else to S3, with Origin Access Control signing both origins.
- **No secrets in the repo:** credentials come from **SSM Parameter Store** SecureStrings at startup, through a least-privilege IAM policy. Options are validated on start, so a missing secret stops the app at startup instead of failing on the first request.
- **Resilience and errors:** typed `HttpClient`s from `IHttpClientFactory` with the standard resilience handler (`Microsoft.Extensions.Http.Resilience`). Typed exceptions are mapped to **RFC 7807 ProblemDetails** (404 / 502 / 504) by a single `IExceptionHandler`. Every I/O method takes a `CancellationToken`.
- **Security and privacy:** a delegating handler adds the feed's access token only to outgoing requests, so it never appears in logged URLs. A fixed-window **rate limiter** guards the one endpoint that sends email. Visitor email addresses and phone numbers never reach a log line, and a test checks this.
- **Performance:** source-generated `System.Text.Json` serialization (no reflection, no `dynamic`), and listing photos load directly from the feed's CDN instead of passing through the API.
- **Observability:** **OpenTelemetry** tracing for ASP.NET Core and outbound HTTP, OTLP export, plus `/health` (liveness) and `/ready` (readiness, checks the feed).
- **Quality gates:** 100+ **xUnit** tests with **NSubstitute** and `FakeLogger<T>`, in-memory hosting via `WebApplicationFactory`, and `TreatWarningsAsErrors`, .NET analyzers, and `EnforceCodeStyleInBuild`, so style and XML docs are enforced by the compiler. NuGet versions are managed centrally.
- **Local dev:** hitting Run on the API also starts the Vite-built kiosk screen through `SpaProxy`. The proxy is a Debug-only reference, so it never ships in the Lambda package.

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

> Three projects, three deliberate choices: vanilla JavaScript where a framework would be overhead, Angular where an app structure pays off, and serverless .NET where an always-on server would only add cost.

---

## Tech stack

| Area | Tools |
| --- | --- |
| **Languages** | C#, TypeScript, JavaScript, SQL (T-SQL) |
| **Front end** | Angular 2+, vanilla JS, HTML / CSS, Vite, REST API consumption |
| **.NET & APIs** | .NET 10 / .NET Core, ASP.NET Core Web API & MVC, EF Core, Dapper, MediatR, AutoMapper, SignalR / WebSockets, OpenAPI / Swagger, ProblemDetails, rate limiting, source-generated System.Text.Json, OAuth 2.0 / JWT |
| **Databases** | SQL Server: complex queries, stored procedures, indexing, execution plans, performance tuning, deadlock diagnosis |
| **Messaging & resilience** | RabbitMQ, AWS SQS / SNS, Hangfire, Polly, Microsoft.Extensions.Http.Resilience, async/await, TPL, `Parallel.ForEachAsync`, `SemaphoreSlim` |
| **Cloud & DevOps** | AWS (Lambda, S3, CloudFront, Route 53, ACM, IAM, SSM Parameter Store, EC2, RDS, CloudWatch), AWS SAM / CloudFormation, GitHub Actions (OIDC), Azure DevOps, Docker, Git |
| **Observability** | OpenTelemetry, Serilog, Seq, Datadog, CloudWatch, health checks |
| **Architecture** | SOLID, CQRS, dependency injection, event-driven design, serverless, microservices, legacy modernization |
| **Testing** | xUnit, NUnit, Moq, NSubstitute, WebApplicationFactory integration tests, .NET analyzers as build errors |
| **Domains** | Accounting (GL, AR/AP, bank reconciliation, QuickBooks API) · Healthcare (HL7 v2, FHIR, HIPAA) |
| **AI-assisted dev** | Claude / Claude Code, ChatGPT, LangChain |

---

## Highlights

- **Event-driven at scale:** designed a RabbitMQ publish/subscribe topology with durable queues, dead-letter handling, and Polly retries with exponential backoff, so traffic spikes are absorbed by the queue instead of dropped.
- **Healthcare interoperability:** always-on HL7 v2 and FHIR integrations with external systems in a HIPAA-regulated environment.
- **Accounting systems:** built a proprietary accounting platform designed to run without a traditional month-end close; CQRS with MediatR and real-time updates over SignalR.
- **Modernization:** led a platform migration from .NET Framework 3.x to .NET Core MVC, and rebuilt a 17-year-old kiosk backend as a serverless .NET 10 API ([SandKey](https://github.com/mvcprogrammer/sandkey)).

---

<sub>Résumé and code samples: [mvcprogrammer.com](https://mvcprogrammer.com)</sub>
