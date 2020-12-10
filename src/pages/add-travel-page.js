import React from "react";
import { Helmet } from "react-helmet";
import AddTravel from "../components/add-travel";

function AddTravelPage(props) {
  return (
    <main>
      <Helmet>
        <title>Add Travel</title>
      </Helmet>
      <AddTravel {...props} />
    </main>
  );
}

export default AddTravelPage;
