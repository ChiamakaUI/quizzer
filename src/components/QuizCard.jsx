import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const QuizCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[180px] h-[150px] md:w-[300px] lg:w-[350px] lg:h-[200px] rounded-md my-2 font-lora border border-slate-200 cursor-pointer"
      onClick={() => {
        navigate(`quiz/${data.id}`);
      }}
    >
      <div className="p-2 lg:p-4">
        <p className="font-semibold text-base lg:text-2xl truncate">
          {data.quizName}
        </p>
        <p className="text-xs lg:text-base my-2">{data.description}</p>
        <div className="flex flex-row text-[10px] justify-between items-center md:w-[75%] lg:w-[80%] md:text-sm lg:text-base font-semibold truncate">
          <p>{data.time} mins</p>
          <BsDot className="text-base" />
          <p>{data.points} points per question</p>
        </div>
        <div className="flex flex-row w-[32%] lg:w-[28%] ml-auto my-3">
          <button
            className="w-full bg-[#a45ee5] text-white py-1 rounded-md"
            onClick={(event) => {
              navigate(`editquiz/${data.id}`);
              event.stopPropagation();
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
