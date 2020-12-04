import React from "react";
import { Helmet } from "react-helmet";
import TravelListing from "../components/travel-listing";

function TravelPage(props) {
  return (
    <main>
      <Helmet>
        <title>My Travel Journal</title>
      </Helmet>
      <TravelListing {...props} />
    </main>
  );
}

export default TravelPage;
