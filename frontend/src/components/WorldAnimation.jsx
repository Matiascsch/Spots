export default function WorldAnimation() {
  return (
    <div className="world-animation" aria-hidden="true">
      <svg
        className="world-svg"
        viewBox="0 0 900 500"
        role="img"
        aria-label="Animacion de mundo con aviones"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ocean" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e7e7e7" />
          </radialGradient>
          <clipPath id="globeClip">
            <circle cx="450" cy="250" r="170" />
          </clipPath>
        </defs>

        <rect width="900" height="500" fill="url(#glow)" />

        <g className="stars">
          <circle cx="140" cy="90" r="2" fill="#ffffff" opacity="0.9" />
          <circle cx="760" cy="110" r="1.6" fill="#ffffff" opacity="0.8" />
          <circle cx="710" cy="360" r="2.2" fill="#ffffff" opacity="0.75" />
          <circle cx="200" cy="360" r="1.4" fill="#ffffff" opacity="0.8" />
        </g>

        <circle cx="450" cy="250" r="188" fill="rgba(255, 255, 255, 0.2)" />
        <circle cx="450" cy="250" r="170" fill="url(#ocean)" />

        <g className="globe-rotate" clipPath="url(#globeClip)">
          <path
            d="M260 230c45-45 100-68 160-45 34 13 68 45 102 33 28-9 40-45 78-48 30-2 62 16 101 60l-16 22c-34-34-60-48-84-46-24 2-36 27-61 38-40 18-78-14-112-29-52-22-92 0-132 38z"
            fill="#f4f4f4"
            opacity="0.9"
          />
          <path
            d="M230 310c62-28 112-22 146 0 40 27 78 31 118 9 34-20 68-50 132-36l-12 24c-52-7-82 13-108 29-52 32-102 25-146-4-40-27-78-27-130 3z"
            fill="#ededed"
            opacity="0.85"
          />
          <path
            d="M300 130c22-11 46-17 74-12 34 7 58 25 88 27 28 2 58-9 92-34l14 20c-42 34-82 48-120 43-34-4-62-23-92-27-25-4-45 0-66 9z"
            fill="#f0f0f0"
            opacity="0.85"
          />
        </g>

        <circle
          cx="450"
          cy="250"
          r="170"
          fill="none"
          stroke="rgba(255, 255, 255, 0.85)"
          strokeWidth="2"
        />

        <path
          id="route1"
          d="M210 250 C 260 120, 640 120, 690 250 C 640 380, 260 380, 210 250"
          fill="none"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
        <path
          id="route2"
          d="M270 175 C 360 70, 540 70, 630 175 C 700 260, 620 360, 450 365 C 280 360, 200 260, 270 175"
          fill="none"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
          strokeDasharray="5 9"
        />

        <g className="plane plane-one">
          <path d="M0 0l18 8-18 8 4-8z" fill="#ffffff" />
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath href="#route1" />
          </animateMotion>
        </g>

        <g className="plane plane-two">
          <path d="M0 0l18 8-18 8 4-8z" fill="#ffffff" />
          <animateMotion dur="7.5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#route2" />
          </animateMotion>
        </g>
      </svg>
    </div>
  );
}
