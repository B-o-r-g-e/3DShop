import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Routes
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from DALL.E' });
});

// Error Handling Middleware (optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start the Server
app.listen(8080, () => console.log('Server has started on port 8080'));
