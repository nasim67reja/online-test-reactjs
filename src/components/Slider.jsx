import { data } from "../public";
import star from "../assets/star.svg";
import right from "../assets/right.png";

const Card = ({ el, num }) => {
  return (
    <li
      className={`${
        num == 3 ? "opacity-40" : ""
      }shadow-product w-[191px] h-[241px] py-4 px-6`}
    >
      <div className="flex justify-center items-center">
        <img src={el.picture} alt="" />
      </div>
      <p className="text-center font-semibold">{el.name}</p>
      <p className="text-center my-2">Price $ {el.price}</p>
      <div className="flex gap-2 justify-center">
        <img src={star} alt="staricon" />
        {el.ratting}
      </div>
    </li>
  );
};

const Slider = () => {
  console.log(data);
  const upData = data.products.slice(1, 5);
  return (
    <div className=" my-14">
      <div className="w-fit  relative">
        <ul className="flex gap-10">
          {upData.map((el, i) => (
            <Card key={i} el={el} num={i} />
          ))}
        </ul>
        <div className="absolute right-[40px] top-[45%] shadow-product bg-white rounded-full p-1 cursor-pointer">
          {" "}
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
