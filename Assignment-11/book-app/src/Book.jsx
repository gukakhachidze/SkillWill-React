export default function Book({
  title,
  image,
  description,
  characters,
  onClick,
}) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, width: 250 }}>
      <img src={image} width="200" />
      <h2>{title}</h2>
      <p>{description}</p>

      <ul>
        {characters.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <button onClick={() => onClick(title, characters)}>Show info</button>
    </div>
  );
}
