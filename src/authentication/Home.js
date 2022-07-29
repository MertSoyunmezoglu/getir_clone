import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout =   () => {
    try {
        logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div>
    {user && user.email}
      <Button variant="primary" onClick={handleLogout}>
      Log out
    </Button>
    </div>
  );
};

export default Home;
