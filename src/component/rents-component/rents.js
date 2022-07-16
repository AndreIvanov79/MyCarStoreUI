import React from "react";
import '../users-component/users.css';

export default function Rents(){
    return (
        <div className="Box">
            <header>
                <h1>List of Rents</h1>
            </header>
            <body className="Body">
            <table>
                <tr>
                    <th>Rent</th>
                    <th>Date of start</th>
                    <th>Date of end</th>
                    <th className="Butt"></th>
                </tr>
                <tr>
                    <td>Rent 1</td>
                    <td>10.01.2022</td>
                    <td>30.01.2022</td>
                    <td className="Butt">
                        <button className="Edit" onClick={()=>window.open("http://google.com")}>Edit</button>
                        <button className="Del" onClick={()=>window.open("http://google.com")}>Delete</button>
                    </td>
                </tr>

            </table>
            </body>
        </div>
    )
}