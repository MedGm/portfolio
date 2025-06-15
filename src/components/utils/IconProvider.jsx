import PropTypes from 'prop-types';

/**
 * IconProvider component that provides SVG icons based on icon name
 * This centralizes all icons used in the portfolio
 */
const IconProvider = ({ icon, className = "w-6 h-6", stroke = "currentColor", fill = "none" }) => {
  // Set default styling if not provided
  const styles = {
    className: className,
    fill: fill,
    stroke: stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24"
  };

  // Map of icons
  const icons = {
    // Quality trait icons
    problemSolver: (
      <svg {...styles}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M12 18v-6" />
        <path d="M8 15l4 3 4-3" />
      </svg>
    ),
    fastLearner: (
      <svg {...styles}>
        <path d="M12 20.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
        <path d="m12 8 4 4-4 4" />
        <path d="m8 12h8" />
      </svg>
    ),
    teamLeader: (
      <svg {...styles}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    creativeThinker: (
      <svg {...styles}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    
    // Category icons for skills section
    web: (
      <svg {...styles}>
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        <path d="M2 12h20" />
        <path d="M12 2a8 8 0 0 1 8 8" />
        <path d="M12 2a8 8 0 0 0-8 8" />
        <path d="M12 22a8 8 0 0 0 8-8" />
        <path d="M12 22a8 8 0 0 1-8-8" />
      </svg>
    ),
    frameworks: (
      <svg {...styles}>
        <path d="M4 6V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2" />
        <path d="M14 2v4" />
        <path d="M18 6H4" />
        <rect x="2" y="8" width="8" height="8" rx="1" />
        <path d="m10 12-6 0" />
        <path d="m6 9 0 6" />
      </svg>
    ),
    languages: (
      <svg {...styles}>
        <path d="m2 7 5 5-5 5" />
        <path d="m22 7-5 5 5 5" />
        <path d="M9 17 15 7" />
      </svg>
    ),
    systems: (
      <svg {...styles}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M22 17H2" />
        <path d="M6 21h12" />
        <path d="M12 17v4" />
        <path d="m6 7 4 4-4 4" />
      </svg>
    ),
    
    // Contact icons
    email: (
      <svg {...styles}>
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    phone: (
      <svg {...styles}>
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    location: (
      <svg {...styles}>
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    linkedin: (
      <svg {...styles} fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    github: (
      <svg {...styles} fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    
    // Activity icons
    chess: (
      <svg {...styles}>
        <path d="M12 3c-1.1 0-2 .9-2 2v2h4V5c0-1.1-.9-2-2-2z" />
        <path d="M10 9V7h4v2h1l1 1v4l-1 1H9l-1-1v-4l1-1h1z" />
        <path d="M8 18h8" />
        <path d="M9 17v3" />
        <path d="M15 17v3" />
      </svg>
    ),
    community: (
      <svg {...styles}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    
    // Default icon if none specified
    default: (
      <svg {...styles}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    )
  };

  // Return the requested icon, or default if not found
  return icons[icon] || icons.default;
};

IconProvider.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string
};

export default IconProvider;
