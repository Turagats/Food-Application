import React from "react";
import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals.js";
import MealsSummary from "./MealsSummary.js";

export default function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}
