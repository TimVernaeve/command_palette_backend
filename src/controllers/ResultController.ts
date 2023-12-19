import Result from '../models/Result'; 
import { Request, Response } from 'express';

export const getResults = async (req: Request, res: Response) => {
    try {
        const results = await Result.find();
        res.status(200).json({
             confirmation: "success",
             data: results
        });
    } catch (error: any) {
        res.status(500).json({
             confirmation: "fail",
             message: error.message 
        });
    }
 }

export default { getResults };