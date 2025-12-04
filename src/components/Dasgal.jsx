import React from 'react'

const Dasgal = () => {
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#111" }} >
           <section className=" text-white p-10 flex flex-col " style={{ backgroundColor: "#f08e80" }}>
            <div className="relative">
                <button className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded">
                      Contact Me
                </button>
            <section>Blog   Speaking Events</section>
            </div>
            <h1 className='text-center text-xl'>Hazel</h1>
            <h1 className="text-4xl font-serif max-w-2xl " >
            I’m a <span className="font-semibold">Scientist</span> and Speaker who is interested in thepsychology of greed.</h1>
            <div className="mt-10 ">
            <h3 className="font-semibold justify-end">My Mission</h3>
            <h3 className="text-sm mt-2 max-w-md mx-50  max-w-xl mx-auto text-center">
           This is my mission. Maecenas a varius odio egestas auctor. Praesent facilisis, ex a gravida ultricies,
            quam sed magna placerat eros, et vehicula lectus ligula id dui.
             Aliquam uto cursus velit ut eros lorem ipsum ullamcorper iaculis.</h3>
        </div>
        <div className="mt-10 ">
            <h3 className="font-semibold mb-2 ">Specialties</h3>
            <ul className="text-sm   grid grid-cols-2 gap-1 max-w-sm mx-auto text-center mx-50  " >
            <li>Public Speaking</li>
            <li>Data Analysis</li>
            <li>Writing & Editing</li>
            <li>Programming</li>
            <li>User Interviews</li>
            <li>Front-end dev</li>
            </ul>
            </div>
            </section>
        
        <section className="p-10 ">
       

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">This Is Your Brain On Helium</h4>
            <p className="text-md text-gray-500 mx-50  max-w-xl mx-auto text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />  
                 Dolorum, voluptate softness pleasures iure harum autem dore aut cum. Dolorem,<br /> molestiae animi nisi esse quam quo optio!
            Quidem nobis inventore voluptatum. <br />May 12, 2025</p>
          </div>

          <div>
            <h4 className="font-semibold">In Search Of Intelligence</h4>
            <p className="text-md text-gray-500 mx-50  max-w-xl mx-auto text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Dolorum,
                 voluptate softness pleasures iure harum autem dore aut cum. Dolorem,<br />molestiae animi nisi esse quam quo optio!
                  Quidem nobis inventore voluptatum. <br />
            June 2, 2025</p>
          </div>

          <div>
            <h4 className="font-semibold ">Should Public Transit Be Free?</h4>
            <p className="text-md text-gray-500 mx-50  max-w-xl mx-auto text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                 Dolorum, voluptate softness pleasures iure harum autem dore aut cum. <br /> Dolorem, molestiae animi nisi esse optio! 
                  Quidem nobis inventore voluptatum. <br /> March 17, 2025</p>
          </div>
        </div>
        </section>

        <section className="bg-amber-100 p-10" >
        <h2 className="font-semibold mb-4">Speaking Events</h2>

        <ul className="text-md space-y-3 mx-50  max-w-xl mx-auto text-center">
          <li>
            <strong>NY Economics Forum</strong> — August 25th, 2025
          </li>
          <li>
            <strong>Emerging Tech Meet-Up</strong> — August 25th, 2025
          </li>
          <li>
            <strong>Creative Code Meetup</strong> — August 22nd, 2025
          </li>
        </ul>
      </section>
      
      <footer style={{ background: "#0b0b0b", color: "#fff", padding: "24px 80px", textAlign: "center" }}>
        <div style={{ marginBottom: 8 }}>⬛🟦  </div>
        <div style={{ marginBottom: 8 }}>Made With ❤️ </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}></div>
      </footer>
    </div>   
  )
}

export default Dasgal;  