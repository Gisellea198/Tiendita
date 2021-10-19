import React from 'react';
import { Container, Paragraph } from '../assets/style/style';
import CardOfertas from './CardOfertas';

const properties = {
    Paragraph: {
        width: "76px",
        height: "22px",
        fontSize: "20px",
        lineHeight: "22px",
        margin: "40px 0px",
    },
    Container: {
        direction: "column",
        padding: "0 40px",
        width: "1286px",
        height: "560px",
        margin: "40px 0",
    }
}

const Ofertas = () => {
    return (
        <Container

            padding={properties.Container.padding}
            width={properties.Container.width}
            height={properties.Container.height}
            margin={properties.Container.margin}
            style={{ alignItems: "flex-start", boxShadow: "0 11px 29px rgba(0, 0, 0, 0.05)", borderRadius: "16px", border: "solid 1px" }}
        >
            <Container>
                <Paragraph
                    width={properties.Paragraph.width}
                    height={properties.Paragraph.height}
                    fontSize={properties.Paragraph.fontSize}
                    lineHeight={properties.Paragraph.lineHeight}
                    margin={properties.Paragraph.margin}
                    style={{ left: "40px", top: "40px", }}
                >
                    Ofertas
                </Paragraph>
            </Container>
            <Container direction={properties.Container.direction}>

                <CardOfertas />
            </Container>
        </Container >
    )
}

export default Ofertas;

