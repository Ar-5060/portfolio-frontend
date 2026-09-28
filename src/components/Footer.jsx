import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";


function Footer(){

  return (

    <footer

      className="
      relative
      bg-[#050505]
      text-white
      border-t
      border-green-500/20
      py-12
      px-8
      overflow-hidden
      "

    >


      {/* Glow */}

      <div

        className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2

        w-96
        h-32

        bg-green-500/20
        blur-3xl
        "

      />



      <div

        className="
        max-w-7xl
        mx-auto

        flex
        flex-col
        md:flex-row

        justify-between
        items-center

        gap-6

        relative
        z-10
        "

      >



        {/* Logo */}

        <a

          href="#home"

          className="
          text-3xl
          font-bold

          bg-linear-to-r
          from-green-400
          to-emerald-500

          text-transparent
          bg-clip-text

          drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]

          hover:scale-105
          transition
          duration-300

          "

        >

          Portfolio

        </a>




        {/* Copyright */}

        <p

          className="
          text-gray-400
          text-sm
          text-center
          "

        >

          © {new Date().getFullYear()} Anisur Rahman.
          <br className="md:hidden"/>
          {" "}All Rights Reserved.

        </p>




        {/* Social */}

        <div

          className="
          flex
          gap-4
          "

        >


          <a

            href="https://github.com/Ar-5060"

            target="_blank"

            rel="noreferrer"

            aria-label="Github"

            className="
            w-11
            h-11

            flex
            items-center
            justify-center

            rounded-full

            bg-white/5
            border
            border-green-500/20

            text-gray-400

            hover:text-green-400
            hover:border-green-400

            hover:scale-110

            transition
            duration-300

            "

          >

            <FaGithub/>

          </a>




          <a

            href="https://www.linkedin.com/in/anisur-rahman-swe"

            target="_blank"

            rel="noreferrer"

            aria-label="LinkedIn"

            className="
            w-11
            h-11

            flex
            items-center
            justify-center

            rounded-full

            bg-white/5

            border
            border-green-500/20

            text-gray-400

            hover:text-green-400
            hover:border-green-400

            hover:scale-110

            transition
            duration-300

            "

          >

            <FaLinkedin/>

          </a>



        </div>



      </div>


    </footer>

  );

}


export default Footer;