import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions={
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
        
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    
}
export default nextAuth(authOptions);