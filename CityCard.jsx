import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function CityCard({ city }) {
  return (
    <Link href={`/cities/${city.slug}`} className="group overflow-hidden rounded-3xl border bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img src={city.heroImage} alt={city.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-2 text-sm text-neutral-500">
          <MapPin size={16} /> {city.province}, China
        </div>
        <h3 className="text-2xl font-bold">{city.name}</h3>
        <p className="mt-2 text-neutral-600">{city.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {city.highlights.map((item) => (
            <span key={item} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
