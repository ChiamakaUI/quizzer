import { BsSearch, BsPlusCircleFill } from "react-icons/bs";
const Header = ({ showFormFunc }) => {
  return (
    <div className="flex flex-row justify-between items-center my-4 font-lora w-[88%] mx-auto">
      <div className="flex flex-row items-center border rounded-full p-2 w-[50%]">
        <BsSearch className="text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none w-full p-1.5"
        />
      </div>
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
