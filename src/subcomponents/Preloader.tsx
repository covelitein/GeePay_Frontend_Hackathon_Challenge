
import img from "../assets/loader.svg"

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex bg-white text-xl justify-center items-center">
      <img src={img} alt={img} />
    </div>
  );
}

export default Preloader
