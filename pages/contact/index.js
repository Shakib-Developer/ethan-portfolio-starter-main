import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 mt-8">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3 text-center mb-4"
          >
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full mx-auto gap-6 flex-1"
          >
            <div className="flex w-full gap-x-6">
              <input type="text" placeholder="name" className="input"></input>
              <input type="text" placeholder="email" className="input"></input>
            </div>
            <input type="text" placeholder="email" className="input"></input>
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex justify-center items-center overflow-hidden hover:border-accent group">
              <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
