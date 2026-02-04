const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

export async function handler(event) {
    // Handle preflight request
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: "",
        };
    }

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: corsHeaders,
            body: "Method Not Allowed",
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);

        const text = `
  📬 *New website ping*
  *Name:* ${name || "Anonymous"}
  *Email:* ${email || "N/A"}
  *Message:* ${message}
  `;

        const res = await fetch(process.env.SLACK_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        });

        if (!res.ok) {
            throw new Error("Slack webhook failed");
        }

        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({ success: true }),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            headers: corsHeaders,
            body: JSON.stringify({ success: false }),
        };
    }
}