export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-pinheiro px-6 pb-16 pt-28 text-nevoa sm:px-10 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-(--container-content)">
        <p className="eyebrow !text-cobre-claro">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] font-light tracking-[-0.02em]">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-nevoa/75">{subtitle}</p>}
      </div>
    </section>
  );
}
