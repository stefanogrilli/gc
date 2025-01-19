const express = require('express');
const router = express.Router();
const { TextServiceClient } = require('@google-ai/generativelanguage').v1beta2;
const { GoogleAuth } = require('google-auth-library');

const MODEL_NAME = 'models/text-bison-001';

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(process.env.GOOGLE_AI_API_KEY),
});

router.post('/generate', async (req, res) => {
  try {
    const response = await client.generateText({
      model: MODEL_NAME,
      prompt: { text: req.body.prompt }
    });
    
    res.json(response[0].candidates[0]);
  } catch (error) {
    console.error('Error calling Google AI API:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
