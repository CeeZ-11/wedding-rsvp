/* eslint-env node */

module.exports = async function handler(req, res) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  try {
    const response = await fetch(scriptUrl);
    const data = await response.json();

    // Extract taken gifts
    const takenGifts = data
      .filter(row => row.gift)
      .map(row => row.gift);

    return res.status(200).json({ takenGifts });

  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch gifts' });
  }
};