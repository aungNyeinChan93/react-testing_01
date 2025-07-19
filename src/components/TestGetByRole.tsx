import React from "react";

const TestGetByRole = () => {
  return (
    <React.Fragment>
      <section>
        <button type="button"> btn-click</button>
        <h1>header level-1</h1>
        <input type="text" aria-label="username" id="" />
        <a href="/">home</a>
        <footer>Footer</footer>
        <nav>Navbar</nav>
        <header>Header</header>
        <img src="#" alt="test-img" />
      </section>
    </React.Fragment>
  );
};

export default TestGetByRole;
