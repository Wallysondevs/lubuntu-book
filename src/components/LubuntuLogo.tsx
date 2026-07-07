/**
 * Logo do Lubuntu — aproximação leve em SVG do disco azul com o pássaro/swoosh.
 * (Se quiser trocar pelo PNG oficial de lubuntu.me, é só substituir o <img>.)
 */
export default function LubuntuLogo({
  size = 32,
  className = "",
  glow = false,
}: {
  size?: number;
  className?: string;
  glow?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Lubuntu"
      style={glow ? { filter: "drop-shadow(0 0 14px rgba(0,104,200,0.55))" } : undefined}
    >
      <defs>
        <linearGradient id="lu-disc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b9ae0" />
          <stop offset="0.55" stopColor="#0068c8" />
          <stop offset="1" stopColor="#004b91" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#lu-disc)" />
      {/* corpo/asa do pássaro em swoosh, estilo Lubuntu */}
      <path
        d="M15 39 C 26 41, 36 37, 44 27 C 41 34, 34 42, 23 45 C 20 46, 16 44, 15 39 Z"
        fill="#ffffff"
        opacity="0.97"
      />
      <path
        d="M33 21 C 41 20, 47 23, 51 29 C 45 27, 39 27, 33 30 C 30 27, 30 23, 33 21 Z"
        fill="#ffffff"
        opacity="0.9"
      />
      <circle cx="46.5" cy="24.5" r="2.4" fill="#ffffff" />
    </svg>
  );
}
