import React from "react";

const UserStatus = ({ username }: { username: string }) => {
  return (
    <React.Fragment>
      <section>
        {username ? (
          <p>Welcome {username}</p>
        ) : (
          <button type="button">Sign Up</button>
        )}
      </section>
    </React.Fragment>
  );
};

export default UserStatus;
