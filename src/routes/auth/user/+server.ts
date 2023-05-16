import { userTable } from '$lib/schema';
import { json } from '@sveltejs/kit';
import type { InferModel } from 'drizzle-orm';
import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { drizzle } from 'drizzle-orm/d1';
import { env } from '$env/dynamic/private';

export async function POST({ request }) {
  try {
    const requestBody = await request.json();

    const db: DrizzleD1Database = drizzle(env.DB);
    type NewUser = InferModel<typeof userTable, 'insert'>;

    const newUser: NewUser = {
      name: 'Teste',
      email: 'teste@gmail.com',
    };

    const user = await db.insert(userTable).values(newUser).run();

    return json({ user });
  } catch (e) {
    console.log(e);
    return json({ message: e.message });
  }
}

export async function GET({ request }) {
  console.log('Get');
  try {
    const db: DrizzleD1Database = drizzle(env.DB);

    const users = await db.select().from(userTable).all();

    return json({ users });
  } catch (e) {
    console.log(e);
    return json({ message: e.message });
  }
}
