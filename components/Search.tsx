import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import '@/styles/mainpage.css'
import SearchButton from '@public/assets/icons/search.svg';

const Search = () => {
  return (
    <div className='search__container'>
      <h1 className='search__title'>Kiểm tra mẫu tin</h1>
      <span className='search__reminder'>Hệ thống chỉ có thể kiểm tra một mẫu tin và không mang tính cá nhân</span>
      <form action="" className='search__form'>
        <input type="text" placeholder='Nhập thông tin cần kiểm tra...' className='search__box'/>
        <button type="submit" className='search__submit'>
            <Image
            src={SearchButton}
            alt='Search Button'
            width={40}
            height={40}
            className='nav__logo'
            />
        </button>
      </form>
    </div>
  )
}

export default Search