import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { toast, ToastContainer } from 'react-toastify';

const RecipesCard = ({recipe}) => {
    const notify = () => toast("Wow so easy!");
    const {name,ingredients,method,recipe_picture,rating} = recipe
    return (
<div className="card md:w-96 rounded-sm w-full bg-base-100 shadow-md mx-auto mb-8">
    <ToastContainer/>
  <figure><img src={recipe_picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      <div className="badge  bg-green-600 text-xl p-4">{name}</div>
    </h2>
    <div className="card-actions justify-between">
     <div>
        <h2 className='text-xl mb-3 font-bold'>Ingredients:</h2>
      <div className="flex flex-col gap-3">
      {
      Object.values(ingredients).map((ingredient, index) => (
        <div key={index} className="badge badge-outline">{ingredient}</div>
      ))
    }
      </div>
      </div>
      <p>{method}</p>
      <div className="inline-flex ">
      <Rating 
  placeholderRating={rating.number}
  readonly
  emptySymbol={<FaRegStar className='text-xl'/>}
  placeholderSymbol={<FaStar className='text-orange-400 text-xl' />}
  fullSymbol={<FaStar className='text-xl'/>}
/>
<div className="badge badge-primary">{rating.number}</div>
      </div>
    </div>
  </div>
  <button className='btn btn-outline btn-success rounded-sm' onClick={notify} disabled={toast.isActive('Added to Favourites!')} >Add To Favourite</button>
</div>

    );
};

export default RecipesCard;