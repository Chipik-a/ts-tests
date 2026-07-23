import { request } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export default async function globalSetup() {
    const context = await request.newContext();
    const response = await context.post(`${process.env.API_URL}/api/reset`);
    console.log('DB reset status:', response.status());
    await context.dispose();
}