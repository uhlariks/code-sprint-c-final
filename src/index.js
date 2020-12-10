import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// async function getAllUsers() {
//   try {
//     const snapshot = await usersCollection.get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id);
//       console.log(doc.data());
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getUsersMovies() {
//   try {
//     const snapshot = await usersCollection
//       .doc("bPqWfZZA9gYOL0kkrZ56aByMJNP2")
//       .collection("movies")
//       .get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id);
//       console.log(doc.data());
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

//getUsersMovies();
//getAllUsers();
