import React from 'react';
import Image from 'next/image';
import { truncateHexString } from '@/util/truncateHexString';
import { Chip } from '@mui/material';

type Props = {
    header: string
    description: string
    image?: string
    tag?: string
    updateDate?: string
};

const BlogPost = (props: Props) => {
    const mockUpText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    return (
        <div className='grid grid-cols-10 gap-2 cursor-pointer border-b border-gray-300 md:pb-10 pb-5 md:mb-10 mb-5'>
            <div className='col-span-7 flex flex-col justify-between'>
                <div>
                    <h1 className='md:text-xl mb-4 text-base font-bold'>
                        {truncateHexString(props.header, 50)}
                    </h1>
                    <p className='text-base max-md:hidden'>
                        {truncateHexString(props.description, 300)}
                    </p>
                </div>
                <div className='mt-4 flex gap-3 items-center'>
                    <Chip label='HelloTags' color='default' />
                    <p className='text-xs text-gray-500'>Last Update 9/1/2023</p>
                </div>
            </div>
            <div className='col-span-3 ml-7 h-full flex items-center'>
                <Image
                    src={`/picture.jpg`}
                    alt='icon button'
                    height={250}
                    width={200}
                />
            </div>
        </div>
    );
};

export default BlogPost;
