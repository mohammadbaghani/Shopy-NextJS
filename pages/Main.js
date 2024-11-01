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
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null
  const [checked, setChecked] = React.useState(true);
  const [isHovering, setIsHovered] = useState(false);
  const [show, setShow] = useState(0);
  const [score, setScore] = useState('first-title-x');
  const [scoreblack, setScoreblack] = useState('first-title-x');
  const [second, setSecond] = useState(0);
  const [li, setli] = useState('li-parentx');
  const [dd, setDd] = useState('xx');
  const [filteroneright, setfilteroneright] = useState('filteroneright');
  const [scoresecond, setScoresecond] = useState('first-title-x');
  const [scoresecondblack, setScoresecondblack] = useState('first-title-y blackcolor');
  const [lisecond, setlisecond] = useState('li-parentx');
  const [ddsecond, setDdsecond] = useState('xx');
  const [button, setButton] = useState('button');
  const [filteronesecond, setFilteronesecond] = useState('filteronex');
  const [filterone, setFilterone] = useState('filteronex');
  const [filtertow, setFiltertow] = useState('filteroney');
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
  useEffect(() => {

  }, []);
  useEffect(() => {

    if (show === 1) {
      godownsecond(),
        setTimeout(setmybutton, 100),
        setTimeout(goup, 100);
    }
    if (show === 2) {
      godown(),
        setmysecondbutton(),
        setTimeout(goupsecond, 100)
    }

    if (show === 0) {
      godownsecond(),
        godown(),
        setmysecondbutton()
    }

    else (
      godown(),
      godownsecond(),
      setmysecondbutton()

    )
    function godown() {
      setli('li-parentx'),
        setDd('xx'),
        setFilterone('filteronex'),
        setScore('first-title-x')
    }
    function setmysecondbutton() {
      setButton('button')
    }
    function setmybutton() {
      setButton('button buttondown')
    }
    function godownsecond() {
      setlisecond('li-parentx'),
        setFilteronesecond('filteronex'),
        setScoresecond('first-title-x'),
        setDdsecond('xx')
    }
    function goup() {
      setli('ligoup li-parentx'),
        setFilterone('filteronex deliv-image-one')
      setScore('first-title-x newclass black-f')
      setScoreblack('first-title-x newclass ')

      setDd('xx goup')
    }
    function goupsecond() {
      setlisecond('ligoup li-parentx'),
        setFilteronesecond('filteronex deliv-image-one')
      setScoresecond('first-title-x newclass black-f')
      setScoreblack('first-title-x newclass ')
      setDdsecond('xx goup')
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
  function addsecond() {
    setSecond(second + 1)
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
      <div className={styles.container}>
        <Carousel onPrevEnd={(currentItem, pageIndex) =>
          reduceState()
        }
          onNextEnd={(currentItem, pageIndex) =>
            decresereState()
          }
          className='carusal' itemsToScroll={1} itemsToShow={1}>
          <div className={isActive ? 'parent-header-black parent-header-white' : 'parent-header-black'}>

            <div className={isActive ? 'first-title' : 'first-title'}  >
              فروشگاه اینترنتی لباس شیک  پوشان
              <br>
              </br>
            
                <div className='op-low' >
                     ...متفاوت باش

                </div>

              </div>
              <div className={isActive ? 'bb' : 'dd'}>
                <ul className={isActive ? 'li-parent li-parent-black' : 'li-parent '}>
                  <li className='li-child' >
                    فروشگاه اینترنتی لباس شیک  پوشان
                  </li>
                  <li className='li-child' >

                    جستجوی سریع بین  لباس ها
                  </li>
                  <li className='li-child' >
                    رنگ ها و طرح حای متنوع
                  </li>
                </ul>
              </div>

              <Image
                src="/../images/33.png"
             width={1000}
    height={1000}
                alt="عکس موجود نیست"
                className={isActive ? 'my-image ' : 'my-image dark-img'} >
              </Image>



            </div>


            <div className={isActive ? 'parent-header  parent-header-white' : 'parent-header'}>
              <div className={isActive ? score : scoreblack}>
                فروشگاه
                شیک پوشان
                <br>
                </br>
                <ul className={isActive ? 'f-parentx' : 'f-parentxblack'}>
                  <li className='f-childx'>
                    فروش آنلاین و حضوری
                    شیک ترین پوشاک مد روز
                  </li>
                </ul>
              </div>
              <div className={dd}>
                <ul className={li}>
                  <li className={isActive ? 'li-childx li-childxblack' : 'li-childx'}>
                    انواع پوشاک مردانه و زنانه
                  </li>
                  <li className={isActive ? 'li-childx li-childxblack' : 'li-childx'}>
                    جوان پسند و مد روز
                  </li>

                </ul>
                <a href={`../list`} className={button} >
                </a>
              </div>
              <Image
                src="/../images/w.png"

             width={1000}
    height={1000}
                alt="عکس موجود نیست"
                className={isActive ? 'my-image ' : 'my-image dark-img'} >
              </Image>



            </div>

            <div className={isActive ? 'parent-header-black parent-header-white' : 'parent-header-black'}>

              <Image
                src="/../images/brb.jpg"
             width={1000}
    height={1000}
                alt="عکس موجود نیست"
                className={isActive ? 'my-image ' : 'my-image '} >
              </Image>



            </div>


        </Carousel>
        <Head>
          <title>
            شیک پوشان
          </title>
        </Head>
        <header>
          <div className={isActive ? 'parent-nav' : 'parent-nav darker'}>
            <div className='child-nav'>
              <div >
                <Link href={`../firstpage`} className={isActive ? 'shikpooshan' : 'shikpooshan blured'} >
                  شیک پوشان
                </Link>
              </div>
              <div >
                <Link href={`../firstpage`} className='left'>
                </Link>
              </div>
              <Link href={`../Callus`} className={isActive ? 'link-top buy-link' : 'link-top buy-link darker-w '}>
                تماس با ما
              </Link>
              <Link href={`../About`} className={isActive ? 'link-top' : 'link-top  darker-w '}>
                درباره ما
              </Link>
              <Link href={`../list`} className={isActive ? 'link-top buy-link' : 'link-top buy-link darker-w '}>
                خرید
                آنلاین
              </Link>
              <Link href={`../firstpage`} className={isActive ? 'link-top ' : 'link-top  darker-w '}>
                خانه
              </Link>
            </div>
          </div>
        </header>
        <div onClick={(event) => addcolor(event)} className={isActive ? 'night-icon' : 'night-icon tire'} >
        </div>
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

            <div className={isActive ? 'flip-card  right-flip ' : 'flip-card  right-flip  siah'} >
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

            <div className={isActive ? 'flip-card  right-next-flip' : 'flip-card siah   right-next-flip'} >

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




            <div className={isActive ? 'flip-card left-next-flip ' : 'flip-card siah  left-next-flip '} >


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

            <div className={isActive ? 'flip-card  left-flip' : 'flip-card  left-flip  siah'} >


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