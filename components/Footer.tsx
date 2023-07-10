import Link from 'next/link';
import Image from 'next/image';
import '@/styles/footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <Link href='/' className='' passHref>
          <Image
            src='/assets/images/logoinver.png'
            alt='logo'
            width={150}
            height={100}
            className='object-contain'
          />
        </Link>
        <div className='sb__footer-links'>
          <div className='sb__footer-info-div'>
            <h4>VỀ BK FACT CHECK</h4>
              <p>BK Fact Check là dự án thuộc khoa Máy Tính trường đại học Bách Khoa. 
                Hệ thống sử dụng AI để tự động hoá việc kiểm tra tính xác thực những 
                mẫu tin nhằm đáp ứng nhu cầu kiểm tra tin giả của người Việt trong bối
                 cảnh chưa có nhiều công cụ để kiểm tra mẫu tin, đặc biệt là công cụ hỗ
                  trợ tiếng Việt.</p>
            <button className='button-more'>Tìm hiểu thêm</button>
          </div>
          
          <div className='sb__footer-links-div'>
            <h4>THÔNG TIN LIÊN LẠC</h4>
            <div className='about-info'>
              <Link href='/' className='' passHref>Facebook</Link>
              <Link href='/' className='' passHref>Website Trường</Link>
              <Link href='/' className='' passHref>Website Khoa</Link>
            </div>
          </div>
        </div>


        <div className='sb__footer-below'>
          <div className='sb__footer-copyright'>
            <p>
              
            </p>
          </div>
          <div className='sb__footer-below-links'>
            <a href='/terms'><div><p>Bản quyền thuộc Trường Đại học Bách Khoa - ĐHQG-HCM</p></div></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer