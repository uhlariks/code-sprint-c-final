import React from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import Travel from "./travel";
import useAllTravel from "../hooks/use-all-travel";
import "./travel-listing.css";

// useEffect Hook:
// > Guide, https://reactjs.org/docs/hooks-effect.html
// > API Docs, https://reactjs.org/docs/hooks-reference.html#useeffect

function TravelListing(props) {
  const userId = props.user.uid;
  const [travel, isLoading, errorMessage] = useAllTravel(userId);

  return (
    <div className="travel-container">
      <h1>Travel</h1>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      <ul className="travel-list">
        {travel.map((travelDoc) => {
          const travelId = travelDoc.id;
          const travelData = travelDoc.data();
          return (
            <li key={travelId}>
              <Travel id={travelId} data={travelData} userId={userId} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TravelListing;
