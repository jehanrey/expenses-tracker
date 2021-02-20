import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCBFlio7mVNwy-7rn7m9Bx-Gbp8smerp8I",
  authDomain: "set-app-b0b96.firebaseapp.com",
  databaseURL: "https://set-app-b0b96.firebaseio.com",
  projectId: "set-app-b0b96",
  storageBucket: "set-app-b0b96.appspot.com",
  messagingSenderId: "638529786662"
};

firebase.initializeApp(config);

/*
Data structure
{
    collection: { //root
        <id>: {
            brand:
            model:
            notes:
            price:
            acquisition-date:
            image/s:
        }
    }
}
*/

const database = firebase.database();

export { firebase, database as default };

// database.ref("collection").push({
//   brand: "Seiko",
//   model: "SKX007",
//   notes: "Three hander, Day/Date complication, 200m Water Resist",
//   price: 200.0,
//   dateAcquired: 1539041145123
// });

// database.ref("collection").push({
//   brand: "Seiko",
//   model: "SARB033",
//   notes: "Three hander, Date complication, Stainless Steel Bracelet",
//   price: 400.0,
//   dateAcquired: 1539041145123
// });

// const subscription = database.ref("collection").on("value", snapshot => {
//   const items = [];

//   snapshot.forEach(child => {
//     items.push({
//       id: child.key,
//       ...child.val()
//     });
//   });

//   console.log(items);
// });

// database
//   .ref()
//   .set({
//     name: "Person_Name",
//     job: {
//       title: "Person_Job",
//       company: "Person_Employer"
//     }
//   })
//   .then(() => {
//     console.log("Data-write successful");
//   })
//   .catch(e => {
//     console.log("Data-write encountered error", e);
//   });

// const firebaseSubsciption = database.ref().on("value", snapshot => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });

// database.ref().off(firebaseSubsciption);

// database.ref("attributes/weight").remove();

// database
//   .ref("attributes/weight")
//   .remove()
//   .then(() => {
//     console.log("OK");
//   })
//   .catch(e => {
//     console.log("FAIL");
//   });
