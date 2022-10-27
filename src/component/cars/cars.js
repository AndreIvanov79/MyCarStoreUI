import React from "react";
import {Col,  Row} from "antd";
import MyTable from "../my-table/my-table";


const Cars = () => {
    const apiUrl = '/cars';
    const myColumns = [
        {
            title: 'BRAND',
            dataIndex: 'brand',
            width: '25%',
            editable: true,
        },
        {
            title: 'NUMBER',
            dataIndex: 'number',
            width: '25%',
            editable: true,
        },
        {
            title: 'TYPE',
            dataIndex: 'type',
            width: '20%',
            editable: true,
        },
        {
            title: 'RENTED',
            dataIndex: 'rented',
            width: '15%',
            editable: true,
        }
    ];

    return (
        <>
            <header>
                <h1>List of Cars</h1>
            </header>
            <Row>
                <Col span={16} offset={4}>
                    <MyTable url={apiUrl} myColumns={myColumns}/>
                </Col>
            </Row>
        </>
    );
};

export default Cars;