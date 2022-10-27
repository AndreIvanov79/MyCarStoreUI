
import {Col, Row} from 'antd';
import React from 'react';
import '../styles/category-page.css';
import MyTable from "../my-table/my-table";

const Users = () => {
    const apiUrl = '/users';
    const myColumns = [
        {
            title: 'NAME',
            dataIndex: 'firstName',
            width: '25%',
            editable: true,
        },
        {
            title: 'SURNAME',
            dataIndex: 'lastName',
            width: '25%',
            editable: true,
        },
        {
            title: 'USERNAME',
            dataIndex: 'userName',
            width: '25%',
            editable: true,
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            width: '25%',
            editable: true,
        },
        {
            title: 'RENT No.',
            dataIndex: 'rents',
            width: '15%',
            editable: true,
        }
    ];

    return (
        <>
            <header>
                <h1>List of Users</h1>
            </header>
            <Row>
                <Col span={16} offset={4}>
                    <MyTable url={apiUrl} myColumns={myColumns}/>
                </Col>
            </Row>
        </>
    );
};

export default Users;