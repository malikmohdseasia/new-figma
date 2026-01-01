import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogoutWarning = ({ setModalShow, setIsOpen }:any) => {
  const navigate = useNavigate();

  const confirmLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
    toast.success("Successfully Logout!");
    setModalShow(false);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
        <h2 className="text-lg font-semibold">Confirm Logout</h2>

        <p className="mt-2 text-sm text-gray-500">
          Are you sure you want to logout?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setModalShow(false)}
            className="px-4 py-2 rounded-lg bg-gray-200"
          >
            Cancel
          </button>

          <button
            onClick={confirmLogout}
            className="px-4 py-2 rounded-lg bg-[#3E3D45] text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutWarning;
