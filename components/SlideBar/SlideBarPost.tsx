import axios from "axios";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const SlideBarPost = () => {
    const [headContent, setHeadContent] = useState([]);

    async function getPost() {
        const response = await axios.get('https://nest-js-project.vercel.app/documents/all');
        setHeadContent(response.data);
    }

    useEffect(() => {
        try {
            getPost();
        } catch (e) {
            console.log(e);
        }
    }, []);

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
