import Link from "next/link";

export default function Button({ text, onClick, className = "", href }) {
  const classes = `btn-orange ${className}`;

  return (
    <>
      <style>{`
        .btn-orange {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 32px;
          border-radius: 12px;
          border: 2px solid #F58220;
          background-color: #ffffff;
          color: #F58220;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.025em;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease, transform 0.15s ease;
          text-decoration: none;
        }

        .btn-orange:hover {
          background-color: #F58220;
          color: #ffffff;
        }

        .btn-orange:active {
          transform: scale(0.97);
        }

        .btn-orange:focus-visible {
          outline: 2px solid #F58220;
          outline-offset: 3px;
        }
      `}</style>

      {href ? (
        <Link href={href} onClick={onClick} className={classes}>
          {text}
        </Link>
      ) : (
        <button type="button" onClick={onClick} className={classes}>
          {text}
        </button>
      )}
    </>
  );
}
