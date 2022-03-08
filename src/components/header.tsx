import React from "react";
import Image from 'next/image'
import Logo from '../../public/logo.png'
import {useTranslation} from 'next-i18next'

export default function Header() {
  const {t} = useTranslation()
  console.log('t', t)
  return (
    <header>
      {t('title')}
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
