import React from 'react'
import Data from '../data/portfolio.json'
import Link from 'next/link'

export default function Socials({ locale, className }) {
    return (
        <div
            className={`${className} flex flex-wrap mob:flex-nowrap link gap-2 ${
                locale == 'fa' && 'justify-end'
            }`}
        >
            {Data.socials.map((social, index) => {
                return (
                    <Link
                        key={social.link}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-6 bg-neutral-100 dark:bg-neutral-800 rounded-md 
                        hover:bg-neutral-900 hover:text-white
                        hover:dark:bg-neutral-100 hover:dark:text-black transition-all duration-300"
                    >
                        {social.title[locale]}
                    </Link>
                )
            })}
        </div>
    )
}