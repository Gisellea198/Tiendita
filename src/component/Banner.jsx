import React from 'react';
import banner from '../assets/img/Banner.jpg';
import { Container, Img, SuperContainer, Wrapper } from '../assets/style/style';


const properties = {
    Img: {
        width: "1286px",
        height: "250px",
    }
}

const Banner = () => {
    return (
        <SuperContainer style={{ marginTop: "40px", marginLeft: "40px" }}>
            <Wrapper>
                <Container>
                    <Img
                        src={banner}
                        width={properties.Img.width}
                        height={properties.Img.height}
                    />
                </Container>
            </Wrapper>
        </SuperContainer>
    )
}

export default Banner;