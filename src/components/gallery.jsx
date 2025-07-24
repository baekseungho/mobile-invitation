import React, { useState } from "react";
import styled from "styled-components";
import { Divider } from "antd";

// 이미지 import
import Photo1 from "../assets/Photo1.jpg";
import Photo2 from "../assets/Photo2.jpg";
import Photo3 from "../assets/Photo3.jpg";
import Photo4 from "../assets/Photo4.jpg";
import Photo5 from "../assets/Photo5.jpg";
import Photo6 from "../assets/Photo6.jpg";
import Photo7 from "../assets/Photo7.jpg";
import Photo8 from "../assets/Photo8.jpg";
import Photo9 from "../assets/Photo9.jpg";
import Photo10 from "../assets/Photo10.jpg";
import Photo11 from "../assets/Photo11.jpg";
import Photo12 from "../assets/Photo12.jpg";
import Photo13 from "../assets/Photo13.jpg";
import Photo14 from "../assets/Photo14.jpg";
import Photo15 from "../assets/Photo15.jpg";

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
    height: auto;
    cursor: zoom-in;
    border-radius: 8px;
    object-fit: cover;
    transition: transform 0.3s ease;

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
