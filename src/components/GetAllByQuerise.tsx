import React from "react";

const GetAllByQueries = () => {
  return (
    <React.Fragment>
      <section>
        <label htmlFor="name">name 1</label>
        <input type="text" id="name" disabled />

        <label htmlFor="name2">name 2</label>
        <input type="text" id="name2" disabled />
      </section>
    </React.Fragment>
  );
};

export default GetAllByQueries;
