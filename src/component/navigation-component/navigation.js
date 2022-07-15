import React from "react";
import './navigation.css';
import { Outlet, Link } from "react-router-dom";

export default function Navigation (){

    return (
        <div className="Nav">
            <nav>
                <ul>
                    <li>
                        <Link className="linkNav" to="/users">Users</Link>
                    </li>
                    <li>
                        <Link className="linkNav" to="/cars">Cars</Link>
                    </li>
                    <li>
                        <Link className="linkNav" to="/rents">Rents</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}