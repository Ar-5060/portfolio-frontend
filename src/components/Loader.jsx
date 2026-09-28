import { motion } from "framer-motion";



function Loader(){



  return(



    <div


      className="

      h-screen

      bg-[#050505]

      flex

      items-center

      justify-center

      overflow-hidden

      "


    >






      <div className="relative">






        {/* Outer Ring */}



        <motion.div


          animate={{

            rotate:360

          }}



          transition={{


            duration:1.5,

            repeat:Infinity,

            ease:"linear"


          }}



          className="


          w-24

          h-24


          rounded-full


          border-4


          border-transparent


          border-t-green-400


          border-r-emerald-500


          shadow-[0_0_30px_#22c55e]


          "


        />









        {/* Center Dot */}



        <motion.div


          animate={{


            scale:[1,1.4,1]


          }}



          transition={{


            duration:1,

            repeat:Infinity


          }}



          className="


          absolute

          inset-0

          m-auto


          w-8

          h-8


          rounded-full


          bg-green-400


          shadow-[0_0_25px_#22c55e]


          "


        />







      </div>






    </div>


  )

}



export default Loader;