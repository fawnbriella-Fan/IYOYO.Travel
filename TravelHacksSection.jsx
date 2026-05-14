import { Plane, Train, MessageCircle } from 'lucide-react';

const hacks = [
  { icon: <Plane />, title: 'Airport Transfer', text: 'Explain how foreign visitors can get from airports to city centers.' },
  { icon: <Train />, title: 'High-speed Train', text: 'Explain ticket booking, station arrival time, and passport rules.' },
  { icon: <MessageCircle />, title: 'Payment & Apps', text: 'Explain Alipay, WeChat Pay, Didi, translation apps, and maps.' },
];

export default function TravelHacksSection() {
  return (
    <section id="travel-hacks" className="mx-auto max-w-7xl px-4 py-20">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-neutral-500">China Travel Hacks</p>
      <h2 className="mb-8 text-3xl font-bold md:text-4xl">Make China easier for first-time visitors</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {hacks.map((hack) => (
          <div key={hack.title} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">{hack.icon}</div>
            <h3 className="text-xl font-bold">{hack.title}</h3>
            <p className="mt-3 text-neutral-600">{hack.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
