import React, {useState, useEffect} from 'react'

function getAllPostsFromLocalStorage() {
  const posts = [];
  for (let i = 0; i < localStorage.length; i++) {
    const postJSON = localStorage.getItem(localStorage.key(i));
    try {
      const post = JSON.parse(postJSON);
      posts.push(post);
    } catch (error) {
      console.error(`Erreur lors de la conversion du post avec la clé "":`, error);
    }
  }
  console.log(posts)
  return posts;
}

const clearPost = (title) => {
  localStorage.removeItem(title);
  window.location.reload();
  console.log('Note clear');
}

function clearLocalStorage() {
  localStorage.clear();
  window.location.reload();
  console.log('Local storage clear');
}

function getFirst15Words(str) {
  return str.trim().split(/\s+/).slice(0, 15).join(' ');
}

function NavBar() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    // Récupérer tous les posts du local storage lors du chargement du composant
    const postsFromLocalStorage = getAllPostsFromLocalStorage();
    setAllPosts(postsFromLocalStorage);
  }, []);

  return (
    <div className='navContainer'>
        <button className='button b-create'>Create Note</button>
        {allPosts.map((post) => (
        <div className='navPost'>
          <h2 className='titleNote'>{post.title}</h2>
          <p>{getFirst15Words(post.text)} ...</p>
          <button className='button' onClick={() => clearPost(post.title)}>Clear</button>
          <hr/> 
        </div>       
      ))}
        <button className='button' onClick={() => clearLocalStorage()}>Clear All</button>
    </div>
  )
}

export default NavBar