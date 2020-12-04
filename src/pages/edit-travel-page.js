import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditTravel from "../components/edit-travel";

function EditTravelPage(props) {
  const { id } = useParams();

  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditTravel id={id} {...props} />
    </main>
  );
}

export default EditTravelPage;
