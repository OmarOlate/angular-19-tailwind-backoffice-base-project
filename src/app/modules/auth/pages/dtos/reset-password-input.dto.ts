export type ResetPaswordInputDto = Readonly<{
    email: string;
    currentPassword: string;
    newPassword: string;
}>