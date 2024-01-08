import PropTypes from 'prop-types';

export default function Section({ children, title, id }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  id: PropTypes.string,
};
