import { useState } from 'react';
import Logo from './Logo.js';
import Form from './Form.js';
import PackagingList from './PackagingList.js';
import Stats from './Stats.js';

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (confirmed) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
