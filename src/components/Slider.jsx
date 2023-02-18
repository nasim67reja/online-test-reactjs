import { data } from "../public";
import star from "../assets/star.svg";

const Card = ({ el }) => {
  return (
    <li className="shadow-product w-[191px] h-[241px] py-4 px-6">
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
  const upData = data.products.slice(1, 4);
  return (
    <div className=" my-12">
      <ul className="flex gap-10">
        {upData.map((el, i) => (
          <Card key={i} el={el} />
        ))}
      </ul>
    </div>
  );
};

export default Slider;
