import React,{useState, useCallback} from 'react'
import Child from './Child'


export default function App(){
  const [name, setName] = useState();
  console.log("re-rendering parent");

  const callBack = useCallback ((e) => {
    setName(name)
  }, [name]);
  return (
    <>
    <label> Name </label>
    <input type="text" onBlur={(e) => setName(e.target.value)} />
    <Child name={name}/>
    </>
  )
}