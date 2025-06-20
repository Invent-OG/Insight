export async function getZohoAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    refresh_token: process.env.ZB_REFRESH_TOKEN!,
    client_id: process.env.ZB_CLIENT_ID!,
    client_secret: process.env.ZB_CLIENT_SECRET!,
    grant_type: "refresh_token",
  });

  const res = await fetch("https://accounts.zoho.in/oauth/v2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const data = await res.json();

  // Optional: helpful logging during dev
  if (process.env.NODE_ENV === "development") {
    console.log("Zoho access token response:", data);
  }

  if (!data.access_token) {
    console.error("Zoho Token Error Response:", data);
    throw new Error("❌ Failed to fetch Zoho access token");
  }

  return data.access_token;
}
