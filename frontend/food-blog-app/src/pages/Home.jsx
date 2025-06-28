import React from 'react'
import foodRecipe from '../assets/foodRecipe.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddFoodRecipe from './AddFoodRecipe';
import RecipeItems from '../components/RecipeItems';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import InputForm from '../components/InputForm';
import { useState } from 'react';




export default function Home() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const addRecipe=()=>{
        let token=localStorage.getItem("token");
        if(token)
              navigate('/addRecipe');
        else{
            setIsOpen(true);
        }
      
    }
    return (
        <>
            <section className="home">
                <div className='left'>
                    <h1>Food Recipe</h1>
                    <h5>Welcome to your go-to destination for simple, delicious, and home-cooked recipes! Whether you're a beginner in the kitchen or a seasoned cook, our easy-to-follow recipes bring global flavors right to your plate. From comforting Indian curries to classic pasta, quick snacks to festive biryani's — every dish is curated for taste, simplicity, and joy. Cook with love, share with family, and explore the world of flavors from your own kitchen. </h5>
                    <button onClick={addRecipe}>Share your recipe</button>
                    </div>
                    <div className='right'>
                        <img src={foodRecipe} width="320px" height="300px"></img>
                    </div>
            </section>
            <div className='bg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fillOpacity="1" d="M0,256L40,224C80,192,160,128,240,112C320,96,400,128,480,144C560,160,640,160,720,149.3C800,139,880,117,960,133.3C1040,149,1120,203,1200,213.3C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

            </div>
            {(isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}
            <div className='recipe'>

                <RecipeItems/>
            </div>
        </> 
    )
}
