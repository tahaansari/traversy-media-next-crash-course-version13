"use client"
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  return (
    <header>
        <div>
            <h2><Link href="/">Traversy Media</Link></h2>
        </div>
        <div>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/about/team">Our Team</Link>
                </li>
                <li>
                    <Link href="/code/repos">Code</Link>
                </li>
            </ul>
        </div>
    </header>
  ) 
}

export default Header
