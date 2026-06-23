# 📸 Mon-VS-Ultra

[![CI Pipeline](https://github.com/credkellar-boop/Mon-VS-Ultra/actions/workflows/ci.yml/badge.svg)](https://github.com/credkellar-boop/Mon-VS-Ultra/actions/workflows/ci.yml)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933.svg?logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?logo=typescript&logoColor=white)
![Turborepo](https://img.shields.io/badge/Turborepo-Enabled-EF4444.svg?logo=turborepo&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED.svg?logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1.svg?logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-7-DC382D.svg?logo=redis&logoColor=white)

## 🧐 What is this?
**Mon-VS-Ultra** is a high-performance, containerized monorepo ecosystem. It is a full-stack infrastructure designed to handle complex backend API routing alongside advanced, specialized modules: a spatial AR rendering engine, automated social media distribution pipelines, and strict ephemeral data retention protocols. 

It acts as a unified hub for building, testing, and deploying multi-threaded microservices, utilizing Turborepo for workspace orchestration and a dual-linter setup to enforce ultra-strict code quality across the entire workspace.

## ⚙️ How does it work?
The architecture relies on a hybrid microservices approach, blending the rapid development capabilities of Node.js/TypeScript with the raw computational power of Rust.

* **Core API (`src/`)**: A Node.js/Express backend handles health checks, environment validation, and general routing. It listens on port `3000` (or as defined in `.env`) and manages the operational state of the sub-modules.
* **Spatial AR Engine (`ar-spatial/`)**: This module utilizes **Rust** (`Cargo.toml`) for heavy lifting and native-bindings, paired with an ephemeral logic controller (`Snapchat-Style-Ephemeral-Protocol`) that strictly manages media state, ensuring data is deleted immediately on close or after a set viewing period.
* **Social Distribution (`social-distribution/`)**: An automated pipeline built to package and export media directly to platforms like Instagram Reels, TikTok, and Twitter, formatting output securely using API keys managed in the environment.
* **Data Layer**: Persistent data is anchored by a **PostgreSQL (v15)** database, while **Redis (v7)** handles high-speed caching and rapid ephemeral state management.
* **Infrastructure (`docker/` & `.github/`)**: The entire environment is containerized via Docker Compose, splitting builds into multi-stage Dockerfiles for optimized production running. CI/CD is fully automated via GitHub Actions, running dual-linters, Jest test suites, and Docker verification on every push to `main`.

## ✨ Why is this cool?
1.  **Polyglot Powerhouse**: It seamlessly integrates Rust's safety and speed for rendering pipelines with TypeScript's flexibility for API and social integrations.
2.  **Built-in Ephemerality**: The customized `destruction-rules.json` and ephemeral logic mean you have military-grade, Snapchat-style data retention policies working out-of-the-box.
3.  **Automated Content Pipelines**: It doesn't just render data; it actively distributes it. The social pipeline handles the formatting and pushing of media assets directly to major social platforms.
4.  **Developer Experience (DX)**: With Turborepo caching, dual-linters (ESLint + SonarLint rules), and a single `docker-compose up` command, the barrier to spinning up this complex web of services is nearly zero.

## 🚀 How to install?

### Prerequisites
Ensure you have the following installed on your local machine:
* [Node.js](https://nodejs.org/) (v20.x recommended)
* [Docker](https://www.docker.com/) & Docker Compose
* [Rust & Cargo](https://www.rust-lang.org/tools/install) (For building the `ar-spatial` native bindings)
* Git

### Quick Start

**1. Clone the Repository**
```bash
git clone [https://github.com/Credkellar-Boop/Mon-VS-Ultra.git](https://github.com/Credkellar-Boop/Mon-VS-Ultra.git)
cd Mon-VS-Ultra
