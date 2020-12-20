import React from 'react';

import HomeApplet from "./components/home/HomeApplet";
import AboutApplet from "./components/about/AboutApplet";
import SongsApplet from "./components/songs/SongsApplet";
import ShopContactApplet from "./components/shopcontact/ShopContactApplet";
import AlbumsApplet from "./components/albums/AlbumsApplet";

const content = {
    'home': <HomeApplet />,
    'about': <AboutApplet />,
    'albums': <AlbumsApplet />,
    'songs': <SongsApplet />,
    'shop / content': <ShopContactApplet />

}

const MainContent = (props) => {
    return content[props.title]
}

export default MainContent;
export {content}
