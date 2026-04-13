import type { VercelRequest, VercelResponse } from '@vercel/node';

module.exports = async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log("METHOD:", req.method);
  console.log("BODY:", req.body);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.error("Missing GOOGLE_SCRIPT_URL");
    return res.status(500).json({ error: 'Missing env variable' });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    console.log("GOOGLE RESPONSE:", text);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("FETCH ERROR:", err);
    return res.status(500).json({ error: 'Fetch failed' });
  }
};