import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);


  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
  ];


  // Shrink navbar on scroll
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  // Active section detection
  useEffect(() => {

    const sections = document.querySelectorAll("section");


    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if(entry.isIntersecting){
            setActive(entry.target.id);
          }

        });

      },

      {
        threshold: 0.5
      }

    );


    sections.forEach(section => observer.observe(section));


    return () => {
      sections.forEach(section => observer.unobserve(section));
    };


  }, []);



  return (

    <nav

      className={`
      fixed
      top-0
      left-0
      w-full
      z-50

      transition-all
      duration-500

      border-b
      border-green-500/20

      ${
        scrolled
        ?
        "bg-black/80 backdrop-blur-xl shadow-lg shadow-green-500/20"
        :
        "bg-black/40 backdrop-blur-2xl"
      }
      `}

    >


      <div

        className={`
        max-w-7xl
        mx-auto
        px-8

        flex
        justify-between
        items-center

        transition-all
        duration-500

        ${
          scrolled
          ?
          "py-2"
          :
          "py-4"
        }

        `}

      >


        {/* Logo */}

        <a

          href="#home"

          className={`
          font-bold

          transition-all
          duration-500

          bg-linear-to-r
          from-green-400
          to-emerald-500

          text-transparent
          bg-clip-text

          drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]

          ${
            scrolled
            ?
            "text-2xl"
            :
            "text-3xl"
          }

          `}

        >

          Portfolio

        </a>



        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-lg">


          {
            menuItems.map(item => {

              const id = item.toLowerCase();


              return (

                <a

                  key={id}

                  href={`#${id}`}

                  className={`
                  relative
                  transition-all
                  duration-300

                  ${
                    active === id
                    ?
                    "text-green-400"
                    :
                    "text-gray-300 hover:text-white"
                  }

                  `}

                >

                  {item}


                  <span

                    className={`
                    absolute
                    left-0
                    -bottom-2

                    h-0.5

                    bg-green-400

                    shadow-[0_0_10px_#22c55e]

                    transition-all
                    duration-300

                    ${
                      active === id
                      ?
                      "w-full"
                      :
                      "w-0"
                    }

                    `}

                  />

                </a>

              );

            })

          }


        </div>



        {/* Mobile Button */}

        <button

          onClick={() => setOpen(!open)}

          className="
          md:hidden
          text-2xl
          text-green-400
          "

        >

          {
            open
            ?
            <FaTimes/>
            :
            <FaBars/>
          }


        </button>


      </div>




      {/* Mobile Menu */}

      {
        open && (

          <motion.div

            initial={{
              opacity:0,
              y:-20
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.3
            }}

            className="
            md:hidden
            bg-black/90
            backdrop-blur-xl
            border-t
            border-green-500/20
            px-8
            pb-6
            "

          >


            <div className="flex flex-col gap-5 text-lg">


              {
                menuItems.map(item => {

                  const id = item.toLowerCase();


                  return (

                    <a

                      key={id}

                      href={`#${id}`}

                      onClick={() => setOpen(false)}

                      className={`
                      transition

                      ${
                        active === id
                        ?
                        "text-green-400"
                        :
                        "text-gray-300"
                      }

                      `}

                    >

                      {item}

                    </a>

                  );

                })

              }


            </div>


          </motion.div>

        )
      }


    </nav>

  );

}


export default Navbar;