import Link from 'next/link'
import React from 'react'
import Button from '../sub-components/Button'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-content-left'>
            <span>{`Let's`}</span>
            <span>Write</span>
        </div>
        <div className='nav-content-center'>
            <Link href='/posts'>Home</Link>
            <Link href='/posts'>Popular</Link>
            <Link href='/posts'>Top Picks</Link>
            <Link href='/category'>Category</Link>

        </div>
        <div className='nav-content-right'>
            <Button name="Write A Story" />
            <Button name="Login" />
        </div>
    </div>
  )
}

export default Navbar