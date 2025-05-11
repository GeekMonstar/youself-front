/* eslint-disable react/no-children-prop */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {useState, useEffect} from "react";
import {useSearchParams, useRouter} from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import { z } from "zod";
import { InputField } from "@/components/ui/inputs";
import { Button } from "@/components/ui/button";
import { FileDiff } from "lucide-react";

const { fieldContext, formContext } = createFormHookContexts()

const { useAppForm } = createFormHook({
    fieldComponents: {
        TextField: InputField
    },
    formComponents: {
        submitButton: Button
    },
    fieldContext,
    formContext
})

export default function AuthPage() {
    const {data: session} = authClient.useSession();
    const searchParams = useSearchParams();
    const [authType, setAuthType] = useState(searchParams.get("authType"));
    const router = useRouter();
    useEffect(() => {
        // if(session && session.user){
        //     router.push("/");
        // }
        setAuthType(searchParams.get("authType"));
    }, [searchParams]);
    useEffect(() => {
        console.log(authType);
        if (!authType || (authType !== "login" && authType !== "register")) {
            router.push("/auth?authType=login");
        }
    }
    , [authType]);
    return (
        <div className="w-full flex flex-col gap-2 ml-2">
            <div className="w-full h-screen flex gap-2">
                <div className="w-1/2 hidden lg:flex lg:w-5/12 bg-[var(--primary)] shadow-outline"></div>
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center px-12">
                    <h1 className="text-2xl font-bold">{authType === "login" ? "Connexion" : authType === "register" && "Inscription"}</h1>
                    <p className="text-gray-600">{authType === "login" ? "Connectez-vous à votre compte" : authType === "register" && "Créez-vous un compte"}</p>
                    {authType === "login" ? <LoginForm /> : <RegisterForm />}
                    <p className="relative">ou</p>
                    <div className="flex item-center item-center gap-2">
                        <button className="bg-white text-[var(--primary)] border border-[var(--primary)] rounded p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                        </button>
                    </div>
                    {(authType === "login" || authType === "register") && <p className="text-gray-600">{authType === "login" ? "Vous n'avez pas encore de compte ?" : authType === "register" && "Vous avez déjà un compte ?"} <a href={`/auth?authType=${authType === "login" ? "register" : "login" }`} className="text-blue-500">{authType === "login" ? "inscrivez-vous" : authType === "register" && "Connectez-vous"}</a>.</p>}
                    {authType === "login" && <p className="text-gray-600">Vous avez oublié votre mot de pas ? <a href="/auth?authType=reset" className="text-blue-500">Récupérer votre mot de passe</a></p>}
                </div>
            </div>
        </div>
    );
}

export function LoginForm(){
    const form = useAppForm({
        defaultValues: {
            email: "",
            password: ""
        },
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
    return (
        <form 
            className="w-full flex flex-col gap-2" 
            onSubmit={(e)=>{
                e.preventDefault(); 
                form.handleSubmit()
            }}
        >
            <form.AppField
                name="email"
                children={(field)=> <field.TextField label="Email" type="email" placeholder="Email" value={field.state.value} onChange={(e)=>{field.handleChange(e.target.value)}} />}
            />
            <form.AppField
                name="password"
                children={(field)=> <field.TextField label="Mot de passe" type="password" placeholder="Mot de passe" value={field.state.value} onChange={(e)=>{field.handleChange(e.target.value)}} />}
            />
            <form.AppForm>
                <form.submitButton type="submit" className="bg-[var(--primary)] text-white rounded p-2">Se connecter</form.submitButton>
            </form.AppForm>
        </form>
    );
}

export function RegisterForm(){
    return (
        <form className="w-full flex flex flex-col gap-2">
            <InputField type="text" label="Nom utilisateur" placeholder="Nom utilisateur" onChange={()=>{}} value="" />
            <InputField type="email" label="Email" placeholder="Email" onChange={()=>{}} value=""/>
            <InputField type="password" label="Mot de passe" placeholder="Mot de passe" onChange={()=>{}} value="" />
            <Button type="submit" className="bg-[var(--primary)] text-white rounded p-2">S&apos;incrire</Button>
        </form>
    );
}