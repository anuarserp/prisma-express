import { RequestHandler } from 'express';
import prisma from '../database/index';


export const getAllUsers: RequestHandler = async (_req, res) => {
   const allUsers = await prisma.user.findMany({
      include: { posts: true },
   });
   return res.json(allUsers);
   
};   

