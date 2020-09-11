import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
  apiKey: "AIzaSyCyWhzYtkGLHewukFWR5UcIuzJaIMw5y1Q",
  authDomain: "crwn-db-f99dd.firebaseapp.com",
  databaseURL: "https://crwn-db-f99dd.firebaseio.com",
  projectId: "crwn-db-f99dd",
  storageBucket: "crwn-db-f99dd.appspot.com",
  messagingSenderId: "831223155456",
  appId: "1:831223155456:web:f15a06760b03cbf81bc1e5",
  measurementId: "G-KHTVCQT8KG"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=> {
      if(!userAuth) return;

        const userRef= firestore.doc(`users/${userAuth.uid}`)
        const snapshot= await userRef.get();
        if(!snapshot.exists){
          const {displayName, email}= userAuth;
          const createdAt = new Date();
        
try {
await userRef.set({
  displayName, 
  email,
  createdAt,
  ...additionalData
    })
  } catch(err){
console.log('error creating user', err.message)
   }
}
return userRef;

  };

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef= firestore.collection(collectionKey);
   
    const batch = firestore.batch()
objectsToAdd.forEach(obj=>{
  const newDocRef= collectionRef.doc();
batch.set(newDocRef,obj)

})

return await batch.commit()
  }

  export const convertCollectionsSnapshotToMap= (collections)=>{
    const transformedCollection = collections.docs.map(doc=> {
      const {title, items }= doc.data();

      return{
        routeName: encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    })
    return transformedCollection.reduce((accumulator, collection)=>{
      accumulator[collection.title.toLowerCase()]= collection;
      return accumulator;
    }, { })
  }



  firebase.initializeApp(config);


  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=()=> auth.signInWithPopup(provider);

  export default firebase;