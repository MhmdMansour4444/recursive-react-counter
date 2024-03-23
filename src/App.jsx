import React, { useState } from "react";

const Counter = ({ level = 0, ondelete, count = 1 }) => {
  const [children, setChildren] = useState([]);
  const [counter, setCounter] = useState(1);

  const addChild = () => {
    const newChild = { id: Date.now(), level: level + 1, count: counter };
    setChildren([...children, newChild]);
    setCounter(counter + 1);
  };

  const deleteChild = (id) => {
    setChildren(children.filter((child) => child.id !== id));
  };

  return (
    <div style={{ marginLeft: level * 20 }}>
      <span>{count}</span>
      <button onClick={addChild}>+</button>
      {level > -1 && <button onClick={ondelete}>-</button>}
      {children.map((child) => (
        <Counter
          key={child.id}
          count={child.count}
          level={child.level}
          ondelete={() => deleteChild(child.id)}
        />
      ))}
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;