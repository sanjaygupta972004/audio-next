import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User ,IUser} from "@/models/user.model"
import bcrypt from "bcryptjs"
import dbConnected from "@/lib/dbConnect"


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
                }),
                CredentialsProvider({
                        name:"email and password",
                        credentials: {
                                email: {
                                         label: "Email",
                                          type: "text", 
                                          placeholder: "your-email" 
                                        },
                                password: {
                                         label: "Password",
                                          type: "password", 
                                          placeholder:"your-password"
                                        }
                              },
                        async authorize(credentials,req){
                                try {
                                        await dbConnected()
                                        const exitUser = await User.findOne({
                                        email:credentials?.email
                                      }).lean().exec() 
                                      if(exitUser){
                                        console.log("user exit")
                                        const isCorrectPassword=  await bcrypt.compare(credentials?.password ??"",exitUser.password)
                                        console.log(isCorrectPassword)
                                        if(isCorrectPassword){
                                                console.log("good pass")
                                               
                                                const user = {
                                                        ...exitUser,
                                                        id:exitUser._id.toString(),
                                                        role:"unverified email"
                                                }
                                                return user
                                        }
                                      }

                                } catch (error) {
                                      console.log("Something wrong while logging user",error)  
                                }
                                return null
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