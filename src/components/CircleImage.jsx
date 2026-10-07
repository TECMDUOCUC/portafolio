function CircleImage({ path, text }) {
  return (
    <img
      src={path}
      alt={text}
      className="circle-image"
    />
  );
}

export default CircleImage;