const contactEmailTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;
};

export { contactEmailTemplate };
