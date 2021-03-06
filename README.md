This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

---

### Raw code

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Dockerized environment

#### Requirements

Create ```app.env``` file for each environment

Example

```sh
# docker/development/app.env
environment=development
```


Run the dockerized server:

```bash
cd docker/${environment} && docker compose up -d
```

<b> where ```environment = development || production```</b>

<b>NOTE:</b> If Docker is complaining about permissions, give it some by running
```sh
chmod +x docker-entrypoint.sh
```


Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

---
