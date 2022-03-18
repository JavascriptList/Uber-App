import React from 'react';

const style = {
    wrapper: `h-16 w-full bg-black text-white flex md:jsutify-around items-center px-60 fixed z-20`
}

const Navbar = () => {
    return <div className={style.wrapper}>
        <div className={style.letMenu}>
            <div className={style.logo}>Uber</div>
            <div className={style.menuItems}>Ride</div>
            <div className={style.menuItems}>Drive</div>
            <div className={style.menuItems}>More</div>
        </div>
    </div>
}

export default Navbar;