import React from "react";
import '../users-component/users.css';

export default function Cars(){
    return (
        <div className="Box">
            <header>
                <h1>List of Cars</h1>
            </header>
            <body className="Body">
            <table>
                <tr>
                    <th>Model</th>
                    <th>Type</th>
                    <th>Number</th>
                    <th>Rent</th>
                    <th className="Butt"></th>
                </tr>
                <tr>
                    <td>Mercedes</td>
                    <td>Car</td>
                    <td>AAA 007</td>
                    <td>Rent 1</td>
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