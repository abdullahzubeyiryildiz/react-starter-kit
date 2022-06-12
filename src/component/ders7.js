import {forwardRef, useRef} from "react"

const Input = forwardRef ((props, ref) => {
  return <input ref={ref} type="text" {...props} />
})
 
function App() {

  const inputRef = useRef()
  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
      <>
        <h1>useRef() - ForwardRef()</h1>
        <Input ref={inputRef} />
        <button onClick={focusInput}>Focusla</button>
      </>
  );
}

export default App;
