import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useSaveTravel() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (travelData, userId, travelId) => {
    setIsSaving(true);
    setFormMessage("");

    try {
      if (travelId === undefined) {
        await usersCollection.doc(userId).collection("travel").add(travelData);
      } else {
        await usersCollection.doc(userId).collection("travel").doc(travelId).set(travelData);
      }
      setFormMessage("Saved successfully!");
    } catch (error) {
      setFormMessage("Something went wrong editing. Please try again.");
      console.error(error);
    }

    setIsSaving(false);
  };

  return [save, isSaving, formMessage];
}

export default useSaveTravel;
