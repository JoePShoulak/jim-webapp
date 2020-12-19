import React from 'react';

import HomeApplet from "./components/home/HomeApplet";
import AboutApplet from "./components/about/AboutApplet";
import SongsApplet from "./components/songs/SongsApplet";
import ShopContentApplet from "./components/shopcontent/ShopContentApplet";
import AlbumsApplet from "./components/albums/AlbumsApplet";

const content = {
    'home': <HomeApplet />,
    'about': <AboutApplet />,
    'albums': <AlbumsApplet />,
    'songs': <SongsApplet />,
    'shop / content': <ShopContentApplet />

}

const MainContent = (props) => {
    return content[props.title]
}

export default MainContent;
export {content}
