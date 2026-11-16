import emailjs from "@emailjs/browser";

export function sendContactEmail({ name, email, phone, company, subject, message }) {
  return emailjs.send("service_tvtk2xr", "template_joe8237", {
    name: name.trim(),
    email: email.trim(),
    mobile: phone.trim(),
    organizationName: company.trim(),
    subject: `Subject: ${subject}\n\nMessage:\n${message.trim()}`,
  }, { publicKey: "9R9VMnwYtqehumZjw" });
}
