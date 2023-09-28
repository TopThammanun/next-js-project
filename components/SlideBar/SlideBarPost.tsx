import axios from "axios";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

type Props = {
    headContent: Array<any> | any;
};

const SlideBarPost = (props: Props) => {
    const { headContent } = props;

    return (
        <PerfectScrollbar className="px-5 pt-6">
            {
                headContent.map((item) => {
                    const {
                        id,
                        ownerId,
                        publicId,
                        title
                    } = item;
                    return (<div className="bg-gray-200 rounded-xl p-3 m-2" key={id}>{title}</div>)
                })
            }
        </PerfectScrollbar>
    );
}

export default SlideBarPost;
