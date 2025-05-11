import { z } from 'zod';

export function minutesToHours(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
}

export function limitStringLength(str: string, maxLength: number): string {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + '...';
}

export function useFormSetup(defaultValues: defaultValuesType){
    return useAppForm({
        defaultValues,
        validators: {
            onChange: z.object({
                email: z.string().email("Email invalide"),
                password: z.string().min(8, "Mot de passe trop court")
            })
        },
        onSubmit: ({value})=>{
            alert(JSON.stringify(value, null, 2))
            authClient.signIn.email(value.email, value.password)
                .then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    })
}

interface defaultValuesType<T> {
    [key: string]: T
}

interface validatorsType {
    onChange: z.object()
}