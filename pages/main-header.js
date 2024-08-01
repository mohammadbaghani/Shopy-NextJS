import Link from 'next/link';
function MainHeader() {
    return (


        <>
            <header>





                < div className='parent-nav borderbottem'>
                    <div className='child-nav'>


                        <div >

                            <Link href={`../firstpage`} className='shikpooshan'>


                                شیک پوشان
                            </Link>
                        </div>


                        <div >

                            <Link href={`../firstpage`} className='left'>



                            </Link>



                        </div>




                        <Link href={`../Callus`} className='link-top '>

                            تماس با ما
                        </Link>

                        <Link href={`../About`} className='link-top '>

                            درباره ما
                        </Link>

                        <Link href={`../products-list`} className='link-top'>

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