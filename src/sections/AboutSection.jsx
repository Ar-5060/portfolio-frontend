import { motion } from "framer-motion";



function AboutSection(){


  return(


    <section


      id="about"


      className="

      relative

      bg-[#050505]

      text-white

      py-24

      px-8

      overflow-hidden

      "


    >






      {/* Background Glow */}



      <div


        className="

        absolute

        top-20

        left-20

        w-72

        h-72

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

        w-72

        h-72

        bg-emerald-500/20

        rounded-full

        blur-3xl

        "


      />









      <div


        className="

        max-w-6xl

        mx-auto

        grid

        md:grid-cols-2

        gap-12

        items-center

        relative

        z-10

        "


      >









        {/* About Content */}




        <motion.div



          initial={{


            opacity:0,

            x:-50


          }}



          whileInView={{


            opacity:1,

            x:0


          }}



          transition={{


            duration:0.8


          }}



          viewport={{once:true}}



        >






          <h2


            className="


            text-4xl

            md:text-5xl

            font-bold

            mb-6


            bg-linear-to-r

            from-green-400

            to-emerald-500


            text-transparent

            bg-clip-text


            "


          >

            About Me


          </h2>









          <p


            className="

            text-gray-400

            text-lg

            leading-relaxed

            mb-5

            "


          >

            I am a Full Stack Developer passionate about
            creating modern, responsive and scalable web
            applications with clean and efficient code.


          </p>







          <p


            className="

            text-gray-400

            text-lg

            leading-relaxed

            "


          >

            My focus is building frontend experiences
            using React and Tailwind CSS while developing
            powerful backend systems with Spring Boot
            and MySQL.


          </p>









          {/* Stats */}



          <div


            className="

            grid

            grid-cols-3

            gap-4

            mt-8

            "


          >






            <div


              className="

              bg-[#0b0f0d]/80

              backdrop-blur-xl

              border

              border-green-500/20

              rounded-xl

              p-4

              text-center

              hover:shadow-green-500/20

              hover:shadow-xl

              transition

              "


            >

              <h3 className="text-3xl font-bold text-green-400">

                10+

              </h3>


              <p className="text-gray-400 text-sm">

                Projects

              </p>


            </div>








            <div


              className="

              bg-[#0b0f0d]/80

              backdrop-blur-xl

              border

              border-green-500/20

              rounded-xl

              p-4

              text-center

              hover:shadow-green-500/20

              hover:shadow-xl

              transition

              "


            >

              <h3 className="text-3xl font-bold text-green-400">

                5+

              </h3>


              <p className="text-gray-400 text-sm">

                Technologies

              </p>


            </div>








            <div


              className="

              bg-[#0b0f0d]/80

              backdrop-blur-xl

              border

              border-green-500/20

              rounded-xl

              p-4

              text-center

              hover:shadow-green-500/20

              hover:shadow-xl

              transition

              "


            >

              <h3 className="text-3xl font-bold text-green-400">

                100%

              </h3>


              <p className="text-gray-400 text-sm">

                Dedication

              </p>


            </div>






          </div>







        </motion.div>















        {/* Journey Card */}





        <motion.div



          initial={{


            opacity:0,

            x:50


          }}



          whileInView={{


            opacity:1,

            x:0


          }}



          transition={{


            duration:0.8


          }}



          viewport={{once:true}}



          className="

          bg-[#0b0f0d]/70

          backdrop-blur-2xl

          border

          border-green-500/20

          rounded-3xl

          p-8

          shadow-xl

          "


        >







          <h3


            className="

            text-3xl

            font-semibold

            mb-8

            text-green-400

            "


          >

            Developer Journey


          </h3>








          <div className="space-y-6">






            <div className="flex gap-4">


              <span className="text-green-400 text-xl">

                01

              </span>


              <p className="text-gray-300">

                Learning modern web technologies

              </p>


            </div>







            <div className="flex gap-4">


              <span className="text-green-400 text-xl">

                02

              </span>


              <p className="text-gray-300">

                Building Full Stack applications

              </p>


            </div>








            <div className="flex gap-4">


              <span className="text-green-400 text-xl">

                03

              </span>


              <p className="text-gray-300">

                Creating real-world projects

              </p>


            </div>








            <div className="flex gap-4">


              <span className="text-green-400 text-xl">

                04

              </span>


              <p className="text-gray-300">

                Improving software engineering skills

              </p>


            </div>







          </div>









          <div className="mt-8">


            <h4 className="text-gray-400 mb-4">

              Current Stack

            </h4>





            <div className="flex flex-wrap gap-3">



              <span className="

              px-4

              py-2

              rounded-full

              bg-green-500/10

              border

              border-green-500/30

              text-green-400

              ">

                React

              </span>





              <span className="

              px-4

              py-2

              rounded-full

              bg-green-500/10

              border

              border-green-500/30

              text-green-400

              ">

                Tailwind

              </span>





              <span className="

              px-4

              py-2

              rounded-full

              bg-green-500/10

              border

              border-green-500/30

              text-green-400

              ">

                Spring Boot

              </span>





              <span className="

              px-4

              py-2

              rounded-full

              bg-green-500/10

              border

              border-green-500/30

              text-green-400

              ">

                MySQL

              </span>



            </div>



          </div>







        </motion.div>







      </div>





    </section>


  )

}



export default AboutSection;