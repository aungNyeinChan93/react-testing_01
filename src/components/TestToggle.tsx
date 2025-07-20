import React, { useState } from "react";

const TestToggle = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <section>
        <button onClick={() => setShow((pre) => !pre)}>Toggle</button>
        {show && <p>Model Box</p>}
      </section>
    </React.Fragment>
  );
};

export default TestToggle;
