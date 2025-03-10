import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ handleClick }) => {
  console.log("ChildComponent re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ✅ Use useCallback to memoize the function
  const handleClick = useCallback(() => {
    console.log("Count:", count);
  }, [count]); // Function changes only when count updates

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..."
      />

      <ChildComponent handleClick={handleClick} />
    </div>
  );
}
