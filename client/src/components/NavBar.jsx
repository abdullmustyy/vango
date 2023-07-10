export default function NavBar() {
  return (
    <nav className="bg-[#FFF7ED] py-[2.16394rem] md:px-0 px-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <a
            href="/"
            className="text-black text-[1.58456rem] font-black leading-[2.51694rem]"
          >
            #VANGO
          </a>
        </div>
        <div className="flex space-x-6 items-center text-base font-semibold text-[#4D4D4D]">
          <a href="/about">About</a>
          <a href="">Vans</a>
        </div>
      </div>
    </nav>
  );
}
