export default function PageHero({ eyebrow, title }) {
  return (
    <div className="h-[320px] theme-gradient-page flex flex-col items-center
                    justify-center pt-[68px] text-center relative page-hero-line">
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold block mb-2">{eyebrow}</span>
      <h1 className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-cream tracking-tight">{title}</h1>
    </div>
  );
}
