import React from "react";

const UserInfo = ({ name }: { name?: string }) => {
  return (
    <React.Fragment>{name ? <>welcome {name}</> : <>Sign up</>}</React.Fragment>
  );
};

export default UserInfo;
