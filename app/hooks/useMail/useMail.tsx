import { EmailFormSchema } from "@/lib/schemas/definition";
import sendMail from "@/services/mailer";
import { FormState } from "@/types/Mailer";

export default async function useMail(state: FormState, formData: FormData) {
    const data = {
        clientName: formData.get('clientName'),
        message: formData.get('message'),
        clientEmail: formData.get('clientEmail')
    };
    const validateFields = EmailFormSchema.safeParse(data);
    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
        }
    }
    await sendMail({
        clientName: data.clientName,
        message: data.message,
        clientEmail: data.clientEmail
    });

}

