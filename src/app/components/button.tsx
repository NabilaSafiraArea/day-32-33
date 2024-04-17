import React from 'react'

interface ViewButton{
    id : string
}

const button :  FC<ViewButton> = ({ID}) => {
    const klikDisini = () => {
        alert('Saya di klik oleh ${id}')
    }
  return (
    <button onClick={klikDisini}>button</button>
  )
}

export default button
