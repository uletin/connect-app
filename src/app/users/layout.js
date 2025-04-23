export default function UsersLayout({ children }) {
  return (
    <section className="flex min-h-screen">
      <nav className="p-4 bg-red-300">
        <p>Ini Menu</p>
      </nav>
      <section>{children}</section>
    </section>
  );
}
