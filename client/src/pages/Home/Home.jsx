import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/NavBar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTU0N2MwMWFkM2M0NzYyNWNkMDY4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzY0ODg0MiwiZXhwIjoxNzI5MTg0ODQyfQ.cEewEpKHzPJrOHGK8AV38iCZr3LRBvQiVSjS0pSjx70",
            },
          }
        );
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists()
  }, [type,genre]);

  return (
    <div className="home">
      <NavBar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list)=>(
        <List list={list}/>
      ))} 
    </div>
  );
};

export default Home;
