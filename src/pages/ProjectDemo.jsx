import { FaYoutube } from "react-icons/fa";


function ProjectDemo(){


  return(

    <section

      className="
      min-h-screen

      bg-[#050505]

      text-white

      flex

      items-center

      justify-center

      px-8

      pt-24

      "

    >


      <div

        className="
        text-center

        max-w-3xl

        "

      >



        <div

          className="
          flex

          justify-center

          mb-8

          "

        >

          <FaYoutube

            className="
            text-7xl

            text-green-400

            "

          />

        </div>





        <h1

          className="
          text-4xl

          md:text-5xl

          font-bold


          bg-linear-to-r

          from-green-400

          to-emerald-500


          text-transparent

          bg-clip-text


          mb-6

          "

        >

          Live Demo Coming Soon

        </h1>





        <p

          className="
          text-gray-400

          text-lg

          "

        >

          The complete YouTube project walkthrough
          will be uploaded soon.

          This demo will showcase the project's
          features, workflow and user experience.

        </p>



      </div>


    </section>


  );


}


export default ProjectDemo;