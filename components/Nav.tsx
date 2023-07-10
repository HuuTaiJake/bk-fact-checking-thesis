import Link from 'next/link';
import Image from 'next/image';

import React from 'react'
import '@/styles/mainpage.css'
import logo from '@public/assets/images/logo.png';

const Nav = () => {
  return (
    <nav>
      <div className='nav__left'>
      <Link href='/' className='' passHref>
         <Image
          src={logo}
          alt='logo'
          width={150}
          height={100}
          className='nav__logo'
        />
        </Link>
        <ul>
            <li>Về Chúng Tôi</li>
            <li>Thông tin hệ thống</li>
        </ul>
      </div>
      <div className='nav__right'>
        <ul>
            <li>Đăng ký</li>
            <li>Đăng nhập</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav

// const Nav = () => {
//   return (
//     <nav className='ml-5 flex-between flex row items-center w-full mb-4 pt-3 md:gap-7'>
//       <Link href='/' className='' passHref>
//         <Image
//           src='/assets/images/logo1.png'
//           alt='logo'
//           width={150}
//           height={100}
//           className='object-contain'
//         />
//         {/* <p className='logo_text'>Fact Check</p> */}
//         </Link>

//         <div className='sm:flex'>
//             <div className='flex gap-5 md:gap-7'>
//                 <Link href={'/'} passHref>
//                     <h1 className='head_text font-bold hover:bg-orange-600'>Về chúng tôi</h1>
//                 </Link>

//                 <Link href={'/'} passHref>
//                     <h1 className='head_text font-bold hover:bg-orange-600'>Thống kê hệ thống</h1>
//                 </Link>
//             </div>
//         </div>
//         <Link href='/' className='' passHref>
//           <Image
//             src='/assets/images/avatar.png'
//             alt='Avatar'
//             width={40}
//             height={40}
//             className='object-contain rounded absolute top-4 right-4'
//           />
//         </Link>
      
//     </nav>
//   )
// }

// export default Nav