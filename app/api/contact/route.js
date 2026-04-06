import { Resend } from "resend";

/**
 * Brief shows `const resend = new Resend(...)` at module scope; Resend throws during
 * `next build` when `RESEND_API_KEY` is unset. Constructing here preserves the same
 * `emails.send({ ... })` payload as the brief and only runs on request.
 */
export async function POST(request) {
  const { name, org, eventType, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "site@amastenumah.com",
    to: "amas@amastenumah.com",
    subject: `New inquiry from ${name} — ${org}`,
    text: `Name: ${name}\nOrg: ${org}\nEvent: ${eventType}\nMessage: ${message}`,
  });

  return Response.json({ success: true });
}
