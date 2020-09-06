/* 
   1. To obtain a key sign up with firebase and create a project.
   2. After registering the project go to -> authentication -> Sign-in method -> Select: Email/Password; Google 
   3. Rename example.firebaseConfig.js to firebaseConfig.js
   4. Go to project overview and look for a code similar to this one below and copy/paste the entire code here
*/

const firebaseConfig = {
  apiKey: "AIzaSyDS_HJLBNbKYbjhvjhvmbbvjhvbvb",
  authDomain: "<your-app-name>.firebaseapp.com",
  databaseURL: "https://<your-app-name>.firebaseio.com",
  projectId: "<your-app-name>",
  storageBucket: "<your-app-name>.appspot.com",
  messagingSenderId: "will be some numbers",
  appId: "Long string of characters"
};

export default firebaseConfig;