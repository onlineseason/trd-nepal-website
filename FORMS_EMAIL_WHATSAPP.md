# Forms, Email & WhatsApp Integration Guide

## Overview
The website now has fully functional contact and counseling forms that integrate with email and WhatsApp messaging.

## Form Configuration

### Email Integration
- **Service**: Formspree
- **Email Recipient**: soptrd@gmail.com
- **Form ID**: mrzkldrq
- **Setup**: All forms are configured to send submissions to soptrd@gmail.com

### WhatsApp Integration
- **Phone Number**: +977-9704565262
- **Integration**: Direct WhatsApp links
- **Messaging**: Forms automatically populate WhatsApp messages with form data

## Forms Available

### 1. Contact Form (`/components/contact-form.tsx`)
**Location**: Contact page and various CTAs
**Purpose**: General inquiries, service requests, quote requests
**Fields**:
- Full Name (required)
- Email Address (required)
- WhatsApp/Phone Number
- Service Selection (SOP, CV, Appeal Letter, Motivation Letter, Admission Essay, Scholarship Essay)
- Background/Notes (required)

**Submission Flow**:
1. User fills out form
2. Form data saved locally
3. Submitted to soptrd@gmail.com via Formspree
4. Success message shown with WhatsApp option
5. User can click "Message on WhatsApp" to send follow-up via WhatsApp

### 2. Counseling Form (`/components/counseling-form.tsx`)
**Location**: `/app/counseling/page.tsx`
**Purpose**: Study abroad counseling sessions
**Fields**:
- Full Name (required)
- Email Address (required)
- WhatsApp/Phone Number (required)
- Interested Countries (USA, UK, Canada, Australia, Germany, Netherlands, New Zealand, France, Multiple, Other)
- Goals/Background (required)

**Submission Flow**:
1. User fills counseling form
2. Form data saved locally
3. Submitted to soptrd@gmail.com via Formspree
4. Success message shown with WhatsApp option
5. User can click "Chat on WhatsApp" to send follow-up via WhatsApp

## Form Endpoints

### Formspree Integration
- **Current Form ID**: `mrzkldrq`
- **Email**: All submissions forwarded to `soptrd@gmail.com`
- **Status**: Active and functional

### WhatsApp Business
- **Direct Link**: `https://wa.me/9779704565262`
- **Functionality**: Users can send direct messages with or without form data
- **Format**: Form data auto-populated as WhatsApp message

## Pages with Forms

### Contact Page (`/app/contact/page.tsx`)
- Full contact form with all services
- Direct contact info cards
- WhatsApp button
- Email information
- Response time indicators
- FAQ section

### Counseling Page (`/app/counseling/page.tsx`)
- Dedicated counseling form
- Services overview
- Process explanation
- Direct WhatsApp/Email contact buttons

### Homepage (`/app/page.tsx`)
- CTAs linking to contact/counseling pages
- Quick action buttons for consultations

## Response Handling

### Email Responses
- Formspree automatically forwards submissions to soptrd@gmail.com
- Email includes all form data
- Auto-reply can be configured in Formspree dashboard

### WhatsApp Responses
- Forms generate shareable WhatsApp messages
- Users click "WhatsApp" button after successful submission
- Message includes their name, email, phone, and service/country info
- Direct conversation can begin via WhatsApp

## Form Data Flow

```
User Form Submission
        ↓
Local State Update
        ↓
Formspree API
        ↓
soptrd@gmail.com
        ↓
WhatsApp Option
        ↓
https://wa.me/9779704565262
```

## Testing the Forms

### To Test Contact Form:
1. Go to `/contact`
2. Fill out all required fields
3. Submit form
4. Check success message
5. Click "Message on WhatsApp" to verify WhatsApp link

### To Test Counseling Form:
1. Go to `/counseling`
2. Fill out all required fields
3. Submit form
4. Check success message
5. Click "Chat on WhatsApp" to verify WhatsApp link

### To Verify Email:
1. Submit form
2. Check soptrd@gmail.com inbox
3. Form data should appear in email from Formspree

## Customization

### To Change Email:
1. Go to Formspree dashboard
2. Update form endpoint
3. Update Form ID in components
4. Test submission

### To Change WhatsApp Number:
1. Find `9779704565262` in codebase
2. Replace with new number
3. Keep URL format: `https://wa.me/[NUMBER]`

### To Add More Services:
1. Edit SelectContent in contact-form.tsx
2. Add new SelectItem with service name
3. Service will appear in dropdown

## Technical Details

### Formspree Form ID
- Contact/Counseling Form: `mrzkldrq`
- Endpoint: `https://formspree.io/f/mrzkldrq`

### Form State Management
- React useState for form data
- Form data persisted during session
- Auto-populate WhatsApp message on success

### Validation
- HTML5 required attributes
- Email format validation
- Formspree error handling

## Security Features

- All data transmitted via HTTPS
- No sensitive data stored in frontend
- Formspree handles email delivery securely
- WhatsApp links are stateless (no data in URL)
- Form data only shown to user and recipient

## Support

For form configuration or troubleshooting:
1. Email: soptrd@gmail.com
2. WhatsApp: +977-9704565262
3. Check Formspree dashboard for submission logs

---

**Last Updated**: February 12, 2026
**Status**: Fully Functional
**Email Recipient**: soptrd@gmail.com
**WhatsApp Number**: +977-9704565262
