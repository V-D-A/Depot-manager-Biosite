import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const FooterOptions = () => {
    return (
        <div className=" p-4 flex items-center justify-between">
            <div className=''>
                Language : <Button type="button" variant={'outline'} >English (United States)</Button>
            </div>
            <div className="flex gap-1 text-sm text-gray-400">
                <Link href={''} className="hover:underline" >Support</Link>:
                <Link href={''} className="hover:underline">Terms</Link>:
                <Link href={''} className="hover:underline">Privacy Policy</Link>
            </div>
        </div>
    )
}

export default FooterOptions