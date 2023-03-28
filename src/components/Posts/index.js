import './style.css'
import { Avatar } from '@mui/material'
import InputOption from '../Feed/inputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import React, { forwardRef } from 'react';

const Posts = forwardRef(({name,description,message,photoUrl}, ref) => {
  return (
    <div ref = {ref} className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="J'aime" color='gray'/>
            <InputOption Icon={CommentOutlinedIcon} title="Commenter" color='gray'/>
            <InputOption Icon={ReplyAllOutlinedIcon} title="Republier" color='gray'/>
            <InputOption Icon={SendOutlinedIcon} title="Envoyer" color='gray'/>
        </div>
    </div>
  )
})

export default Posts