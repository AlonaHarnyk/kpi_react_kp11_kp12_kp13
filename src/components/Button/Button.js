export const Button = ({ textContent, type, clickHandler }) => (
  <button type={type} onClick={clickHandler}>{textContent}</button>
);
