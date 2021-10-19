import React from 'react'
import { Container, SuperContainer, Wrapper } from '../assets/style/style';
import Banner from '../component/Banner';
import Ofertas from '../component/Ofertas';
import Populares from '../component/Populares';

const Home = () => {
    return (
        <SuperContainer>
            <Wrapper>
                <Container>
                    <Banner />
                    <Container margin="0px 40px">
                        <Ofertas />
                        <Populares />
                    </Container>
                </Container>

            </Wrapper>
        </SuperContainer>
    );
}

export default Home