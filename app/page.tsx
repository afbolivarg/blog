import { mrsSaintDelafield } from 'app/fonts/fonts';

export default function Page() {
  return (
    <section>
      <h1 className={`text-4xl ${mrsSaintDelafield.className}`}>
        Andrés F. Bolívar
      </h1>
      <h2 className="mb-4 font-light">@afbolivarg</h2>
      <p className="mb-4">
        I&apos;m based in Bogotá, Colombia. I&apos;m the co-founder of{' '}
        <a
          href="https://alquilo.co"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alquilo
        </a>
        , a property management company building the most efficient rental
        platform in LATAM.
      </p>
      <p className="mb-4">
        Previously I was on the founding team at Become Digital, where I led
        R&amp;D building ML models for Colombian ID fraud detection and created
        Become KYB, the company&apos;s business validation product, serving
        Latin American financial institutions.
      </p>
      <p className="mb-4">
        I&apos;m self-taught in full-stack development and machine learning.
      </p>
      <p className="mb-8">
        Email:{' '}
        <a
          href="mailto:andres@alquilo.co"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2"
        >
          andres@alquilo.co
        </a>
      </p>
      <p className="mb-4">
        Things I&apos;m interested in and working on:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Rental infrastructure. Alquilo is building the operating system for
          residential property management in Colombia.
        </li>
        <li>Traveling. Always planning the next trip.</li>
        <li>Reading. Everything.</li>
        <li>
          Running, film photography, architecture, cooking, wine, whisky.
        </li>
      </ul>
    </section>
  );
}
