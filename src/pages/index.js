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

    // 접속 환경 확인 및 오디오 재생 로직
    useEffect(() => {
        const isKakaoInAppBrowser = navigator.userAgent
            .toLowerCase()
            .includes("kakaotalk");

        if (isKakaoInAppBrowser) {
            // 카카오톡 인앱 브라우저는 자동 재생 시도
            audioRef.current?.play().catch(() => {
                setShowPlayButton(true);
            });
        } else {
            // QR 등 외부 접속은 버튼 필요
            setShowPlayButton(true);
        }
    }, []);

    const handlePlayMusic = () => {
        audioRef.current?.play();
        setIsPlaying(true);
        setShowPlayButton(false);
    };

    return (
        <Wrapper>
            {/* 오디오 */}
            <audio ref={audioRef} loop>
                <source src={Song} />
            </audio>

            {/* QR 접속 시 재생 버튼 */}
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
