import React, { useState } from "react";
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
  const [filterTravel, setFilterTravel] = useState("showall");
  const [travel, isLoading, errorMessage] = useAllTravel(userId, filterTravel);

  const onFilterTravelChange = (event) => {
    setFilterTravel(event.target.value);
  };

  return (
    <div className="travel-container">
      <h1>My Travel Journal</h1>
      <select className="travel-filter" value={filterTravel} onChange={onFilterTravelChange}>
        <option value="showall">All Travel</option>
        <option value="pasttravel">Past Trips</option>
        <option value="futuretravel">Future Trips</option>
      </select>
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
