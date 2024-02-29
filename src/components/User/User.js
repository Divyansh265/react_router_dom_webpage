import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userid } = useParams()
    return (
        <div className='bg-gray-600 text-gray-50 p-5'>
            User : {userid}
        </div>
    )
}

export default User
