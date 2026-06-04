export default function Button({ variant = 'dark', href, children, className = '', ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
