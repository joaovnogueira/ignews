import {query as q} from 'faundb'
import { fauna } from '../../../services/faunadb'


export async function saveSubscription(
    subscriptionId: string,
    costumerId: string,
){
    const userRef = await fauna.query(
        q.Get(
            q.Match(
                q.Index('user_by_stripe_costumer_id'),
                costumerId
            )
        )
    )
}

