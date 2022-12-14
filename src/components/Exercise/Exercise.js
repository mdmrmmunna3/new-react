import React from 'react';
import './Exercise.css'
const Exercise = ({exercise,handleAddToList}) => {
    // console.log(props.exercise)
    // const {exercise,handleAddToList} = props
    
    const {img, name, desciption, time} = exercise;
    return (
            
            <div className='execrise '>
                <img src={img} alt="" />
                <div className='execrise-info'>
                    <p className='fw-bold'> {name}</p>
                    <p className='description'>{desciption}</p>
                    <p className='fw-bold timing'>Time required : {time}min</p>
                </div>
                <button onClick={()=>handleAddToList(exercise)} className='add-btn'>
                    <p>Add To List</p>
                </button>
            </div>
    );
};

export default Exercise;
