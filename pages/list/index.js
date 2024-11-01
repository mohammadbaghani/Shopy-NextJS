import path from 'path';
import fs from 'fs/promises';
import classes from '../../styles/event-item.module.css';
import Head from 'next/head';
import Image from 'next/image';
import MainHeadercopy from "../main-header";
import React, { useEffect, useState } from "react";
import db from "../../data/dummy-backend";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillEye } from "react-icons/ai";
import { IoStar } from "react-icons/io5";
function Home(props) {
  const [backgroundImage, setBackgrounImage] = useState("../images/s.jpg");
  let colorsArray = ['/../images/ab 1 (1).jpg', '/../images/recipe.png', '/../images/birth.jpg', '/../images/birth.jpg', '/../images/birth.jpg', '/../images/birth.jpg']
  setInterval(function () {
    setBackgrounImage(colorsArray[Math.floor(Math.random() * colorsArray.length)])

  }, 3000)
  const { products } = props;
  const [color, setcolor] = useState("");
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.shirts]);
  const [newclass, setNewclass] = useState(false);
  const [flag, setFlag] = useState(true);
  const [newclassthree, setNewclassthree,] = useState(false);
  const [newclasstow, setNewclasstow,] = useState(false);
  const [filtercontainer, setfiltercontainer,] = useState('filter-container');
  const [newclassfive, setNewclassfive,] = useState(true);
  const [newclassfour, setNewclassfour,] = useState(false);
  const [container, setcontainer] = useState('containerall');
  const isServer = typeof window === 'undefined'
  const WOW = !isServer ? require('wowjs') : null
  useEffect(() => {
    AOS.init({ disable: 'desktop' });
    const seareched = db.shirts.filter((home) => home.title.includes(search));
    setHomes(seareched);

  }, [search]);
  const [sweets, setSweets] = useState([]);
  function addProductToCart(d) {

    let mainProduct = db.shirts.find(t => {
      return t.price === d
    })
    setSweets(sweets.concat({ mainProduct })
    )

  }
  function seeclothes() {
    window.scrollTo({ top: 100, left: 0, behavior: 'smooth' });

  }
  function price() {
    setNewclass(false)
    setNewclasstow(false)
    setNewclassthree(false)
    setNewclassfour(true)
    setNewclassfive(false)
    setfiltercontainer('ex')
    const price = db.shirts.sort((b, a) => a.price - b.price);
    setcontainer('containerprice')
    setHomes(price);
  }
  function deserts() {
    setNewclass(true)
    setcontainer('containershows')
    setNewclasstow(false)
    setNewclassthree(false)
    setNewclassfour(false)
    setNewclassfive(false)
    setfiltercontainer('g')
    const newst = db.shirts.filter(a => a.kindof === "desert");
    setHomes(newst)
  }

  function newst() {
    setNewclass(false)
    setNewclasstow(true)
    setNewclassthree(false)
    setcontainer('containermen')
    setNewclassfour(false)
    setNewclassfive(false)
    setfiltercontainer('gg')
    const sweet = db.shirts.filter(a => a.men === "yes");
    setHomes(sweet)

  }

  function name() {
    setNewclass(false)
    setNewclasstow(false)
    setcontainer('containerwomen')
    setNewclassfour(false)
    setNewclassfive(false)
    setNewclassthree(true)
    setfiltercontainer('v')
    const name = db.shirts.filter(a => a.men === "no");
    setHomes(name);
  }

  function all() {
    setNewclass(false)
    setNewclasstow(false)
    setfiltercontainer('filter-container')
    setNewclassfour(false)
    setNewclassfive(true)
    setNewclassthree(false)
    setcontainer('containerall')
    setHomes([...db.shirts])


  }

  function showcolor() {

    setcolor(event.target.dataset.color)
  }


  const [isHovering, setIsHovered] = useState(false);

  const onMouseLeave = () => setIsHovered(false);

  function onMouseEnter() {

    setIsHovered(true);
  }

  function flagfalse() {
    if (flag === true) { setFlag(false); }
    else (setFlag(true))
  }

  return (

    <div className={container} >
      <MainHeadercopy />
      <Head>
        <title>
          لیست پوشاک مد روز
        </title>
      </Head>
      <button className={flag ? "filter-title down hiddendown" : "  filter-title down"} onClick={() => flagfalse()}>

      </button>
      <div className={filtercontainer}>

        <div className={flag ? 'valed-filters' : 'hided'}>

          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="... جستجوی سریع محصول">
            </input>
            <Image width={500} src="/s.png"
              height={500}
              alt="عکس موجود نیست"
              className='search-icon' />

          </div>

          <button className="see-clothes" onClick={seeclothes} >
مشاهده محصولات
          </button>

          <div className={newclassfour ? "colored filtering bef price-filter" : "filtering bef price-filter"} onClick={() => price()}>
            <a>
              از گران ترین
            </a>
          </div>

          <div className={newclass ? "colored filtering bef" : "filtering bef"} onClick={() => deserts()} >
            <a >
              کفش
            </a>
          </div>
          <div className={newclasstow ? "colored filtering bef" : "filtering bef"} onClick={() => newst()}>
            <a >
              مردانه
            </a>
          </div>
          <div className={newclassthree ? "colored filtering bef" : "filtering bef"} onClick={() => name()}>
            <a>
              زنانه
            </a>
          </div>
          <div className={newclassfive ? "colored filtering bef" : "filtering bef "} onClick={() => all()} >
            <a>
              همه
            </a>
          </div>
        </div>
        <p className='down-tow'>
         شیک ترین ها فراتر از تصور شما
        </p>
      </div>
      <ul className={flag ? "list  " : "list-up"} >
        {homes.map((p, index) => (
          <div key={index} className='parentlies' data-aos="fade-up" data-aos-duration="650">
            <div>
              <a className={classes.item} onClick={() => addProductToCart()} href={`/products/${p.id}`} >
                <div className={classes.content} >
                  <div className={classes.date}>
                    <Image
                      width={500} src={p.image3}
                      height={500}
                      alt="عکس موجود نیست"
                      className='image-hover' onMouseEnter={(event) => onMouseEnter(event)} />
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
                    <IoStar className={classes.eye} />
                    ({p.star})
                  </span></a>
              </a>
            </div>

          </div>
        ))}
      </ul>

      <ul className={newclassfive ? "below below-up" : "below below-up hide"} data-aos="zoom-in" data-aos-duration="1000">
   همه لباس ها
      </ul>

      <ul className={newclasstow ? "below below-up" : "below below-up hide"} data-aos="zoom-in" data-aos-duration="1000">

 لباس آقایان    </ul>

      <ul className={newclassthree ? "below below-up" : "below below-up hide"} >
    لباس بانوان
      </ul>
      <ul className={newclassfour ? "below below-up" : "below below-up hide"} data-aos="zoom-in" data-aos-duration="1000">
    از گران ترین
      </ul>
      <ul className={newclass ? "below below-up" : "below below-up hide"}>
   انواع کفش
      </ul>
    </div >
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
      products: data.shirts,
    },
    revalidate: 10,
  };
}

export default Home;