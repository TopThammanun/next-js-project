import EditorBlock from '@/components/EditorBlock'
import LayoutNoSlide from '@/components/Layout/LayoutNoSlide';
import { Fragment, ReactElement } from 'react';

export default function Index() {
    return (
        <Fragment>
            <EditorBlock />
        </Fragment>
    )
}

Index.getLayout = (page: ReactElement) => {
    return <LayoutNoSlide>{page}</LayoutNoSlide>;
};