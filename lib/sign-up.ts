import { authClient } from "./auth-client";

export const signUpWithEmail = async () => {
    const data = await authClient.signUp.email({
        email: "juanvianneynm@gmail.com",
        password: "test1234 ",
        callbackURL: "/",
        name: "Juan Vianney",
    });
    console.log(data);
    return data;
}