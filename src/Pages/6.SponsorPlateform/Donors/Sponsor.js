import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colRef } from "../../../firebase/Firebase-config";
import'../Style.css'
import { useNavigate } from "react-router-dom";


export default React.memo(function Sponsor() {
  const navigate002=useNavigate()
  const oneData = [];
  const [List, setList] = useState([]);

  async function FetchDoc() {
    try {
      await getDocs(colRef)
        .then((allDocs) => {
          var studentsList = [];

          allDocs.docs.forEach((doc) => {
            studentsList.push({ ...doc.data() });

            return setList(studentsList);
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
    } catch (err) {
      console.log(err.message);
    }
  }
  List.map((e) => {
    return oneData.push(e.FullNames, oneData.Gender);
  });
  console.log(oneData);

  useEffect(() => {
    FetchDoc();
  }, []);
console.log(List)
  return (
    <div className="container" id="table">
      <h1>Welcome to sponsor Platform</h1><br/>
      <h5>Profiles of students who need to be sponsored</h5>
      <table className="table">
        
        <tr>
          <th>Full Names </th>
          <th>Age</th>
          <th>Gender</th>
          <th>Interest</th>
          <th>Nationality</th>
          <th>Status</th>
          <th>Reason</th>
          
        </tr>

        {List.map((e) => {
          return (
            <tr>
              <td>{e.FullNames}</td>
              <td>{e.Age}</td>
              <td>{e.Gender}</td>
              <td>{e.Interest}</td>
              <td>{e.Nationality}</td>
               <td>{e.Status}</td>
              <td>{e.Reason}<button onClick={()=>{return navigate002('/Payment')}} className="btn btn-dark" >Pay to sponsor </button></td>
             
            </tr>
          );
        })}

        <tr></tr>
      </table>
    </div>
  );
});
