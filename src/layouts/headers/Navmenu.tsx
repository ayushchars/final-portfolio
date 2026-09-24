import menu_data from "@/data/menu-data";
import { Link } from "react-router-dom";

export default function Navmenu() {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className="has-dropdown active menu-thumb">
            <Link to={item.link}>
              {item.title} {" "}
              {item.has_dropdown && (
                <i className="fas fa-angle-down"></i>
              )}
            </Link>
            {item.is_home_menu && (
              <ul className="submenu has-homemenu">
                <li>
                  <div className="homemenu-items">
                    {item.sub_menus.map((sub_item, index) => (
                      <div key={index} className="homemenu">
                        <Link to={sub_item.link} className="homemenu-thumb d-center px-2">
                          <img src={sub_item.img} alt="img" />
                          <span className="demo-button d-center py-2 px-3 p1-bg">
                            <span className="white">{sub_item.title}</span>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            )}
            {item.has_dropdown && !item.is_home_menu && (
              <ul className="submenu">
                {item.sub_menus && item.sub_menus.map((sub_item, index) => (
                  <li key={index}>
                    <Link to={sub_item.link}>{sub_item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
