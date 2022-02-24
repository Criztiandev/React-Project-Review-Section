import React from 'react'
import {FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight,FaRandom,FaRegHeart,FaHeart,FaStar} from "react-icons/fa"
export default function ReviewCard(props) {

    const likeIcon =  props.liked ? <FaHeart className='heart'/> : <FaRegHeart className='heart'/> 
  return (
    <div className='review-container'>
        
        <div className="user-container">
           

            <div className="user-info">
                <img src={props.image} alt="name" />
                <div className="user-description">
                    <h1 className="name">{props.name}</h1>
                    <h4 className='job'>{props.job}</h4>
                </div>
            </div>

            <div className="rating"> <FaStar />{props.rate}/10</div>
        </div>

        <p className="user-comment">{props.text}</p>

        <div className="btns">

            <div className="reaction">
                <button onClick={() => props.toggleLike(props.id)}>{likeIcon}</button>
            </div>

            <div className="pagination">
                <button onClick={props.decrement}>
                    <FaRegArrowAltCircleLeft />
                </button>

                <button onClick={props.randomize} >
                    <FaRandom className='random' />
                </button>

                <button onClick={props.increment} >
                    <FaRegArrowAltCircleRight />
                </button>
            </div>
        </div>
    </div>
  )
}
