import React, { useState } from "react";
import styled from "styled-components";
import { Divider } from "antd";

// 이미지 import
import Photo1 from "../assets/Photo1.webp";
import Photo2 from "../assets/Photo2.webp";
import Photo3 from "../assets/Photo3.webp";
import Photo4 from "../assets/Photo4.webp";
import Photo5 from "../assets/Photo5.webp";
import Photo6 from "../assets/Photo6.webp";
import Photo7 from "../assets/Photo7.webp";
import Photo8 from "../assets/Photo8.webp";
import Photo9 from "../assets/Photo9.webp";
import Photo10 from "../assets/Photo10.webp";
import Photo11 from "../assets/Photo11.webp";
import Photo12 from "../assets/Photo12.webp";
import Photo13 from "../assets/Photo13.webp";
import Photo14 from "../assets/Photo14.webp";
import Photo15 from "../assets/Photo15.webp";
import Photo16 from "../assets/Photo16.webp";
import Photo17 from "../assets/Photo17.webp";
import Photo18 from "../assets/Photo18.webp";
import Photo19 from "../assets/Photo19.webp";
import Photo20 from "../assets/Photo20.webp";
import Photo21 from "../assets/Photo21.webp";

// 배열로 묶기
const photoList = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
    Photo11,
    Photo12,
    Photo13,
    Photo14,
    Photo15,
    Photo16,
    Photo17,
    Photo18,
    Photo19,
    Photo20,
    Photo21,
];
const Wrapper = styled.div`
    padding: 42px 0;
    width: 90%;
    margin: 0 auto;
`;

const Title = styled.p`
    font-size: 1rem;
    color: var(--title-color);
    font-weight: bold;
    opacity: 0.85;
    text-align: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 항상 3개씩
    gap: 8px; // 조금 더 좁은 간격

    /* 모바일에서도 3열 유지하므로 반응형 제외 */
`;

const GridImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    cursor: zoom-in;
    border-radius: 6px;
    transition: transform 0.2s;

    /* 기본값 (2000px 초과 시) */
    height: 820px;

    @media (max-width: 2000px) {
        height: 770px;
    }
    @media (max-width: 1900px) {
        height: 740px;
    }
    @media (max-width: 1800px) {
        height: 710px;
    }
    @media (max-width: 1700px) {
        height: 680px;
    }
    @media (max-width: 1600px) {
        height: 650px;
    }
    @media (max-width: 1500px) {
        height: 570px;
    }
    @media (max-width: 1400px) {
        height: 540px;
    }
    @media (max-width: 1300px) {
        height: 510px;
    }
    @media (max-width: 1200px) {
        height: 430px;
    }
    @media (max-width: 1100px) {
        height: 400px;
    }
    @media (max-width: 1000px) {
        height: 370px;
    }
    @media (max-width: 900px) {
        height: 340px;
    }
    @media (max-width: 800px) {
        height: 310px;
    }
    @media (max-width: 700px) {
        height: 280px;
    }
    @media (max-width: 600px) {
        height: 250px;
    }
    @media (max-width: 500px) {
        height: 220px;
    }
    @media (max-width: 400px) {
        height: 200px;
    }

    &:hover {
        transform: scale(1.03);
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 15, 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const ModalImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
`;

const NavButton = styled.button`
    position: absolute;
    top: 50%;
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 1000;

    &:hover {
        opacity: 0.8;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
`;

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const openModal = (index) => {
        setCurrentIdx(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goNext = () => {
        setCurrentIdx((currentIdx + 1) % photoList.length);
    };

    const goPrev = () => {
        setCurrentIdx((currentIdx - 1 + photoList.length) % photoList.length);
    };

    return (
        <Wrapper>
            <Divider plain>
                <Title>우리의 아름다운 순간</Title>
            </Divider>

            <Grid>
                {photoList.map((photo, index) => (
                    <GridImage
                        key={index}
                        src={photo}
                        alt={`photo-${index + 1}`}
                        loading="lazy"
                        onClick={() => openModal(index)}
                    />
                ))}
            </Grid>

            {isOpen && (
                <ModalOverlay onClick={closeModal}>
                    <NavButton
                        onClick={(e) => {
                            e.stopPropagation();
                            goPrev();
                        }}
                        style={{ left: "30px" }}
                    >
                        ‹
                    </NavButton>
                    <ModalImage
                        src={photoList[currentIdx]}
                        alt={`photo-large-${currentIdx + 1}`}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <NavButton
                        onClick={(e) => {
                            e.stopPropagation();
                            goNext();
                        }}
                        style={{ right: "30px" }}
                    >
                        ›
                    </NavButton>
                    <CloseButton
                        onClick={(e) => {
                            e.stopPropagation();
                            closeModal();
                        }}
                    >
                        ✕
                    </CloseButton>
                </ModalOverlay>
            )}
        </Wrapper>
    );
};

export default Gallery;
