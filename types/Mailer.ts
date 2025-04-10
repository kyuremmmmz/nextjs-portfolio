export type Mailer = {
    clientEmail: FormDataEntryValue | null,
    message: FormDataEntryValue | null,
    clientName: FormDataEntryValue | null,
}

export type FormState =
    | {
        errors?: {
            clientName?: string[]
            clientEmail?: string[]
            clientmessage?: string[]
        }
        message?: string
    }
    | undefined
