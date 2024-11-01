import fs from 'fs/promises';
import Image from 'next/image';
import path from 'path';
import React, { Fragment, useState } from "react";
import MainHeadercopy from "../main-header";
import c from './event-logistics.module.css';
import 'aos/dist/aos.css';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
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
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { FcSearch } from "react-icons/fc";
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";
function ProductDetailPage(props) {
    const { loadedProduct } = props;
    const [backgrounimage, setBackgrounimage] = useState('abi');
    const [newclass, setNewclass] = useState(false);
    const [newclassthree, setNewclassthree,] = useState(true);
    const [newclasstow, setNewclasstow,] = useState(false);
    const [noimage, setNoimage] = useState('tem-child');
    const [menimg, setMenimg] = useState('menimg blackmenimg');
    const [womenimg, setWomenimg] = useState('womenimg');
    const [menbutton, setMenbutton] = useState('tem-child');
    const [womenbutton, setWomenbutton] = useState('tem-child backblue');
    const [fone, setFone] = useState(false);
    const [ftow, setFtow] = useState(true);
    const [fthree, setFthree] = useState(false);
    const [ffour, setFfour] = useState(false);
    const [isHovering, setIsHovered] = useState(false);
    const [tickone, setTickone] = useState('showtick');
    const [ticktow, setTicktow] = useState('hidetick');
    const [imagebody, setImagebody] = useState('imagebody box-image');
    const [sweets, setSweets] = useState('text-box');
    const [backopacity, setBackopacity] = useState('men-back-opacity');
    const [colorchose, setColorchose] = useState(true);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [firstthem, setFirstthem] = useState(false);
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
        setcolor(loadedProduct.image2)
        setNewclass(false)
        setNewclasstow(true)
        setNewclassthree(false)
        setTickone('hidetick')
        setTicktow('showtick')
        setColorchose(false)
    }
    function chose1() {
        setcolor(loadedProduct.image1)
        setNewclass(true)
        setNewclasstow(false)
        setNewclassthree(false)
    }
    function chose3() {
        setcolor(loadedProduct.image3)
        setNewclass(false)
        setNewclasstow(false)
        setNewclassthree(true)
        setTickone('showtick')
        setTicktow('hidetick')
        setColorchose(true)
    }
    function fixwomanBackgrounimage() {
        setFirstthem(true)
        setBackopacity('women-back-opacity')
        setWomenimg('womenimg blackwomenimg')
        setMenimg('menimg')
        setImagebody('imagebody box-image')
        setSweets('text-box')
        setBackgrounimage('abi')
        setMenbutton('tem-child backwhite')
        setWomenbutton('tem-child backblue')
        setNoimage('tem-child  backwhite')
    }
    function fixmanBackgrounimage() {
        setFirstthem(true)
        setBackopacity('men-back-opacity')
        setMenimg('menimg blackmenimg')
        setImagebody('imagebody box-image')
        setSweets('text-box')
        setBackgrounimage('ban')
        setMenbutton('tem-child backblue')
        setWomenbutton('tem-child backwhite')
        setNoimage('tem-child  backwhite')
    }
    function fixwithoutBackgrounimage() {
        setBackopacity('one-back-opacity')
        setFirstthem(false)
        setWomenimg('womenimg blackwomenimg')
        setMenimg('menimg')
        setImagebody('imagebody')
        setSweets('sweets')
        setBackgrounimage('noimage')
        setMenbutton('tem-child backwhite')
        setWomenbutton('tem-child backwhite')
        setNoimage('tem-child  backblue')
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
    let shoppingCart = [];
    const [color, setcolor] = useState('');
    if (!loadedProduct) {
        return <p>Loading...</p>
    }
    function addProductToCart(d) {
        let mainProduct = this.state.shirts.find(product => {
            return product.id === d
        })
        this.setState(prevState => {
            return {
                shoppingCart: [...prevState.shoppingCart, mainProduct]
            }
        })
        alert(shoppingCart.length)
    }
    return (
        <Fragment >
            <Head>
                <title>
                    {loadedProduct.title}
                </title>
            </Head>
            <MainHeadercopy />
            <div className='muiclass'>
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}   >
                            <Box
                                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                                role="presentation"
                                onClick={toggleDrawer(anchor, false)}
                                onKeyDown={toggleDrawer(anchor, false)}   >
                                <GlassMagnifier
                                    imageSrc={loadedProduct.image3}
                                    imageAlt="Example"
                                    magnifierSize={'40%'}
                                    largeImageSrc={loadedProduct.image3}
                                    className="imagemagnify" /> </Box>      </Drawer>
                    </React.Fragment>))}
            </div>
            <div className={backgrounimage}>
                <div className='tem'>
                    <a onClick={fixwomanBackgrounimage} className={womenbutton}>
                        عکس پس زمینه سه
                    </a>
                    <a onClick={fixmanBackgrounimage} className={menbutton}>
                        عکس پس زمینه دو
                    </a>
                    <a onClick={fixwithoutBackgrounimage} className={noimage}>
                        عکس پس زمینه یک
                    </a>
                </div>
                <section className={sweets}>
                    <div className={backopacity}>
                    </div>
                    <Swiper style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="imagebody" >
                        <SwiperSlide>

                            <GlassMagnifier
                                imageSrc={loadedProduct.image3}
                                imageAlt="Example"
                                largeImageSrc={loadedProduct.image3}
                                className="new" />

                        </SwiperSlide>
                        <SwiperSlide>
                            <GlassMagnifier
                                imageSrc={loadedProduct.image1}
                                imageAlt="Example"
                                largeImageSrc={loadedProduct.image1}
                                className="new" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <GlassMagnifier
                                imageSrc={loadedProduct.image2}
                                imageAlt="Example"
                                largeImageSrc={loadedProduct.image2}
                                className="new" />
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
                            <SwiperSlide>
                                <img src={loadedProduct.image3} className="image-orig" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={loadedProduct.image1} className="image-orig" />
                            </SwiperSlide>
                            <SwiperSlide>
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
                            <p className={c.textone} >
                                {loadedProduct.description}
                            </p>
                            <p className={c.texttow}>
                                جنس :
                                {loadedProduct.kind} </p>
                            <p className={c.texthree}>
                            </p>
                            <p className="btn-text">
                                رنگ
                            </p>
                            <p className="btn-text belower">
                                سایز
                                <button className={ftow ? "first" : "first second"} onClick={size2} >
                                    34
                                </button>
                                <button className={fone ? "first" : "first second"} onClick={size1} >
                                    37
                                </button>
                                <button className={fthree ? "first" : "first second"} onClick={size3}>
                                    41
                                </button>
                                <button className={ffour ? "first" : "first second"} onClick={size4}>
                                    44
                                </button>
                            </p>
                            <p className="btn-text belowermore">
                                سایز و رنگ محصول را انتخاب نمایید
                            </p>
                            <div className="btn-text belowermore moredown">

                                برای بزرگنمایی
                                کلیک کنید

                                <FcSearch className='mag-icon' />

                                <div className='muiclass'>
                                    {['right'].map((anchor) => (
                                        <React.Fragment key={anchor}>
                                            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                                            <Drawer
                                                anchor={anchor}
                                                open={state[anchor]}
                                                onClose={toggleDrawer(anchor, false)}
                                            >
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
                                                        magnifierSize={'40%'}
                                                        largeImageSrc={loadedProduct.image3}
                                                        className="imagemagnify" />

                                                </Box>
                                            </Drawer>
                                        </React.Fragment>
                                    ))}
                                </div>


                            </div>
                        </div>

                        <div className='choose-color'>
                            <button className={colorchose ? loadedProduct.color4 : loadedProduct.color2} onClick={chose3}>
                                <TiTick className={tickone} />
                            </button>
                            <button className={colorchose ? loadedProduct.color : loadedProduct.color5} onClick={chose2}>
                                <TiTick className={ticktow} />
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </Fragment>
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


