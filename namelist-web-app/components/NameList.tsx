import { User } from "../types/User"
import Button from "./Button"

interface NameListProps {
    getAllUsers: () => User[]
    updateUser: (id: number, p0: string, value: string) => void
    deleteUser: (id: number) => void
}

export default function NameList({ getAllUsers, updateUser, deleteUser }: NameListProps) {

    const users = getAllUsers()

    const deleteUserById = (id: number) => {
        deleteUser(id)
    }

    return (
        <div className="space-y-[10px]">
            {users.map((user) => (
                <div key={user.id} className="flex">
                    <div className="w-[192px]">
                        <input
                            type="text"
                            value={user.name}
                            onChange={(e) => updateUser(user.id, 'name', e.target.value)}
                            className="px-4 py-2 mr-10 bg-white border-2 border-black rounded text-black font-sans text-[12px] font-normal"
                        />
                    </div>
                    <Button onClick={() => deleteUserById(user.id)} type="delete"/>
                </div>
            ))}
        </div>
    )
}