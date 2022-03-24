import './App.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const data = [
    {name:"Town House",location:"Lagos",link:"http://lagos-preperty"},
    {name:"Appartement",location:"Caraib",link:"http://lagos-preperty"},
    {name:"Country side",location:"Minsk",link:"http://lagos-preperty"}
  ]

  const dataRender = (data,index)=>{
    return(
      <tr key = {index}>
        <td>{data.name}</td>
        <td>{data.location}</td>
        <td>{data.link}</td>
      </tr>
      
    )
  } 
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map(dataRender)}
      </tbody>
  </Table>
  );
}

export default App;
