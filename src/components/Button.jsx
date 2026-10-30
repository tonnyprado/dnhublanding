export default function Button({ variant = 'dark', href, children, className = '', onClick, eventName, eventParams, ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  const handleClick = (e) => {
    // Track GA4 event if eventName is provided
    if (eventName && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams || {});
    }

    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <a className={classes} href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
