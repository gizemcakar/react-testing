import { useState } from 'react'

const defaultItems = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
]

function ToDo() {
    const [text, SetText] = useState('')
    const [items, SetItems] = useState(defaultItems)

    const addItem = () => { 
    SetItems((prev) => [...prev, {name:text}]) 
    SetText('')
}

  return (
    <div>
        <label>
            ToDo
            <input value={text} onChange={(e) => { SetText(e.target.value)}}/>
        </label>
     
        <button onClick={addItem}> Add </button>
        <br /><br />
        {
            items.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))
        }
    
    </div>
    

  )
}
export default ToDo