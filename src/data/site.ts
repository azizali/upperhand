import siteContent from './site-content.json';

export const siteContact = {
	email: siteContent.contact.email,
	phoneDisplay: siteContent.contact.phoneDisplay,
	phoneDial: siteContent.contact.phoneDial,
};

export const siteLinks = {
	email: `mailto:${siteContact.email}`,
	phone: `tel:${siteContact.phoneDial}`,
};
