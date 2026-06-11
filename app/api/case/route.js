import { Resend } from "resend";

export async function POST(request) {
  const { name, email, company, whatTheyDid } = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "site@amastenumah.com",
    to: "amas@amastenumah.com",
    subject: `Customer Court Submission: ${company}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany on Trial: ${company}\n\nWhat They Did:\n${whatTheyDid}`,
  });
  return Response.json({ success: true });
}
