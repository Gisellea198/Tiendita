import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SuperContainer, Wrapper, Container, Colors, Paragraph, Form, Input, Button, Img } from '../assets/style/style';
import { Link } from 'react-router-dom';
import Mercado from '../assets/img/mercado.png';
import { buildUserDto } from "../user/UserDto";
import { registerWithEmailPasswordName } from "../action/actionAuth";

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
        margin: "40px 80px 0 0",
    },
    Icon: {
        background: Colors.white,
        color: Colors.boulder,
    },
    error: {
        margin: "10px 0 0 20px ",
        color: Colors.red,
    },
}


const Register = () => {
    const [ver, setVer] = useState(false);
    const [ver1, setVer1] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("* Campo Requerido")
                .min(3, `Minimo 3 caracteres`)
                .max(50, `Máximo 50 caracteres`),
            lastname: Yup.string()
                .required("* Campo Requerido")
                .min(3, `Minimo 3 caracteres`)
                .max(50, `Máximo 50 caracteres`),
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
                )
            ,
            confirmPassword: Yup.string()
                .required("* Campo Requerido")
                .oneOf([Yup.ref("password"), null], "La Contraseña no coincide"),
        }),
        onSubmit: () => {
            const formValues = buildUserDto(formik.values);
            dispatch(registerWithEmailPasswordName(formValues));
        },
    });

    const { name, lastName, email, password, confirmPassword } = formik.values;

    const verContraseña = () => {
        if (ver === false) {
            setVer(true);
        } else {
            setVer(false);
        }
    };

    const verContraseña1 = () => {
        if (ver1 === false) {
            setVer1(true)
        } else {
            setVer1(false)
        }

    }

    return (
        <SuperContainer>
            <Wrapper>
                <Container
                    padding={properties.Container.padding}
                    margin={properties.Container.margin}
                    width={properties.Container.width}
                    style={{ border: "solid 1px", borderColor: Colors.silver, borderRadius: "5px", overflow: "hidden", boxShadow: `0 0px 40px ${Color}` }}>

                    <Container>
                        <Paragraph style={{ marginTop: "20px" }}>
                            Registrarse
                        </Paragraph>
                        <Form>
                            <Container>
                                <Input
                                    padding={properties.Input.padding}
                                    fontSize={properties.Input.fontSize}
                                    style={{ borderRight: "0", borderLeft: "0", borderBottom: "solid 1px", borderBottomColor: Colors.silver, margin: "15px 20px 0 20px" }}
                                    placeholder="Nombre"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <Container margin={properties.error.margin} color={properties.error.color} padding={properties.error.padding}>
                                        {formik.errors.name}
                                    </Container>
                                ) : null}
                                <Container>
                                    <Input
                                        padding={properties.Input.padding}
                                        fontSize={properties.Input.fontSize}
                                        style={{ borderRight: "0", borderLeft: "0", borderBottom: "solid 1px", borderBottomColor: Colors.silver, margin: "15px 20px 0 20px" }}
                                        placeholder="Apellido"
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <Container margin={properties.error.margin} color={properties.error.color}>
                                            {formik.errors.name}
                                        </Container>
                                    ) : null}
                                </Container>
                            </Container>

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
                                    style={{ borderRight: "0", borderLeft: "0", borderBottom: "solid 1px", borderBottomColor: Colors.silver, margin: "15px 20px 0 20px" }}
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
                                <Input
                                    padding={properties.Input.padding}
                                    fontSize={properties.Input.fontSize}
                                    style={{ borderRight: "0", borderLeft: "0", borderBottom: "solid 1px", borderBottomColor: Colors.silver, margin: "15px 20px 0 20px" }}
                                    placeholder="Confirmar Contraseña"
                                    type={ver1 ? 'text' : 'password'}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <Container margin={properties.error.margin} color={properties.error.color}>
                                        {formik.errors.confirmPassword}
                                    </Container>
                                ) : null}

                                <Container
                                    background={properties.Icon.background}
                                    color={properties.Icon.color}
                                    onClick={verContraseña1}
                                >

                                </Container>
                            </Container>
                            <Container>
                                <Button
                                    width={properties.Button.width}
                                    height={properties.Button.height}
                                    style={{ background: Colors.malachite, margin: "10px 20px" }}
                                    type="submit"
                                >
                                    <Paragraph
                                        color={properties.Paragraph.color}
                                        fontSize={properties.Paragraph.fontSize}
                                        margin={properties.Paragraph.margin}
                                    >
                                        Registrarse
                                    </Paragraph>
                                </Button>
                            </Container>
                            <Container justifyContent={properties.Container.justifyContent}>
                                <Link
                                    to="/iniciar_sesion"
                                    style={{ textDecoration: "none", color: Colors.black, margin: "15px" }}
                                >¿Ya estas registrado?</Link>
                            </Container>
                        </Form>

                    </Container>
                </Container>
            </Wrapper>
            <Img
                src={Mercado}
                width={properties.Img.width}
                height={properties.Img.height}
                margin={properties.Img.margin}
            />
        </SuperContainer >
    )
}


export default Register;