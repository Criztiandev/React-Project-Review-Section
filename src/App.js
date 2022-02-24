import React, {useState } from 'react'
import './App.css';
import ReviewData from './Asset/Data/ReviewData';
import ReviewCard from './Components/ReviewCard';

export default function App() {
  const [index,setIndex] = useState(0)
  const [review,setReview] = useState(ReviewData)
  
  const display = review[index]


  function checkNumber(number){
    if(number > review.length - 1){ // if the number is greater than the last index of the array
      return 0 // return to the 0 index
    }else if(number < 0){ // of the number is less than zero
      return review.length - 1 // return the last index of the array
    }else{
      return number // just normal number
    }
  }

  function randomize(){
      const rand = Math.floor(Math.random() * review.length)// generating a random index
      return setIndex(rand) // insert it to the array
  }

  function increment(){
    setIndex(checkNumber(index + 1)) // incrementing
  }

  function decrement() {
    setIndex(checkNumber(index - 1)) // decrementing
  }


  function toggleLike(id){
      setReview(prev => { 
        return prev.map(e => {
          return e.id === id ? {...e, liked : !e.liked} : e // if the id we provide is equal to the id of review, then copy all the data and overide the liked and replace the opposite, else just return normal element
        })
      })
  }

  console.log(display)

  return (
      <div className="App">
       <header className="app-header">
          <h1 className='title'>Our Review</h1>
       </header>

        <main className="app-main">
          <ReviewCard
            {...display}
            increment = {increment}
            decrement = {decrement}
            randomize = {randomize}

            toggleLike = {toggleLike}
          />
        </main>

      </div>
  )
 
}
