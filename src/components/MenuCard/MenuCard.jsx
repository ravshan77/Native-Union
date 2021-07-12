import React, { useEffect ,useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import "./MenuCard.css";
import {useTranslation} from "react-i18next"


const useStyles = makeStyles(() => ({
  IconButton: {
    color: "#FFF",
  },
  searchIcon: {
    color: "#000",
  },
}));

export default function MenuCard({ setMenuCardDiv }) {
  const classes = useStyles();

  // store Menu Button
  const [openOne, setOpenOne] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);

  const handleClickOne = () => {
    setOpenOne((prev) => !prev);
    setOpenTwo(false);
    setOpenThree(false);
  };

  const handleClickTwo = () => {
    setOpenTwo((prev) => !prev);
    setOpenOne(false);
    setOpenThree(false);
  };

  const handleClickThree = () => {
    setOpenThree((prev) => !prev);
    setOpenOne(false);
    setOpenTwo(false);
  };

  // store Menu Item Button

  const [shop, setShop] = React.useState(false);
  const [protect, setProtect] = React.useState(false);
  const [cables, setCables] = React.useState(false);
  const [power, setPower] = React.useState(false);
  const [iphone, setIphone] = React.useState(false);
  const [airPods, setAirPods] = React.useState(false);
  const [ipad, setIpad] = React.useState(false);
  const [mac, setMac] = React.useState(false);
  const [collisions, setCollisions] = React.useState(false);
  const [collabitrions, setCollabitrions] = React.useState(false);
  const [jurnal, setJurnal] = React.useState(false);

  const handleCables = () => {
    setCables((prev) => !prev);
  };
  const handleShop = () => {
    setShop((prev) => !prev);
  };

  const handleProtect = () => {
    setProtect((prev) => !prev);
  };
  const handlePower = () => {
    setPower((prev) => !prev);
  };

  const handleIphone = () => {
    setIphone((prev) => !prev);
  };

  const handleAirPods = () => {
    setAirPods((prev) => !prev);
  };

  const handleIpad = () => {
    setIpad((prev) => !prev);
  };

  const handleMac = () => {
    setMac((prev) => !prev);
  };

  const handleCollision = () => {
    setCollisions((prev) => !prev);
  };

  const handleCollabitrions = () => {
    setCollabitrions((prev) => !prev);
  };

  const handleJurnal = () => {
    setJurnal((prev) => !prev);
  };

  // Language
  const [language, setLanguage] = React.useState("en");
  const {t,i18n} = useTranslation()
  useEffect(() => {
    if (language == "en") {
      i18n.changeLanguage("en")
    } else{
      i18n.changeLanguage("ру")
    }
  },[language])

  // Search Product
  const [searchProduct, setSearchProduct] = useState("");

  const handleSreache = (e) => {
    setSearchProduct(e.target.value);
  };


  return (
    <>
      <div className="menuCard">
        <div className="menuCard_btnDrop">
          <div className="textWithPlus">
            <h4 onClick={handleClickOne}>{t("dropdown1")}</h4>
            <div onClick={handleShop} className={`${openOne ? "df" : "dn"}`}>
              <div>
                <h4 className="menuTextItem">- {t("shop")}</h4>
                <Link
                  onClick={(prev) => setMenuCardDiv(!prev)}
                  to="/allProducts"
                >
                  {" "}
                  <div className={`${shop ? "db" : "dn"}`}>
                    <p>- {t("ALL PRODUCTS")}</p>
                    <p>- {t("BEST SELICES")}</p>
                    <p>- {t("NEW RELEASES")}</p>
                    <p>- {t("LAST CHANGE TO BUY")}</p>
                    <p>- {t("WIRELESS CHANGE")}</p>
                    <p>- {t("MAGSAFE ACCESUARES")} </p>
                    <p>- {t("MULTI-DRIVECE WIRELESS CHARGES")}</p>
                    <p>- {t("SINGLE DRIVER WIRELES CHARGES")}</p>
                    <p>- {t("PORTOPLE WIRELES CHARGER")}</p>
                  </div>
                </Link>
              </div>
              <h3>{shop ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
            <div onClick={handleProtect} className={`${openOne ? "df" : "dn"}`}>
              <div>
                <h4 className="menuTextItem">- Xiaomi Redmi</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/phone">
                  {" "}
                  <div className={`${protect ? "db" : "dn"}`}>
                    <p>- Xiaomi Casses</p>
                    <p>- Redmi Casses</p>
                    <p>- Xiaomi Selices</p>
                    <p>- Xiaomi Seelvces</p>
                    <p>- Xiaomi MI Organizes</p>
                    <p>- Redmi Sceern Protector</p>
                  </div>
                </Link>
              </div>
              <h3>{protect ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
            <div onClick={handleCables} className={`${openOne ? "df" : "dn"}`}>
              <div>
                <h4 className="menuTextItem">- Cables</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/cabeles">
                  {" "}
                  <div className={`${cables ? "db" : "dn"}`}>
                    <p>- USB-A to Linghting</p>
                    <p>- USB-C to Linghting</p>
                    <p>- USB-C to USB-C</p>
                    <p>- Unversal Cabel</p>
                    <p>- USB-A to USB-C</p>
                    <p>- Apple Watch Cabel</p>
                    <p>- Audio & Video</p>
                    <p>- Which Cabel Do I Need</p>
                  </div>{" "}
                </Link>
              </div>
              <h3>{cables ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
            <div onClick={handlePower} className={`${openOne ? "df" : "dn"}`}>
              <div>
                <h4 className="menuTextItem">- Acer</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/notebook">
                  {" "}
                  <div className={`${power ? "db" : "dn"}`}>
                    <p>- Acer Pro 7</p>
                    <p>- Acer Air3</p>
                    <p>- Acer Gameing Pro</p>
                    <p>- NoteBook ACER</p>
                    <p>- Acer NoteBook Laptop 15</p>
                  </div>
                </Link>
              </div>
              <h3>{power ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
          </div>
          <h3 onClick={handleClickOne}>
            {openOne ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
          </h3>
        </div>
        <hr />
        <div className="menuCard_btnDrop">
          <div className="textWithPlus">
            <h4 onClick={handleClickTwo}>{t("dropdown2")}</h4>
            <div onClick={handleIphone} className={`${openTwo ? "df" : "dn"}`}>
              <div>
                <h4 className="menuTextItem">- Iphone</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/phone">
                  {" "}
                  <div className={`${iphone ? "db" : "dn"}`}>
                    <p>- Iphone 12 mine</p>
                    <p>- Iphone 12</p>
                    <p>- Iphone 12 Pro</p>
                    <p>- Iphone 12 Pro Max</p>
                    <p>- Iphone 11 Pro</p>
                    <p>- Iphone 11</p>
                    <p>- Iphone 11 Pro Max</p>
                  </div>{" "}
                </Link>
              </div>
              <h3>{iphone ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
            <div onClick={handleAirPods} className={`${openTwo ? "df" : "dn"}`}>
              <div>
                <h4 className="menuTextItem">- AirPods</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/airPods">
                  <div className={`${airPods ? "db" : "dn"}`}>
                    <p>- Iphone Xs</p>
                    <p>- Iphone XR</p>
                    <p>- Iphone Xs Max</p>
                    <p>- Iphone SE</p>
                    <p>- AirPods</p>
                    <p>- AirPods Pro</p>
                    <p>- AirPods Gen 1 & 2</p>
                  </div>
                </Link>
              </div>
              <h3>{airPods ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
            <div onClick={handleIpad} className={`${openTwo ? "df" : "dn"}`}>
              <div>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/phone">
                  <h4 className="menuTextItem">- Ipad</h4>
                  <div className={`${ipad ? "db" : "dn"}`}>
                    <p>- Ipad Pro 11"</p>
                    <p>- Ipad Pro 12.9"</p>
                    <p>- Ipad Air (4th Gen)</p>
                    <p>- Ipad (7th & 8th Gen)</p>
                    <p>- Apple Watch</p>
                    <p>- Apple Watch (38mm / 40mm)</p>
                    <p>- Apple Watch (40mm / 42mm)</p>
                  </div>{" "}
                </Link>
              </div>
              <h3>{ipad ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
            <div onClick={handleMac} className={`${openTwo ? "df" : "dn"}`}>
              <div>
                <h4 className="menuTextItem">- Mac</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/notebook">
                  <div className={`${mac ? "db" : "dn"}`}>
                    <p>- 12' MacBooks</p>
                    <p>- 13' MacBooks</p>
                    <p>- 15' MacBooks</p>
                    <p>- 16' MacBooks</p>
                    <p>- IMac 24'</p>
                  </div>
                </Link>
              </div>
              <h3>{mac ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
          </div>
          <h3 onClick={handleClickTwo}>
            {openTwo ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
          </h3>
        </div>
        <hr />
        <div className="menuCard_btnDrop">
          <div className="textWithPlus">
            <h4 onClick={handleClickThree}>{t("dropdown3")}</h4>
            <div
              onClick={handleCollision}
              className={`${openThree ? "df" : "dn"}`}
            >
              <div>
                <h4 className="menuTextItem">- {t("Collection")}</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/journal">
                  <div className={`${collisions ? "db" : "dn"}`}>
                    <p>- {t("The Heritage")}</p>
                    <p>- {t("Sage Collection")}</p>
                    <p>- {t("Class Latther Collision")}</p>
                    <p>- {t("PD Charning Collection")}</p>
                    <p>- {t("Work Home Collection")}</p>
                  </div>{" "}
                </Link>
              </div>
              <h3>{collisions ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
            <div
              onClick={handleCollabitrions}
              className={`${openThree ? "df" : "dn"}`}
            >
              <div>
                <h4 className="menuTextItem">- {t("Collabitrions")}</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/journal">
                  {" "}
                  <div className={`${collabitrions ? "db" : "dn"}`}>
                    <p>- {t("Masion Kitsune x Nateve Union")}</p>
                    <p>- {t("Tom Dixon x Nateve Union")}</p>
                    <p>- {t("La Boite Conopet x Nateve")}</p>
                  </div>
                </Link>
              </div>
              <h3>
                {collabitrions ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
              </h3>
            </div>
            <div
              onClick={handleJurnal}
              className={`${openThree ? "df" : "dn"}`}
            >
              <div>
                <h4 className="menuTextItem">- {t("JournaL")}</h4>
                <Link onClick={(prev) => setMenuCardDiv(!prev)} to="/journal">
                  {" "}
                  <div className={`${jurnal ? "db" : "dn"}`}>
                    <p>- {t("Discover Over Jurnal")}</p>
                  </div>
                </Link>
              </div>
              <h3>{jurnal ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</h3>
            </div>
          </div>
          <h3 onClick={handleClickThree}>
            {openThree ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}
          </h3>
        </div>
        <hr />
        <Link
          onClick={(prev) => setMenuCardDiv(!prev)}
          className={classes.Link}
        >
          {" "}
          <h3 className="Login">Log in</h3>{" "}
        </Link>
        <h3 className="Login">
          <input
            style={{ paddingLeft: "10px" }}
            onChange={handleSreache}
            value={searchProduct}
            placeholder="search..."
          />
          {searchProduct.length > 3 && (
            <Link
              onClick={(prev) => setMenuCardDiv(!prev)}
              to={`/filterProduct/${searchProduct}`}
            >
              <button className="search_btn">
                <SearchIcon className={classes.searchIcon} />
              </button>
            </Link>
          )}
        </h3>
        <div className="Login">
          <LanguageOutlinedIcon className={classes.IconButton} />
          <Select
            value={language}
            onClick={(e) => setLanguage(e.target.value)}
            className={classes.IconButton}
          >
            <MenuItem value={"en"}>english</MenuItem>
            <MenuItem value={"ру"}>русский</MenuItem>
          </Select>
        </div>
        <div className="menu_Card_Icons">
          <Link>
            <FacebookIcon />
          </Link>
          <Link>
            <TelegramIcon />
          </Link>
          <Link>
            <InstagramIcon />
          </Link>
          <Link>
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
