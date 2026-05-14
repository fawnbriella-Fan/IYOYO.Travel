import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Camera, Clock, MapPin, Utensils } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import InfoCard from '@/components/InfoCard';
import { cities, getCityBySlug } from '@/data/cities';

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    return {
      title: 'City Not Found | China Easy Travel',
    };
  }

  return {
    title: `${city.name} Travel Guide | China Easy Travel`,
    description: city.tagline,
  };
}

export default function CityPage({ params }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 opacity-35">
          <img src={city.heroImage} alt={city.name} className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24">
          <Link href="/" className="mb-8 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur hover:bg-white/25">
            ← Back to all cities
          </Link>
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-2 text-white/80"><MapPin size={18} /> {city.province}, China</p>
            <h1 className="text-4xl font-bold md:text-6xl">{city.name} Travel Guide</h1>
            <p className="mt-6 text-lg text-white/80">{city.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#city-tours" className="rounded-full bg-white px-6 py-3 font-semibold text-black">View Tours</a>
              <a href="#city-hacks" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white">Travel Tips</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-3">
        <InfoCard icon={<Camera />} title="Top Highlights" items={city.highlights} />
        <InfoCard icon={<Utensils />} title="Best For" items={city.bestFor} />
        <InfoCard icon={<Clock />} title="Suggested Stay" items={['1-3 days', 'Private guide optional', 'Good for first-time visitors']} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">Must-see Attractions</p>
        <h2 className="mb-8 text-3xl font-bold">What to see in {city.name}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {city.attractions.map((item) => (
            <div key={item.name} className="rounded-3xl border bg-white p-6 shadow-sm">
              <p className="mb-3 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">{item.type}</p>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="mt-3 text-sm text-neutral-600">{item.description}</p>
              <p className="mt-5 flex items-center gap-2 text-sm font-medium"><Clock size={16} /> {item.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">Itineraries</p>
          <h2 className="mb-8 text-3xl font-bold">Suggested routes</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {city.itineraries.map((route, index) => (
              <div key={route.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white">{index + 1}</p>
                <h3 className="text-xl font-bold">{route.title}</h3>
                <p className="mt-3 text-neutral-600">{route.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="city-hacks" className="mx-auto max-w-7xl px-4 py-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">Travel Hacks</p>
        <h2 className="mb-8 text-3xl font-bold">Practical tips for foreign visitors</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {city.travelHacks.map((hack) => (
            <div key={hack} className="rounded-2xl border bg-white p-5">
              <p className="font-medium">{hack}</p>
              <p className="mt-2 text-sm text-neutral-500">Add detailed information here.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="city-tours" className="bg-black py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/50">Tours & Services</p>
          <h2 className="mb-8 text-3xl font-bold">Book a local experience in {city.name}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {city.tours.map((tour) => (
              <div key={tour.title} className="rounded-3xl bg-white p-6 text-black">
                <h3 className="text-xl font-bold">{tour.title}</h3>
                <p className="mt-3 text-neutral-600">{tour.description}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
                  <span className="rounded-full bg-neutral-100 px-3 py-1">{tour.duration}</span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1">{tour.price}</span>
                </div>
                <a href="/#contact" className="mt-6 inline-flex rounded-full bg-black px-5 py-3 font-semibold text-white">Book Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
