import React, { useState, useEffect } from "react";
import "./Newsmanagement.css";
const Forum = () => {
  // State management
  const [threads, setThreads] = useState([]);
  const [currentThreadId, setCurrentThreadId] = useState(null);
  const [currentThreadTitle, setCurrentThreadTitle] = useState("");
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [threadForm, setThreadForm] = useState({
    title: "",
  });
  const [postForm, setPostForm] = useState({
    title: "",
    content: "",
  });

  // Fetch threads
  const fetchThreads = async () => {
    try {
      const response = await fetch("http://54.200.166.229/fetch_threads");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setThreads(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching threads:", error);
      setError("Failed to load threads. Please try again later.");
    }
  };

  // View posts for a specific thread
  const viewPosts = async (threadId, threadTitle) => {
    try {
      setCurrentThreadId(threadId);
      setCurrentThreadTitle(threadTitle);
      const response = await fetch(
        `http://54.200.166.229/fetch_posts/${threadId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const posts = await response.json();
      setPosts(posts);
      setError(null);
      document.getElementById("posts-container").style.display = "block";
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts. Please try again later.");
    }
  };

  // Upload thread handler
  const handleUploadThread = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://54.200.166.229/upload_thread", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: threadForm.title,
          user_id: 1, // Replace with actual user ID management
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to upload thread");
      }

      setThreadForm({ title: "" });
      fetchThreads();
    } catch (error) {
      console.error("Error uploading thread:", error);
      setError("Failed to upload thread. Please try again.");
    }
  };

  // Upload post handler
  const handleUploadPost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://54.200.166.229/upload_post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          thread_id: currentThreadId,
          user_id: 1, // Replace with actual user ID management
          title: postForm.title,
          content: postForm.content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to upload post");
      }

      setPostForm({ title: "", content: "" });
      viewPosts(currentThreadId, currentThreadTitle);
    } catch (error) {
      console.error("Error uploading post:", error);
      setError("Failed to upload post. Please try again.");
    }
  };

  // Delete thread handler
  const handleDeleteThread = async (threadId) => {
    try {
      const response = await fetch(
        `http://54.200.166.229/delete_thread/${threadId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete thread");
      }

      fetchThreads();
    } catch (error) {
      console.error("Error deleting thread:", error);
      setError("Failed to delete thread. Please try again.");
    }
  };

  // Delete post handler
  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(
        `http://54.200.166.229/delete_post/${postId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      viewPosts(currentThreadId, currentThreadTitle);
    } catch (error) {
      console.error("Error deleting post:", error);
      setError("Failed to delete post. Please try again.");
    }
  };

  // Toggle post content
  const togglePost = (postId, fullContent, button) => {
    const postDiv = document.getElementById(`post-${postId}`);
    const contentElement = postDiv.querySelector(".content");
    const charLimit = 100;

    if (button.innerText === "Full Post") {
      contentElement.innerHTML = fullContent;
      button.innerText = "Show Less";
    } else {
      contentElement.innerHTML = `<span class="preview">${fullContent.substring(
        0,
        charLimit
      )}...</span>`;
      button.innerText = "Full Post";
    }
  };

  // Fetch threads on component mount
  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div className="forum">
      <div className="forum-content">
        <h1>Tin tức</h1>
        <div className="threads-container">
          {threads.map((thread) => (
            <div key={thread.thread_id} className="thread-card">
              <p className="thread-title">{thread.title}</p>
              <div className="thread-actions">
                <button
                  onClick={() => viewPosts(thread.thread_id, thread.title)}
                >
                 Xem nhóm tin
                </button>
                <button onClick={() => handleDeleteThread(thread.thread_id)}>
                  Xóa nhóm tin
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="forum-content">
        <div className="add-thread-section">
          <h2>Thêm một nhóm tin</h2>
          <form onSubmit={handleUploadThread}>
            <div className="form-group">
              <input
                type="text"
                value={threadForm.title}
                onChange={(e) => setThreadForm({ title: e.target.value })}
                placeholder="Enter your thread title"
                required
              />
            </div>
            <button type="submit">Thêm nhóm</button>
          </form>
        </div>
      </div>
      {currentThreadId && (
        <div className="forum-content">
          <div className="posts-container">
            <h2>Bài đăng trong {currentThreadTitle}</h2>
            <div className="posts-list">
              {posts.map((post) => (
                <div
                  key={post.post_id}
                  className="post-card"
                  id={`post-${post.post_id}`}
                >
                  <h3>{post.title}</h3>
                  <div className="post-content">
                    <p className="content">
                      {post.content.length > 100 ? (
                        <>
                          <span className="preview">
                            {post.content.substring(0, 100)}...
                          </span>
                          <button
                            onClick={(e) =>
                              togglePost(post.post_id, post.content, e.target)
                            }
                          >
                           xem thêm
                          </button>
                        </>
                      ) : (
                        post.content
                      )}
                    </p>
                  </div>
                  <button onClick={() => handleDeletePost(post.post_id)}>
                    Xóa bài
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="forum-content">
            <div className="add-post-section">
              <h2>Thêm tin tức </h2>
              <form onSubmit={handleUploadPost}>
                <div className="form-group">
                  <input
                    type="text"
                    value={postForm.title}
                    onChange={(e) =>
                      setPostForm({ ...postForm, title: e.target.value })
                    }
                    placeholder="Enter your post title"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    value={postForm.content}
                    onChange={(e) =>
                      setPostForm({ ...postForm, content: e.target.value })
                    }
                    placeholder="Enter your post content"
                    required
                  />
                </div>
                <button type="submit">Đăng bài</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
