import React from "react";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <UserButton />
    </div>
  );
};

export default Home;
