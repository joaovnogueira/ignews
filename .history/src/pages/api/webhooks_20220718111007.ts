import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'


async function buffer (readable: Readable){
    const chunks = [];

    for await (const chunk of readable) {
        
    }
}

export default (req: NextApiRequest, res:NextApiResponse) => {
    
    res.status(200).json({ok: true})
}