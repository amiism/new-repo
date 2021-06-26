import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mary");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, author };

    setIsPending(true);
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("new post added");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Topic:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Textbook">Textbook</option>
          <option value="Notes">Notes</option>
          <option value="Questions">Questions</option>
        </select>
        {!isPending && <button>Add Post</button>}
        {isPending && <button disabled>Adding post...</button>}
      </form>
    </div>
  );
};

export default Create;
