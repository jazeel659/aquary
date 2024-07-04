"use client";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [posts, setposts] = useState([{ name: "home" }]);
  const [comments, setcomments] = useState([]);
  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");

    setposts(await response1.json());
    setcomments(await response.json());
    console.log(posts);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mx-3 ">
      My Post: {params.id}
      <div className="border-2 p-3 rounded-lg">
        {posts
          .filter((post) => post.id == params.id)
          .map((post) => {
            return (
              <div>
                <p className="text-lg">{post.title}</p>
                <p className="text-slate-500">{post.body}</p>
              </div>
            );
          })}
      </div>
      <div className="border-2 mt-4 p-4 rounded-lg ">
        {comments
          .filter((comment,) => comment.postId == params.id)
          .map((comment,index) => {
            return (
              <div className={`flex flex-col border-2  gap-2 my-2 p-2 rounded-md ${index % 2==0?'border-zinc-200':'border-zinc-950'}`}>
                <div className="flex justify-between">
                  <p className="">name: {`${comment.name}`}</p>
                  <p className="text-pretty ">email :{`${comment.email}`}</p>
                </div>

                <p className="text-slate-500">{comment.body}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
