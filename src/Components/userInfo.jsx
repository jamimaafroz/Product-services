import { useSession } from "next-auth/react";
import React from "react";

const userInfo = () => {
  const session = useSession();
  return (
    <div>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default userInfo;
