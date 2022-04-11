const Title = ({ value, className }) => {
  return (
    <h2
      className={`text-2xl md:text-3xl font-medium text-blue-700 ${className}`}
    >
      {value}
    </h2>
  );
};

export default Title;
