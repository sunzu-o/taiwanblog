type IconProps = { size?: number; className?: string; color?: string };

const base = (path: React.ReactNode, size = 24, className = "", color = "currentColor") => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {path}
  </svg>
);

export const IconPlane = ({ size, className, color }: IconProps) =>
  base(
    <>
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </>,
    size, className, color
  );

export const IconWave = ({ size, className, color }: IconProps) =>
  base(
    <path d="M2 6c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0M2 18c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />,
    size, className, color
  );

export const IconSun = ({ size, className, color }: IconProps) =>
  base(
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </>,
    size, className, color
  );

export const IconCamera = ({ size, className, color }: IconProps) =>
  base(
    <>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </>,
    size, className, color
  );

export const IconCutlery = ({ size, className, color }: IconProps) =>
  base(
    <>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </>,
    size, className, color
  );

export const IconBus = ({ size, className, color }: IconProps) =>
  base(
    <>
      <path d="M8 6v6M15 6v6M2 12h19.6M18 18h2a1 1 0 0 0 1-1v-5a9 9 0 0 0-9-9H9a9 9 0 0 0-9 9v5a1 1 0 0 0 1 1h2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="15" cy="18" r="2" />
      <path d="M9 18h4" />
    </>,
    size, className, color
  );

export const IconShoppingBag = ({ size, className, color }: IconProps) =>
  base(
    <>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>,
    size, className, color
  );

export const IconHotel = ({ size, className, color }: IconProps) =>
  base(
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>,
    size, className, color
  );

export const IconInfo = ({ size, className, color }: IconProps) =>
  base(
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="8" strokeWidth="2.5" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </>,
    size, className, color
  );

export const IconCastle = ({ size, className, color }: IconProps) =>
  base(
    <>
      <path d="M3 21V7l3-4h12l3 4v14" />
      <path d="M3 11h18" />
      <path d="M9 21v-6h6v6" />
      <path d="M6 7V3M12 7V3M18 7V3" />
    </>,
    size, className, color
  );

export const IconBowl = ({ size, className, color }: IconProps) =>
  base(
    <>
      <path d="M4 11c0 4.418 3.582 8 8 8s8-3.582 8-8H4z" />
      <path d="M12 3c-1.5 0-3 .5-4 1.5" />
      <path d="M4 11H2M22 11h-2" />
    </>,
    size, className, color
  );

export const IconArrow = ({ size, className, color }: IconProps) =>
  base(
    <path d="M5 12h14M12 5l7 7-7 7" />,
    size, className, color
  );

export const IconCheck = ({ size, className, color }: IconProps) =>
  base(
    <polyline points="20 6 9 17 4 12" />,
    size, className, color
  );
