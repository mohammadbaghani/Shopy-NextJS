import fs from 'fs/promises';
import path from 'path';
import React, { Fragment, useState } from "react";
import MainHeadercopy from "../main-header";
import c from '../../styles/events.module.css';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Link from '@mui/material/Link';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TiTick } from "react-icons/ti";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FcSearch } from "react-icons/fc";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tilt from 'react-parallax-tilt';
import { useEffect } from "react";
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
function ProductDetailPage(props) {
    const { loadedProduct } = props;
    const [backgrounimage, setBackgrounimage] = useState('noimage');
    const [newclass, setNewclass] = useState(false);
    const [newclassthree, setNewclassthree,] = useState(true);
    const [newclasstow, setNewclasstow,] = useState(false);
    const [noimage, setNoimage] = useState('tem-child right--image siah-image');
    const [menimg, setMenimg] = useState('menimg blackmenimg ');
    const [womenimg, setWomenimg] = useState('womenimg ');
    const [menbutton, setMenbutton] = useState('tem-child center-image ');
    const [womenbutton, setWomenbutton] = useState('tem-child left--image');
    const [fone, setFone] = useState(false);
    const [ftow, setFtow] = useState(true);
    const [fthree, setFthree] = useState(false);
    const [ffour, setFfour] = useState(false);
    const [isHovering, setIsHovered] = useState(false);
    const [tickone, setTickone] = useState('showtick');
    const [ticktow, setTicktow] = useState('hidetick');
    // const [tickthree,setTickthree] = useState('hidetick');
    const [imagebody, setImagebody] = useState('imagebody box-image');
    const [sweets, setSweets] = useState('text-box');
    const [backopacity, setBackopacity] = useState('men-back-opacity');
    const [colorchose, setColorchose] = useState(true);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [firstthem, setFirstthem] = useState(false);
    const [changecolor, setChangecolor] = useState(false);
      let [colored, setColored] = useState();

    useEffect(() => {
      setColored(loadedProduct.image2)
    }, []);

    function size2() {
        setFfour(false)
        setFone(false)
        setFtow(true)
        setFthree(false)
    }
    function size1() {
        setFone(true)
        setFfour(false)
        setFtow(false)
        setFthree(false)
    }
    function size3() {
        setFone(false)
        setFfour(false)
        setFtow(false)
        setFthree(true)
    }
    function size4() {
        setFtow(false)
        setFone(false)
        setFfour(true)
        setFthree(false)
    }
    function chose2() {
        setBackgrounimage('abi')
        setNewclass(false)
        setNewclasstow(true)
        setNewclassthree(false)
        setColored(loadedProduct.image2)

    }
    function chose1() {
        setBackgrounimage('abi')
        setColored(loadedProduct.image3)
        setNewclass(true)
        setNewclasstow(false)
        setNewclassthree(false)
    }
    function chose3() {

        setColored(loadedProduct.image1)
        setBackgrounimage('abi')
        setNewclass(false)
        setNewclasstow(false)
        setNewclassthree(true)
    }
    function tickedone() {
        setChangecolor(false)
        setNewclass(false)
        setNewclasstow(false)
        setNewclassthree(true)
        setTicktow('hidetick')
        setTickone('showtick')
        setColorchose(true)
    }
    function tickedtow() {
        setChangecolor(true)
        setNewclass(false)
        setNewclasstow(true)
        setNewclassthree(false)
        setTickone('hidetick')
        setTicktow('showtick')
        setColorchose(false)

    }
    //     function tickedthree() {
    //     setChangecolor(true)
    //     setNewclass(false)
    //     setNewclasstow(true)
    //     setNewclassthree(false)
    //     setTickone('hidetick')
    //     setTicktow('hidetick')
    //   setTickthree('showtick')
    //     setColorchose(false)
    //     setNoimage('tem-child right--image')
    // }
    function fixwomanBackgrounimage() {
        setColored('')
        setFirstthem(true)
        setBackopacity('women-back-opacity')
        setWomenimg('womenimg blackwomenimg')
        setMenimg('menimg')
        setImagebody('imagebody box-image')
        setSweets('text-box')
        setBackgrounimage('ban')
        setMenbutton('tem-child center-image ')
        setWomenbutton('tem-child left--image siah-image')
        setNoimage('tem-child right--image')
    }
    function fixmanBackgrounimage() {
        setColored('')
        setFirstthem(true)
        setBackopacity('men-back-opacity')
        setMenimg('menimg blackmenimg')
        setImagebody('imagebody box-image')
        setSweets('text-box')
        setBackgrounimage('abi')
        setMenbutton('tem-child center-image siah-image')
        setWomenbutton('tem-child left--image')
        setNoimage('tem-child right--image')
    }
    function fixwithoutBackgrounimage() {
        setColored('')
        setBackopacity('one-back-opacity')
        setFirstthem(false)
        setWomenimg('womenimg blackwomenimg')
        setMenimg('menimg')
        setImagebody('imagebody')
        setSweets('text-box')
        setBackgrounimage('noimage')
        setMenbutton('tem-child center-image')
        setWomenbutton('tem-child left--image')
        setNoimage('tem-child right--image siah-image')
        setColored(loadedProduct.image2)
    }

    function nextimage() {
        if (colored === loadedProduct.image1) {
            setColored(loadedProduct.image2)
        }
        else if (colored === loadedProduct.image2) {
            setColored(loadedProduct.image3)
        }
        else if (colored === loadedProduct.image3) {
            setColored(loadedProduct.image1)
        }
    }
    function previmage() {
        if (colored === loadedProduct.image2) {
            setColored(loadedProduct.image1)
        }
        else if (colored === loadedProduct.image1) {
            setColored(loadedProduct.image3)

        }
        else if (colored === loadedProduct.image3) {
            setColored(loadedProduct.image2)
        }
    }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}  >
            <GlassMagnifier
                imageSrc={loadedProduct.image3}
                imageAlt="Example"
                magnifierSize={'40%'}
                largeImageSrc={loadedProduct.image3}
                className="imagemagnify" />
        </Box>
    );


    if (!loadedProduct) {
        return <p>Loading...</p>
    }
    return (
        <div className="parent-pid">
            <div className='parent-mag'>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} className='child-mag'>برای بزرگنمایی
                            روی
                            عکس
                            کلیک کنید

                        </Button>

                        <Button onClick={toggleDrawer(anchor, true)} className='child-mag-onimage'>
                            <FcSearch className='mag-icon' />
                        </Button>

                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}>
                            <Box
                                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                                role="presentation"
                                onClick={toggleDrawer(anchor, false)}
                                onKeyDown={toggleDrawer(anchor, false)} >
                                <p className='mag'>
                                    برای بزرگنمایی موس را روی عکس ببرید
                                </p>
                                <GlassMagnifier
                                    imageSrc={loadedProduct.image3}
                                    imageAlt="Example"
                                    magnifierSize={'27%'}

                                    largeImageSrc={loadedProduct.image3}
                                    className="imagemagnify" />
                            </Box>
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
            <Head>
                <title>
                    {loadedProduct.title}
                </title>
            </Head>
            <MainHeadercopy />

            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb" className='breadcramptow' separator={<NavigateBeforeIcon fontSize="small" />} >
                    <Link underline="hover" color="inherit" href={`../firstpage`} className='breadcramp sec-cramp'>
                        خانه
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href={`../list`}
                        className='breadcramp sec-cramp'>
                        خرید آنلاین
                    </Link>
                    <Typography sx={{ color: 'text.primary' }} className='breadcramp sec-cramp asli'>{loadedProduct.title}</Typography>
                </Breadcrumbs>
            </div>

            <img src={colored} className='newback'></img>

            <div className={backgrounimage}>
                <div className='tem'>
                    <a onClick={fixwomanBackgrounimage} className={womenbutton}>
                        عکس سه
                    </a>
                    <a onClick={fixmanBackgrounimage} className={menbutton}>
                        عکس دو
                    </a>
                    <a onClick={fixwithoutBackgrounimage} className={noimage}>
                        عکس یک
                    </a>
                </div>
                <section className={sweets}>



                    <div className={backopacity}>

                    </div>
                    <Swiper style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }} loop={true}
                        spaceBetween={10}
                        navigation={true}
                        onNavigationNext={nextimage}
                        onNavigationPrev={previmage}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="imagebody" >
                        <SwiperSlide >
                            <Tilt
                                tiltMaxAngleX={0}
                                tiltMaxAngleY={0}
                                perspective={900}
                                scale={1}
                                transitionSpeed={8000}
                                gyroscope={true}>
                                <GlassMagnifier
                                    imageSrc={loadedProduct.image3}
                                    imageAlt="Example"
                                    largeImageSrc={loadedProduct.image3}
                                    className="new" />
                            </Tilt>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Tilt
                                tiltMaxAngleX={0}
                                tiltMaxAngleY={0}
                                perspective={900}
                                scale={1}
                                transitionSpeed={8000}
                                gyroscope={true}>
                                <GlassMagnifier
                                    imageSrc={loadedProduct.image1}
                                    imageAlt="Example"
                                    largeImageSrc={loadedProduct.image1}
                                    className="new" />
                            </Tilt>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Tilt
                                tiltMaxAngleX={0}
                                tiltMaxAngleY={0}
                                perspective={900}
                                scale={1}
                                transitionSpeed={8000}
                                gyroscope={true}>

                                <GlassMagnifier
                                    imageSrc={loadedProduct.image2}
                                    imageAlt="Example"
                                    largeImageSrc={loadedProduct.image2}
                                    className="new" />
                            </Tilt>
                        </SwiperSlide>


                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper">
                        <div className="parent-orig-images">
                            <SwiperSlide onClick={chose1}>
                                <img src={loadedProduct.image3} className="image-orig" />
                            </SwiperSlide>
                            <SwiperSlide onClick={chose3}>
                                <img src={loadedProduct.image1} className="image-orig" />
                            </SwiperSlide>
                            <SwiperSlide onClick={chose2}>
                                <img src={loadedProduct.image2} className="image-orig" />
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <div className={c.sweetschild}>
                        <div className={firstthem ? c.textfour : c.textfourx}>
                        </div>
                        <div className='infos'>{loadedProduct.title}
                            <h3 className='titr'></h3>
                            <div className={c.text}>
                                <div className={firstthem ? c.textgheimat : c.textgheimat}>
                                    : قیمت
                                </div>
                                <div className={c.textprice}>
                                    {loadedProduct.price}
                                </div>
                                <p className={c.texttooman}>
                                    هزار تومان
                                </p>
                            </div>
                            <p className={c.texttow}>
                                جنس :  {loadedProduct.kind}
                            </p>
                            <p className="btn-text">
                                رنگ : {changecolor ? loadedProduct.text : loadedProduct.text2}
                            </p>
                            <p className="btn-text belower">
                                سایز
                                <button className={ftow ? "first" : "first second"} onClick={size2} >
                                    43
                                </button>
                                <button className={fone ? "first" : "first second"} onClick={size1} >
                                    42
                                </button>
                                <button className={fthree ? "first" : "first second"} onClick={size3}>
                                    41
                                </button>
                                <button className={ffour ? "first" : "first second"} onClick={size4}>
                                    39
                                </button>
                            </p>
                            <p className="btn-text belowermore">
                                سایز و رنگ محصول را انتخاب نمایید
                            </p>
                        </div>



                        <div className='choose-color'>
                            <button className={colorchose ? loadedProduct.color4 : loadedProduct.color2} onClick={tickedone}>
                                <img src="../Shop-images/check.png" className={tickone}></img>
                            </button>
                            <button className={colorchose ? loadedProduct.color : loadedProduct.color5} onClick={tickedtow}>
                                <img src="../Shop-images/check.png" className={ticktow}></img>
                            </button>

                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}
async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data;
}
export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;
    const data = await getData();
    const product = data.shirts.find(product => product.id === productId);
    if (!product) {
        return { notFound: true };
    }
    return {
        props: {
            loadedProduct: product,
        }
    };
}
export async function getStaticPaths() {
    const data = await getData();
    const ids = data.shirts.map(product => product.id);
    const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
    return {
        paths: pathsWithParams,
        fallback: true
    }
}
export default ProductDetailPage;


