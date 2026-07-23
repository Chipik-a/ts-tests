import { request } from '@playwright/test';
import * as dotenv from "dotenv";

dotenv.config();

export default async function globalSetup() {
    const context = await request.newContext();
    const response = await context.post(`${process.env.API_URL}/api/reset`);
    if (!response.ok()) {
        throw new Error(`Reset failed: ${response.status()}`);
    }
    console.log('DB reset OK before test run');
    await context.dispose();

}