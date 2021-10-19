import React from "react";
import { SuperContainer, Container, Colors, Paragraph, Img, Button } from "../assets/style/style";
import product from "../assets/img/limon.jpg";
import accounting from "accounting";


const properties = {
    SuperContainer: {
        width: "194px",
        height: "418px",
    },
    Container: {
        width: "70px",
        height: "24px",
        padding: "4px",
        radius: "16px",
        alignItems: "flex-start",
        background: Colors.purpleBg,
        top: "0",
        left: "0",
        direction: "column",
    },
    Paragraph: {
        width: "52px",
        height: "16px",
        fontSize: "12px",
        color: Colors.purple,
        margin: "0 5px",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
    },
    Img: {
        position: "static",
        width: "194px",
        height: "194px",
        margin: "16px 0px",
    },
    ImageProduct: {
        width: "194px",
        height: "194px",
    },
    Precio: {
        color: Colors.silver,
        fontSize: "16px",
        fontWeight: "700",
        width: "194px",
        height: "24px",
    },
    Product: {
        height: "72px",
        width: "194px",
        top: "32px",
        left: "0",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "24px",
        orden: "1",
        self: "stretch",
        margin: "8px 0",
    },
    Button: {
        width: "194px",
        height: "40px",
    }
}
const CardOfertas = () => {
    return (
        <SuperContainer
            width={properties.SuperContainer.width}
            height={properties.SuperContainer.height}
        >
            <Container>
                <Container
                    width={properties.Container.width}
                    height={properties.Container.height}
                    padding={properties.Container.padding}
                    radius={properties.Container.radius}
                    background={properties.Container.background}
                    alignItems={properties.Container.alignItems}
                    top={properties.Container.top}
                    left={properties.Container.left}
                >
                    <Paragraph
                        width={properties.Paragraph.width}
                        height={properties.Paragraph.height}
                        fontSize={properties.Paragraph.fontSize}
                        fontFamily={properties.Paragraph.fontFamily}
                        fontStyle={properties.Paragraph.fontStyle}
                        color={properties.Paragraph.color}
                        margin={properties.Paragraph.margin}
                        fontWeight={properties.Paragraph.fontWeight}
                        style={{ top: "4px", left: "4px", }}
                    >
                        30% dto.
                    </Paragraph>
                </Container>
                <Container
                    width={properties.ImageProduct.width}
                    height={properties.ImageProduct.height}
                >
                    <Img
                        src={product}
                        position={properties.Img.position}
                        width={properties.Img.width}
                        height={properties.Img.height}
                        margin={properties.Img.margin}
                        style={{ left: "0", top: "40px", order: "1" }}
                    />
                </Container>
                <Container
                    width={properties.Precio.width}
                    height={properties.Precio.height}
                >
                    <div
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontWeight: "bold",
                            lineHeight: "24px",
                        }}
                    >
                        {accounting.formatMoney(26.82)}/kg
                    </div>
                    <div
                        style={{
                            textDecoration: "line-through",
                            float: "left",
                            margin: "auto 5px",
                            color: Colors.silver,
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontWeight: "bold",
                            lineHeight: "24px",
                        }}
                    >
                        {accounting.formatMoney(39.9)}/kg
                    </div>
                </Container>
                <Container width="190px">
                    <Paragraph
                        width="190px"
                        height={properties.Product.height}
                        fontFamily={properties.Paragraph.fontFamily}
                        fontStyle={properties.Paragraph.fontStyle}
                        fontWeight={properties.Product.fontWeight}
                        fontSize={properties.Product.fontSize}
                        lineHeight={properties.Product.lineHeight}
                        orden={properties.Product.orden}
                        self={properties.Product.self}
                        margin={properties.Product.margin}
                        top={properties.Product.top}
                        left={properties.Product.left}
                    >
                        Limón con semilla
                    </Paragraph>
                </Container>
                <Container>
                    <Button
                        width={properties.Button.width}
                        height={properties.Button.height}
                        style={{ marginTop: "42px", order: "3" }}
                    >
                        Agregar
                    </Button>
                </Container>
            </Container>
        </SuperContainer >
    );
};

export default CardOfertas;