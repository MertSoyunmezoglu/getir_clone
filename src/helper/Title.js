import React from 'react'

export default function Title({children}) {
  return (<>
     <h3 className='text-sm font-semibold ml-2 gap-2 my-5'>{children}</h3>
    </>
  )
}
