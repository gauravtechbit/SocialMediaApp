// src/pages/Posts.js
import React, { useState, useEffect } from 'react';
import { fetchPosts, createPost, updatePost, deletePost } from './api';
//import { ErrorContext } from '../context/ErrorContext';

const Posts = () => {
  const [user, setuser] = useState({ email: '', nameid: 1 }); 
  useEffect(() => {  
    loadPosts();
    var a = localStorage.getItem('UserInfo');  
    var b = JSON.parse(a);  
    console.log(b);  
    setuser(b)  
    console.log(user.email)  

}, []); 
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [editPostId, setEditPostId] = useState(null); // State for tracking editing post
  const [editContent, setEditContent] = useState(''); // State for editing post content
  //const { showError } = useContext(ErrorContext);
  const loadPosts = async () => {
   
    const { data } = await fetchPosts();
    setPosts(data);
  };

  const handleCreate = async () => {
    try{
    await createPost({ content: newPost, UserId: user.nameid });
    setNewPost('');
    loadPosts();
}
catch(err)
{
    alert("Error while creating post")
}
  };

  const handleUpdate = async (id,content) => {
    //debugger;
    setEditPostId(id);
    setEditContent(content);
  };

  const handleDelete = async (id) => {
    try{
    await deletePost(id);
    loadPosts();
    }
    catch(err)
    {
        alert("Error while deleting post")
    }
  };
// Save edited post
const handleSaveEdit = async() =>  {
  // setPosts(
  //debugger;
  //   posts.map(post => (post.id === editPostId ? { ...post, content: editContent } : post))
  // );
  await updatePost({ content: editContent, Id:editPostId, UserId: user.nameid });
  setEditPostId(null);
  setEditContent('');
  loadPosts();
};


  return (
    <div className="container my-5">
      <h2 className="text-center">Post Manager</h2>

      {/* Post Creation Form */}
      <form onSubmit={handleCreate} className="my-4">
        <div className="input-group">
          <input
            type="text" required pattern="^(?!\s*$).+"
            className="form-control"
            placeholder="Write a new post..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Add Post</button>
        </div>
      </form>

      {/* List of Posts */}
      <div className="list-group">
        {posts.map((post) => (
          <div key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
            {/* Editing mode */}
            {editPostId === post.id ? (
              <div className="w-100">
                <input
                  type="text" required pattern="^(?!\s*$).+"
                  className="form-control"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
              </div>
            ) : (
              <span>{post.content}</span>
            )}

            <div>
            {post.userId == user.nameid && (
              editPostId === post.id ? (
                <>
                  <button className="btn btn-success btn-sm me-2" onClick={handleSaveEdit}>
                    Save
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={() => setEditPostId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleUpdate(post.id, post.content)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(post.id)}
                  >
                    Delete
                  </button>
                  </>
                )
              )}
            </div>
          </div>
        ))}
        {posts.length === 0 && <p className="text-center mt-3">No posts yet. Create one!</p>}
      </div>
    </div>
  );
};

export default Posts;
