const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const aiRouter = require('./api/ai');

app.use(cors());
app.use(express.json());

// Verifica che la chiave API sia presente
if (!process.env.GOOGLE_AI_API_KEY) {
  console.error('GOOGLE_AI_API_KEY non trovata nelle variabili d\'ambiente');
  process.exit(1);
}

app.use('/api', aiRouter);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Google AI API Server is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
