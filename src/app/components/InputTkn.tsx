import { useState } from 'react'

interface InputTknProps {
    setTkn: (e: any) => void;
}

export default function InputTkn({setTkn}: InputTknProps) {
  return (
    <form onSubmit={setTkn}>
        <input type="password" className='border border-2 border-gray-300 rounded-lg'/>
        <button type="submit">Enviar</button>
    </form>
  )
}
