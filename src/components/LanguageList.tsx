import React from "react";

const LanguageList = ({ languages }: { languages?: string[] }) => {
  if (languages?.length === 0) return <p>Programming language is empty</p>;
  return (
    <React.Fragment>
      <section>
        <ul>
          {languages?.map((l, i) => {
            return <li key={i}>{l} </li>;
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default LanguageList;
