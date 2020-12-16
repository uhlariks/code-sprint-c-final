import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./travel-form.css";

function TravelForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.country === undefined) initialState.country = "";
  if (initialState.city === undefined) initialState.city = "";
  if (initialState.monthVisited === undefined) initialState.monthVisited = "";
  if (initialState.yearVisited === undefined) initialState.yearVisited = 2020;
  if (initialState.tags === undefined) initialState.tags = [];
  if (initialState.hasHappened === undefined) initialState.hasHappened = false;
  if (initialState.rating === undefined) initialState.rating = 0;
  if (initialState.review === undefined) initialState.review = "";
  if (initialState.visits === undefined) initialState.visits = 0;

  const [country, setCountry] = useState(initialState.country);
  const [city, setCity] = useState(initialState.city);
  const [monthVisited, setMonthVisited] = useState(initialState.monthVisited);
  const [yearVisited, setYearVisited] = useState(initialState.yearVisited);
  const [tags, setTags] = useState(initialState.tags.join(", "));
  const [hasHappened, setHasHappened] = useState(initialState.hasHappened);
  const [rating, setRating] = useState(initialState.rating);
  const [review, setReview] = useState(initialState.review);
  const [visits, setVisits] = useState(initialState.visits);
  const [errorMessage, setErrorMessage] = useState("");

  const onCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const onCityChange = (event) => {
    setCity(event.target.value);
  };
  const onMonthVisitedChange = (event) => {
    setMonthVisited(event.target.value);
  };
  const onYearVisitedChange = (event) => {
    setYearVisited(event.target.value);
  };
  const onTagsChange = (event) => {
    setTags(event.target.value);
  };

  const onHasHappenedChange = (event) => {
    setHasHappened(event.target.checked);
  };

  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onReviewChange = (event) => {
    setReview(event.target.value);
  };
  const onVisitsChange = (event) => {
    setVisits(event.target.value);
  };

  const onTravelSumbit = async (event) => {
    event.preventDefault();

    const parts = tags.split(", ");
    const partsTrimmed = parts.map((string) => string.trim());
    const filteredParts = partsTrimmed.filter((string) => {
      if (string === null) {
        setErrorMessage("There was a problem entering your activities. Please try again.");
        return false;
      } else {
        return true;
      }
    });

    onSubmit(
      country,
      city,
      monthVisited,
      yearVisited,
      filteredParts,
      hasHappened,
      rating,
      review,
      visits
    );
  };

  return (
    <form className="travel-form" onSubmit={onTravelSumbit}>
      <h2 className="travel-form__title">Travel Details</h2>
      <h4 className="travel-form__instructions">Add details below, then click save.</h4>
      {message && <p className="travel-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="travel-form__controls" disabled={isSaving}>
        <label className="travel-form__label">Country:</label>
        <input
          className="travel-form__input"
          type="text"
          value={country}
          placeholder="Country"
          onChange={onCountryChange}
        />
        <label className="travel-form__label">City:</label>
        <input
          className="travel-form__input"
          type="text"
          value={city}
          placeholder="City"
          onChange={onCityChange}
        />
        <label className="travel-form__label">Month:</label>
        <input
          className="travel-form__input"
          type="text"
          value={monthVisited}
          placeholder="Month i.e. July"
          onChange={onMonthVisitedChange}
        />
        <label className="travel-form__label">Year:</label>
        <input
          className="travel-form__input"
          type="text"
          value={yearVisited}
          placeholder="Year i.e. 2020"
          onChange={onYearVisitedChange}
        />
        <label className="travel-form__label">Activities: </label>
        <input
          className="travel-form__input"
          type="text"
          value={tags}
          placeholder="Add activities or leave blank"
          onChange={onTagsChange}
        />
        <label className="travel-form__label">Past Travel? </label>
        <input
          className="travel-form__input"
          type="checkbox"
          checked={hasHappened}
          onChange={onHasHappenedChange}
        />
        {hasHappened && (
          <>
            <label className="travel-form__label">Review:</label>
            <input
              className="travel-form__input"
              type="text"
              value={review}
              placeholder="Add review here"
              onChange={onReviewChange}
            />
            <label className="travel-form__label">Number of Visits:</label>
            <input
              className="travel-form__input"
              type="number"
              value={visits}
              onChange={onVisitsChange}
            />
            <label className="travel-form__label">Rating:</label>
            <input
              className="travel-form__input"
              type="number"
              value={rating}
              onChange={onRatingChange}
            />
          </>
        )}

        <input
          className="travel-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default TravelForm;
