import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import { commentPost } from '../../actions/posts';
import useStyles from './styles';

const CommentSection = ({post})=> {
    const [comments, setComments] = useState(post?.comments)
    const [comment, setComment] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()
    const commentsRef = useRef()
    const user = JSON.parse(localStorage.getItem('profile'))

    const handleOnChange = (e)=>{
        setComment(e.target.value);
    }
    const handleOnClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`
        const newComments = await dispatch(commentPost(finalComment, post._id));
        setComments(newComments);
        setComment('');
        commentsRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant='h6'>Comment Section</Typography>
                {comments.map((c, i)=>(
                    <Typography key={i} gutterBottom variant='subtitle1'>
                        <strong>{c.split(': ')[0]}: </strong>
                        {c.split(': ')[1]}
                    </Typography>
                    ))}
                <div ref={commentsRef} />
            </div>
            {   user?.result?.name && (<div style={{width: '70%'}}>
                    <Typography gutterBottom variant='h6'>Write a comment</Typography>
                    <TextField fullWidth minRows={4} variant='outlined' label='Comment' multiline value={comment} onChange={handleOnChange}/>
                <Button style={{marginTop:'10px'}} fullWidth color='primary' disabled={!comment} variant='contained' onClick={handleOnClick}>Submit</Button>
            </div>)} 
        </div>
    )

}

export default CommentSection