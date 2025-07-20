import React from "react";

const GetByQueries = () => {
  return (
    <React.Fragment>
      <section>
        <a href="https://home">Home</a>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          id="name"
          value={"default value"}
          onChange={(e) => e.target.value}
        />
        <div data-testid="div">Div element</div>
        <button>test</button>
      </section>
    </React.Fragment>
  );
};

export default GetByQueries;
