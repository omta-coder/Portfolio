import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const clickHandler = () =>{
    navigate('/playlist');
  }

  return (
    <div className='container home_container'>
      <div className="home_innerdiv">
        <div className="left_div">
        <h2>Welcome to <span style={{ color: "#6c63ff" }}>Omta Dayma</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero dolor veritatis nesciunt provident ipsum rerum enim rem qui velit illo doloremque repellat ratione tempora, consequuntur, atque fugit ullam necessitatibus.</p>
            <div className="btn_div mt-4">
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }} onClick={clickHandler}>Projects</Button>
              <Button variant="danger" style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#6c63ff" }}>Resume</Button>
            </div>
        </div>
        <div className="right_div">
           <img src="https://img.freepik.com/premium-vector/woman-work-computer-office-flat-cartoon-style-vector-illustration_658424-130.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700438400&semt=ais" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home