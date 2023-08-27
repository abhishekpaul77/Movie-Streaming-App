import NavBar from "../../components/Navbar/NavBar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
     <NavBar/>
     <Featured/>
     <List/>
     <List/>
     <List/>
     <List/>
    </div>
  )
}

export default Home