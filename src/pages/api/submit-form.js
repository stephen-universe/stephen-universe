export default async function handler(req, res) {
  // Debugging header
  console.log('=== NEW SUBMISSION ===', new Date().toISOString());
  
  try {
    // 1. Validate required fields
    if (!req.body.name || !req.body.email) {
      console.log('Missing fields:', req.body);
      return res.status(400).json({ 
        error: 'Name and email are required',
        received: req.body 
      });
    }

    // 2. Prepare Google Script payload
    const payload = {
      ...req.body,
      timestamp: new Date().toISOString(),
      cleanNumber: req.body.number?.replace(/\D/g, '') || '',
      cleanBudget: req.body.budget?.replace(/[^\d.]/g, '') || ''
    };

    console.log('Forwarding to Google Script:', payload);

    // 3. Call Google Script
    const gscriptResponse = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    // 4. Handle Google's response
    if (!gscriptResponse.ok) {
      const errorText = await gscriptResponse.text();
      console.error('Google Script error:', errorText);
      throw new Error(`Google Script responded with ${gscriptResponse.status}`);
    }

    const gscriptData = await gscriptResponse.json();
    console.log('Google success:', gscriptData);

    // 5. Forward success
    return res.status(200).json(gscriptData);

  } catch (error) {
    console.error('API ROUTE CRASH:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      debug: process.env.NODE_ENV === 'development' ? error.message : undefined,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}