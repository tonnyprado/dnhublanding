export default function Badge({ gold = false, children, className = '' }) {
  const classes = `std-badge ${gold ? 'gold' : ''} ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
