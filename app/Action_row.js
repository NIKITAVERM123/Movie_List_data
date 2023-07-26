"use client";
import {useState} from 'react';


const Action_row = ({onDelete}) => {

    
            
    return(
        <>
        <div className="like_row">
            <div className="like-btn">
                <img className="like_image" src="Icon - Like.png" onClick={handleLike} />
            </div>
            <div className="vote">
                <span style={{color:"white"}}>{rating}</span>
            </div>
            <div className="dislike-btn">
                <img className="dislike_image" src="dislike.png" onClick={handleDislike} />
            </div> 
            <div className="movie_row4">
                <img className="image_first5" src="fluent_delete-32-regular.png" onClick={onDelete} />
            </div>
        </div>
        </>
    );

};
export default Action_row;


