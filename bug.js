```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, which is inefficient
    console.log('Effect ran!');
  }, []); // Empty dependency array means it only runs once on mount, but it should depend on count if its supposed to update when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```