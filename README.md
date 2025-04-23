# Miraq Exchange

> **Note on Branches**  
> All feature development happens in the `dev` branch.  
> The `main` branch only contains stable, production-ready code.  
> Please check the `dev` branch for the latest development updates.

---

**Miraq Exchange** is a full-stack implementation of a centralized cryptocurrency trading platform (CEX).  
It aims to simulate the real-world architecture and features of production-grade exchanges, including authentication, asset management, and order systems.

This project is designed to deepen hands-on understanding of backend infrastructure, database modeling, JWT-based authentication, and frontend integration.

---

## 🔧 Tech Stack

| Layer         | Tech                             |
|---------------|----------------------------------|
| Frontend      | Next.js (App Router), TypeScript, Tailwind CSS |
| State Mgmt    | Zustand                          |
| Backend       | Node.js, Express.js, TypeScript  |
| Auth          | JWT, Bcrypt                      |
| Database      | PostgreSQL, Prisma ORM           |
| DevOps        | Docker, TurboRepo, Vercel        |

---

## 📁 Project Structure

```
/apps
  ├── frontend   # Web interface using Next.js
  └── backend    # Express server with API and database access

/packages
  └── shared     # (optional) Shared utilities and config
```

---

## 🚧 Development Workflow

- All new features are developed in feature branches and merged into `dev`.
- Only stable and production-ready code is merged into `main`.

---

## 🔜 Upcoming Features

- Login & session management  
- Real-time order book using WebSocket  
- Trade execution & matching engine  
- Admin dashboard

---

## 📌 Note

This is a solo project to demonstrate full-stack Web3 & CEX development skills for portfolio purposes.  
PRs and commits follow conventional commit standards.
