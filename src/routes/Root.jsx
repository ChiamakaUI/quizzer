import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <p className="font-lora text-[#a45ee5] text-2xl font-bold ml-6 my-3">Q<span className=''>uizzer</span></p>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;
