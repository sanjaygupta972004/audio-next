import { NextRequest,NextResponse } from "next/server";
import dbConnected from "@/lib/dbConnect";
import { User } from "@/models/user.model";
import bcrypt from 'bcryptjs';



export async function POST(req: NextRequest) {
        try {
          await dbConnected();
          const { email, username, password } = await req.json(); 
          
          if (!email || !username || !password) {
            return NextResponse.json(
              { message: 'All fields required', status: 400 },
              { status: 400 }
            );
          }
      
          const duplicateUser = await User.findOne({ email });
      
          if (duplicateUser) {
            return NextResponse.json(
              { message: 'User already exists with this email', status: 400 },
              { status: 400 }
            );
          }
      
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
      
          const user = await User.create({
            username: username,
            email: email,
            password: hashPassword,
          });
      
          if (!user) {
            return NextResponse.json(
              { message: 'Something went wrong while creating User', status: 500 },
              { status: 500 }
            );
          }
      
          const userData = await User.findOne({ email }).select('-password');
          return NextResponse.json(
            {
              data: userData,
              message: 'User created successfully',
              status: 201,
            },
            { status: 201 }
          );
        } catch (error) {
          return NextResponse.json(
            {
              message: `Something went wrong while creating User: ${(error as Error).message}`,
              status: 400,
            },
            { status: 400 }
          );
        }
 }
      