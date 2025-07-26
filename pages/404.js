import React from 'react'
import Link from 'next/link';
export default function b() {
    return (<>
        <Link href={`../list`} className='error'>
            اینجا کلیک کنید
            تا
            به صفحه خرید آنلاین بروید
        </Link>
    </>
    )
}