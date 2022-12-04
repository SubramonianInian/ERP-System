import React from 'react'
import "../modules/home/styles/home.scss";
import Hrms from "../assets/people.svg";
import { useState } from 'react';
import Report from "../assets/report.svg";
import Booking from "../assets/booking.svg";
import Payroll from "../assets/payroll.svg";
import Employee from "../assets/employee.svg";
import withLayout from '../layouts/withlayout'
import Inventory from "../assets/inventory.svg";
import ActionCards from '../modules/home/components/actionCards/ActionCards';
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useEffect } from 'react';
import { v4 as uid } from 'uuid';
const Home = () => {
    const ref = collection(db, "test");
    const actions = [
        { id: 1, name: 'HRMS', details: 'Manage Internal HR Functions', image: Hrms },
        { id: 2, name: 'Booking', details: 'Manage Customer Booking', image: Booking },
        { id: 3, name: 'Attendance', details: 'Manage Employee Attendance', image: Employee },
        { id: 4, name: 'Inventory', details: 'Manage Store Inventory', image: Inventory },
        { id: 5, name: 'Payroll', details: 'Manage Employee Payroll', image: Payroll },
        { id: 6, name: 'Report', details: 'Generate Custom Reports', image: Report },
    ];

    useEffect(() => {
        addDoc(ref, { test: 0 });
    }, [])

    const [view, setView] = useState(1)


    return (
        <div className='main-wrapper'>
            <div>Dashboard</div>
            <div className='action-grid'>
                <div className='action-container'>
                    {actions.map((action) => <ActionCards key={uid()} {...action} />)}
                </div>
            </div>
            {/* <table>
                <tbody>

                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Eddie</td>
                        <td>Top Stylist</td>
                        <td>Edit Delete</td>
                    </tr>
                </tbody>
            </table> */}
        </div>

    )
}

export default withLayout(Home);