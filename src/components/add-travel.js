import React from "react";
import useSaveTravel from "../hooks/use-save-travel";
import "./add-travel.css";
import TravelForm from "./travel-form";

function AddTravel(props) {
  const userId = props.user.uid;
  const [saveTravel, isSaving, formMessage] = useSaveTravel();

  const onTravelSumbit = async (
    country,
    city,
    monthVisited,
    yearVisited,
    rating,
    review,
    visits
  ) => {
    saveTravel({ country, city, monthVisited, yearVisited, rating, review, visits }, userId);
  };

  return (
    <div className="add-container">
      <h1>Add Travel</h1>
      <TravelForm onSubmit={onTravelSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddTravel;
