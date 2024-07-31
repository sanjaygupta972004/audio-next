import GoogleProvider from "next-auth/providers/google"
export const options = {
        providers:[
                GoogleProvider({
                       
                         clientId: process.env.GOOGLE_CLIENT_ID ?? "",
                         clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
                        profile(profile) {
                          let userRole = "google-user"
                          if(profile.email === "sanjaygupta07054@gmail.com"){
                                userRole = 'admin'
                          }
                        return {
                                ...profile,
                                id:profile.sub,
                                role:userRole
                        }
                }
                })
        ],
     callbacks:{
        async jwt({token,user}:{token:any,user:any}){
                if(user){
                        token.role = user.role
                }
          return token
        },
     async session({session,token}:{session:any,token:any}){
        if(session.user){
                session.user.role  = token.role
        } 
        return session
     }
}
}