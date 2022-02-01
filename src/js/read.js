import {ref as dataRef, get, set, update, remove} from 'firebase/database'
import { db, storage  } from "./libs/firebase/firebaseConfig";
import {rentalCard} from './templates/rentalCard'

async function pageInit(){
    const rentalRef = dataRef(db, 'rentals/');
    const rentalSnapshot = await get(rentalRef);
    const data = rentalSnapshot.val();
    console.log(data)

    //document.body.append(rentalCard());

    // for(let prop in data){
    //     // Pulls out object
    //     console.log(data[prop])
    // }

    const rentalCards = Object.values(data).map(rental => {
        const card = rentalCard(rental);
        // Layout Thrashing
        document.body.append(card);
        console.log(card);
        return card;
    })
}

pageInit()