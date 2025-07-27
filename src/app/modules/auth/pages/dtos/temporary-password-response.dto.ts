export type TemporaryPasswordResponseDto = Readonly<{
    code: number;
    message?: string;
    error?: string;
}>