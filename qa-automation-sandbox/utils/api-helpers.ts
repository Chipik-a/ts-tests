import { type APIRequestContext } from "@playwright/test";

export async function userExists(request: APIRequestContext, username: string, token: string): Promise<boolean> {
    const response = await request.get(`/api/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.status() === 200;
}

export async function loginViaApi(request: APIRequestContext, email: string, password: string): Promise<string> {
    const response = await request.post('/api/auth/login', {
        data: {email, password},
    });
    const body = await response.json();
    return body.access_token;
}