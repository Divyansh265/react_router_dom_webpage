import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Divyansh265')

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setdata(data)
            })
    }, [])

    return (
        <div className='shadow z-50 text-center m-5 bg-gray-200 text-gray-500 p-4 text-3xl'>
            Github followers :{data.followers}
            <div className='flex justify-center items-center'><img src={data.avatar_url} alt='Git picture' width={150} /></div>
        </div>
    )
}

export default Github
