import { z } from 'zod';
export const EmailFormSchema = z.object({
    clientName: z.string()
        .min(2, {
            message:'Name must be at least 2 characters long.'
        })
        .trim(),
    message: z.string().min(30, {
        message: 'Message must me at least 30 characters long.'
    }).trim(),
    clientEmail: z.string().email({ message: 'Please enter a valid email.' }).trim(),
});