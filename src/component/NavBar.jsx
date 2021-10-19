import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    NavMenu,
    Wrapper,
    SuperContainer,
    Colors,
    Paragraph,
    Button,
} from "../assets/style/style";
import { Link } from "react-router-dom";
import { Menu, DropdownMenu } from "../helpers/menu";
import DropDownMenu from "./DownMenu";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

const properties = {
    SuperContainer: {
        background: Colors.white,
        height: "88px",
        justifyContent: "space-between",
        padding: "24px 40px",
    },
    Paragraph: {
        color: Colors.orange,
        fontWeight: "normal",
        margin: "auto"
    },
    Button: {
        width: "89px",
        height: "40px",
        margin: "auto 5px"
    }

};

const NavBar = () => {
    const user = useSelector((state) => state.auth);
    return (
        <SuperContainer
            background={properties.SuperContainer.background}
            height={properties.SuperContainer.height}
            justifyContent={properties.SuperContainer.justifyContent}
            padding={properties.SuperContainer.padding}
            style={{ alignItems: "center" }}>
            <Wrapper className="wrapper">
                <Container className="" width="auto">
                    <Paragraph
                        color={properties.Paragraph.color}
                        margin={properties.Paragraph.margin}
                        style={{ fontWeight: "900" }}
                    >
                        Tiendita
                    </Paragraph>
                </Container>


                <Container width="auto">
                    <Button
                        width={properties.Button.width}
                        height={properties.Button.height}
                        margin={properties.Button.margin}>
                        <BiCart style={{ width: "28px", height: "28px", }} />
                        <Badge class="fs-5">9</Badge>
                    </Button>
                    <NavMenu>
                        {Menu.map((item, index) => (
                            <Link key={index} to={item.path}
                                style={{ height: "40px", background: Colors.malachite, padding: "8px 24px", borderRadius: "8px", fontWeight: "400" }}>
                                {item.label}
                            </Link>
                        ))}
                    </NavMenu>
                    <DropDownMenu items={DropdownMenu} user={user} />
                </Container>
            </Wrapper>
        </SuperContainer>
    );
};

export default NavBar;