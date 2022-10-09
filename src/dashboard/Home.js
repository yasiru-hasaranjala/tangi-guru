import {useEffect,useState} from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import DashboardComponent from "./DashboardComponent";
import MiniCardComponent from "./MiniCardComponent";
import ModuleCard from "./Card";
import "./dashboard.css";
import { getUser } from '../firebase';
import {Container , Row, Col} from 'react-bootstrap';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser(user.uid).then(data=>{
      setUserData(data)
    })
  }, [user]);
  
  return (
    <>
      <nav className="navbar">
          <div className="align-item-end text-center">
            Hello {user.childName} <br />
            {user && user.email}
          </div>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
      </nav>
      <div className="divdash">
        <div>
        <Container className="Container">  
          <Row>  
            <Col className="p-2">
              {/* <ModuleCard title="Color Identification" value="10" onClick={gotoQuiz}/> */}
            </Col>  
            <Col className="p-2">
              <ModuleCard title="Shapes & Sizes" value="3" />
            </Col>  
          </Row>  
          <Row>  
            <Col className="p-2">
              <ModuleCard title="Letters" value="6" />
            </Col>  
            <Col className="p-2">
              <ModuleCard title="Numbers" value="8" />
            </Col>  
            <Col className="p-2">
              <ModuleCard title="Making Words" value="0" />
            </Col>  
          </Row>  
        </Container>  
           <Stack gap={3} className="list">
            <Stack direction="horizontal" gap={3} >
              <ModuleCard title="Color Identification" value="10" />
              <ModuleCard title="Shapes & Sizes" value={userData?.subjects['color-identification'].totalMarks} />
              <ModuleCard title="Letters" value="6" />
            
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <ModuleCard title="Numbers" value="8" />
              <ModuleCard title="Making Words" value="0" />
              <ModuleCard title="Mathematics" value=" 0" />
            </Stack>
          </Stack> 
        </div>
      </div>
    </>
  );
};

export default Home;
