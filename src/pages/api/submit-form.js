// pages/api/submit-form.js
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzfYK-0aSrYRg5qdfZuBwm1zZWtUrV6Eo80HL2HgrF4KPfLPhgVm8aQZuzfA0addaU/exec';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate required fields
    const { name, email, number } = req.body;
    if (!name || !email || !number) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Forward to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...req.body,
        // Ensure clean data
        number: req.body.number.replace(/\D/g, ''),
        budget: req.body.budget?.replace(/[^\d.]/g, '') || '',
      }),
    });

    // Handle Google Script response
    if (!response.ok) {
      throw new Error(`Google Script error: ${response.statusText}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      return res.status(400).json({ 
        error: result.error || 'Submission failed',
        fallbackNeeded: true 
      });
    }

    return res.status(200).json({ success: true });
    
  } catch (error) {
    console.error('API Route Error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error',
      fallbackNeeded: true 
    });
  }
}