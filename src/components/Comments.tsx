import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeComment } from "../redux/slices/CommentSlice.ts";
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Comments = ({ comments = [], filmId }) => {
    const [newComment, setNewComment] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCommentSubmit = (event) => {
        event.preventDefault();


        if (newComment.trim()) {
            const token = localStorage.getItem('token');
            let clientId = null;


            if (!token) {
                toast.error('You are not logged in. Please log in to comment.', {
                    onClose: () => navigate('/login')
                });
                return;
            }


            try {
                const decoded = jwtDecode(token);
                clientId = decoded.sub || null;
            } catch (error) {
                console.error('Token decoding error:', error);
                toast.error('Error decoding token. Please log in again.', {
                    onClose: () => navigate('/login')
                });
                return;
            }


            const commentData = {
                client_id: clientId,
                comment: newComment,
                film_id: filmId,
            };

            dispatch(storeComment(commentData));
            setNewComment('');
        }
    };

    return (
        <div className="bg-gray-900 text-white p-4">
            <h2 className="text-xl font-bold">Comments</h2>
            <p className="text-gray-400 my-2">We hope you have a good time browsing the comment section!</p>

            <form onSubmit={handleCommentSubmit} className="relative mb-5 mt-5">
                <input
                    type="text"
                    className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-3xl h-16 px-4 py-3"
                    placeholder="Share your thoughts ..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                    className="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50 absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                    type="submit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </form>

            <div className="space-y-4">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment._id} className="bg-gray-800 p-4 rounded">
                            <p>
                                <span className="font-bold">{comment.client_id.name || 'Unknown User'}</span>: {comment.comment}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="text-gray-400">No comments available.</div>
                )}
            </div>
        </div>
    );
};

export default Comments;
