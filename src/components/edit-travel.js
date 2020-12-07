import React from "react";
import useTravel from "../hooks/use-travel";
import useSaveTravel from "../hooks/use-save-travel";
import "./edit-travel.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import TravelForm from "./travel-form";

function EditTravel(props) {
  const travelId = props.id;
  const userId = props.user.uid;

  const [travelData, isLoading, errorMessage] = useTravel(userId, travelId);
  const [saveTravel, isSaving, formMessage] = useSaveTravel();

  const onTravelSubmit = async (
    country,
    city,
    monthVisited,
    yearVisited,
    tags,
    rating,
    review,
    visits
  ) => {
    saveTravel(
      { rating, country, city, monthVisited, yearVisited, tags, review, visits },
      userId,
      travelId
    );
  };

  return (
    <div className="edit-container">
      <h2>Edit Travel</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {travelData && (
        <TravelForm
          initialState={travelData}
          onSubmit={onTravelSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditTravel;
