import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias quaerat veritatis vel quam id commodi reiciendis optio aliquam rem doloremque quia incidunt accusantium consectetur sed dicta sint dolorem laborum excepturi facilis cumque error. Ab unde temporibus fugit sed ex?
        </p>

        <br />

        <p className='text-xl'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, dolorem tempora quisquam, fugiat beatae earum iste cumque, consequatur distinctio voluptates tenetur quasi. Aut itaque, eius vel quam molestiae, culpa necessitatibus repellendus voluptatum ea sed corrupti suscipit eveniet mollitia. Voluptatum corporis pariatur dicta dolorem numquam inventore, accusamus itaque modi tenetur iste!
        </p>
      </div>
    </div>
  )
}

export default About