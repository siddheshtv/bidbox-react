import React from "react";
import Card from "./Card";

function Section2() {
  return (
    <section className="m-4">
      <div className="py-2 my-3">
        <h1 className="text-7xl font-bold text-center">Featured</h1>
      </div>
      <div className="flex space-x-4 justify-center my-2">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Section2;
