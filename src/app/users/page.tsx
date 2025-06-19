import { IconKey, IconLogout, IconUser } from "@tabler/icons-react";

export default function UsersPage() {
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
        <div id="list-user" className="flex flex-col gap-2 w-full">
          <div className="border rounded-lg p-2 flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-bold mb-[1px] text-slate-900">
                Rahmat Saudi Al Fathir As
              </h2>
              <p className="text-base text-black mb-2">
                rahmatsaudi@universitasmulia.ac.id
              </p>
              <span className="bg-black text-white text-[11px] px-[9px] py-[5px] rounded mr-[6px]">
                admin
              </span>
            </div>
            <span className="bold-text status text-[16px] font-bold">
              aktif
            </span>
          </div>

          <div className="border rounded-lg p-2 flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-bold mb-[1px] text-slate-900">
                Rahmat Saudi Al Fathir As
              </h2>
              <p className="text-base text-black mb-2">
                rahmatsaudi@universitasmulia.ac.id
              </p>
              <span className="bg-black text-white text-[11px] px-[9px] py-[5px] rounded mr-[6px]">
                admin
              </span>
            </div>
            <span className="bold-text status text-[16px] font-bold">
              aktif
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
