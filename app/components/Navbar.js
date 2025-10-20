import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3 shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fs-4 fw-bold text-light">
          WakDigi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">Tentang Kami</Link>
            <Link href="/services" className="nav-link">Layanan</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}