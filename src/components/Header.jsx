import { BsSearch, BsPlusCircleFill } from "react-icons/bs";
const Header = ({ showFormFunc }) => {
  return (
    <div className="flex flex-row justify-between items-center my-4 font-lora w-[35%] ml-auto lg:w-[20%]">
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={() => showFormFunc(true)}
      >
        <BsPlusCircleFill className="text-3xl text-[#a45ee5] lg:text-4xl md:text-4xl mr-2" />
        <p>New Quiz</p>
      </div>
    </div>
  );
};

export default Header;
