import React from "react";
import './users.css';


const Users =() => {
    return (
        <div className="Box">
            <header>
                <h1>List of Users</h1>
            </header>
            <body className="Body">
            <table>
                <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Rents</th>
                    <th className="Butt"></th>
                </tr>
                <tr>
                    <td>John</td>
                    <td>jonny@mail.com</td>
                    <td>N 1</td>
                    <td className="Butt">
                        <button className="Edit">Edit</button>
                        <button className="Del">Delete</button>
                    </td>
                </tr>

            </table>
            </body>
        </div>
    );
}

export default Users;