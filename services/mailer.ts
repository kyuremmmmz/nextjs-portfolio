import { Mailer } from "@/types/Mailer";

export default async function sendMail({clientEmail, message, clientName}: Mailer) {
    const response = await fetch('https://express-sheets-3.onrender.com/api/sendMail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            clientEmail: clientEmail,
            message: message,
            clientName: clientName
        })
    }
    );
    if (!response.ok) {
        throw new Error('Failed to send an email');
    } 
    const json = await response.json();
    console.log(json);
    return json;
}