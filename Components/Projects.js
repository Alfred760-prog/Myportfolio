import Link from 'next/link';

export default function Projects() {
  return (
    <section className="mt-8">
      <h3 className="text-2xl font-semibold">Projets</h3>
      <p className="mt-2">🔗 <Link href="#">webentwicklung Hochschule Learningportal mit Html, css, JavaScript</Link></p>
      <p className="mt-2">🔗 <Link href="#">Entwichklung einer webbasierte portfolio mit Next.js </Link></p>
    </section>
  );
}
