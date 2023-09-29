import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../context/posts/actions";

const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const style = [{ display: 'flex', justifyContent: 'space-evenly' }];
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getPosts(page));
    }, [dispatch, page]);

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrev = () => {
        setPage(page - 1);
    };

    return (
        <div>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
            <div style={style[0]}>
                <button onClick={handlePrev} disabled={page === 1}>Anterior</button>
                <button onClick={handleNext}>Próximo</button>
            </div>
        </div>
    );
};

export default PostsList;