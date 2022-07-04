import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colRef } from "../../../firebase/Firebase-config";
import'../Style.css'

export default React.memo(function Sponsor() {
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

  return (
    <div className="container">
      <h1>Welcome to sponsor Platform</h1><br/>
      <table className="table">
        <h5>List of students who need to be sponsored</h5>
        <tr>
          <th>Full Names </th>
          <th>Age</th>
          <th>Gender</th>
        </tr>

        {List.map((e) => {
          return (
            <tr>
              <td>{e.FullNames}</td>
              <td>{e.Age}</td>
              <td>{e.Gender}</td>{" "}
            </tr>
          );
        })}

        <tr></tr>
      </table>
    </div>
  );
});
