# Cloudflare Workers

### Initiliazing a worker
```
npm create cloudflare -- my-app
```
Start the worker locally
```
npm run dev
```
Returning JSON

```
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return Response.json({
			message: "hi"
		});
	},
};
```

### Login into to cli
```
npx wrangler login
```
```
npx wrangler whoami
```

### Deploy

```

npm run deploy
```

```
> 1st-app@0.0.0 deploy
> wrangler deploy

 ⛅️ wrangler 3.57.0
-------------------
Total Upload: 0.21 KiB / gzip: 0.17 KiB
Uploaded 1st-app (2.35 sec)
Published 1st-app (6.30 sec)
  https://1st-app.sarthakkapila27x.workers.dev
Current Deployment ID: d41a85ca-85e8-4230-8970-34a33bc569ed
Current Version ID: d41a85ca-85e8-4230-8970-34a33bc569ed
```

https://developers.cloudflare.com/workers/examples/
