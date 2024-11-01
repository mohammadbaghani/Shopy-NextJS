import React from 'react'
import Head from 'next/head'
import MainHeadercopy from "../main-header";

function index() {
    return (
        <>


            <Head>
                <title>
                    درباره ما
                </title>

            </Head>


            <MainHeadercopy />

            <div className='about toptext'  data-aos="zoom-out" data-aos-duration="1000" >
           درباره ما
            </div>
            <div className='about'  data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1000">

                شیک پوشان با دوازده  سال سابقه در فروش شیک ترین پوشاک آقایان و بانوان در ایران

            </div>
            <div className='about bottomtext'  data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1500">

                با کادری مجرب و پاسخگویی 24 ساعته آنلاین
            </div>
            <div className='about bottomtext'  data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2000">


                چشم انداز بعدی ما : افتتاح شعبه در عظیمیه کرج
            </div>
        </>

    )
}

export default index