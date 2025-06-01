
// pages/api/submit-form.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed' 
    });
  }

  try {
    // Validate required fields
    if (!req.body.name || !req.body.email) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name and email are required'
      });
    }

    const googleResponse = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...req.body,
        timestamp: new Date().toISOString() // Add timestamp for debugging
      })
    });

    const googleData = await googleResponse.json();

    if (!googleResponse.ok || !googleData.success) {
      return res.status(400).json({
        success: false,
        error: googleData.error || 'Google Script rejected the submission',
        details: googleData // Include full response for debugging
      });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('API Route Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && {
        debug: error.message
      })
    });
  }
}