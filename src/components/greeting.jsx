import React from "react";
import styled from "styled-components";
import { Divider } from "antd";
import {
    GROOM_NAME,
    GROOM_FATHER_NAME,
    GROOM_MOTHER_NAME,
    BRIDE_NAME,
    BRIDE_FATHER_NAME,
    BRIDE_MOTHER_NAME,
} from "../../config";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
    padding-top: 42px;
    margin: 0 auto;
    width: 70%;
`;

const Title = styled.p`
    font-size: 1rem;
    color: var(--title-color);
    font-weight: bold;
    opacity: 0.85;
    margin-bottom: 0;
    text-align: center;
`;

const Content = styled.p`
    font-size: 0.72rem;
    line-height: 1.75;
    opacity: 0.75;
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
`;

const GroomBride = styled.p`
    font-size: 0.875rem;
    line-height: 1.75;
    opacity: 0.85;
    margin-bottom: 0px;
    width: 100%;
    text-align: center;
`;

const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 1.375rem;
    padding-bottom: 42px;
`;

const Greeting = () => {
    return (
        <Wrapper>
            <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
                <Title data-aos="fade-up">초대합니다</Title>
            </Divider>
            <Image data-aos="fade-up" src={Flower} />
            <Content data-aos="fade-up">
                친구에서 연인으로,
                <br />
                <br />
                연인에서 평생을 함께할 사람으로.
                <br />
                <br />
                그 오랜 시간 동안 서로의 기쁨을 나누고
                <br />
                <br />
                서툰 감정을 이해하며 한 발 한 발 가까워졌습니다.
                <br />
                <br />
                이제는 같은 마음으로 같은 곳을 바라보며
                <br />
                <br />
                부부로서의 첫 걸음을 내딛습니다.
                <br />
                <br />
                그 시작에 함께해 주신다면
                <br />
                <br />
                더없는 감사로 간직하겠습니다.
            </Content>
            <GroomBride data-aos="fade-up">
                {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
                <br />
                {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
            </GroomBride>
        </Wrapper>
    );
};

export default Greeting;
