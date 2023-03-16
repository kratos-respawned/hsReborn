import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'

function TeamsCard({ title, image, members }: {
    title: string,
    image: string,
    members: number
}) {
    return (
        <div className="rounded-xl overflow-clip relative group text-white">
            <Image className="w-full h-full object-cover scale-105 group-hover:scale-110  transition-transform  duration-150" src={image} alt="tech" width={420} height={320} />
            <div className="absolute grid place-items-end w-full h-full z-10 top-0 left-0 bg-hsBlack/30 group-hover:bg-hsBlack/20 transition-colors duration-500">
                <article className="w-full bg-gradient-to-t from-hsBlack pb-5 space-y-2 px-5">
                    <p className="px-3 py-1 w-fit  bg-hsBlue rounded-full ">{members} members</p>
                    <div className="flex justify-between items-center gap-x-4">
                        <h3 className="text-hsWhite font-clashDisplay font-medium text-xl">
                            {title}
                        </h3>
                        <Link href="/" className="border border-hsWhite group-hover:bg-hsWhite group-hover:text-hsBlack bg-white/0 rounded-full p-2">
                            <BiArrowToRight />
                        </Link>
                    </div>

                </article>
            </div>


        </div>
    )
}

export default TeamsCard