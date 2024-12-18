import byrcrt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb'

export default async function handler(req:NextApiRequest, res: NextApiResponse){
 
    if(req.method !== 'POST'){
        return res.status(405).end()
    }

    try {
        const {email,name,password} = req.body

        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        })
        if(existingUser){
            return res.status(422).json({error:'Email Taken'})
        }

        const hashedPassword = await byrcrt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name, 
                hashedPassword,
                emailVerified: new Date(),
                image:'',
            }
        })
        return res.status(200).json(user);
    }catch(e){
        console.log(e)
        return res.status(400).end()
    }
}