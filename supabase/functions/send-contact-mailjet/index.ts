
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const MAILJET_API_KEY = Deno.env.get("MAILJET_API_KEY");
const MAILJET_SECRET_KEY = Deno.env.get("MAILJET_SECRET_KEY");
const SEND_TO = "schoolstthoms@gmail.com"; // Update to your desired recipient

const sendMailjetEmail = async (contact: ContactSubmission) => {
  const url = "https://api.mailjet.com/v3.1/send";

  const requestBody = {
    Messages: [
      {
        From: {
          Email: "no-reply@school.com",
          Name: "St. Thomas School Form",
        },
        To: [
          {
            Email: SEND_TO,
            Name: "School Admin",
          },
        ],
        Subject: contact.subject || "Contact Form Submission",
        TextPart: `From: ${contact.name} (${contact.email})${contact.phone ? `, Phone: ${contact.phone}` : ""}\n\n${contact.message}`,
        HTMLPart: `<strong>From:</strong> ${contact.name} (${contact.email})${contact.phone ? `<br/><strong>Phone:</strong> ${contact.phone}` : ""}<br/><br/>${contact.message.replace(/\n/g, "<br/>")}`,
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(MAILJET_API_KEY + ":" + MAILJET_SECRET_KEY),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  return response;
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const data: ContactSubmission = await req.json();
    // Attempt to send email via Mailjet
    const emailRes = await sendMailjetEmail(data);
    const emailResult = await emailRes.json();

    // Log the result
    console.log("Mailjet response:", emailResult);

    return new Response(
      JSON.stringify({ ok: true, mailjet: emailResult }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error) {
    console.error("Mailjet error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
