import React from "react";
import styled from "styled-components";
import {
    WEDDING_DATE,
    WEDDING_DATE2,
    WEDDING_LOCATION,
    GROOM_NAME,
    BRIDE_NAME,
} from "../../config.js";
import HeadPhoto from "../assets/HeadPhoto.webp"; // 이미지 경로 수정

const Layout = styled.div`
    width: 90%;
    overflow: hidden;
    margin: 0 auto;
`;

const TitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 42px;
    font-weight: 500 !important;
    color: var(--title-color);
    animation: fadein 3s;
    -moz-animation: fadein 3s;
    -webkit-animation: fadein 3s;
    -o-animation: fadein 3s;
`;

const ImageBackground = styled.img`
    width: 100%;
    display: block;
    object-fit: cover;
`;

const WeddingInvitation = styled.p`
    font-size: 0.825rem;
    opacity: 0.45;
    margin-bottom: 16px;
`;

const GroomBride = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    opacity: 0.9;
    margin-bottom: 16px;
`;

const Schedule = styled.p`
    font-size: 1.06rem;
    opacity: 0.65;
    margin-bottom: 24px;
`;

const Title = () => {
    return (
        <Layout>
            <TitleWrapper>
                <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
                <GroomBride>
                    {GROOM_NAME} &#38; {BRIDE_NAME}
                </GroomBride>
                <Schedule>
                    {WEDDING_DATE}
                    <br />
                    {WEDDING_DATE2}
                    <br />
                    {WEDDING_LOCATION}
                </Schedule>
            </TitleWrapper>
            <ImageBackground src={HeadPhoto} alt="웨딩 대표 사진" />
        </Layout>
    );
};

export default Title;
