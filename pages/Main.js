'use client'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import React, { useState } from "react";
import { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import classes from '../styles/main-header.module.css';
import Switch from '@mui/material/Switch';
import Carousel from 'react-elastic-carousel';
import { BsPeopleFill } from "react-icons/bs";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
function Home() {
  const [isActive, setIsActive] = useState(true);
  const [clickedone, setClickedone] = useState(true);
  const [clickedtow, setClickedtow] = useState(false);
  const [clickedthree, setClickedthree] = useState(false);
  const [clickedfour, setClickedfour] =  useState(false);
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null
  const [checked, setChecked] = React.useState(true);
  const [show, setShow] = useState(0);
  const [dd, setDd] = useState('xx');
  const [button, setButton] = useState('button');
  const [navheight, setnavheight] = useState('parent-nav');
  const [navheighdarker, setnavheighdarker] = useState(' parent-nav darker');
  const [nighticon, setnighticon] = useState('night-icon');
  const [nighticontire, setnighticontire] = useState('night-icon tire');
  const [myimage, setmyimage] = useState('my-image image-smaller');
  const [myimagee, setmyimagee] = useState('my-image');
  const [firsttitle, setfirsttitle] = useState('first-title');
  const [flipcard, setflipcard] = useState('flip-card');


  function addcolor(event) {


    if (isActive === false) {
      setIsActive(true)
      localStorage.setItem('theme', 'dark')
      setChecked(event.target.checked);
    }
    else {
      setIsActive(false)
      localStorage.setItem('theme', 'white')
      setChecked(event.target.checked);
    }
  }
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    // if (typeof window !== 'undefined') {
    //   if (window.scrollY > 100) {
    //     setnavheight('parent-nav')
    //     setnighticon('night-icon ')
    //     setnavheighdarker('parent-nav darker')
    //     setnighticontire('night-icon  tire')
    //     setmyimage('my-image image-middle')
    //     setmyimagee('my-image image-middlee')
    //     setfirsttitle('first-title')
    //   }
    //   else {
    //     setnavheight('parent-nav')
    //     setnavheighdarker('parent-nav darker')
    //     setmyimage('my-image image-smaller')
    //     setnighticon('night-icon')
    //     setnighticontire('night-icon tire')
    //     setfirsttitle('first-title')
    //     setmyimagee('my-image')

    //   }
    //   setLastScrollY(window.scrollY);
    // }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);
  useEffect(() => {
    if (show === 0) {
      setTimeout(setmybutton, 10)
    }
    if (show === 2) {
      setmysecondbutton()
    }
    if (show === 1) {
      setmysecondbutton()
    }
    else (
      setmysecondbutton()
    )

    function setmysecondbutton() {
      setButton('button')
    }
    function setmybutton() {
      setButton('button')
    }
    function goup() {
      setDd('xx goup')
    }
  }, [show])

  function decresereState() {
    setShow(show + 1)
    if (
      show > 4
    ) {
      setShow(0)
    }
  }
  function reduceState() {
    setShow(show - 1)
    if (
      show < 0
    ) {
      setShow(0)
    }
  }

  useEffect(() => {
    let localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme === 'dark') {
      setIsActive(true)
    }
    else {
      setIsActive(false)
    }
  }, [isActive])

  return (
    <>


      <div className={isActive ? styles.container : styles.containerblack}>

        <Carousel onPrevEnd={(currentItem, pageIndex) =>
          reduceState()
        }
          onNextEnd={(currentItem, pageIndex) =>
            decresereState()
          }
          className='carusal' itemsToScroll={1} itemsToShow={1}>

          <div className={isActive ? 'parent-header  parent-header-white' : 'parent-header'}>

            <div className={isActive ? 'first-title' : 'first-title first-title-black'}  >
                     مرکز خرید
              شیک پوشان
              <br>
              </br>
              <div className='op-low' >
                متفاوت باش
              </div>
            </div>
            {/* <div className={dd}>
              <a href={`../list`} className={button} >
              </a>
            </div> */}
            <Image
           
                     src="/../images/jj.jpg"
              width={1000}
              height={1000}
              alt="عکس موجود نیست"
              className={isActive ? myimagee : myimagee} >
            </Image>
          </div>

          <div className={isActive ? 'parent-header  parent-header-white' : 'parent-header'}>

            <div className={isActive ? 'first-title' : 'first-title first-title-black'}  >
    
              <br>
              </br>
              <div className='op-low' >
                متفاوت باش
              </div>
            </div>
            {/* <div className={dd}>
              <a href={`../list`} className={button} >
              </a>
            </div> */}
            <Image
        
          src="/../images/tt.png"
              width={1000}
              height={1000}
              alt="عکس موجود نیست"
              className={isActive ? myimagee : myimagee} >
            </Image>
          </div>
          <div className={isActive ? 'parent-header  parent-header-white' : 'parent-header'}>
          <div className={isActive ? 'first-title' : 'first-title first-title-black'}  >

              <br>
              </br>
              <div className='op-low' >
                فروش آنلاین و حضوری
                شیک ترین پوشاک مد روز
              </div>
            </div>
            <Image
             src="/../images/new.png"
    
              width={1000}
              height={1000}
              alt="عکس موجود نیست"
              className={isActive ? myimagee : myimagee} >
            </Image>
          </div>

          <div className={isActive ? 'parent-header  parent-header-white' : 'parent-header'}>


          <div className={isActive ? 'first-title' : 'first-title first-title-black'}  >
     
              <br>
              </br>
              <div className='op-low' >
                متفاوت باش
              </div>
            </div>
          <Image
            src="/../images/now.png"
              width={1000}
              height={1000}
              alt="عکس موجود نیست"
              className={isActive ? myimagee : myimagee} >
            </Image>
          </div>
        </Carousel>
        <Head>
          <title>
            شیک پوشان
          </title>
        </Head>
        <header>
          <div className={isActive ? navheight : navheighdarker}>
            <div className='child-nav'>
              <div >
                <Link href={`../firstpage`} className={isActive ? 'shikpooshan' : 'shikpooshan blured'} >

                </Link>
              </div>
              <div >
                <Link href={`../firstpage`} className={isActive? 'left' : 'left newleft'} >
                </Link>
              </div>
              <Link href={`../Callus`} className={isActive ? 'link-top' : 'link-top  darker-w'}>
                تماس با ما
              </Link>
              <Link href={`../About`} className={isActive ? 'link-top' : 'link-top  darker-w '}>
                درباره ما
              </Link>
              <Link href={`../list`} className={isActive? 'link-top' : 'link-top  darker-w '}>
                خرید
                آنلاین
              </Link>
              <Link href={`../firstpage`} className={isActive ? 'link-top ' : 'link-top  darker-w '}>
                خانه
              </Link>
              <div onClick={(event) => addcolor(event)} className={isActive ? nighticon : nighticontire} >
              </div>
            </div>
          </div>
        </header>
        <div className='valed-switch-parent'>
          <div className='switch-parent'>
            <Switch className={isActive ? 'switch-child' : 'switch-child'} onChange={(event) => addcolor(event)}
              checked={checked}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </div>
        </div>
        <div className={isActive ? 'title-cards' : 'title-cards title-cards-dark'} >

          <div className={isActive ? 'women-flipcard' : 'women-flipcard women-flipcard-dark'} >

            <div className={isActive ? 'right-flip ' + flipcard : 'flip-card  right-flip  siah'} >
              انواع
              لباس بانوان

              <Image
                src="/../images/990.webp"
                width={1000}
                height={1000}
                alt="عکس موجود نیست"
                className={isActive ? 'front-image ' : 'front-image light'} >
              </Image>

              <p className={isActive ? 'down-text' : 'down-text siah-text'}    >
                فروش پاییزه
              </p>


            </div>

            <div className={isActive ? 'right-next-flip ' + flipcard : 'flip-card siah   right-next-flip'} >

              انواع
              لباس آقایان
              <Image
                src="/../images/116.webp"
                width={1000}
                height={1000}
                alt="عکس موجود نیست"
                className={isActive ? 'front-image ' : 'front-image light'} >
              </Image>

              <p className={isActive ? 'down-text' : 'down-text siah-text'}    >
                فروش پاییزه
              </p>


            </div>




            <div className={isActive ? 'left-next-flip ' + flipcard : 'flip-card siah  left-next-flip '} >


              انواع
              کفش بانوان


              <Image
                src="/../images/567.webp"
                width={1000}
                height={1000}
                alt="عکس موجود نیست"
                className={isActive ? 'front-image ' : 'front-image light'} >
              </Image>

              <p className={isActive ? 'down-text' : 'down-text siah-text'}    >
                فروش پاییزه
              </p>


            </div>

            <div className={isActive ? 'left-flip ' + flipcard : 'flip-card  left-flip  siah'} >


              انواع
              کفش آقایان


              <Image
                src="/../images/77.webp"
                width={1000}
                height={1000}
                alt="عکس موجود نیست"
                className={isActive ? 'front-image ' : 'front-image light'} >
              </Image>

              <p className={isActive ? 'down-text' : 'down-text siah-text'}    >
                فروش پاییزه
              </p>


            </div>


          </div>
        </div>
        <div className={isActive ? 'title-cards card-tow' : 'title-cards card-tow title-cards-dark'} >

          <div className={isActive ? 'women-flipcard' : 'women-flipcard women-flipcard-dark'} >

            <div className={isActive ? 'left-icons' : 'left-icons dark-icons'}  >



              <BsPeopleFill className={isActive ? 'my-icons' : 'my-icons dark-icons'} />
              +2300
              <br>
              </br>

              <div className={isActive ? 'opp' : 'opp dark-opp'}>
                عضو گروه مشتریان
              </div>


            </div>

            <div className={isActive ? 'right-icons' : 'right-icons dark-icons'} >



              <CheckCircleOutlineIcon className={isActive ? 'my-icons' : 'my-icons dark-icons'} />
              +15
              <br>
              </br>
              <div className={isActive ? 'opp' : 'opp dark-opp'} >
                سال تجربه
              </div>

            </div>



          </div>
        </div>
        <div className={isActive ? 'parent-articles' : 'parent-articles black-res'}>
          <p className={isActive ? 'magazine' : 'magazine magazine-whitecolor'}>
            مجله  شیک پوشان
          </p>
          <div
            className={isActive ? 'right-article' : 'right-article left-black-rec'} >
            <a href={`../First-article`} className={isActive ? 'right-link ' : 'right-link black-border'}>
              <span >
                توضیحات بیشتر
              </span>
            </a>
            <p className={isActive ? 'right-sub-text ' : 'right-sub-text whitecoloredt'}>
              در ادامه پرفروش کاپشن‌‌های مردانه را نام می‌بریم
              کاپشن مردانه پفی یا بادی
              درون این کاپشن‌ها، معمولاً از یک لایه پشم شیشه پر می‌شود،
              به همین دلیل حالت پفی مانند دارند
              در ادامه پرفروش کاپشن‌‌های مردانه را نام می‌بریم
              کاپشن مردانه پفی یا بادی
              درون این کاپشن‌هااز پشم شیشه پر می‌شود
            </p>
            <Image src="/../images/n.jpg"
              width={500}
              height={500}
              alt="عکس موجود نیست"
              className={isActive ? 'right-image light-img' : 'right-image'}
            ></Image>
            <p className={isActive ? 'right-text' : 'right-text whitecoloredt'}>
              مدل های جدید کاپشن مردانه</p>
          </div>
          <div className={isActive ? 'left-article' : 'left-article left-black-rec'} >
            <a href={`../Second-article`} className={isActive ? 'right-link ' : 'right-link black-border '}>
              <span >
                توضیحات بیشتر
              </span>
            </a>
            <p className={isActive ? 'right-sub-text ' : 'right-sub-text whitecoloredt'} >
              در این زمستان، کلاه مورد علاقه ی سلبریتی ها و ستاره های مشهور، کلاه بافتنی است  به چه دلایلی ؟  کلاه های بافت نه تنها شما را گرم نگه می دارند، بلکه تیپ شما را نیز کامل می کنند
              در این زمستان، کلاه مورد علاقه ی سلبریتی ها و ستاره های مشهور کلاه بافتنی است  به چه دلایلی ؟
            </p>
            <Image
              src="/../images/m.jpg"
              width={500}
              height={500}
              alt="عکس موجود نیست"
              className={isActive ? 'right-image light-img' : 'right-image '}></Image>
            <p className={isActive ? 'right-text ' : 'right-text whitecoloredt'}>
              راه شیک پوشیدن کلاه بافتنی </p>
          </div>
        </div>
        <footer className={isActive ? classes.footer : classes.footerblack}>
          <div className='parent-footer'>
            <div className='child-nav ff'>    <ul className={isActive ? 'ul-footer b' : 'ul-footer b ul-dark'}>
              <li href={`root`} className={isActive ? 'li-footer no-border' : 'lifooterblack no-border-black'}>
                دسترسی سریع
              </li>
              <a href={`./list`} className={isActive ? 'li-footer' : 'lifooterblack'}>
                خرید
                آنلاین
              </a>
              <a href={`./Callus`} className={isActive ? 'li-footer' : 'lifooterblack'}>
                تماس با ما
              </a>
              <a href={`./About`} className={isActive ? 'li-footer' : 'lifooterblack'}>
                درباره ما
              </a>
            </ul>
              <ul className={isActive ? 'ul-footer' : 'ul-footer ul-dark'}>
                <li href={`list`} className={isActive ? 'li-footer no-border' : 'lifooterblack no-border-black'}>
                  مزیت های ما
                </li>
                <li href={`list`} className={isActive ? 'li-footer' : 'lifooterblack'}>
                  پاسخگویی تلفنی     </li>
                <li href={`list`} className={isActive ? 'li-footer' : 'lifooterblack '}>
                  تنوع رنگ و طرح                </li>
                <li href={`root`} className={isActive ? 'li-footer' : 'lifooterblack'}>
                  ارسال سریع
                </li>
              </ul>
            </div>
          </div>
          <p className={isActive ? 'p-footer  black-p' : 'p-footer'}>
            شیک پوشان تحولی در صنعت پوشاک کشور
          </p>
        </footer>
      </div >
    </>
  )
}

export default Home;