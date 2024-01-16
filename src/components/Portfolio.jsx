import React from 'react'
import amazonClone from '../assets/portfolio/amazonClone.jpg'
import breakOut from '../assets/portfolio/breakOut.jpg'
import calculator from '../assets/portfolio/calculator.jpg'
import jobApplication from '../assets/portfolio/jobApplication.jpg'
import numberGuesser from '../assets/portfolio/numberGuesser.jpg'
import flipkartClone from '../assets/portfolio/flipkartClone.jpg'

const Portfolio = () => {

    const portfolios=[
        {
            id: 1,
            src: amazonClone
        },
        {
            id: 2,
            src: breakOut
        },
        {
            id: 3,
            src: calculator
        },
        {
            id: 4,
            src: jobApplication
        },
        {
            id: 5,
            src: numberGuesser
        },
        {
            id: 6,
            src: flipkartClone
        },
    ]
  return (
    <div class="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"> 
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14 px-12 sm:px-0">
            {
                portfolios.map(({id, src}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img 
                    src={src} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                </div>
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default Portfolio