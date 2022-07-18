import {query as q} from 'faunadb'
import { fauna } from '../../../services/faunadb'


export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
){
    const userRef = await fauna.query(
       q.Select(
        
       )
    )
}

