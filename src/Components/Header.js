import React from "react"
import "./Header.css"
import HomeIcon from "@material-ui/icons/Home"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import CheckBoxIcon from "@material-ui/icons/CheckBox"
import SearchIcon from "@material-ui/icons/Search"
import PersonIcon from "@material-ui/icons/Person"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <HomeIcon></HomeIcon>
          <p>HOME</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon></FlashOnIcon>
          <p>TRENDING</p>
        </div>
        <div className="header__icon">
          <CheckBoxIcon></CheckBoxIcon>
          <p>CHECK</p>
        </div>
        <div className="header__icon">
          <SearchIcon></SearchIcon>
          <p>SEARCH</p>
        </div>

        <div className="header__icon">
          <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
          <p>WALLET</p>
        </div>
        <div className="header__icon">
          <PersonIcon></PersonIcon>
          <p>ACCOUNT</p>
        </div>
      </div>

      <img
        className="header__logo"
        src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png"
      ></img>
    </div>
  )
}

export default Header
