import logo from './logo.svg';
import './App.css';
import List from './components/list/list';
import AddItem from './components/addItem/AddItem';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const onAddHandler = (data) => {
    setItems(prevState => [...prevState, data]);
  }

  return (
    <div className="App">
      <AddItem onAdd={onAddHandler} />
      <List arr={items} />
    </div>
  );
  }

export default App;
