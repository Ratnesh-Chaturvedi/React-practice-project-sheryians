import React, { useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {
const ref=useRef(null)
  let data = [
    {
      desc:"This is description.",
      fileSize:".9mb",
      close: true,
      tags: {
        isopen: true,
        tagtitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "This is description 2.",
      fileSize: "1mb",
      close: false,
      tags: {
        isopen: false,
        tagtitle: "Upload Now",
        tagColor: "green",
      },
    },
    {
      desc: "Aloo 10 ka 2kg.",
      fileSize: "10mb",
      close: false,
      tags: {
        isopen: false,
        tagtitle: "Buy it",
        tagColor: "red",
      },
    },
  ];
  useState();
  return (
    <div  ref={ref} className="w-full h-full z-[3] fixed top-0 left-0 p-5 gap-10 flex flex-wrap">

{data.map((item,index)=>(
  <Cards key={index} data={item} refrence={ref}/>
))}
    </div>
  )
}

export default Foreground;
