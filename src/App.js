import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [TotalData,SetTotalData] = useState([]);
  
  
  async function fetchData() {
    debugger;
    try {
      const response = await axios.get('http://127.0.0.1:8000/data/user/');
      SetTotalData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="App">
      <div>
        <table>
        <th>CATEGORY</th>
        <th>QUESTION</th>
        <th>ANSWER</th>
        {TotalData.map((user)=>(
        <tr key={user.category}>
          <td>{user.category}</td>
          <td>{user.question}</td>
          <td>{user.correct_answer}</td>
         </tr>
       ))}
        </table>
      </div>
    </div>
  );
}

export default App;
