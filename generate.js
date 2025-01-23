export default async function handler(req, res) {
  // Abilita CORS per il tuo dominio
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', 'https://stefanogrilli.it')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method === 'POST') {
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro/generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GOOGLE_AI_API_KEY}`
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: req.body.prompt }] }]
        })
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error calling Google AI:', error);
      res.status(500).json({ error: error.message });
    }
  }
}
