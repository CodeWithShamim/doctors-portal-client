import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    // ___make admin______
    const makeAdmin = (adminEmail) => {
        const url = `https://doctors-portal100.herokuapp.com/user/admin/${adminEmail}`;
        fetch(url, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((res) => {
                if (res.status === 401) {
                    toast.error("Unauthorized access");
                } else if (res.status === 403) {
                    toast.error("Forbidden access");
                }
                return res.json();
            })
            .then((data) => {
                refetch();
                if (data.modifiedCount) {
                    toast.success(`Successfully created admin for ${adminEmail}`);
                }
            });
    };

    // _____delete user______
    const deleteUser = (userEmail) => {
        const url = `https://doctors-portal100.herokuapp.com/deleteUser/${userEmail}`;
        fetch(url, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((res) => {
                if (res.status === 401) {
                    toast.error("Unauthorized access");
                } else if (res.status === 403) {
                    toast.error("Forbidden access");
                }
                return res.json();
            })
            .then((data) => {
                refetch();
                if (data.deletedCount) {
                    toast.success(`Successfully delete ${userEmail}`);
                }
            });
    };

    return ( <
        tr >
        <
        th > 1 < /th> <
        td > { email } < /td> <
        td > {
            role === "Admin" ? ( <
                span className = "text-blue rounded-xl btn-success px-2" >
                Already admin <
                /span>
            ) : ( <
                button onClick = {
                    () => makeAdmin(email) }
                className = "text-white font-bold rounded-xl btn-warning px-3 py-2" >
                Make admin <
                /button>
            )
        } <
        /td> <
        td >
        <
        button onClick = {
            () => deleteUser(email) }
        className = "btn btn-xs btn-error text-white font-bold" >
        { role === "Admin" ? "Remove admin" : "Remove user" } <
        /button> <
        /td> <
        /tr>
    );
};
export default UserRow;