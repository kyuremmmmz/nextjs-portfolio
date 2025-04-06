import { google } from "googleapis";
import keys from "../keys.json";
import { NextResponse } from "next/server";

export default function handler() {
    try {
        const client = new google.auth.JWT(
            keys.client_email, '', keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function (err) {
            if (err) {
                return NextResponse.json({ error: true });
            }

            const gsapi = google.sheets({ version: 'v4', auth: client });

            const opt = {
                spreadsheetId: process.env.SHEET_ID,
                range: 'Sheet1!A2:A'
            };

            const data = await gsapi.spreadsheets.values.get(opt);
            return NextResponse.json({
                error: false,
                data: data.data.values
            });
        });
    } catch (e) {
        return NextResponse.json({ error: true, message: e });
    }
}