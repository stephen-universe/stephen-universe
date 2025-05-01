import React, { useEffect, useState } from "react";
export default function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/get-submissions")
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data.submissions);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container">
      {" "}
      <h1>Form Submissions</h1>{" "}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          {" "}
          <thead>
            {" "}
            <tr>
              {" "}
              <th>Name</th> <th>Email</th> <th>Date</th>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {submissions.map((sub, i) => (
              <tr key={i}>
                {" "}
                <td>{sub.firstName}</td> <td>{sub.email}</td>{" "}
                <td>{new Date(sub.timestamp).toLocaleString()}</td>{" "}
              </tr>
            ))}{" "}
          </tbody>{" "}
        </table>
      )}{" "}
    </div>
  );
}
