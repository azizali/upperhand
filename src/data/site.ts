import contactContent from './site/contact.json';

export const siteContact = {
	email: contactContent.email,
	phoneDisplay: contactContent.phoneDisplay,
	phoneDial: contactContent.phoneDial,
};

export const siteLinks = {
	email: `mailto:${siteContact.email}`,
	phone: `tel:${siteContact.phoneDial}`,
};
