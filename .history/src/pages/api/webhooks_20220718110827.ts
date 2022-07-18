import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'


export default (req: NextApiRequest, res:NextApiResponse) => {
    
    res.status(200).json({ok: true})
}