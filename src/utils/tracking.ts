// Conversion tracking utility for Google Ads via GTM

// Define conversion event names
export const CONVERSION_EVENTS = {
  PHONE_CALL: 'phone_call_conversion',
  WHATSAPP_CLICK: 'whatsapp_conversion',
  FORM_SUBMISSION: 'form_submission_conversion',
} as const;

// Track conversion event
// NOTE: Only push to dataLayer. GTM handles everything from here.
// Do NOT also call gtag() directly — GTM loads gtag internally and
// a direct gtag() call causes a second dataLayer push, firing tags twice.
export const trackConversion = (
  eventName: string,
  additionalData?: Record<string, any>
) => {
  if (typeof window === 'undefined') return;

  const dataLayer = (window as any).dataLayer;
  if (!dataLayer) {
    console.warn('[Tracking] dataLayer not found. Is GTM loaded?');
    return;
  }

  dataLayer.push({
    event: eventName,
    event_category: 'conversion',
    event_label: eventName,
    ...additionalData,
  });
};

// Phone call conversion
export const trackPhoneCall = () => {
  trackConversion(CONVERSION_EVENTS.PHONE_CALL, {
    value: 1,
    currency: 'PKR',
  });
  (window as any).fbq?.('trackCustom', 'CallClick');
};

// WhatsApp conversion
export const trackWhatsAppClick = () => {
  trackConversion(CONVERSION_EVENTS.WHATSAPP_CLICK, {
    value: 1,
    currency: 'PKR',
  });
  (window as any).fbq?.('trackCustom', 'WhatsAppClick');
};

// Form submission conversion
export const trackFormSubmission = (formData: {
  name: string;
  phone: string;
  service: string;
}) => {
  trackConversion(CONVERSION_EVENTS.FORM_SUBMISSION, {
    value: 1,
    currency: 'PKR',
    service: formData.service,
  });
};