import { useState, useEffect } from 'react';
import { initFlowbite } from 'flowbite';

export const CommentArticle = () => {
  const [comment, setComment] = useState('');

  useEffect(() => {
    const storedComment = localStorage.getItem('comment');
    if (storedComment) {
      setComment(storedComment);
    }

    initFlowbite();
  }, []);

  useEffect(() => {
    localStorage.setItem('comment', comment);
  }, [comment]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://example.com/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });

      if (response.ok) {
        console.log('Komentar berhasil dikirim ke server');
      } else {
        console.error('Gagal mengirim komentar ke server');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="4"
              value={comment}
              onChange={handleCommentChange}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
            <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
              {/* Add the other buttons with their respective SVG icons here */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
