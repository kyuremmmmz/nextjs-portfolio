import { getGoogleSheetsData } from "./getSheets";

export async function Sheets() {
    const range = `Sheet1!A:E`;
        const posts = await getGoogleSheetsData(range);
        console.log(posts);
}