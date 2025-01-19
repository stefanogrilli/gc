const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'tryAi API is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
