import React from "react";
import '../styles/category-page.css';
import {Col, Row} from "antd";
import MyTable from "../my-table/my-table";

const Rents = () => {
    const apiUrl = '/rents';
    const myColumns = [
        {
            title: 'USER',
            dataIndex: 'user',
            width: '15%',
            editable: true,
        },
        {
            title: 'CAR',
            dataIndex: 'car',
            width: '25%',
            editable: true,
        },
        {
            title: 'START DATE',
            dataIndex: 'startDate',
            width: '10%',
            editable: true,
        },
        {
            title: 'END DATE',
            dataIndex: 'endDate',
            width: '10%',
            editable: true,
        },
        {
            title: 'FINISHED',
            dataIndex: 'finished',
            width: '10%',
            editable: true,
        },
    ];

    return (
        <>
            <header>
                <h1>List of Rents</h1>
            </header>
            <Row>
                <Col span={16} offset={4}>
                    <MyTable url={apiUrl} myColumns={myColumns}/>
                </Col>
            </Row>
        </>
    );
};

export default Rents;