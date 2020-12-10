import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useTravel(userId, travelId) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [travelData, setTravelData] = useState(null);

  useEffect(() => {
    async function getTravel() {
      setIsLoading(true);

      try {
        const travelSnapshot = await usersCollection
          .doc(userId)
          .collection("travel")
          .doc(travelId)
          .get();

        if (!travelSnapshot.exists) {
          throw new Error("No such travel plan exists!");
        }

        const data = travelSnapshot.data();
        setTravelData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }

      setIsLoading(false);
    }

    getTravel();
  }, [travelId, userId]);

  return [travelData, isLoading, errorMessage];
}

export default useTravel;
