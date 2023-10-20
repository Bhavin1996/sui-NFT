import createConnectionPool, {sql} from '@databases/pg';

export {sql};

const db = createConnectionPool();
export default db;

async function run() {
  // N.B. you will need to replace this connection
  // string with the correct string for your database.
  const db = createConnectionPool(
    'postgres://test-user@localhost:5432/test-db',
  );

  const results = await db.query(sql`
    SELECT 1 + 1 as result;
  `);

  console.log(results);
  // => [{result: 2}]

  await db.dispose();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});