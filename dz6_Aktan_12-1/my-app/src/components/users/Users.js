import React from 'react';
import classes from "./users.module.css";

function Users(props) {
    return (
        <div className={classes.table}>
            <table border={5}>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>User name</th>
                    <th>Email</th>
                </tr>
                </thead>
                {
                    props.users.map((user, key) =>
                        <tbody key={key} >
                        <tr>
                            <th>{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                        </tbody>
                    )
                }
            </table>
        </div >
    )
}

export default Users