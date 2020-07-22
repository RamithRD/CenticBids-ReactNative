import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export function login({ email, password }){

    auth().signInWithEmailAndPassword(email, password)
    .then((value) => console.log(value))

}

export function signup({ email, password }){

    console.log('in signup method');

    auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        console.log('User account created & signed in!')
    }).catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
}

export function subscribeToAuthChanges(authStateChanged) {
    auth().onAuthStateChanged((user) => {
      authStateChanged(user);
    })
  }

export function signout(onSignedOut){
    auth().signOut()
    .then(() => {
        console.log('Signed Out');
        onSignedOut();
    })
}

export async function getAllActiveAuctions(auctionsItemsRetrieved){

    var auctionItemsList = [];

    //retreive auction items from Firebase
    var snapshot = await firestore()
                .collection('auction_items')
                .get()

    

    //add each auction item to an array             
    snapshot.forEach((doc) => {

        auctionItemsList.push(doc.data())

    });

    console.log(auctionItemsList.length);

    //pass back the list of auction items via the callback
    auctionsItemsRetrieved(auctionItemsList);

}