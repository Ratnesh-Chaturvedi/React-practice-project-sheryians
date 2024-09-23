import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"


function Cards({data,refrence}) {

  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.1}} className="  flex-shrink-0 relative w-56 h-64 rounded-[25px] bg-pink-200 text-black px-4 py-6 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className=" footer absolute w-full bg-cyan-500 bottom-0  left-0 ">
        <div className="flex items-center px-3 py-4 mb-2 justify-between">
          <h5>{data.fileSize}</h5>
          <span className="w-5 h-5 bg-red-400 rounded-full flex items-center  justify-center">
            {data.close?<IoCloseSharp color="#000"/> :
            <FaDownload color="#000" />
            }
          </span>
        </div>
        {data.tags.isopen? <div className={`tag w-full  bg-green-400 flex items-center justify-center py-2`}>
          <h3 className="text-md font-semibold text-white ">{data.tags.tagtitle}</h3>
        </div> :null}

       
      </div>
    </motion.div>
  );
}

export default Cards;
