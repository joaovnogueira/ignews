import { NextApiRequest, NextApiResponse } from "next";
import {  } from 'stream'


export default (req: NextApiRequest, res:NextApiResponse) => {
    console.log('evento recebido')
    res.status(200).json({ok: true})
}