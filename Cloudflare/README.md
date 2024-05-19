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
};```

