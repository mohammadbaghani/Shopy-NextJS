import Link from 'next/link';
import Image from 'next/image';
function MainHeader() {
    return (
        <>

            <header>
                < div className='parent-nav borderbottem'>
                    <div className='child-nav'>
                        <div >
                            <Link href={`../firstpage`} className='shikpooshan'>

                            </Link>
                        </div>
                        <div >
                            <Link href={`../firstpage`} className='left'> شیک پوشان
                            </Link>
                            <Image
                                src="/../Shop-images/logo12.png"
                                width={1000}
                                height={1000}
                                alt="عکس موجود نیست"
                                className={'logo-image'} >
                            </Image>
                        </div>
                        <Link href={`../Callus`} className='link-top buy-link'>

                            تماس با ما
                        </Link>

                        <Link href={`../About`} className='link-top '>

                            درباره ما
                        </Link>

                        <Link href={`../list`} className='link-top buy-link'>

                            خرید
                            آنلاین
                        </Link>

                        <Link href={`../firstpage`} className='link-top'>

                            خانه
                        </Link>
                    </div>

                </div>
            </header>

        </>

    )
}

export default MainHeader;