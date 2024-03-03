import { Link } from "react-router-dom"

const Nav = ({ className }) => {
  return (
    <nav>
      <ul className={className}>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"services"}>Servicios</Link>
        </li>
        <li>
          <Link to={"testimonials"}>Testimonios</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;