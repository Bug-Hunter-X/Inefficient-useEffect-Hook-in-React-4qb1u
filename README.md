# Inefficient useEffect Hook in React

This repository demonstrates a common mistake when using the `useEffect` Hook in React: omitting the dependency array or including unnecessary dependencies. This can lead to performance issues and unexpected behavior.

The `bug.js` file shows the incorrect implementation. The `useEffect` hook runs on every render because of missing dependency array, causing the console log to spam. 

The `bugSolution.js` file demonstrates the corrected implementation. The dependency array ensures that the effect only runs when the count changes.