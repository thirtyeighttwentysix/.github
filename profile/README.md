<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/thirtyeighttwentysix/.github/main/profile/assets/hero-dark.svg">
    <img src="https://raw.githubusercontent.com/thirtyeighttwentysix/.github/main/profile/assets/hero-light.svg" width="100%" alt="3826 — One schema. A better JVM workflow. Open-source tools for Kotlin and Java.">
  </picture>
</p>

<p align="center">
  We build <strong>Volan</strong>: a schema-first ORM and the editor tools that make it feel at home on the JVM.<br>
  Define your model once. Generate a type-safe client. Evolve your database with explicit migrations.
</p>

<p align="center">
  <a href="https://3826.mintlify.app"><strong>Documentation</strong></a> &nbsp; · &nbsp;
  <a href="https://github.com/thirtyeighttwentysix/volan/blob/main/ROADMAP.md">Roadmap</a> &nbsp; · &nbsp;
  <a href="https://github.com/thirtyeighttwentysix/volan/discussions">Discussions</a>
</p>

## Two projects. One workflow.

<table>
  <tr>
    <td width="50%" valign="top">
      <a href="https://github.com/thirtyeighttwentysix/volan"><img src="https://raw.githubusercontent.com/thirtyeighttwentysix/.github/main/profile/assets/volan-card.svg" width="100%" alt="Volan ORM — schema to type-safe client"></a>
      <p>Declarative <code>.volan</code> schemas, generated Kotlin and Java clients, explicit relations, and migration tooling for PostgreSQL and SQLite.</p>
      <p><strong>Available in alpha.</strong> APIs may change before 1.0.</p>
      <p><a href="https://github.com/thirtyeighttwentysix/volan"><strong>Explore the ORM →</strong></a> &nbsp; <a href="https://github.com/thirtyeighttwentysix/volan/releases">Releases</a></p>
    </td>
    <td width="50%" valign="top">
      <a href="https://github.com/thirtyeighttwentysix/volan-idea"><img src="https://raw.githubusercontent.com/thirtyeighttwentysix/.github/main/profile/assets/idea-card.svg" width="100%" alt="Volan for IntelliJ IDEA — understand your schema as you type"></a>
      <p>A Kotlin plugin for IntelliJ IDEA with context-aware completion, schema diagnostics, navigation, quick documentation, and formatting.</p>
      <p><strong>Your schema, inside your IDE.</strong> Light and dark theme icons included.</p>
      <p><a href="https://github.com/thirtyeighttwentysix/volan-idea"><strong>Explore the plugin →</strong></a> &nbsp; <a href="https://github.com/thirtyeighttwentysix/volan-idea/releases">Install from ZIP</a></p>
    </td>
  </tr>
</table>

## Start with the schema.

```prisma
// schema.volan
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())

  @@map("users")
}
```

Query with the generated Kotlin client:

```kotlin
val users = db.user.findMany {
    where { email endsWith "@acme.com" }
    orderBy { createdAt.desc() }
    take = 20
}
```

Prefer Java? The generated client also provides callbacks, getters, builders, and async operations.
[See the Java API →](https://github.com/thirtyeighttwentysix/volan/blob/main/docs/java-api.md)

## Built to be explicit.

| Model | Query | Evolve | Edit |
| :--- | :--- | :--- | :--- |
| One readable schema as the source of truth. | Generated clients and explicit, batched relation loading. | Preview SQL, apply changes, and track versioned migrations. | Completion and diagnostics backed by the schema engine. |

## Find your next step.

- **Get started:** [documentation](https://3826.mintlify.app) · [schema language](https://github.com/thirtyeighttwentysix/volan/blob/main/docs/schema-language.md) · [database support](https://github.com/thirtyeighttwentysix/volan/blob/main/docs/dialects.md)
- **Understand the design:** [architecture](https://github.com/thirtyeighttwentysix/volan/blob/main/ARCHITECTURE.md) · [migrations](https://github.com/thirtyeighttwentysix/volan/blob/main/docs/migrations.md) · [roadmap](https://github.com/thirtyeighttwentysix/volan/blob/main/ROADMAP.md)
- **Help shape Volan:** [contributing](https://github.com/thirtyeighttwentysix/volan/blob/main/CONTRIBUTING.md) · [ORM issues](https://github.com/thirtyeighttwentysix/volan/issues) · [plugin issues](https://github.com/thirtyeighttwentysix/volan-idea/issues)

---

<p align="center"><strong>3826</strong> &nbsp; / &nbsp; Open source. Kotlin + Java. Apache 2.0.</p>
