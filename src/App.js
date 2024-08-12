import './App.css';
import Box from "./compo/Box"
import {useState} from "react"

const choice = {
  rock:{
    name:"rock",
    img:"https://m.media-amazon.com/images/I/51rOMX5z40L.jpg"
  },
  scissors:{
    name:"scissors",
    img:"https://m.media-amazon.com/images/I/810Tz4tXUyL.jpg"
  },
  paper:{
    name:"paper",
    img:"https://m.media-amazon.com/images/I/617B4LbYLnL._AC_UF894,1000_QL80_.jpg"
  }
}
function App() {
  const [userSelect,setUserSelect] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])  
    console.log("선택됨",userChoice)
  }

  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect}/>
        {/* <Box title='Computer'/> */}
      </div>
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
    
  );
}

export default App;
