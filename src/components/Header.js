import logo from './../images/header/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип" />
    </header>
  );
}

export default Header;