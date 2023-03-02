import React from 'react'
import classes from "./Posts.module.css";
import { motion } from 'framer-motion';

function Posts(props) {
  return (
    <motion.div layout exit={{ opacity: 0, scale: 0}} className='flex flex-col gap-2 border border-[#0e1b22] bg-[#142c38] rounded-md px-4 text-justify py-4'>
        <h2 className='text-[#f8d351]'>{props.title}</h2>
        <p className={`${classes['text-box']}`}>{props.description}</p>
    </motion.div>
  )
}

export default Posts