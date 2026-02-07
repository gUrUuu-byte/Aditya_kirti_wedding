const WaxSeal = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="currentColor"
    >
        <circle cx="50" cy="50" r="45" fill="#8B0000" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#600000" strokeWidth="2" />
        <path d="M50 20 L50 80 M20 50 L80 50" stroke="#600000" strokeWidth="2" opacity="0.5" />
        <text x="50" y="55" fontSize="30" textAnchor="middle" fill="#D4AF37" fontFamily="serif" fontWeight="bold">W</text>
    </svg>
);

export default WaxSeal;
