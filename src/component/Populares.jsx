import React from 'react';
import { Container, Paragraph } from '../assets/style/style';
import CardPopular from './CardPopular';

const properties = {
    Paragraph: {
        width: "192px",
        height: "22px",
        fontSize: "20px",
        lineHeight: "22px",
        margin: "40px 0px",
    },
    Container: {
        direction: "column",
        padding: "0 40px",
        width: "1286px",
        height: "568px",
    }
}

const Populares = () => {
    return (
        <Container

            padding={properties.Container.padding}
            width={properties.Container.width}
            height={properties.Container.height}
            style={{ alignItems: "flex-start", boxShadow: "0 11px 29px rgba(0, 0, 0, 0.05)", borderRadius: "16px", border: "solid 1px", marginBottom: "40px" }}
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
                    Los más populares
                </Paragraph>
            </Container>
            <Container direction={properties.Container.direction}>
                <CardPopular />
            </Container>
        </Container >
    )
}

export default Populares;

