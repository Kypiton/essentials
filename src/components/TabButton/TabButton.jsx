import PropTypes from 'prop-types';

export default function TabButton({ children, onSelect, className }) {
  return (
    <li>
      <button onClick={onSelect} className={className}>
        {children}
      </button>
    </li>
  );
}

TabButton.propTypes = {
  children: PropTypes.element.isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
};
