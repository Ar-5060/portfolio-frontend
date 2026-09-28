import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import profile from "../assets/images/profile.png";


function Hero(){


  return(


    <section

      id="home"

      className="
      relative
      min-h-screen
      flex
      items-center

      bg-[#050505]
      text-white

      px-8
      pt-24

      overflow-hidden
      "

    >




      {/* Glow Background */}


      <div

        className="
        absolute
        top-20
        left-20

        w-80
        h-80

        bg-green-500/20

        rounded-full

        blur-3xl
        "

      />



      <div

        className="
        absolute
        bottom-20
        right-20

        w-80
        h-80

        bg-emerald-500/20

        rounded-full

        blur-3xl
        "

      />





      {/* Grid */}

      <div

        className="
        absolute
        inset-0

        cyber-grid

        opacity-40
        "

      />







      <div

        className="
        max-w-7xl
        mx-auto

        grid

        md:grid-cols-2

        gap-10

        items-center

        relative

        z-10

        "

      >





        {/* Left Content */}



        <motion.div


          initial={{

            opacity:0,

            x:-50

          }}


          animate={{

            opacity:1,

            x:0

          }}


          transition={{

            duration:0.8

          }}

        >




          <p

            className="
            text-green-400

            text-xl

            mb-4

            "

          >

            Hello, I'm

          </p>






          <h1

            className="

            text-5xl

            md:text-6xl

            font-bold

            mb-5


            bg-linear-to-r

            from-green-400

            to-emerald-500


            text-transparent

            bg-clip-text

            "

          >

            Anisur Rahman

          </h1>







          <motion.h2


            animate={{

              opacity:[0.8,1,0.8]

            }}


            transition={{

              duration:3,

              repeat:Infinity

            }}



            className="

            text-3xl

            md:text-4xl

            font-bold

            mb-5

            text-green-300

            "

          >



            <TypeAnimation

              sequence={[

                "Full Stack Developer",
                2000,

                "React Developer",
                2000,

                "Spring Boot Developer",
                2000,

                "Software Engineer",
                2000

              ]}


              speed={60}

              repeat={Infinity}

            />


          </motion.h2>







          <p

            className="
            text-gray-400

            text-lg

            mb-8

            max-w-xl

            "

          >

            I build modern, scalable and responsive web applications
            using React, Tailwind CSS, Spring Boot and MySQL.


          </p>








          {/* Buttons */}



          <div

            className="
            flex

            gap-5

            mb-8

            flex-wrap

            "

          >





            {/* Github */}


            <a

              href="https://github.com/Ar-5060"

              target="_blank"

              rel="noreferrer"


              className="

              flex

              items-center

              gap-2


              px-6

              py-3


              rounded-xl


              bg-linear-to-r

              from-green-500

              to-emerald-600


              text-black


              font-semibold


              shadow-lg

              shadow-green-500/30


              hover:scale-105


              transition

              "

            >

              <FaGithub/>

              Github


            </a>







            {/* LinkedIn */}



            <a


              href="https://www.linkedin.com/in/anisur-rahman-swe"


              target="_blank"


              rel="noreferrer"



              className="

              flex

              items-center

              gap-2


              px-6

              py-3


              rounded-xl


              border

              border-green-500/40


              text-white


              hover:bg-green-500/10


              hover:scale-105


              transition

              "

            >

              <FaLinkedin/>

              LinkedIn


            </a>








            {/* Resume */}



            <a


              href="/resume.pdf"


              target="_blank"


              rel="noreferrer"



              className="

              flex

              items-center

              gap-2


              px-6

              py-3


              rounded-xl


              border

              border-emerald-500/40


              text-white


              hover:bg-emerald-500/10


              hover:scale-105


              transition

              "

            >

              <FaFilePdf/>

              View Resume


            </a>





          </div>







        </motion.div>









        {/* Profile Image */}




        <motion.div



          initial={{

            opacity:0,

            scale:0.5

          }}



          animate={{

            opacity:1,

            scale:1,

            y:[0,-15,0]

          }}



          transition={{

            duration:0.8,


            y:{

              duration:4,

              repeat:Infinity

            }

          }}



          className="

          flex

          justify-center

          "

        >





          <div

            className="

            relative

            w-80

            h-80

            flex

            items-center

            justify-center

            "

          >





            {/* Glow Ring */}



            <motion.div


              animate={{

                scale:[1,1.2,1],

                opacity:[0.4,0,0.4]

              }}


              transition={{

                duration:2,

                repeat:Infinity

              }}



              className="

              absolute

              w-80

              h-80

              rounded-full

              bg-green-500

              blur-3xl

              "

            />








            {/* Rotating Border */}



            <motion.div


              animate={{

                rotate:360

              }}


              transition={{

                duration:5,

                repeat:Infinity,

                ease:"linear"

              }}


              className="

              absolute

              w-80

              h-80

              rounded-full


              border-4

              border-transparent


              border-t-green-400

              border-r-emerald-500


              shadow-[0_0_30px_#22c55e]

              "

            />









            {/* Image */}



            <div

              className="

              w-72

              h-72


              rounded-full


              overflow-hidden


              border-4


              border-black


              z-10

              "

            >



              <img

                src={profile}

                alt="Profile"

                className="

                w-full

                h-full

                object-cover

                "

              />


            </div>






          </div>





        </motion.div>






      </div>






    </section>


  );


}



export default Hero;