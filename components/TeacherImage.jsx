import Image from 'next/image'
import React from 'react'

export default function TeacherImage() {
  return (
    <Image
    src='/LogoTeacher.png'
    width={500}
    height={500}
    alt='Teacher Image'
    className='animate-float'
    />
  )
}
