import React from "react";

import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {


  // const handleClickToOpen = () => {
  //   setOpen(true);
  // };

  // const handleToClose = () => {
  //   setOpen(false);
  // };
  // const form = useRef();

  // const sendemail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_6cb2by9",
  //       "template_9iogpo8",
  //       form.current,
  //       "2NCi3llfjMC6yDg8x"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text, result.status);
         
  //         handleClickToOpen();

  //       },
  //       (error) => {
  //         console.log(error.text);
         
        
  //       }
  //     );
  // };
  return (
    <div>
      <div  name="contact"  className="w-full h-screen bg-footer_pattern bg-bottom bg-no-repeat flex justify-center items-center p-4"
      > <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
<div data-aos="zoom-in"className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-900 border-[#27b59f]">
            Contact
          </p>
          <p className="py-6">Reach out to Me Via.</p>
        </div>
<div className="flex flex-col justify-between items-center top-[25%] bottom-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/tahira-nawaz-6a0792130/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/tahira17"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a 
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:tahiranawaz12345@gmail.com"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
      </div>

</div>
    </div>
  );
};

export default Contact;
