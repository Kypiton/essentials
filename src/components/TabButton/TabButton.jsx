export default function TabButton({ children, onSelect, className }) {
  return (
    <li>
      <button onClick={onSelect} className={className}>
        {children}
      </button>
    </li>
  );
}
