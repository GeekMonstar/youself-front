import { authClient } from "@/lib/auth-client"; //import the auth client
 
export const signInWithGoogle = async () => {
    const data =  await authClient.signIn.social({
        /**
         * The social provider id
         * @example "github", "google", "apple"
         */
        provider: "google",
        /**
         * A URL to redirect after the user authenticates with the provider
         * @default "/"
         */
        callbackURL: "http://localhost:3000", 
        /**
         * A URL to redirect if an error occurs during the sign in process
         */
        errorCallbackURL: "/error",
        /**
         * A URL to redirect if the user is newly registered
         */
        newUserCallbackURL: "/new-user",
        /**
         * disable the automatic redirect to the provider. 
         * @default false
         */
        // disableRedirect: true,
    });

    console.log(data);
    return data;
}