import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

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
          dialogboxmsg="Success"
        },
        (error) => {
          console.log(error.text);
          handleClickToOpen();
          dialogboxmsg="Failed"
        }
      );
  };
  return (
    <div>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          className="flex flex-col max-w-[600px] w-full"
          // onSubmit={sendemail}
          ref={form}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4"></p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Enter yout name"
            required
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button onClick={handleClickToOpen} className="text-white border-2 hover:bg-purple-500 hover:border-purple-500 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>

      {/* Dialog Box */}
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle >{dialogboxHeader}</DialogTitle>
        <DialogContent>
          <DialogContentText>Email sent Successfully.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleToClose} className="border-2 hover:bg-purple-500 hover:border-purple-500 px-4 py-3 my-8 mx-auto flex items-center">
            OK
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contact;
