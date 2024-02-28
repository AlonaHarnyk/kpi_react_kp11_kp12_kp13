export const Section = ({ children, title }) => {
  return (
    <section>
      <h2>{title ? title : "Title"}</h2>
      {/* {title && <h2>{title}</h2>} */}
      {children}
    </section>
  );
};
