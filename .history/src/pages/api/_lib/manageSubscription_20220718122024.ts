import {query as q} from 'faundb'
import { fauna } from '../../../services/faunadb'


export async function saveSubscription(
    subscriptionId: string,
    custumerId: string,
){
    const userRef = await fauna.query(
        q.Get(
            q.Match(
                q.Index('user_by_stripe_customer_id'),
                customerId
            )
        )
    )
}

