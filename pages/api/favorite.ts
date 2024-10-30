import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import {without} from 'lodash'
import prismadb from '@/lib/prismadb'

export default async function handler(req:NextApiRequest, res: NextApiResponse){

    // console.log('req.method is :', req.method)

    // const {currentUser} = await serverAuth(req)
    const {movieId} = req.body;

    // console.log('req.body movieid:', movieId)
    
    try{
        if(req.method === 'POST'){

            // console.log('inside post:')
            // console.log('req.method:', req.method)


            const currentUser = await serverAuth(req,res)

            // console.log('currrUser2222:', currentUser)
            const {movieId} = req.body;

            // console.log("movie id is sss:", movieId)

            const existingMovie = await prismadb.movie.findUnique({
                where:{
                    id: movieId
                }
            })

            // console.log('existingMovie:, ', existingMovie)

            if(!existingMovie){
                throw new Error('Invalid movie Id.')
            }

            const user = await prismadb.user.update({
                where:{
                    email: currentUser.email || ''
                },
                data:{
                    favoriteIds:{
                        push: movieId
                    }
                }
            })

            // console.log('updated user!!!!', user)

            return res.status(200).json(user)
        }

        if(req.method === 'DELETE'){
            const currentUser = await serverAuth(req,res)

            const {movieId} = req.body;

            const existingMovie = await prismadb.movie.findUnique({
                where:{
                    id: movieId
                }
            })

            if(!existingMovie){
                throw new Error('Invalid movie Id.')
            }

            const updatedFavIDS = without(currentUser.favoriteIds, movieId);

            const updateUser = await prismadb.user.update({
                where:{
                    email: currentUser.email || ''
                },
                data:{
                    favoriteIds: updatedFavIDS
                }
            })

            return res.status(200).json(updateUser)
        }


    }catch(error){

        return res.status(400).end()
    }
}