import React from 'react'
import { createContext } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
export const SidederContext = createContext()
const DraweContext = ({Children}) => {
    const[mbileDrawe,setMbileDrawe] = useState(false)
    const toggleDrawe =() => setMbileDrawe(!mbileDrawe)
    const value = useMemo(() => ({mbileDrawe,toggleDrawe}) ,[mbileDrawe])
  return( <SidederContext.Provider value={value}>{Children}</SidederContext.Provider> )
}

export default DraweContext