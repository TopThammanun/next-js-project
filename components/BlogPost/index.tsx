import React from 'react';
import Image from 'next/image';
import { truncateHexString } from '@/util/truncateHexString';
import { Chip } from '@mui/material';

type Props = {
    header: string
    description: string
    image?: string
};

const BlogPost = (props: Props) => {
    const mockUpText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    return (
        <div className='grid grid-cols-10 gap-2 cursor-pointer border-b border-gray-300 pb-10 mb-10'>
            <div className='col-span-7 flex flex-col justify-between'>
                <div>
                    <h1 className='md:text-xl mb-4 text-base font-bold'>
                        {props.header}
                    </h1>
                    <p className='text-base max-md:hidden'>
                        {truncateHexString(props.description, 400)}
                    </p>
                </div>
                <div className='mt-4'>
                    <Chip label='HelloTags' variant='outlined' />
                </div>
            </div>
            <div className='col-span-3 ml-7 h-full flex items-center'>
                <Image
                    src={`/picture.jpg`}
                    alt='icon button'
                    height={350}
                    width={300}
                />
            </div>
        </div>
    );
};

export default BlogPost;
