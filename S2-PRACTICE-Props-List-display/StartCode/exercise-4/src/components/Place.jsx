export default function Place({place}) {
  const { title, image: { src, alt } } = place;
  return (
    <li className="place-item">
      <button>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
      </button>
    </li>
  );
}
