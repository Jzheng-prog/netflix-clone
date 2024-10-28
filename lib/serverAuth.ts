


import prismadb from '@/lib/prismadb'
import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'

const serverAuth = async (req: NextApiRequest) => {

    const session = await getSession({req});
    
    // console.log('inside serverAuth req:', req.body)

    console.log('inside serverAuth session:', session)
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

    return {currentUser}
}

export default serverAuth