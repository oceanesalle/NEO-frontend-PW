import React from 'react'
import Table from 'react-bootstrap/Table';
import './Fitness.css';

const Fitness = () => {
  return (
    <Table striped border hover>
       <tbody>
        <tr>
          <th>Lundi</th>
          <th>Mardi</th>
          <th>Mercredi</th>
          <th>Jeudi</th>
          <th>Vendredi</th>
          <th>Samedi</th>
        </tr>
        <tr>
          <td>9h30-10h30</td>
          <td>9h30-10h15</td>
          <td></td>
          <td>9h30-10h15</td>
          <td>9h30-10h30</td>
          <td>9h30-10h15</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>10h30-11h30</td>
        </tr>
        <tr>
          <td>12h30-13h15</td>
          <td>12h30-13h15</td>
          <td>12h30-13h15</td>
          <td>12h30-13h15</td>
          <td>12h30-13h15</td>
          <td></td>
        </tr>
        <tr>
          <td>18h00-18h40</td>
          <td>18h00-18h40</td>
          <td>18h00-19h00</td>
          <td>18h00-18h40</td>
          <td>18h00-18h30</td>
          <td></td>
        </tr>
        <tr>
          <td>18h40-19h25</td>
          <td>18h40-19h25</td>
          <td>19h05-19h35</td>
          <td>18h40-19h25</td>
          <td>18h40-19h25</td>
          <td></td>
          </tr>
          <tr>
          <td>19h25-20h10</td>
          <td>19h25-19h55</td>
          <td>19h40-20h10</td>
          <td>19h30-20h15</td>
          <td>19h30-19h15</td>
          <td></td>
          </tr>
          <tr>
          <td>20h10-20h30</td>
          <td>19h55-20h40</td>
          <td>19h40-20h10</td>
          <td></td>
          </tr>
        
      </tbody>
    </Table>
   
  )
}

export default Fitness