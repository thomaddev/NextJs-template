import React from "react";
import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Header() {
  return (
    <header>
      <Image
        src={Logo}
        alt="Logo DMS"
        width={100}
        height={100}
        // layout="fill"

        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </header>
  )
}
