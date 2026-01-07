import classes from '../styles/main-header.module.css';
function MainHeader() {
    return (
        <>
            <footer className={classes.footer}>
                <div className='parent-footer'>
                    <div className='child-nav ff'>
                        <ul className='ul-footer'>
                            <li href={`list`} className='li-footer'>

                                خرید
                                آنلاین
                            </li>

                            <li href={`list`} className='li-footer'>

                                تماس با ما
                            </li>

                            <li href={`root`} className='li-footer'>
                                صفحه اول
                            </li>

                            <li href={`list`} className='li-footer'>

                                تماس با ما
                            </li>
                        </ul>

                        <ul className='ul-footer b'>
                            <li href={`list`} className='li-footer'>
                                خرید
                                آنلاین
                            </li>
                            <li href={`list`} className='li-footer'>

                                تماس با ما
                            </li>

                            <li href={`root`} className='li-footer'>

                                صفحه اول
                            </li>

                            <li href={`list`} className='li-footer'>
                                تماس با ما
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='p-footer'>
                    شیک پوشان تحولی در صنعت پوشاک کشور
                </p>
            </footer>
        </>
    )
}

export default MainHeader;