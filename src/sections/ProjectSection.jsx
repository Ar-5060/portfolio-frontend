import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { projects } from "../data/portfolioData";


function ProjectSection(){


  return(


    <section

      id="projects"

      className="
      py-20
      px-8
      bg-[#050505]
      text-white
      "

    >


      <div

        className="
        max-w-7xl
        mx-auto
        "

      >



        <h2

          className="
          text-4xl
          md:text-5xl

          font-bold

          text-center

          mb-12


          bg-linear-to-r
          from-green-400
          to-emerald-500


          text-transparent
          bg-clip-text

          "

        >

          My Projects

        </h2>






        <div

          className="
          grid

          md:grid-cols-3

          gap-8

          "

        >



        {

          projects.map((project,index)=>(



            <motion.div


              key={project.id}


              initial={{

                opacity:0,

                y:40

              }}


              whileInView={{

                opacity:1,

                y:0

              }}


              transition={{

                duration:0.5,

                delay:index*0.1

              }}


              viewport={{

                once:true

              }}



              className="

              bg-[#0b0f0d]

              rounded-2xl

              overflow-hidden


              border

              border-green-500/20


              hover:border-green-400


              transition

              "

            >




              {/* Image */}

              <img

                src={project.image}

                alt={project.title}


                className="
                w-full
                h-48

                object-cover

                "

              />






              <div

                className="
                p-6
                "

              >



                <h3

                  className="
                  text-2xl

                  font-bold

                  text-green-400

                  mb-3

                  "

                >

                  {project.title}

                </h3>





                <p

                  className="
                  text-gray-400

                  mb-5

                  "

                >

                  {project.description}

                </p>






                <div

                  className="
                  flex
                  flex-wrap

                  gap-2

                  mb-6

                  "

                >

                {

                  project.tech.map((item)=>(


                    <span

                      key={item}

                      className="
                      px-3
                      py-1

                      rounded-full

                      bg-green-500/10

                      text-green-300

                      text-sm

                      "

                    >

                      {item}

                    </span>


                  ))

                }

                </div>






                <div

                  className="
                  flex
                  gap-5
                  "

                >



                  <a

                    href={project.github}

                    target="_blank"

                    rel="noreferrer"


                    className="
                    flex
                    items-center

                    gap-2

                    text-green-400

                    "

                  >

                    <FaGithub/>

                    Github

                  </a>







                  <Link

                    to={project.live}


                    className="
                    flex

                    items-center

                    gap-2

                    text-gray-300

                    hover:text-white

                    "

                  >

                    <FaExternalLinkAlt/>

                    Live

                  </Link>




                </div>



              </div>



            </motion.div>



          ))

        }



        </div>



      </div>



    </section>


  );

}


export default ProjectSection;