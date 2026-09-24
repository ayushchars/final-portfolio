 
import menu_data from "@/data/menu-data";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function MobileMenu() {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };



  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li className={`${item.has_dropdown ? "has-dropdown" : ""}  ${item.is_home_menu ? "active menu-thumb" : ""} ${item.title === navTitle ? "active-dropdown" : ""}`} key={i} >
            <Link to={item.link} onClick={() => openMobileMenu(item.title)}>
              {item.title}
              <i className="fas fa-angle-down"></i>
            </Link>
            {item.is_home_menu && (
              <ul className="submenu has-homemenu" style={{ display: navTitle === item.title ? "block" : "none" }}>
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
              <ul className="submenu" style={{ display: navTitle === item.title ? "block" : "none" }}>
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
  );
}
