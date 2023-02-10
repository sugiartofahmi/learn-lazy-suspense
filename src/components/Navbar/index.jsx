import NavLayout from "../../layouts/NavLayout";

const Navbar = () => {
  return (
    <NavLayout>
      <div className="gap-x-[45px] text-lg flex flex-row">
        <h1 className="font-bold">Fatamorgana</h1>
        <ul className="flex flex-row gap-x-[30px] ">
          <a href="/" className="cursor-pointer ">
            Home
          </a>
          <a href="/skills" className="cursor-pointer">
            Skills
          </a>
          <a href="/projects" className="cursor-pointer">
            Projects
          </a>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-x-5">
        <h1 className="text-lg">Fahmi Sugiarto</h1>
      </div>
    </NavLayout>
  );
};

export default Navbar;
