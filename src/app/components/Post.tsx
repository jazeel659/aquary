import React from 'react'
import { useRouter } from "next/navigation";

export default function Post({ele,i}:{element:{userId:string,id:string,title:string,body:string},i:number}) {
    const router = useRouter();

    return (
    <div
    key={i}
    className={`border-2  rounded-md m-2 w-1/2 p-3 cursor-pointer ${
      i % 2 == 0 ? "border-y-gray-700" : "border-x-gray-700"
    }`}
    onClick={() => {
      router.push(`/posts/${ele.id}`, { data: ele });
    }}
  >
    <div className="flex justify-between">
      <p>{ele.id}</p>
      <p>{ele.userId}</p>
    </div>

    <p>{ele.title}</p>
  </div>
  )
}
