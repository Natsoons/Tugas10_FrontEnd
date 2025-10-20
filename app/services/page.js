import Link from 'next/link';

// Data yang sama seperti sebelumnya
const services = [
  { id: 'web-development', name: 'Pengembangan Web' },
  { id: 'mobile-apps', name: 'Aplikasi Mobile' },
  { id: 'cloud-solutions', name: 'Solusi Cloud' },
  { id: 'ui-ux-design', name: 'Desain UI/UX' },
];

export default function ServicesPage() {
  return (
    <div className="bg-white p-5 rounded-3 shadow-lg">
      <h1 className="display-5 fw-bold mb-4">Layanan Kami</h1>
      <p className="fs-5 text-muted mb-4">
        Kami menawarkan berbagai layanan untuk memenuhi kebutuhan digital Anda. Klik salah satu layanan untuk melihat detailnya.
      </p>
      
      <div className="list-group">
        {services.map(service => (
          <Link
            key={service.id}
            href={`/services/${service.id}`}
            className="list-group-item list-group-item-action p-4"
          >
            <h3 className="h5 mb-0 fw-semibold">{service.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}