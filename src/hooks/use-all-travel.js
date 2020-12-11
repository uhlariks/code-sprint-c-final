import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useAllTravel(userId, filterTravel) {
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

    const travelref = usersCollection.doc(userId).collection("travel");
    let unsubscribe;
    if (filterTravel === "showall") {
      unsubscribe = travelref.orderBy("rating", "desc").onSnapshot(onNext, onError);
    } else if (filterTravel === "pasttravel") {
      unsubscribe = travelref.where("hasHappened", "==", true).onSnapshot(onNext, onError);
    } else if (filterTravel === "futuretravel") {
      unsubscribe = travelref.where("hasHappened", "!=", true).onSnapshot(onNext, onError);
    }

    return unsubscribe;
  }, [userId, filterTravel]);

  return [travel, isLoading, errorMessage];
}

export default useAllTravel;
