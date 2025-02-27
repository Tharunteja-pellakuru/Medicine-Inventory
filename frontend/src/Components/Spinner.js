import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <ClipLoader color="#3498db" size={50} />
    </div>
  );
};

export default Spinner;
