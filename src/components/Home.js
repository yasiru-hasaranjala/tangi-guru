import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import DashboardComponent from "./DashboardComponent";
import MiniCardComponent from "./MiniCardComponent";
import ModuleCard from "../dashboard/Card";
import "../dashboard/dashboard.css";

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
      {/* <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
      
      <div>
        {/* <CardGroup>
          <ModuleCard />
          <ModuleCard />
          <ModuleCard />
        </CardGroup> */}
        {/* <DashboardComponent/>  */}
        <Stack gap={3} >
          <Stack direction="horizontal" gap={3} >
            <ModuleCard />
            <ModuleCard />
            <ModuleCard />
            <ModuleCard />
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <ModuleCard />
            <ModuleCard />
            <ModuleCard />
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default Home;
