'use client'
import NameList from "../components/NameList";
import UserForm from "../components/UserForm";
import { useState } from "react";
import { User } from "../types/User"
import { TEXT_STYLES } from "@/lib/styles";

export default function Home() {

    // Mock database
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: 'Amy'},
        { id: 2, name: 'Bravo'},
        { id: 3, name: 'Charlie'}
    ]);

    // CRUD functionalities
    const addUser = (name: string) => {
        if (name.trim()) {
            setUsers([...users, {
                id: Math.max(0, ...users.map(u => u.id)) + 1,
                name
            }]);
        }
    };

    const getAllUsers = () => {
      return users
    }

    const updateUser = (id: number, p0: string, value: string) => {
        const updatedUsers = users.map(user => 
            user.id === id ? {...user, [p0]: value} : user
        )
        setUsers(updatedUsers)
    }

    const deleteUser = (id: number) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <div className="min-h-screen bg-white p-[15px]">
            <div>
                <h3 className={TEXT_STYLES}>Name</h3>
            </div>
            <UserForm onAddUser={addUser}/>
            <div className="mt-[20px] mb-[10px]">
                <h3 className={TEXT_STYLES}>List of users</h3>
            </div>
            <NameList getAllUsers={getAllUsers} updateUser={updateUser} deleteUser={deleteUser}/>
        </div>
    );
}
