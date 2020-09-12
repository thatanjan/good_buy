import React, { createContext } from 'react'

const CONTEXT = createContext()

const USER_CONTEXT = ({ children }) => {
	return <CONTEXT.Provider>{children}</CONTEXT.Provider>
}

export default USER_CONTEXT
