# Ask Idan AI — Cloudflare Worker

A small server-side proxy between the portfolio site and Anthropic's API. It keeps the API key secret and adds a System Prompt that makes Claude answer as Idan's AI clone.

**Stack:** Cloudflare Workers (free tier) + Anthropic Claude Haiku.

**Cost:** Cloudflare Workers free tier covers 100k requests/day. Anthropic Haiku is ~$0.000625 per chat message — so 1,000 chats ≈ $0.62. Realistic monthly cost: $5–15.

---

## One-time setup

You need an Anthropic API key and a Cloudflare account (both free to create).

### 1. Anthropic API key

1. Go to <https://console.anthropic.com/>
2. Create an account (or sign in)
3. Add billing — you get $5 free credit on first sign-up, plenty for testing
4. Go to **API Keys** → **Create Key**
5. Copy the key (starts with `sk-ant-…`) — you'll need it shortly

### 2. Cloudflare account + Wrangler CLI

1. Go to <https://dash.cloudflare.com/sign-up> and create an account
2. Install Node.js if you don't have it (you already do — the portfolio uses it)
3. Install Wrangler (the Cloudflare CLI):
   ```bash
   cd worker
   npm install
   ```
4. Log in:
   ```bash
   npx wrangler login
   ```
   A browser will open — authorize wrangler.

### 3. Set the API key as a secret

From the `worker/` directory:

```bash
npx wrangler secret put ANTHROPIC_API_KEY
```

You'll be prompted to paste your Anthropic API key. It's stored encrypted on Cloudflare and never appears in code or git.

### 4. (Optional but recommended) Restrict CORS to your site

Edit `wrangler.toml` and uncomment the `ALLOWED_ORIGIN` line, setting it to your live URL (e.g., `https://idankashy.github.io` or your custom domain). This prevents random other sites from using your Worker and burning API credit.

### 5. Deploy

```bash
npm run deploy
```

Wrangler will print a URL like `https://idan-portfolio-chat.<your-username>.workers.dev`. **Copy this URL.**

### 6. Tell the frontend to use the Worker

In the portfolio root (NOT in `worker/`), create a `.env.local` file:

```
VITE_CHAT_API_URL=https://idan-portfolio-chat.<your-username>.workers.dev
```

For **production** (GitHub Pages) you need to set this env var at build time. The simplest path: add a repository secret named `VITE_CHAT_API_URL` in GitHub repo settings → Secrets → Actions, then add it to the build step in `.github/workflows/deploy.yml`:

```yaml
- run: npm run build
  env:
    VITE_CHAT_API_URL: ${{ secrets.VITE_CHAT_API_URL }}
```

Push to `main` — site rebuilds with the env var baked in.

---

## Verifying it works

After deploying:

1. Open your live site
2. Click the floating "Ask Idan AI" button (bottom-right)
3. Ask something like *"Does Idan know SQL Server?"* — you should get a real, contextual answer (not the generic fallback)
4. Open browser DevTools → Network tab and confirm a POST request goes to your `*.workers.dev` URL

If something fails, the frontend automatically **falls back to the static keyword matcher** — so the chat keeps working even if the Worker is down. Check the Cloudflare dashboard → Workers → Logs for errors.

---

## Local development (optional)

To run the Worker locally for testing:

```bash
cd worker
echo "ANTHROPIC_API_KEY=sk-ant-your-key" > .dev.vars  # gitignored
npm run dev
```

Wrangler runs the Worker at `http://localhost:8787`. Set `VITE_CHAT_API_URL=http://localhost:8787` in `.env.local` and run `npm run dev` in the portfolio root.

---

## Cost controls

The Worker already enforces:
- Max 1,000-character user input per request
- Max 6 turns of history per request
- Max 400 output tokens per response
- Haiku model (cheap, fast)

If you want hard rate limiting (X requests per IP per hour), add Cloudflare KV-based limiting in `src/index.ts` — but for a personal portfolio it's usually overkill.

To monitor spend: check the Anthropic console regularly. Cloudflare Workers themselves are free for this volume.

---

## Updating the AI's knowledge

The bio, projects, philosophy and rules are all in the `SYSTEM_PROMPT` constant at the top of [src/index.ts](src/index.ts). Edit it and redeploy (`npm run deploy`).
