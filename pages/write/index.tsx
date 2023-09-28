import EditorBlock from '@/components/EditorBlock'
import FullLoading from '@/components/FullLoading';
import LayoutNoSlide from '@/components/Layout/LayoutNoSlide';
import SlideBarPost from '@/components/SlideBar/SlideBarPost';
import axios from 'axios';
import { Fragment, ReactElement, useEffect, useState } from 'react';

export default function Index() {
    const [content, setContent] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [headContent, setHeadContent] = useState([]);

    async function getPost() {
        const response = await axios.get('https://nest-js-project.vercel.app/documents/all');
        setContent(response.data[0].document);
        setHeadContent(response.data);
    }

    useEffect(() => {
        try {
            setIsLoading(true);
            getPost();
        } catch (e) {
            console.log(e);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }, []);

    return (
        <Fragment>
            {isLoading ? <FullLoading /> :
                <Fragment>
                    <div className="max-lg:hidden">
                        <div className="h-[100dvh] min-w-[25rem] border-r transition-all sticky top-0">
                            <SlideBarPost headContent={headContent} />
                        </div>
                    </div>
                    <div className="z-10">
                        <div className="flex flex-col max-w-[100dvw]">
                            <div className="flex flex-grow justify-center w-full">
                                <main className="flex pb-5 md:mt-10 lg:mx-48 mt-5 justify-center">
                                    <EditorBlock content={content} setContent={setContent} />
                                </main>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

Index.getLayout = (page: ReactElement) => {
    return <LayoutNoSlide>{page}</LayoutNoSlide>;
};