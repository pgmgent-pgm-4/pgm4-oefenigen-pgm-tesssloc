import './App.css';
import Post from './components/Post';

function App() {
  const posts = [
    {
      title: "Post 1 Title",
      synopsis: "Synopsis of Post 1",
      story: "Story of Post 1",
      author: { name: "Author 1", picture: "author1.jpg" },
      publishDate: "2024-04-09"
    },
    {
      title: "Post 2 Title",
      synopsis: "Synopsis of Post 2",
      story: "Story of Post 2",
      author: { name: "Author 2", picture: "author2.jpg" },
      publishDate: "2024-04-08"
    },
    {
      title: "Post 3 Title",
      synopsis: "Synopsis of Post 3",
      story: "Story of Post 3",
      author: { name: "Author 3", picture: "author3.jpg" },
      publishDate: "2024-04-07"
    }
  ];
  return (
    <div className="App">
      <Post title="Hello" synopsis="Synopsis" story="This is a story" author={{name: "name", picture: "efz"}} publishDate="05/06/2024"/>
      <ul>
        {posts.map((item, index) => (
          <li key={`post_${index}`}><Post title={item.title} synopsis={item.synopsis} story={item.story} author={item.author} publishDate={item.publishDate}/></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
