import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "react-scroll";


const Contact = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };
  const form = useRef();

  const sendemail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6cb2by9",
        "template_9iogpo8",
        form.current,
        "2NCi3llfjMC6yDg8x"
      )
      .then(
        (result) => {
          console.log(result.text, result.status);
          // clearState();
          handleClickToOpen();
          // dialogboxmsg="Success"
        },
        (error) => {
          console.log(error.text);
         
          // dialogboxmsg="Failed"
        }
      );
  };
  return (
    <div>
      <div 
        name="contact"
        className="w-full h-screen bg-footer_pattern bg-bottom bg-no-repeat flex justify-center items-center p-4"
      >
        <form data-aos="zoom-in"
          className="flex flex-col max-w-[600px] w-full"
          onSubmit={sendemail}
          ref={form}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-purple-500 text-gray-500">
              Contact
            </p>
            <p className="text-gray-300 py-4"></p>
          </div>
          <input
            className="bg-[#aaedf2] p-2"
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#aaedf2]"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
          <textarea
            className="bg-[#aaedf2] p-2"
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button className="text-white border-2 bg-purple-500 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>

      {/* Dialog Box */}
      <Dialog  open={open} onClose={handleToClose}>
        <DialogTitle >Message</DialogTitle>
        <DialogContent style={{height:'58px' , width :'400px'}} >
          <DialogContentText>Email sent Successfully.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  className="border-2 hover:bg-purple-500 hover:border-purple-500 px-4 py-3 my-8 mx-auto flex items-center">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contact;
