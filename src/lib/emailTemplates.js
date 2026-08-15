export function getContactEmailHtml({ name, phone, email, city, service, loanAmount, message }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
          .header { background: #0B192C; color: #ffffff; padding: 25px 30px; text-align: center; }
          .header h2 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
          .header p { margin: 5px 0 0 0; color: #FFD700; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 30px; }
          .badge { display: inline-block; background: #e0f2fe; color: #0369a1; font-weight: 700; font-size: 12px; padding: 4px 12px; rounded-radius: 20px; margin-bottom: 20px; text-transform: uppercase; }
          .field-group { margin-bottom: 16px; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px; }
          .label { font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { font-size: 15px; font-weight: 600; color: #111827; }
          .highlight { color: #1E3E62; font-weight: 700; }
          .message-box { background: #f9fafb; border-left: 4px solid #FFD700; padding: 12px 16px; border-radius: 0 8px 8px 0; font-size: 14px; color: #374151; margin-top: 6px; }
          .footer { background: #f8fafc; text-align: center; padding: 15px; font-size: 12px; color: #9ca3af; border-t: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>PROPERTY SURE</h2>
            <p>New Lead / Contact Submission</p>
          </div>
          <div class="content">
            <div class="badge">🔔 New Enquiry Notification</div>
            
            <div class="field-group">
              <div class="label">Client Full Name</div>
              <div class="value">${name}</div>
            </div>

            <div class="field-group">
              <div class="label">Mobile Number</div>
              <div class="value highlight">📞 ${phone}</div>
            </div>

            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value">${email || 'Not Provided'}</div>
            </div>

            <div class="field-group">
              <div class="label">City / Location</div>
              <div class="value">📍 ${city || 'Noida'}</div>
            </div>

            <div class="field-group">
              <div class="label">Requested Service</div>
              <div class="value highlight">💼 ${service || 'Home Loan'}</div>
            </div>

            ${loanAmount ? `
            <div class="field-group">
              <div class="label">Required Loan Amount</div>
              <div class="value">💰 ₹ ${loanAmount}</div>
            </div>
            ` : ''}

            ${message ? `
            <div class="field-group" style="border-bottom: none;">
              <div class="label">Client Message / Notes</div>
              <div class="message-box">${message}</div>
            </div>
            ` : ''}
          </div>

          <div class="footer">
            Property Sure Real Estate & Financial Services Lead Portal
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getSellPropertyEmailHtml({ name, mobile, email, city, propertyType, propertyValue, images }) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
          .header { background: #0B192C; color: #ffffff; padding: 25px 30px; text-align: center; }
          .header h2 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; }
          .header p { margin: 5px 0 0 0; color: #FFD700; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 30px; }
          .badge { display: inline-block; background: #fef3c7; color: #92400e; font-weight: 700; font-size: 12px; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; text-transform: uppercase; }
          .field-group { margin-bottom: 16px; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px; }
          .label { font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { font-size: 15px; font-weight: 600; color: #111827; }
          .highlight { color: #1E3E62; font-weight: 700; }
          .image-tag { display: inline-block; background: #eff6ff; color: #1d4ed8; font-size: 12px; padding: 4px 8px; border-radius: 4px; margin: 2px; font-weight: 500; }
          .footer { background: #f8fafc; text-align: center; padding: 15px; font-size: 12px; color: #9ca3af; border-t: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>PROPERTY SURE</h2>
            <p>New Property Listing Request</p>
          </div>
          <div class="content">
            <div class="badge">🏡 New Property For Sale</div>
            
            <div class="field-group">
              <div class="label">Owner Name</div>
              <div class="value">${name}</div>
            </div>

            <div class="field-group">
              <div class="label">Mobile Number</div>
              <div class="value highlight">📞 ${mobile}</div>
            </div>

            <div class="field-group">
              <div class="label">Email Address</div>
              <div class="value">${email || 'Not Provided'}</div>
            </div>

            <div class="field-group">
              <div class="label">City / Location</div>
              <div class="value">📍 ${city || 'Noida'}</div>
            </div>

            <div class="field-group">
              <div class="label">Property Type</div>
              <div class="value highlight">🏢 ${propertyType || 'Apartment'}</div>
            </div>

            <div class="field-group">
              <div class="label">Expected Property Value / Price</div>
              <div class="value">💵 ${propertyValue || 'Negotiable / Not Mentioned'}</div>
            </div>

            ${images ? `
            <div class="field-group" style="border-bottom: none;">
              <div class="label">Uploaded Image Files</div>
              <div style="margin-top: 6px;">
                ${(Array.isArray(images) ? images : [images]).map(img => `<span class="image-tag">📷 ${img}</span>`).join(' ')}
              </div>
            </div>
            ` : ''}
          </div>

          <div class="footer">
            Property Sure Seller & Property Listing Lead Portal
          </div>
        </div>
      </body>
    </html>
  `;
}
