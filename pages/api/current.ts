
import serverAuth from '@/lib/serverAuth'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse){

    if(req.method !== 'GET'){
        // console.log('inside /api/current ')
        return res.status(405).end()
    }

    try{
        // console.log('inside /api/current ')
        const currentUser = await serverAuth(req, res)
        // console.log('inside /api/current currentUser: ',currentUser)

        return res.status(200).json(currentUser)

    }catch(error){
        console.log(error)
        return res.status(400).end()
    }
}