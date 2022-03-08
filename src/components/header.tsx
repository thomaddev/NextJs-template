import React from "react";
import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Header() {
  return (
    <header>
      <Image
        src={Logo}
        alt="Logo DMS"
        width={90}
        height={90}
        // layout="fill"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </header>
  )
}
