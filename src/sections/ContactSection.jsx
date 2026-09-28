import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt
} from "react-icons/fa";


import { sendMessage } from "../services/api";



function ContactSection(){


  const [formData,setFormData] = useState({

    name:"",
    email:"",
    message:""

  });



  const handleChange = (e)=>{

    const {name,value}=e.target;


    setFormData({

      ...formData,

      [name]:value

    });

  };




  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      await sendMessage(formData);


      alert("Message sent successfully");


      setFormData({

        name:"",
        email:"",
        message:""

      });


    }
    catch(error){

      console.log(error);

      alert("Failed to send message");

    }


  };




  return(


<section

id="contact"

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
relative
z-10
"

>



{/* Heading */}


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


viewport={{
once:true
}}


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

Contact Me

</motion.h2>







<div

className="
grid
md:grid-cols-2
gap-10
"

>






{/* Contact Information */}



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
duration:0.7
}}


viewport={{
once:true
}}

>


<h3

className="
text-3xl
font-semibold
mb-5
"

>

Let's work together

</h3>



<p

className="
text-gray-400
text-lg
mb-8
"

>

Have a project idea or want to collaborate?
Feel free to contact me.

</p>





<div className="space-y-5">



<ContactCard

icon={<FaEnvelope/>}

title="Email"

value="Arrahman5060@gmail.com"

/>




<ContactCard

icon={<FaMapMarkerAlt/>}

title="Location"

value="Dhaka,Bangladesh"

/>





<ContactCard

icon={<FaGithub/>}

title="Github"

value="https://github.com/Ar-5060"

/>





<ContactCard

icon={<FaLinkedin/>}

title="LinkedIn"

value="https://www.linkedin.com/in/anisur-rahman-swe"

/>




</div>



</motion.div>










{/* Contact Form */}




<motion.form


onSubmit={handleSubmit}



initial={{
opacity:0,
x:50
}}



whileInView={{
opacity:1,
x:0
}}



transition={{
duration:0.7
}}



viewport={{
once:true
}}



className="

bg-[#0b0f0d]/80

backdrop-blur-xl

border

border-green-500/20

rounded-3xl

p-8

shadow-xl

"



>




<input


type="text"


name="name"


value={formData.name}


onChange={handleChange}


placeholder="Your Name"



className="

w-full

mb-5

px-5

py-3


rounded-xl


bg-black/50


border

border-green-500/20


text-white


outline-none


focus:ring-2

focus:ring-green-500

"

/>






<input


type="email"


name="email"


value={formData.email}


onChange={handleChange}


placeholder="Your Email"



className="

w-full

mb-5

px-5

py-3


rounded-xl


bg-black/50


border

border-green-500/20


text-white


outline-none


focus:ring-2

focus:ring-green-500

"

/>







<textarea


rows="5"


name="message"


value={formData.message}


onChange={handleChange}


placeholder="Your Message"



className="

w-full

mb-5

px-5

py-3


rounded-xl


bg-black/50


border

border-green-500/20


text-white


outline-none


focus:ring-2

focus:ring-green-500

"



/>








<button


type="submit"



className="

w-full


py-3


rounded-xl


font-semibold



bg-linear-to-r


from-green-500


to-emerald-600



shadow-lg


shadow-green-500/30



hover:scale-105



transition

"



>

Send Message

</button>






</motion.form>







</div>



</div>



</section>



  )

}







function ContactCard({icon,title,value}){


return(


<div

className="

flex

items-center

gap-4


bg-[#0b0f0d]/80


backdrop-blur-xl


border

border-green-500/20


p-4


rounded-2xl



hover:-translate-y-2


hover:border-green-400/50



transition

"

>



<div

className="

text-green-400

text-2xl

"

>

{icon}

</div>




<div>


<p

className="text-sm text-gray-400"

>

{title}

</p>



<p

className="text-gray-200 break-all"

>

{value}

</p>



</div>



</div>


)


}





export default ContactSection;