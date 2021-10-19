import React from "react";
import { Img } from "../assets/style/style";
const DEFAULT_AVATAR_IMAGES = "https://www.pngarea.com/pngm/90/6980003_profile-icon-png-facebook-default-profile-picture-girl.png";
const Avatar = ({ imageUrl, name, width, height, position, margin, border, self }) => {
    return (
        <>
            <Img
                className=""
                width={width}
                height={height}
                radius="50%"
                position={position}
                margin={margin}
                border={border}
                self={self}
                src={imageUrl || DEFAULT_AVATAR_IMAGES}
                alt={name}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = DEFAULT_AVATAR_IMAGES;
                }}
            />
        </>
    );
};

export default Avatar;