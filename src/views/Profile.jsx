import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Container,
    Title,
    SuperContainer,
    Wrapper,
    Paragraph,
    Colors,
    Button,

} from "../assets/style/style";
import Avatar from "../component/Avatar";
import { FaUserEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Modals from "../action/actionModal";
import { getProfile } from "../services/user";

const properties = {
    input: {
        borderRadius: "5px",
        margin: "0 auto 10px auto",
        padding: "10px 20px",
        border: `2px solid ${Colors.secondaryTextColor}`,
    },
    button: {
        margin: "0 0 1rem 0",
        fontSize: "0.9rem",
        padding: "0.75rem 1rem",
        border: "none",
        borderRadius: "5px",
    },
    formGroup: {
        display: "flex",
        direction: "column",
    },
    buttonCargarImg: {
        width: "35%",
        backgrounColor: Colors.accentColor,
        color: Colors.textPrimaryColor,
        radius: "0 0.25rem 0.25rem 0",
        padding: "0.3rem 0.75rem",
    },
    inputImg: {
        radius: "0.25rem 0 0 0.25rem",
    },
    Title: {
        margin: "0px 10px",
        align: "left"
    },
    Container: {
        margin: "100px auto",
        width: "60%",
        direction: "column",
        radius: "5px",
        padding: "0",
    }
};
const Profile = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    let isDisabled = auth.id === 0 || params.id !== auth.id;
    const currentUser = useSelector((state) => state.user);
    const [user, setUser] = useState(currentUser);



    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProfile(params.id)
            .then((user) => {
                setUser(user);
                setLoading(false);
            })
            .catch((err) => { });

        if (loading) {
            setUser(currentUser);
        }
    }, [params, loading, currentUser]);

    return (
        <SuperContainer>
            <Wrapper>
                <Container
                    margin={properties.Container.margin}
                    padding={properties.Container.padding}
                    direction={properties.Container.direction}
                    width={properties.Container.width}
                    radius={properties.Container.radius}
                    style={{ border: "solid 1px", borderColor: Colors.silver }}
                    shadow="0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
                >
                    <Container
                        padding={properties.Container.padding}
                        direction={properties.Container.direction}
                    >
                        <Avatar
                            imageUrl={user?.imageUrl}
                            name={user?.name}
                            style={{ position: "static", width: "50px", height: "50px", margin: "-80px 0px 10px 10px", border: "1px solid", borderColor: Colors.orange }}
                            self="flex-start"

                        />

                        <Container direction="column" padding="0px">
                            <Title
                                margin={properties.Title.margin}
                                align={properties.Title.align}
                            >
                                {user?.displayName}
                            </Title>
                            <Paragraph align="left" margin="2px 10px">
                                {user?.location}
                            </Paragraph>
                            <Container
                                justifyContent="flex-end"
                                padding="0px"
                                position="static"
                                margin="-46px 6px 0px -7px"
                            >                    {
                                    !isDisabled ? (
                                        <Button
                                            radius="0.25rem"
                                            background={Colors.accentColor}
                                            color={Colors.textPrimaryColor}
                                            margin="5px"
                                            disabled={isDisabled}
                                            onClick={() => dispatch(Modals.showModal())}
                                        >
                                            <FaUserEdit /> Editar
                                        </Button>
                                    ) : (null)
                                }
                            </Container>

                            <Paragraph margin="5px 0px 5px 10px" align="left">
                                {user?.about}
                            </Paragraph>
                        </Container>
                    </Container>
                </Container>
                <Container justifyContent="space-between">
                    <Paragraph align="left" margin="0px 10px">
                        Compras realizadas
                    </Paragraph>
                    <Paragraph margin="0px 15px" color={Colors.accentColor}>
                        0
                    </Paragraph>
                </Container>
            </Wrapper>
        </SuperContainer>
    );
};

export default Profile;