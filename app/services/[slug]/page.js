import Link from 'next/link';
import { notFound } from 'next/navigation';

// Data dummy yang sama
const serviceDetails = {
  'web-development': {
    title: 'Pengembangan Web',
    description: 'Kami membangun website modern, cepat, dan responsif menggunakan teknologi terbaru seperti React, Next.js, dan Node.js. Dari landing page sederhana hingga platform e-commerce kompleks.'
  },
  'mobile-apps': {
    title: 'Aplikasi Mobile',
    description: 'Pengembangan aplikasi native (iOS & Android) dan hybrid (React Native/Flutter) untuk menjangkau pelanggan Anda di platform manapun, kapanpun.'
  },
  'cloud-solutions': {
    title: 'Solusi Cloud',
    description: 'Migrasi, manajemen, dan optimalisasi infrastruktur cloud Anda di AWS, Google Cloud, atau Azure. Kami memastikan aplikasi Anda berjalan dengan skalabilitas dan efisiensi tinggi.'
  },
  'ui-ux-design': {
    title: 'Desain UI/UX',
    description: 'Menciptakan desain antarmuka yang intuitif, menarik, dan ramah pengguna. Kami fokus pada pengalaman pengguna untuk meningkatkan retensi dan kepuasan pelanggan.'
  }
};

// Fungsi ini sama, tidak berubah
export async function generateStaticParams() {
  return Object.keys(serviceDetails).map(slug => ({
    slug: slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const { slug } = params;
  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  // Tampilannya kita ubah ke kelas Bootstrap
  return (
    <div className="bg-white p-5 rounded-3 shadow-lg">
      <h1 className="display-4 fw-bold mb-4 text-primary">{service.title}</h1>
      <p className="fs-5 text-muted mb-5">
        {service.description}
      </p>
      <Link href="/services" className="btn btn-outline-primary">
        &larr; Kembali ke Daftar Layanan
      </Link>
    </div>
  );
}