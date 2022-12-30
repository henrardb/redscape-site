import Navbar from "../components/Navbar";
import { Typography } from '@mui/material';
import Pillars from "../components/Pillars";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Typography variant="h1">Redscape home</Typography>
      <Pillars />
    </div>
  );
}

export default Home;