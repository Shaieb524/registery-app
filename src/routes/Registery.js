import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Registery() {
    const [registeryData, setRegisteryData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    function addItem (e) {
        e.preventDefault();

        let tempData = [...registeryData]
        tempData.push(textInput)
        setRegisteryData(tempData)
        setTextInput('')
    }

    useEffect(() => {
        if (textInput.length > 10) setError(true)
        else setError(false)
    }, [textInput])

    let deleteItem = (index) => {
        let newData = [...registeryData]
        newData.splice(index, 1)
        setRegisteryData(newData)
    }

    let updateItem = (index, val) => {
        let newData = [...registeryData]
        newData[index] = textInput
        setRegisteryData(newData)
    }

    console.log('Reg data : ', registeryData )

    return (
        <div>
            <h1>Registery</h1>
            <Link to="/">Click to go to home</Link>
            <form onSubmit={addItem}>
                <label> text input:
                    <input type="text" value={textInput} onChange={(e) => {setTextInput(e.target.value)}}>
                    </input>
                </label>
                <input type="submit" value="Submit">
                </input>
            </form>
            {error ? <span style={{color: "red"}}>Error occured!.</span> : null}
            {
                registeryData.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button onClick={()=>deleteItem(index)}>Remove</button>
                            <button onClick={()=>updateItem(index)}>Update</button>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default Registery