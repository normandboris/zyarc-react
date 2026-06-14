export default function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 50" width="130" height="45" aria-hidden="true">
      <path d="M 5 38 Q 75 52 145 25" fill="none" stroke="#f5a623" strokeWidth="3.5" strokeLinecap="round" />
      <text
        x="22"
        y="34"
        fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
        fontSize="28"
        fill="var(--logo-text)"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        ZyArc
      </text>
    </svg>
  );
}
