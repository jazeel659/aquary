"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Post from '../app/components/post'
import { useRouter } from "next/navigation";
export default function Home() {
  const [posts, setposts] = useState([{ name: "home" }]);
  const [comments, setcomments] = useState([]);
  const [users, setusers] = useState([]);
  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");

    setposts(await response1.json());
    setcomments(await response.json());
    console.log(posts);
  }
  const router = useRouter();
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" flex flex-col gap-2  justify-center items-center w-full">
      {posts.map((ele, i) => {
        return (
        <Post ele={ele}></Post>
        );
      })}
    </div>
  );
}
