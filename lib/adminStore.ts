// lib/adminStore.ts

import { promises as fs } from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "admin.json");

export async function getAdminPassword(): Promise<string> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const json = JSON.parse(data);
    return json.password;
  } catch (error) {
    // If file doesn't exist, throw meaningful error
    throw new Error("Admin password file not found or invalid");
  }
}

export async function updateAdminPassword(newPassword: string) {
  try {
    // Ensure directory exists
    await fs.mkdir(dataDir, { recursive: true });

    // Write new password
    const newData = { password: newPassword };
    await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");
  } catch (error) {
    throw new Error("Failed to update admin password");
  }
}
