import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { usersCollection } from "../data/firebase";
import "./travel.css";

function Travel(props) {
  const { id, data, userId } = props;
  const { country, city, monthVisited, yearVisited, rating, review, visits } = data;

  const ratingString = "★".repeat(rating) + "☆".repeat(5 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteTravel = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = usersCollection.doc(userId).collection("travel").doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="travel">
      <div className="travel__contents">
        <div className="travel__title">
          {city}, {country}
        </div>
        <div className="travel__title">
          Date: {monthVisited}, {yearVisited}
        </div>
        <div className="travel__rating">{ratingString}</div>
        <div className="travel__review">Review: {review ? review : "No review saved."}</div>
        <div className="travel__year">Number of Visits: {visits}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="travel__button" disabled={isDeleting} onClick={deleteTravel}>
          <Delete />
        </button>
        <button className="travel__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Travel;
