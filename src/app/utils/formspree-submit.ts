/**
 * Submits form data to Web3Forms using async/await fetch
 * Returns a promise that resolves with success status
 * Delivers emails to raj@sellwithrajnow.com via Web3Forms
 */
export async function submitToFormspree(data: Record<string, string>): Promise<boolean> {
  try {
    // Create FormData object
    const formData = new FormData();
    
    // Add Web3Forms access key (REQUIRED)
    formData.append('access_key', '4f4645f7-641e-4bbc-8c97-eda817f33d95');
    
    // Configure Web3Forms to send to raj@sellwithrajnow.com
    // This is configured in the Web3Forms dashboard
    
    // Add subject line based on form type
    const formType = data.formType || 'Contact Form';
    formData.append('subject', `${formType} — SellWithRajNow`);
    formData.append('from_name', 'SellWithRajNow Website');
    
    // Filter out Formspree-specific fields that Web3Forms doesn't recognize
    const cleanData = Object.entries(data).filter(([key]) => {
      // Remove legacy Formspree fields
      return !key.startsWith('_');
    });
    
    // Add all clean form data
    cleanData.forEach(([key, value]) => {
      if (value && key !== 'formType') {
        formData.append(key, value);
      }
    });
    
    console.log('Submitting to Web3Forms...');
    
    // Submit to Web3Forms with explicit headers
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const result = await res.json();
    
    if (result.success) {
      console.log('✓ Form submitted successfully to Web3Forms');
      console.log('✓ Email will be delivered to raj@sellwithrajnow.com');
      return true;
    } else {
      console.error('✗ Web3Forms submission failed:', result);
      return false;
    }
  } catch (error) {
    console.error('✗ Error submitting to Web3Forms:', error);
    return false;
  }
}
