export default function TagPill({ variant = '', children, className = '', ...props }) {
  const classes = `tagp ${variant} ${className}`.trim();

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
