import './App.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Load from './Load';
import Stop from './Stop';
import Save from './Save';

const App = () => {
  const data = [
    {name:"Town House",location:"Lagos",link:"http://lagos-preperty"},
    {name:"Appartement",location:"Caraib",link:"http://lagos-preperty"},
    {name:"Country side",location:"Minsk",link:"http://lagos-preperty"}
  ]

  const dataRender = (data,index)=>{
    return(
      <tr key={index}>
        <td>{data.name}</td>
        <td>{data.location}</td>
        <td>{data.link}</td>
      </tr>
    )
  }

  return (
    <div className ="container mt-5">
      <div className ="d-flex justify-content-between align-items-center">
        <div>
          <h3>Web Scraping app</h3>
        </div>
        <div className ="btn-group mb-2 ">
          <Load />
          <Stop />
        </div>
      </div>
      
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
      <div className='d-flex justify-content-end mt-2'>
        <Save/>
      </div>
    </div>
    
  );
}

export default App;
