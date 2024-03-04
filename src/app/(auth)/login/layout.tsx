export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/drivers">Drivers</a>
            </li>
            <li>
              <a href="/create-drivers">Create Drivers</a>
            </li>
            <li>
              <a href="/orders">Orders</a>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}
