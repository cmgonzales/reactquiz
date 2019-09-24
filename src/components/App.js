import React ,{useState} from 'react';
import quiz from './quiz'
import '../styles/App.css';


function App() {

const [ans, setans] = useState(

  {
    ansone: "",
    anstwo: ""
  }
);
const [right, setRight] = useState([])

const handleChange = evt => {
  const  value = evt.target.value
  setans( { 
    ...ans,
      [evt.target.name]: value
    })
  }
 

 const clicked = (e) => {
   e.preventDefault()
   ans.onsone === "b" ? setRight('A') : setRight('B')
   ans.onsone === "v" ? setRight('A') : setRight('B')
   console.log(ans.anstwo)
   console.log("clicked")
  
 }

  return (
    <div>
      <ul>

        <form onSubmit = {clicked}>
      
          <li>{quiz.quiz[0].question}</li><h4>{right}</h4>
          <input
          type="text"
          onChange = {handleChange}
          name = "ansone"
          value = {ans.ansone}
          ></input> 
          <li>{quiz.quiz[1].question}</li><h4>{right}</h4>
          <input
          type="text"
          name = "anstwo"
          onChange = {handleChange}
          value = {ans.anstwo}
          ></input>
          <button type = "submit"> submit</button>
          </form>
      
      
      </ul>
  
    </div>
  );
}

export default App;
