import { NavLink, useNavigate } from "react-router-dom";
import navLinks from "../../../../assets/dummy-data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="sidebar p-3">
      <div className="sidebar__top">
        <h2>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-explicit" viewBox="0 0 16 16">
  <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826v2.408Z"/>
  <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0h-11ZM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-11Z"/>
</svg>
          </span>
          E-Auction
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu0">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__toggler">
          <span
            onClick={handleLogout}
            style={{
              position: "relative",
              top: "-5rem",
              color: "white",
              cursor:"pointer"
            }}
          >
            <i className="ri-logout-circle-r-line"></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
