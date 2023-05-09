import type { RequestHandler } from './$types';

export function GET(request: RequestHandler) {
	return Response.json({ hello: 'world' });
}
x;
