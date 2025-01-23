const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configura CORS per permettere richieste dal tuo dominio
app.use(cors({
  origin: ['https://stefanogrilli.it', 'http://stefanogrilli.it'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Google AI API Server is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
