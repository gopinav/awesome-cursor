# document-signing-with-signbee

Use this prompt or install the official Signbee Cursor Plugin ([`signbee/cursor-plugin`](https://github.com/signbee/cursor-plugin)), MCP server ([`signbee/mcp`](https://github.com/signbee/mcp)), or Agent Skill ([`signbee/skill`](https://github.com/signbee/skill)) to let Cursor draft and send contracts, NDAs, and agreements for two-party e-signing with SHA-256 tamper-evident certificates.

## Quick Setup in Cursor

1. **Install the Agent Skill**:
   ```bash
   npx skills add signbee/skill --skill signbee -g
   ```
2. **Or configure `signbee-mcp` in `.cursor/mcp.json`**:
   ```json
   {
     "mcpServers": {
       "signbee": {
         "command": "npx",
         "args": ["-y", "signbee-mcp"]
       }
     }
   }
   ```

## Prompt Instructions

When asked to draft and send a document (such as an NDA, consulting agreement, or statement of work) for signature:

1. Draft clean, structured Markdown containing the agreement title, parties, effective date, terms, and obligations.
2. Call `POST https://signb.ee/api/v1/send` (or invoke the `signbee` MCP tool) with:
   - `markdown`: The full Markdown document body
   - `sender_name` and `sender_email`
   - `recipient_name` and `recipient_email`
3. If no `SIGNBEE_API_KEY` is set, prompt the sender for the 6-digit email OTP and call `POST https://signb.ee/api/v1/verify` with `document_id` and `otp`.
4. Return the tracking `document_id` and status URL so both parties receive the final PDF with its appended SHA-256 cryptographic signing certificate.
