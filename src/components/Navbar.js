import Logo from "../assets/logo-icon.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Airbnb logo" className="nav-logo" />
    </nav>
  );
}
