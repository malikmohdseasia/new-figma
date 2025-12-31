const LogoutWarning = ({ modalShow, setModalShow}:any) => {
  return (
    <>
      <button
        onClick={() => {
            setModalShow(true);
        }}
        className="h-10 px-5 flex items-center text-sm text-red-500 hover:bg-red-100 rounded-md"
      >
        Logout
      </button>
    </>
  );
};

export default LogoutWarning;
