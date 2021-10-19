import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SuperContainer, Wrapper, Container, Colors, Paragraph, Form, Input, Button, Img } from '../assets/style/style';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
    loginFacebook,
    loginGoogle,
    loginEmailAndPassword,
} from "../action/actionAuth";
import Mercado from '../assets/img/mercado.png';


const Color = Colors.boulder;
const properties = {
    Container: {
        margin: "48px auto 20px",
        width: "400px",
        borderRadius: "5px",
        justifyContent: "center",
    },
    Input: {
        padding: "7px 0",
        fontSize: "14px",
    },
    Button: {
        background: Colors.cobalt,
        width: "100%",
        height: "38px",
        borderRadius: "5px",
    },
    Paragraph: {
        color: Colors.white,
        fontSize: "18px",
        margin: "0",

    },
    Img: {
        width: "450px",
        height: "350px",
        margin: "40px 0 0 80px",
    },
    Icon: {
        background: Colors.white,
        color: Colors.boulder,
    },
    error: {
        margin: "10px 0 0 20px ",
        color: Colors.red,
    },
    Hr: {
        margin: "15px 20px",
    }
}

const Login = () => {
    const [ver, setVer] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Correo Electrónico Inválido")
                .required("* Campo requerido")
                .max(50, `Máximo 50 caracteres`),
            password: Yup.string()
                .required("* Campo requerido")
                .min(8, "La contraseña es muy corta, debe tener minimo 8 caracteres.")
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w*\W*]/,
                    "La contraseña debe tener un número, una mayúscula y una minúscula."
                ),
        }),
        onSubmit: () => {
            dispatch(loginEmailAndPassword(email, password));
        },
    });

    const { email, password, } = formik.values;

    const handleGoogleLogin = () => {
        dispatch(loginGoogle());
    };
    const handleFacebookLogin = () => {
        dispatch(loginFacebook());
    };

    const verContraseña = () => {
        if (ver === false) {
            setVer(true);
        } else {
            setVer(false);
        }
    };
    return (
        <SuperContainer>
            <Img
                src={Mercado}
                width={properties.Img.width}
                height={properties.Img.height}
                margin={properties.Img.margin}
            />
            <Wrapper>
                <Container
                    padding={properties.Container.padding}
                    margin={properties.Container.margin}
                    width={properties.Container.width}
                    style={{ border: "solid 1px", borderColor: Colors.silver, borderRadius: "5px", overflow: "hidden", boxShadow: `0 0px 40px ${Color}` }}>

                    <Container>
                        <Paragraph style={{ marginTop: "20px" }}>
                            Inicio de Sesión
                        </Paragraph>
                        <Form>
                            <Container>
                                <Input
                                    padding={properties.Input.padding}
                                    fontSize={properties.Input.fontSize}
                                    style={{ borderRight: "0", borderLeft: "0", borderBottom: "solid 1px", borderBottomColor: Colors.silver, margin: "15px 20px 0 20px" }}
                                    placeholder="Correo"
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <Container margin={properties.error.margin} color={properties.error.color} >
                                        {formik.errors.email}
                                    </Container>
                                ) : null}
                            </Container>
                            <Container>
                                <Input
                                    padding={properties.Input.padding}
                                    fontSize={properties.Input.fontSize}
                                    style={{ borderRight: "0", borderLeft: "0", borderBottom: "solid 1px", borderBottomColor: Colors.silver, margin: "15px 20px" }}
                                    placeholder="Contraseña"
                                    type={ver ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    value={password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <Container margin={properties.error.margin} color={properties.error.color} >
                                        {formik.errors.password}
                                    </Container>
                                ) : null}
                                <Container
                                    background={properties.Icon.background}
                                    color={properties.Icon.color}
                                    onClick={verContraseña}
                                >
                                </Container>
                            </Container>

                            <Container>
                                <Button
                                    width={properties.Button.width}
                                    height={properties.Button.height}
                                    style={{ background: Colors.malachite, margin: "10px 20px 0" }}
                                    type="submit"
                                >
                                    <Paragraph
                                        color={properties.Paragraph.color}
                                        fontSize={properties.Paragraph.fontSize}
                                        margin={properties.Paragraph.margin}
                                    >
                                        Ingresar
                                    </Paragraph>
                                </Button>
                            </Container>
                        </Form>

                        <Container>
                            <Button
                                width={properties.Button.width}
                                borderRadius={properties.Paragraph.borderRadius}
                                style={{ boxShadow: `0 0px 40px ${Color}`, margin: "30px 20px 0" }}
                                onClick={handleGoogleLogin}
                            >
                                <FcGoogle
                                    style={{ color: Colors.white, width: "25px", height: "25px" }} />
                                <Paragraph
                                    fontSize={properties.Paragraph.fontSize}
                                    margin={properties.Paragraph.margin}
                                >
                                    Ingresar con Google
                                </Paragraph>
                            </Button>
                        </Container>
                        <Container>
                            <Button
                                background={properties.Button.background}
                                width={properties.Button.width}
                                style={{ margin: "10px 20px 20px" }}
                                onClick={handleFacebookLogin}
                            >
                                <FaFacebook
                                    style={{ color: Colors.white, width: "25px", height: "25px" }} />
                                <Paragraph
                                    color={properties.Paragraph.color}
                                    fontSize={properties.Paragraph.fontSize}
                                    margin={properties.Paragraph.margin}
                                >
                                    Ingresar con Facebook
                                </Paragraph>
                            </Button>
                        </Container>
                        <Container justifyContent={properties.Container.justifyContent}>
                            <Link
                                to="/registrarse"
                                style={{ textDecoration: "none", color: Colors.black, margin: "10px" }}
                            >¿Aún no estás registrado?</Link>
                        </Container>
                    </Container>
                </Container>
            </Wrapper>
        </SuperContainer >
    )
}


export default Login;