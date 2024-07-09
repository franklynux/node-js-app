import express, { static } from 'express';
import { join } from 'path';
const app = express();

// Serve static files from the "public" directory
app.use(static(join(__dirname, 'public')));

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
