export const CONTACT_EMAIL = "hello@venmail.io";
export const CONTACT_PAGE_PATH = "/contact-us";

export const getContactMailtoHref = ({ cc, subject, body } = {}) => {
  const params = new URLSearchParams();

  if (cc) params.append("cc", cc);
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);

  const query = params.toString();
  return `mailto:${CONTACT_EMAIL}${query ? `?${query}` : ""}`;
};
