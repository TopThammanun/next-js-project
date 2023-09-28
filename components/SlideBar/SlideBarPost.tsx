import axios from "axios";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import {
    PlusSquare,
    PencilIcon
} from "lucide-react";

type Props = {
    headContent: Array<any>;
    setHeadContent: any;
};

const SlideBarPost = (props: Props) => {
    const { headContent, setHeadContent } = props;

    return (
        <PerfectScrollbar className="px-5 pt-6">
            <div className="cursor-pointer rounded-xl p-3 m-2 mb-4 flex justify-between items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium px-5 py-2.5 mr-2"
                onClick={() => {
                    setHeadContent([...headContent, { id: 9, title: "New" }])
                }}
            >
                <div>New</div>
                <PlusSquare size={22} />
            </div>
            {
                headContent.map((item) => {
                    const {
                        id,
                        ownerId,
                        publicId,
                        title
                    } = item;
                    return (<div className="cursor-pointer rounded-xl p-3 m-2 mb-4 flex justify-between items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium px-5 py-2.5 mr-2" key={id}>
                        <div>{title}</div>
                        <PencilIcon size={22} />
                    </div>)
                })
            }
        </PerfectScrollbar>
    );
}

export default SlideBarPost;
