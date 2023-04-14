const Modal = ({ children }) => {
  return (
    <div className="fixed z-[1000] top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden	bg-black-overlay">
      {children}
    </div>
  );
};

export default Modal;
