import { useState } from "react";
import Button from "./Button";

interface UserFormProps {
    onAddUser: (name: string) => void;
}

export default function UserForm({ onAddUser }: UserFormProps) {
    const [newUser, setNewUser] = useState({
        name: '',
    });

    const handleAddUser = () => {
        onAddUser(newUser.name);
        setNewUser({ name: '' });
    };

    return (
        <div className="mt-[10px] flex items-center">
            <div className="w-[192px]">
                <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ name: e.target.value })}
                    placeholder="New user name"
                    className="px-4 py-2 mr-10 bg-white border-2 border-black rounded text-black font-sans text-[12px] font-normal"
                />
            </div>
            <Button onClick={handleAddUser} type="add"/>
        </div>
    );
}