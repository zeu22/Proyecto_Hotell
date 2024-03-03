import MenuToggle from "./menu-toggle/MenuToggle";

export const Header = () => {
  return (
    <>
      <header className="bg-main-950 text-white flex flex-nowrap lg:justify-between items-center p-6 flex-row-reverse justify-end gap-9 lg:flex-row">
        <h1>Hotel Nuestro</h1>
        <MenuToggle />
      </header>
    </>
  );
}