/* eslint-env node */

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return res.status(500).json({ error: 'Missing GOOGLE_SCRIPT_URL' });
  }

  try {
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    console.log('API BODY:', body); // 🔍 DEBUG

    const payload = {
      name: body.name || '',
      attendance: body.attendance || '',
      gift: body.gift || '', // ✅ GUARANTEED
      dietary: body.dietary || '',
      message: body.message || '',
      transportation: body.transportation || '',
    };

    console.log('FORWARDING TO GOOGLE:', payload); // 🔍 DEBUG

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    console.log("GOOGLE RESPONSE:", text);

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("FETCH ERROR:", err);
    return res.status(500).json({ error: 'Fetch failed' });
  }
};