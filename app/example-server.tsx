'use client'
 
// This pattern will **not** work!
// You cannot import a Server Component into a Client Component.
import { useState } from 'react'
 
export default function ExampleServerComponent() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <h1>Count from sv</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
 
      
    </>
  )
}