import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
    padding-top: 42px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
`;

const Content = styled.span`
    display: block;
    margin: 0 auto;
    font-size: 1.2rem;
    font-family: "mom_to_daughter";
    text-align: center;
    color: var(--title-color);
    line-height: 2.5rem;
    opacity: 0.75;
    background-image: url(${QuotePaper});
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 400px) {
        font-size: 1.05rem;
    }
`;

const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 1.375rem;
    padding-bottom: 42px;
`;

const Quote = () => {
    return (
        <Wrapper>
            <Image src={Flower} data-aos="fade-up" />
            <Content data-aos="fade-up">
                사랑은 오래 참고, 사랑은 온유하며, 시기하지 아니하며,
                <br />
                자랑하지 아니하며, 교만하지 아니하며, 모든 것을 참으며,
                <br />
                모든 것을 믿으며, 모든 것을 바라며, 모든 것을 견디느니라.
                <br />
                그런즉 믿음, 소망, 사랑 이 세 가지는 항상 있을 것인데
                <br />
                그 중의 제일은 사랑이라.
                <br />
                고린도전서 13:4-7, 13
            </Content>
        </Wrapper>
    );
};

export default Quote;
