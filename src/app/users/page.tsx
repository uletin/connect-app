import { Input } from "@/components/ui/input";
import UserCard from "@/components/ui/user-card";
import { usersData } from "@/mock/users-data";
import { IconKey, IconLogout, IconUser } from "@tabler/icons-react";

export default function UsersPage() {
  const users = usersData;

  return (
    <div className="flex h-screen">
      <div id="nav" className="bg-white w-[280px] p-8">
        <h1 className="font-bold text-4xl text-center text-black">Connect</h1>
        <div id="list-button" className="flex flex-col gap-3 mt-4 text-black">
          <button className="bg-slate-900 p-2 rounded-lg flex gap-2 text-white">
            <IconUser /> Users
          </button>
          <button className="p-2 rounded-lg flex gap-2">
            <IconKey /> Hak Akses
          </button>
          <button className="p-2 rounded-lg flex gap-2">
            <IconLogout /> Logout
          </button>
        </div>
      </div>
      <div id="content" className="bg-white w-full p-8">
        <Input placeholder="Cari User" />
        <div id="list-user" className="flex flex-col gap-2 w-full mt-2">
          {users.map((user, index) => (
            <UserCard
              key={index}
              fullname={user.fullname}
              email={user.email}
              roles={user.roles}
              status={user.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
