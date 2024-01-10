import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import DataContext from './context/DataContext'

const EditPost = () => {
  const {posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle} =useContext(DataContext)
  const {id} = useParams()
  const post =posts.find(post =>(post.id).toString()===id)

  useEffect(()=>{
    if(post){
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  },[post,setEditBody,setEditTitle])

  return (
    <main className="NewPost">
    {editTitle &&
        <>
            <h2>Edit Post</h2>
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
            </form>
        </>
    }
    {!editTitle &&
        <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
        </>
    }
</main>
  )
}

export default EditPost