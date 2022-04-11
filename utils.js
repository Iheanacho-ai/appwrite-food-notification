import { Appwrite } from 'appwrite';
export const sdk = new Appwrite();
sdk
  .setEndpoint('http://localhost/v1') // Replace this with your endpoint
  .setProject('62532ce64d84a58176da'); // Replace this with your ProjectID


sdk.account.createAnonymousSession().then(
(response) => {
    console.log(response);
},
(error) => {
    console.log(error);
}
);
  
// export const db = appwrite.database;
// export const COLLECTION_ID = 'COLLECTION ID'; // Replace with your Collection ID
