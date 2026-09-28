import { motion } from "framer-motion";


const skills = [


  {
    category:"Frontend",

    skills:[

      {
        name:"React.js",
        level:"90%"
      },

      {
        name:"JavaScript",
        level:"85%"
      },

      {
        name:"Tailwind CSS",
        level:"90%"
      },

      {
        name:"HTML & CSS",
        level:"95%"
      }

    ]

  },




  {
    category:"Backend",

    skills:[

      {
        name:"Java",
        level:"80%"
      },

      {
        name:"Spring Boot",
        level:"75%"
      },

      {
        name:"REST API",
        level:"80%"
      }

    ]

  },





  {
    category:"Database",

    skills:[

      {
        name:"MySQL",
        level:"85%"
      },

      {
        name:"JPA / Hibernate",
        level:"75%"
      }

    ]

  }



];







function SkillsSection(){



  return(



    <section


      id="skills"


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

        max-w-7xl

        mx-auto

        relative

        z-10

        "


      >








        {/* Title */}




        <motion.h2



          initial={{

            opacity:0,

            y:40

          }}



          whileInView={{


            opacity:1,

            y:0


          }}



          transition={{


            duration:0.6


          }}



          viewport={{once:true}}



          className="


          text-4xl

          md:text-5xl

          font-bold

          text-center

          mb-14



          bg-linear-to-r

          from-green-400

          to-emerald-500



          text-transparent

          bg-clip-text


          "



        >


          My Skills



        </motion.h2>









        <div


          className="

          grid

          md:grid-cols-3

          gap-8

          "


        >









        {


          skills.map((category,index)=>(



            <motion.div



              key={index}



              initial={{


                opacity:0,

                y:50


              }}



              whileInView={{


                opacity:1,

                y:0


              }}



              transition={{


                duration:0.6,

                delay:index*0.2


              }}



              viewport={{once:true}}



              whileHover={{


                y:-10


              }}



              className="


              bg-[#0b0f0d]/80


              backdrop-blur-xl


              border

              border-green-500/20


              rounded-3xl


              p-7


              shadow-xl


              hover:shadow-green-500/20


              transition


              "



            >









              <h3


                className="


                text-2xl

                font-bold

                mb-8


                text-green-400


                "


              >


                {category.category}


              </h3>









              {


                category.skills.map((skill,i)=>(




                  <div


                    key={i}


                    className="mb-6"


                  >







                    <div


                      className="

                      flex

                      justify-between

                      mb-2

                      "


                    >




                      <span className="text-gray-200">


                        {skill.name}


                      </span>






                      <span className="text-green-400">


                        {skill.level}


                      </span>




                    </div>









                    {/* Progress Background */}



                    <div


                      className="

                      w-full

                      h-3

                      bg-black

                      rounded-full

                      overflow-hidden

                      border

                      border-green-500/20


                      "


                    >






                      <motion.div



                        initial={{


                          width:0


                        }}



                        whileInView={{


                          width:skill.level


                        }}



                        transition={{


                          duration:1.2,

                          delay:0.3


                        }}



                        viewport={{once:true}}



                        className="


                        h-full


                        rounded-full


                        bg-linear-to-r

                        from-green-400

                        to-emerald-600


                        shadow-[0_0_15px_#22c55e]


                        "



                      />






                    </div>








                  </div>



                ))



              }








            </motion.div>





          ))



        }






        </div>








      </div>






    </section>


  )


}



export default SkillsSection;