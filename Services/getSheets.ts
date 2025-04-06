import { google } from "googleapis";
import key from '../keys.json';
export async function getGoogleSheetsData(range: string) {
    const auth = await google.auth.getClient({
        projectId: key.project_id,
        credentials: {
            type: key.type,
            private_key: key.private_key,
            client_email: key.client_email,
            client_id: key.client_id,
            token_url: "https://oauth2.googleapis.com/token",
            universe_domain: "googleapis.com",
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const data = await sheets.spreadsheets.values.get({
        spreadsheetId: "1SQOFOEk3JSeYFCFp8714KM6LgEhd3CdR29hwDpTtPf0",
        range: range,
    });

    return data.data.values;
}