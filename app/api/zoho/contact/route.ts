import { getZohoAccessToken } from "@/lib/zoho/getAccessToken";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log(body);

    const accessToken = await getZohoAccessToken();

    const contactPayload = {
      data: [
        {
          Last_Name: body.name,
          Email: body.email,
          Phone: body.phone,
          Description: body.interest,
        },
      ],
      trigger: ["workflow"],
    };

    console.log("📤 Sending to Zoho:", contactPayload);

    const zohoRes = await fetch("https://www.zohoapis.in/bigin/v1/Contacts", {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactPayload),
    });

    const zohoData = await zohoRes.json();
    const result = zohoData?.data?.[0];

    console.log("📥 Zoho Response:", zohoData);

    // ✅ If successful
    if (zohoRes.ok && result?.code === "SUCCESS") {
      return Response.json({ message: "✅ Contact created in Zoho Bigin" });
    }

    // ⚠️ If duplicate data error
    if (result?.code === "DUPLICATE_DATA") {
      console.warn(
        "⚠️ Duplicate contact in Zoho (skipping creation):",
        result.details
      );
      return Response.json({
        message: "⚠️ Contact already exists in Zoho (skipped)",
        duplicate: true,
        details: result.details,
      });
    }

    // ❌ Other Zoho API errors
    console.error("❌ Zoho API Error:", zohoData);
    return Response.json(
      { message: "Zoho API Error", details: zohoData },
      { status: 500 }
    );
  } catch (error: any) {
    console.error("❌ API route error:", error);
    return Response.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
