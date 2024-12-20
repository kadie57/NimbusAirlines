import { memo, useState, useEffect } from "react";
import { FaNewspaper } from "react-icons/fa";
import "./tinngan.css";

const TinNgan = () => {
  const [news, setNews] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("http://54.200.166.229/fetch_news");
      if (!response.ok) throw new Error("Network response was not ok");
      const posts = await response.json();
      setNews(posts);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleShowPost = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target.classList.contains("news-modal")) {
      handleCloseModal();
    }
  };

  return (
    <>
      <div className="news-ticker">
        <div className="ticker-container">
          <div className="news-icon">
            <FaNewspaper />
            Tin tức
          </div>
          <div className="news-title-container">
            <div className="news-title">
              {news.map((post, index) => (
                <a key={index} onClick={() => handleShowPost(post)}>
                  {post.post_title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`news-modal ${showModal ? "show" : ""}`}
        onClick={handleModalClick}
      >
        {selectedPost && (
          <div className="news-modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2 className="news-modal-thread-title">{selectedPost.thread_title}</h2>
            <h3 className="news-modal-post-title">{selectedPost.post_title}</h3>
            <p>{selectedPost.content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(TinNgan);
