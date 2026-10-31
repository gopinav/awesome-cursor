# Awesome Cursor

Everything to do with [Cursor](https://cursor.com) — sample apps, prompts, Cursor plugins, MCP servers, and agent skills.

## Contents

- [Code with Cursor](#code-with-cursor)
- [Prompts](#prompts)
- [Cursor Plugins & MCP Servers](#cursor-plugins--mcp-servers)

## Code with Cursor

- [`code-with-cursor/ss-to-code-app`](code-with-cursor/ss-to-code-app) — Screenshot-to-code React application built with Cursor.
- [`code-with-cursor/todo-app`](code-with-cursor/todo-app) — Todo application built with Cursor.

## Prompts

- [`prompts/screenshot-to-code.md`](prompts/screenshot-to-code.md) — Convert a UI screenshot into a functional React + Tailwind CSS + shadcn/ui + Framer Motion app.
- [`prompts/document-signing-with-signbee.md`](prompts/document-signing-with-signbee.md) — Draft and send Markdown or PDF agreements for two-party e-signing with SHA-256 certificates directly from Cursor.

## Cursor Plugins & MCP Servers

- **[signbee/cursor-plugin](https://github.com/signbee/cursor-plugin)** — Cursor Marketplace plugin bundling the Signbee MCP server and Agent Skill for document e-signing.
- **[signbee/mcp](https://github.com/signbee/mcp)** — MCP server (`npx -y signbee-mcp`) for [Signbee](https://signb.ee) enabling AI agents in Cursor to send Markdown or PDF documents for two-party e-signing with SHA-256 certified delivery, OTP verification, and webhooks.
- **[signbee/skill](https://github.com/signbee/skill)** — Agent Skill (`npx skills add signbee/skill --skill signbee -g`) and [`llms.txt`](https://signb.ee/llms.txt) API reference for AI agents.
