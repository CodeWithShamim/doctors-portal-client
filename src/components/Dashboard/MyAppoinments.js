import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyAppoinments = () => {
  const [{ email }] = useAuthState(auth);
  const [appoinments, setAppoinments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `https://doctors-portal100.herokuapp.com/booking?email=${email}`;
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // _____handle error_______
        if (
          data.message === "Forbidden access" ||
          data.message === "Unauthorized access"
        ) {
          toast(data.message);
          localStorage.removeItem("accessToken");
          signOut(auth);
        } else {
          setAppoinments(data);
        }

        // ____loading end_____
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
            {appoinments?.map(
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
