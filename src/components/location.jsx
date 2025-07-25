import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
    padding-top: 42px;
    width: 90%;
    margin: 0 auto;
`;

const Title = styled.span`
    font-size: 1rem;
    color: var(--title-color);
    font-weight: bold;
    opacity: 0.85;
    margin-bottom: 0;
`;

const Image = styled.img`
    display: block;
    margin: 0 auto;
    width: 1.375rem;
    padding-bottom: 42px;
`;

const Content = styled.p`
    font-size: 0.875rem;
    line-height: 1.75;
    opacity: 0.75;
    width: 100%;
    text-align: center;
    padding-top: 42px;
    padding-bottom: 42px;
    margin: 0;

    .bus-line,
    .bus-stop {
        display: inline;
    }

    @media (max-width: 500px) {
        .bus-line,
        .bus-stop {
            display: block;
        }
    }
`;

const Map = styled.div`
    width: 100%;
    padding: 0;
`;

const Location = () => {
    // 카카오 맵 불러오기

    // <!-- 3. 실행 스크립트 -->
    const executeScript = () => {
        const scriptTag = document.createElement("script");
        const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
	"timestamp" : "1753152873355",
		"key" : "t8r57vhxtbc",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
        scriptTag.appendChild(inlineScript);
        document.body.appendChild(scriptTag);
    };

    // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
    // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
    const InstallScript = () => {
        (function () {
            let c = window.location.protocol === "https:" ? "https:" : "http:";
            let a = "16137cec";

            if (
                window.daum &&
                window.daum.roughmap &&
                window.daum.roughmap.cdn
            ) {
                return;
            }
            window.daum = window.daum || {};
            window.daum.roughmap = {
                cdn: a,
                URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
                url_protocal: c,
            };
            let b =
                c +
                "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
                a +
                "/roughmapLander.js";

            // document.write -> doumnet.body.append로 수정
            const scriptTag = document.createElement("script");
            scriptTag.src = b;
            document.body.append(scriptTag);
            scriptTag.onload = () => {
                executeScript();
            };
        })();
    };

    useEffect(() => {
        InstallScript();
    }, [InstallScript]);

    return (
        <Wrapper>
            <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
                <Title>오시는 길</Title>
            </Divider>
            <Image src={Flower} />
            <Map
                id="daumRoughmapContainer1753152873355"
                className="root_daum_roughmap root_daum_roughmap_landing"
            ></Map>
            <Content>
                대전 서구 월드컵대로484번안길 10
                <br />
                에스가든웨딩홀
                <br />
                <br />
                <Title>버스 이용시</Title>
                <br />
                <br />
                <span className="bus-line">
                    101, 103, 105, 107, 116, 119, 312
                </span>
                <span className="bus-stop">
                    대전교통공사 앞 하차 (도보 10분)
                </span>
                <br />
                213, 월평자동차전시장 앞 하차 (도보 5분)
                <br />
                <br />
                <Title>지하철 이용시</Title>
                <br />
                <br />
                갑천역 하차 (도보 15분)
            </Content>
        </Wrapper>
    );
};

export default Location;
