
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
const SEND_TO = "schoolstthoms@gmail.com"; // School email

const sendMailjetEmail = async (contact: ContactSubmission) => {
  console.log("Sending email with Mailjet");
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

  // Log auth and request details
  console.log(`API Key available: ${!!MAILJET_API_KEY}`);
  console.log(`Secret Key available: ${!!MAILJET_SECRET_KEY}`);
  console.log("Sending to:", SEND_TO);
  console.log("Request body:", JSON.stringify(requestBody));
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": "Basic " + btoa(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    
    const responseData = await response.json();
    console.log("Mailjet API response status:", response.status);
    console.log("Mailjet API response:", JSON.stringify(responseData));
    
    return { status: response.status, data: responseData };
  } catch (error) {
    console.error("Error in Mailjet API call:", error);
    throw error;
  }
};

serve(async (req: Request): Promise<Response> => {
  console.log("Received request:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    console.log("Method not allowed:", req.method);
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    const data: ContactSubmission = await req.json();
    console.log("Received form data:", data);
    
    if (!data.name || !data.email || !data.message) {
      console.log("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
    
    // Send email via Mailjet
    const emailResult = await sendMailjetEmail(data);

    return new Response(
      JSON.stringify({ success: true, mailjet: emailResult }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
