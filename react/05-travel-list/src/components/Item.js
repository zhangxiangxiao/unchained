export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: 'red' }} onClick={() => onDeleteItem(item.id)}>
        &times;
      </button>
    </li>
  );
}
