import 'dotenv/config';
import { createAdminUser } from './src/server/auth';

async function seed() {
  console.log('Creating admin user...');
  await createAdminUser('admin@protech.com', 'admin123');
  console.log('Admin user created successfully.');
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
