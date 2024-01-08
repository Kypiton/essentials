import PropTypes from 'prop-types';

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

Tabs.propTypes = {
  children: PropTypes.element.isRequired,
  buttons: PropTypes.array,
  ButtonsContainer: PropTypes.string,
};
