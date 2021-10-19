import React from "react";
import { SuperContainer, Container, Colors, Paragraph, Img, Button } from "../assets/style/style";
import product from "../assets/img/pechugaDePavo.jpg";
import accounting from "accounting";


const properties = {
    SuperContainer: {
        width: "194px",
        height: "426px",
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
        color: Colors.boulder,
        margin: "8px 0",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
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
        margin: "16px 0"
    },
    Precio: {
        color: Colors.silver,
        fontSize: "16px",
        fontWeight: "bold",
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
const CardPopular = () => {
    return (
        <SuperContainer
            width={properties.SuperContainer.width}
            height={properties.SuperContainer.height}
        >
            <Container>
                <Container
                    width={properties.ImageProduct.width}
                    height={properties.ImageProduct.height}
                    margin={properties.ImageProduct.margin}
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
                    <Paragraph
                        fontSize={properties.Precio.fontSize}
                        fontWeight={properties.Precio.fontWeight}
                        fontFamily={properties.Paragraph.fontFamily}
                        fontStyle={properties.Paragraph.fontStyle}
                        width={properties.Precio.width}
                        height={properties.Precio.height}
                    >
                        {accounting.formatMoney(26.82)}/kg
                    </Paragraph>

                </Container>
                <Container width="194px">
                    <Paragraph
                        width={properties.Product.width}
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
                        San Rafael prechuga de pavo
                    </Paragraph>
                </Container>
                <Container>
                    <Paragraph
                        fontSize={properties.Paragraph.fontSize}
                        fontFamily={properties.Paragraph.fontFamily}
                        fontStyle={properties.Paragraph.fontStyle}
                        fontWeight={properties.Paragraph.fontWeight}
                        color={properties.Paragraph.color}
                        margin={properties.Paragraph.margin}


                    >
                        250g ({accounting.formatMoney(0.25)}/gr)
                    </Paragraph>
                </Container>
                <Container>
                    <Button
                        width={properties.Button.width}
                        height={properties.Button.height}
                        style={{ marginTop: "13px", order: "2" }}
                    >
                        Agregar
                    </Button>
                </Container>
            </Container>
        </SuperContainer >
    );
};

export default CardPopular;