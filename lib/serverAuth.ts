


import prismadb from '@/lib/prismadb'
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth';

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {

    const session = await getServerSession(req, res, authOptions);
    
    // console.log('inside serverAuth req:', req.body)

    // console.log('inside serverAuth session:', session)
    if (!session) {
        throw new Error('No session');
    }
    if (!session.user) {
        throw new Error('No session user');
    }
    if (!session.user.email) {
        throw new Error('No session user.email');
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    if(!currentUser){
        throw new Error('Not signed in')
    }

    return currentUser
}

export default serverAuth