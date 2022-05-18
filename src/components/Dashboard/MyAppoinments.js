import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppoinments = () => {
  const [{ email }] = useAuthState(auth);
  const [appoinments, setAppoinments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `http://localhost:5000/booking?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppoinments(data);
        setIsLoading(false);
      });
  }, [email]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="rounded-lg p-6">
      <div className="overflow-x-auto">
        <table className="table w-full mx-auto">
          {/* -- head -- */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment Name</th>
            </tr>
          </thead>
          <tbody>
            {appoinments.map(
              (
                { patientName, patientPhone, treatmentName, date, slot },
                index
              ) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{patientName}</td>
                  <td>{patientPhone}</td>
                  <td>{date}</td>
                  <td>{slot}</td>
                  <td>{treatmentName}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppoinments;
