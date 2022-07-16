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
                    <td>Rent 1, Rent 2</td>
                    <td className="Butt">
                        <button className="Edit" onClick={()=>window.open("http://google.com")}>Edit</button>
                        <button className="Del" onClick={()=>window.open("http://google.com")}>Delete</button>
                    </td>
                </tr>

            </table>
            </body>
        </div>
    );
}

export default Users;