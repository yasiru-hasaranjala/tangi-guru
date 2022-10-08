import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import DashboardComponent from "./DashboardComponent";
import MiniCardComponent from "./MiniCardComponent";
import ModuleCard from "./Card";
import "./dashboard.css";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Stack direction="horizontal" gap={3} >
        <div className="align-item-end p-4 mt-3 text-center">
          Hello $$$$$ <br />
          {user && user.email}
        </div>
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </Stack>
      
      <div>
        <Stack gap={3} className="list">
          <Stack direction="horizontal" gap={3} >
            <ModuleCard title="Color Identification" value="10" />
            <ModuleCard title="Shapes & Sizes" value="3" />
            <ModuleCard title="Letters" value="6" />
          
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <ModuleCard title="Numbers" value="8" />
            <ModuleCard title="Making Words" value="0" />
            <ModuleCard title="Mathematics" value=" 0" />
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default Home;
