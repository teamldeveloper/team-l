const Hyperlink = (props) => {
  return (
    <a {...props} className="text-blue-700 hover:underline hover:text-blue-900">
      {props.children}
    </a>
  );
};

export default Hyperlink;
