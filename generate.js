async function handleRequest(prompt) {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro/generateContent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GOOGLE_AI_API_KEY}`
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });
  return await response.json();
}
