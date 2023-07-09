export default function NavBar() {
  return (
    <nav className="bg-[#FFF7ED] py-[2.16394rem] px-[1.61369rem] flex justify-between font-inter">
      <div>
        <a
          href=""
          className="text-black text-[1.58456rem] font-black leading-[2.51694rem]"
        >
          #VANGO
        </a>
      </div>
      <div className="flex space-x-6 text-base font-semibold text-[#4D4D4D]">
        <a href="">About</a>
        <a href="">Vans</a>
      </div>
    </nav>
  );
}
