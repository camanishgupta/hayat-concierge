
// EmailJS Configuration Guide
/*
To make the email functionality work:

1. Sign up for EmailJS at https://www.emailjs.com/
2. Create a service (e.g., Gmail, Outlook, etc.)
3. Create an email template with variables like:
   - {{to_email}} (destination email)
   - {{from_name}} (user's name)
   - {{reply_to}} (user's email)
   - {{subject}} (email subject)
   - {{message}} (email content)

4. Replace the values in the Enquiry.tsx file with your actual IDs:
   - service_hayat -> Your EmailJS Service ID
   - template_hayat -> Your EmailJS Template ID
   - 'your_user_id' -> Your EmailJS User ID (available in the EmailJS dashboard)

For initialization, you can either:
1. Initialize EmailJS in this file and import it in the component
2. Initialize directly in the Enquiry.tsx file

Example initialization:
```
import emailjs from 'emailjs-com';
emailjs.init("YOUR_USER_ID");
```
*/

// You can use this function to format data for email sending
export const formatEmailData = (data: any) => {
  // Format your data here for email sending
  return {
    to_email: 'hayat01ourahmoun@gmail.com',
    from_name: data.name,
    reply_to: data.email,
    subject: `New Enquiry from ${data.name}`,
    message: JSON.stringify(data, null, 2), // Format data as readable JSON
  };
};
