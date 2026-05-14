export default function InfoCard({ icon, title, items }) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">{icon}</div>
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-neutral-100 px-3 py-1 text-sm text-neutral-700">{item}</span>
        ))}
      </div>
    </div>
  );
}
