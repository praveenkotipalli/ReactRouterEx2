import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Paths = () => {
  return (
    <div className='pathWrapper'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe totam inventore excepturi mollitia, voluptatem officia iusto suscipit esse beatae, laudantium possimus? Quis perferendis hic quaerat inventore sapiente officia iste voluptatem nostrum id deleniti error, dolorum illum minus sint. Cupiditate eos enim repellendus non recusandae unde et dignissimos deleniti tempore!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati velit perspiciatis tempora iure fugit quam nulla libero deserunt est, error numquam sapiente? Amet, dolore autem! Labore aperiam repudiandae, quae illo eligendi dolorem alias quibusdam expedita nemo, perspiciatis molestiae reiciendis!</p>
        <div className='btnGroup'>
            <Link to="frontend">Frontend</Link>
            <Link to="backend">Backend</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Paths