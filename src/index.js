import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const start = async () => {
  try {
    await initMongoConnection();
    setupServer();
    console.log('Server is running');
  } catch (error) {
    console.error('Failed to start application', error);
    process.exit(1);
  }
};

start();
