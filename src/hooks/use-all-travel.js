import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useAllTravel(userId) {
  const [travel, setTravel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setTravel(docs);
    };

    const onError = (error) => {
      setIsLoading(false);
      setErrorMessage("There was a problem loading your travel plans. Please try again.");
      console.error(error);
    };

    const unsubscribe = usersCollection
      .doc(userId)
      .collection("travel")
      .orderBy("rating", "desc")
      .onSnapshot(onNext, onError);

    return unsubscribe;
  }, []);

  return [travel, isLoading, errorMessage];
}

export default useAllTravel;
