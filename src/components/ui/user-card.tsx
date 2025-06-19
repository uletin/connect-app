export default function UserCard() {
  return (
    <div
      id="user-card"
      className="border rounded-lg p-2 flex justify-between items-center"
    >
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
      <span className="bold-text status text-[16px] font-bold">aktif</span>
    </div>
  );
}
