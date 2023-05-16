import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const userTable = sqliteTable('user', {
  id: integer('id').primaryKey(),
  name: text('name'),
  email: text('email'),
});
