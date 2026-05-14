export default function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-100 py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Need help planning a China trip?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
          Add your contact form, WhatsApp, WeChat, email, or booking link here.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:hello@example.com" className="rounded-full bg-black px-6 py-3 font-semibold text-white">Contact Us</a>
          <a href="/#cities" className="rounded-full border border-neutral-300 bg-white px-6 py-3 font-semibold">View All Cities</a>
        </div>
      </div>
    </section>
  );
}
