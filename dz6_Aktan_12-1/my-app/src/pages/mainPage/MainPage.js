import React, {useEffect, useState} from 'react'
import Users from '../../components/users/Users';
import classes from './mainpage.module.css'

const URL = 'https://jsonplaceholder.typicode.com/users';

function MainPage() {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        fetch(URL).then(response => response.json()).then(data => setUsers(data))
    }
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <h1>Main Page</h1><hr />
            <Users users={users}/>
        </>
    )
}

export default MainPage