import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from 'next-auth/react'

import {query as q} from 'faunadb'

import { stripe } from "../../services/stripe";
import { fauna } from "../../services/faunadb";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const session = await getSession({ req })

        const user = await fauna.query(
            q.Get(
                q.Match(
                    q.Index('user_by_email')
                )
            )
        )

        const stripeCostumer = await stripe.customers.create({
            email: session.user.email,
        })

        await fauna.query(
            q.Update()
        )

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCostumer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {price: 'price_1LKMizFjnZPwxxzTJxV9Xhas', quantity: 1}
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL,
        })

        return res.status(200).json({sessionId: stripeCheckoutSession.id})
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}