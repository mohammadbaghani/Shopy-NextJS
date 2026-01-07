import path from 'path';
import fs from 'fs/promises';
import classes from '../../styles/items.module.css';
import Head from 'next/head';
import Image from 'next/image';
import MainHeadercopy from "../main-header";
import React, { useEffect, useState } from "react";
import db from "../../data/dummy-backend";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoStar } from "react-icons/io5";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from '@mui/material/Link';
import { motion } from "framer-motion";
import { MdOutlineMenu } from "react-icons/md";
import FadeLoader from "react-spinners/FadeLoader";
function Home(shikpooshan) {
  const [backgroundImage, setBackgrounImage] = useState("../images/s.jpg");
  let colorsArray = ['/../images/ab 1 (1).jpg', '/../images/recipe.png', '/../images/birth.jpg', '/../images/birth.jpg', '/../images/birth.jpg', '/../images/birth.jpg']
  setInterval(function () {
    setBackgrounImage(colorsArray[Math.floor(Math.random() * colorsArray.length)])
  }, 3000)
  // const { products } = props;
  const [color, setcolor] = useState("");
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([shikpooshan]);

  const [newclass, setNewclass] = useState(false);
  const [flag, setFlag] = useState(true);
  const [newclassthree, setNewclassthree,] = useState(false);
  const [newclasstow, setNewclasstow,] = useState(false);
  const [filtercontainer, setfiltercontainer,] = useState('filter-container');
  const [newclassfive, setNewclassfive,] = useState(true);
  const [newclassfour, setNewclassfour,] = useState(false);
  const [container, setcontainer] = useState('');
  const [lang, setlang] = useState('farsi');
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null
  let [loading, setLoading] = useState(true);
  let [newsearchclass, setnewsearchclass] = useState('search');
  let [showcontent, SetShowcontent] = useState('show-contecnt');
  useEffect(() => {
    AOS.init();
               const seareched = db.shirts.filter((home) => home.title.includes(search));     
    setHomes(seareched)

  }, [search]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
      setcontainer('containerall')
      window.scroll(0, 0)
    }, 800);
  }, []);
  const [sweets, setSweets] = useState([]);
  function addProductToCart(d) {
    let mainProduct = db.shirts.find(t => {
      return t.price === d
    })
    setSweets(sweets.concat({ mainProduct }))
  }

  function shoes() {
         window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setcontainer('containershoes')
    setNewclass(true)
    setNewclasstow(false)
    setNewclassthree(false)
    setNewclassfour(false)
    setNewclassfive(false)
    const men = db.shirts.filter(a => a.kindof === "shoe");
    setHomes(men)

  }
  function men() {
       window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    setcontainer('containermen')
    setNewclass(false)
    setNewclassthree(false)
    setNewclassfour(false)
    setNewclassfive(false)
    setNewclasstow(true)
    const sweet = db.shirts.filter(a => a.men === "yes");
    setHomes(sweet)

  }
  function name() {  
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setcontainer('containerwomen')
    setNewclass(false)
    setNewclasstow(false)
    setNewclassfour(false)
    setNewclassfive(false)
    setNewclassthree(true)
    const name = db.shirts.filter(a => a.men === "no");
    setHomes(name);
  }
  function all() {
       window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setcontainer('containerall')
    setNewclass(false)
    setNewclasstow(false)
    setNewclassfour(false)
    setNewclassthree(false)
    setNewclassfive(true)
    setHomes([...db.shirts])  }
  function showcolor() {
    setcolor(event.target.dataset.color)
  }
  const [isHovering, setIsHovered] = useState(false);
  function flagfalse() {
    if (flag === true) { setFlag(false); }
    else (setFlag(true))
  }
  const wrapperVariants = {
    hidden: {
      opacity: 0,
      y: '20vw',
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: 'spring', delay: 0.1 }
    },
    exit: {
      x: "-100vh",
      y: 0,
      transition: { ease: 'easeInOut' }
    },
    containerall: {
      x: [500, 0, 0],
      y: [0, 0, 0], opacity: [1, 1, 1],
      transition: { ease: 'easeInOut', type: 'spring' }
    },
    containermen: {
      x: [0, 0, 0],
      y: [0, 0, 0], opacity: [1, 1, 1],
      transition: { ease: 'easeInOut', type: 'spring' }
    },
    containerwomen: {
      x: [0, 0, 0],
      y: [0, 0, 0], opacity: [1, 1, 1],
      transition: { ease: 'easeInOut', type: 'spring' }
    },
    containershoes: {
      x: [0, 0, 0],
      y: [0, 0, 0], opacity: [1, 1, 1],
      transition: { ease: 'easeInOut', type: 'spring' }
    }

  };
  const override = {
    display: "flex",
  };
  function setsearchclass() {
    setnewsearchclass('search widther')

  }
  function setinitialsearchclass() {
    setnewsearchclass('search')

  }

  return (
    <div >
      <Head>
  
    <title>لیست پوشاک | شیک پوشان</title>      
     
      </Head>
      <FadeLoader
        loading={loading}
        cssOverride={override}
        size={2}
        aria-label="Loading Spinner"
        data-testid="loader"
        className='loader'
        width={5}
        height={15}
        speedMultiplier={1}
        color="#0b0c0eff"
        radius={2}
        margin={3}
      />


      <div className={container} >
        <MainHeadercopy />
        <button className={flag ? "filter-title down hiddendown" : "  filter-title down"} onClick={() => flagfalse()}>      </button>

        <div className={filtercontainer}>
          <div className={flag ? 'valed-filters' : 'hided'}>
            <div className={newsearchclass} onClick={setsearchclass}>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستجوی سریع محصول ...">
              </input>
              <Image width={500} src="/s.png"
                height={500}
                alt="عکس موجود نیست"
                className='search-icon' />
            </div>

            <div className='parent-filters'>
              <div className="grouping" >
                <MdOutlineMenu className="grouping-icon" />
                <a>
                  : دسته بندی کالاها
                </a>
              </div>
              <div className={newclass ? "colored filtering " : "filtering "} onClick={() => shoes()} >
                <a >
                  کفش
                </a>
              </div>
              <div className={newclasstow ? "colored filtering " : "filtering "} onClick={() => men()}>
                <a >
                  مردانه
                </a>
              </div>
              <div className={newclassthree ? "colored filtering " : "filtering "} onClick={() => name()}>
                <a>
                  زنانه
                </a>
              </div>
              <div className={newclassfive ? "colored filtering " : "filtering  "} onClick={() => all()} >
                <a>
                  همه
                </a>
              </div> 
            </div>
            <div role="presentation" >
              <Breadcrumbs aria-label="breadcrumb" className='breadcrampone' separator={<NavigateBeforeIcon fontSize="small" />} >
                <Link underline="hover" color="inherit" href={`../firstpage`} className='breadcramp'>
                  خانه
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href={`../list`}
                  className='breadcramp'>
                  خرید آنلاین
                </Link>
              </Breadcrumbs>
            </div>
          </div>
        </div>
        <ul className={flag ? "list  " : "list-up"} >
          {homes.map((p, index) => (
            <motion.div
              variants={wrapperVariants}
              initial="hidden"
              animate={container}
              exit="exit"  >
              <div key={index} className='parentlies' d-aos="zoom-in-up" data-aos-duration="4650" ata>
                <div>
                  <a className={classes.item} onClick={() => addProductToCart()} href={`/products/${p.id}`} >
                    <div className={classes.content} >
                      <div >
                        <Image
                          width={500}
                          src={p.image2}
                          height={500}
                          alt="عکس موجود نیست"
                          className={classes.img} />
                      </div>
                      <div >
                        <Image
                          width={500}
                          src={p.image3}
                          height={500}
                          alt="عکس موجود نیست"
                          className={classes.img2} />
                      </div>
                    </div>
                    <div className="price-text-text">
                      <p>
                        {p.title}
                      </p>
                    </div>
                    <h data-color={p.color} onClick={showcolor} className={classes.pricetext}>
                      {p.price}
                      هزار
                      تومان
                    </h>
                    <h3 className={db.shirts[index].color3} >%{p.percent}
                      <h3 className="takhfif" >تخفیف
                      </h3>
                    </h3>
                    <a href={`/products/${p.id}`}>
                      <span className={classes.details}>   
   <p>({p.star})
                     </p>    
                               <IoStar className={classes.eye} />

                   
                 
                  
                      </span></a>
                  </a>
                </div>

              </div>
            </motion.div>

          ))}
        </ul>

      </div >
    </div>
  )
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }
  if (data.shirts.length === 0) {
    return { notFound: true }
  }
  return {
    props: {
   shikpooshan: data.shirts
    },
    revalidate: 10,
  };
}
export default Home;