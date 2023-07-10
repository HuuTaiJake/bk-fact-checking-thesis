import Link from 'next/link';
import Image from 'next/image';
import '@/styles/news.css'
import SupportTag from '@public/assets/icons/supportTag.svg'
import RefuseTag from '@public/assets/icons/refuseTag.svg'
import NeutralTag from '@public/assets/icons/neutralTag.svg'

const News = () => {
  return (
    <div className='news-wrapper'>
      <div className='tag-wrapper support-tag'>
        <Image
            src={SupportTag}
            alt='tag'
            width={30}
            height={30}
            className='tag_logo'                                                                                          
        />
        <p>Tin xác thực</p>
      </div>
      <div className='tag-wrapper refuse-tag'>
        <Image
            src={RefuseTag}
            alt='tag'
            width={30}
            height={30}
            className='tag_logo'                                                                                          
        />
        <p>Tin giả</p>
      </div>
      <div className='tag-wrapper neutral-tag'>
        <Image
            src={NeutralTag}
            alt='tag'
            width={30}
            height={30}
            className='tag_logo'                                                                                          
        />
        <p>Không xác định</p>
      </div>
      <div className='claim-wrapper'>
        <h1>Nhận định:</h1>
        <p>Vitamin D appears increase COVID-19 mortality rates</p>
      </div>
      <div className='evidence-wrapper'>
        <h1>Minh chứng:</h1>
        <p>A principal defence against uncontrolled inflammation, and against viral infection 
            in general, is provided by T regulatory lymphocytes (Tregs). Treg levels 
            have been reported to be low in many COVID-19 patients and can be increased 
            by vitamin D supplementation. Low vitamin D levels have been associated with 
            an increase in inflammatory cytokines and a significantly 
            increased risk of pneumonia and viral upper respiratory tract infections. 
            Vitamin D deficiency is associated with an increase in thrombotic 
            episodes, which are frequently observed in COVID-19. Vitamin D deficiency 
            has been found to occur more frequently in patients with obesity and 
            diabetes. These conditions are reported to carry a higher mortality 
            in COVID-19. If vitamin D does in fact reduce the severity 
            of COVID-19 in regard to pneumonia/ARDS, inflammation, inflammatory 
            cytokines and thrombosis, it is our opinion that supplements would 
            offer a relatively easy option to decrease the impact of the pandemic.</p>
        <div className='url'>
            <Link href='https://vnexpress.net/' className='' passHref>
                <p>VnExpress</p>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default News