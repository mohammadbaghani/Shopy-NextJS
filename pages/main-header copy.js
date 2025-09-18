import Link from 'next/link';
import Switch from '@mui/material/Switch';
import React, { useState } from "react";
import { useEffect } from 'react';


function MainHeader() {
    const [checked, setChecked] = React.useState(true); 
    const [nighticon, setnighticon] = useState('night-icon');
    const [nighticontire, setnighticontire] = useState('night-icon tire');
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
    let [isActive, setIsActive] = useState(true);


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
            <header>
                <div className={isActive ? 'parent-nav': 'parent-nav darker'}>
                    <div className='child-nav'>
                        <div >
                            <Link href={`../firstpage`} className={isActive ? 'shikpooshan' : 'shikpooshan blured'} >

                            </Link>
                        </div>
                        <div >
                            <Link href={`../firstpage`} className={isActive ? 'left' : 'left newleft'} >
                            </Link>
                        </div>
                        <Link href={`../Callus`} className={isActive ? 'link-top' : 'link-top  darker-w'}>
                            تماس با ما
                        </Link>
                        <Link href={`../About`} className={isActive ? 'link-top' : 'link-top  darker-w '}>
                            درباره ما
                        </Link>
                        <Link href={`../list`} className={isActive ? 'link-top' : 'link-top  darker-w '}>
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
   <div className={isActive ? 'siahshod' : 'sefid'}>
bbb
            </div>
        </>

    )
}

export default MainHeader;