import {query as q} from 'faunadb'
import { fauna } from '../../../services/faunadb'
import { stripe } from '../../../services/stripe'


export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
){
    const userRef = await fauna.query(
       q.Select(
        "ref",
        q.Get(
            q.Match(
                q.Index('user_by_stripe_customer_id'),
                customerId
            )
        )
       )
    )

    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const subscriptionDat

    await fauna.query(
        q.Create(
            q.Collection('subscriptions'),
            {data: subscription}
        )
    )
}
