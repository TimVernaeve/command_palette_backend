import Result from '../models/Result'; 
import { Request, Response } from 'express';

export const getResults = async (req: Request, res: Response) => {
    await Result.find()
    .then((data) => {
        return res.status(200).json({
            message: "Search results found.",
            results: data,
        });
    })
    .catch((err) => {
        console.log("error: " + err);
    });
 }

export default { getResults };