import React from 'react'

const Error = ({error}:any) => {

  return (
	<span className="text-red-600 absolute bottom-4 right-4">{error}</span>
  )
}

export default Error
