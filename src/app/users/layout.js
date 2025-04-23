import Link from "next/link";

export default function UserLayout({ children }) {
  return (
    <section className="flex min-h-screen">
      <nav className="w-[200px] bg-red-300 flex flex-col gap-3">
        <Link href={"/users"}>
          <button className="bg-white">Users</button>
        </Link>
        <Link href={"/users/roles"}>
          <button className="bg-white">Roles</button>
        </Link>
      </nav>
      <section>{children}</section>
    </section>
  );
}
