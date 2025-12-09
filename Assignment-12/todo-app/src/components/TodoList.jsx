export default function TodoList({ title, list, renderActions }) {
  return (
    <div>
      <h2>{title}</h2>
      {list.map((item) => (
        <div
          key={item.id}
          style={{
            padding: '8px',
            border: '1px solid gray',
            marginBottom: '8px',
          }}
        >
          {item.text}
          <div style={{ marginTop: '5px' }}>{renderActions(item.id)}</div>
        </div>
      ))}
    </div>
  );
}
