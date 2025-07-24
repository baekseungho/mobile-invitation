import React, { useEffect, useRef, useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import Gallery from "../components/gallery";
import Greeting from "../components/greeting";
import Title from "../components/title";
import "../styles/index.css";

import GroovePaper from "../assets/GroovePaper.png";
import Location from "../components/location";
import CongratulatoryMoney from "../components/congratulatoryMoney";
import Share from "../components/share";
import Quote from "../components/quote";
import Song from "../assets/Nevertheless.mp3";

import AOS from "aos";
import "aos/dist/aos.css";

const { Footer } = Layout;

const Wrapper = styled.div`
    background: #efebe9;
    background-image: url(${GroovePaper});
    width: 100%;
    padding-top: 20px;
`;

const AudioButton = styled.button`
    margin: 0 auto;
    display: block;
    background: #6d4c41;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 16px;
    cursor: pointer;
`;

const IndexPage = () => {
    const [showPlayButton, setShowPlayButton] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // 카카오 SDK 삽입
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // AOS 초기화
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    // 접속 방식 확인 (referrer가 없으면 QR 가능성 높음)
    useEffect(() => {
        const isFromKakao = document.referrer.includes("kakao");
        if (!isFromKakao && document.referrer === "") {
            // QR 가능성 → 버튼 노출
            setShowPlayButton(true);
        } else {
            // 일반 접속 → 자동 재생
            audioRef.current?.play().catch(() => {
                // 자동재생 실패 시 사용자 재생 유도
                setShowPlayButton(true);
            });
        }
    }, []);

    const handlePlayMusic = () => {
        audioRef.current?.play();
        setIsPlaying(true);
        setShowPlayButton(false);
    };

    return (
        <Wrapper>
            {/* 오디오 요소 */}
            <audio ref={audioRef} loop>
                <source src={Song} />
            </audio>

            {/* QR 접속일 경우에만 노출 */}
            {showPlayButton && !isPlaying && (
                <AudioButton onClick={handlePlayMusic}>
                    🎵 음악 재생하기
                </AudioButton>
            )}

            <Title />
            <Greeting />
            <Gallery />
            <Location />
            <Quote />
            <CongratulatoryMoney />
            <Share />
            <Footer
                style={{
                    background: "#D7CCC8",
                    backgroundImage: `url(${GroovePaper})`,
                    opacity: 0.6,
                    textAlign: "center",
                }}
            >
                Copyright © 2022 Shin Jooyoung
            </Footer>
        </Wrapper>
    );
};

export default IndexPage;
