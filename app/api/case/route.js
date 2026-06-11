import { Resend } from "resend";

/**
 * Brief shows `const resend = new Resend(...)` at module scope; Resend throws during
 * `next build` when `RESEND_API_KEY` is unset. Constructing here preserves the same
 * `emails.send({ ... })` payload as the brief and only runs on request.
 */
export async function POST(request) {
  try {
    const { name, email, company, whatTheyDid } = await request.json();

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "site@amastenumah.com",
      to: "amas@amastenumah.com",
      subject: `Customer Court Submission: ${company}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany on Trial: ${company}\n\nWhat They Did:\n${whatTheyDid}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
