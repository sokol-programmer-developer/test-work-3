import React from "react";
import "../css/style.css";
import "../css/style_mobile.css";
import backgroundPic from "../pic/header.webp";
import Navbar from "./Navbar";


const Landing = () => {
    return (
        <div className="landing_section">
            <Navbar/>

            <div className="background_container">
                <img src={backgroundPic} alt=" background_picture" className="background_pic"/>
            </div>

            <div className="content">

                <div className="left_content">
                    <div className="title">
                        <h1 className="title_h1"> ПУТЕШЕСТВИЕ</h1>
                        <h2 className="title_h2">на красную планету</h2>
                    </div>

                    <button className="title_button" >
                        <h2 className="title_button_h2"> Начать путишествия </h2>
                    </button>
                </div>

                <div className="right_content">

                    <div className="chapter_1">
                        <h3  className="chapter_h3"> мы </h3>
                        <h1 className="chapter_h1" > 1 </h1>
                        <h3 className="chapter_h3" > на рынкке </h3>
                    </div>

                    <div className="chapter_2">
                        <h3  className="chapter_h3"> гарантируем  </h3>
                        <h1 className="chapter_h1" > 50% </h1>
                        <h3 className="chapter_h3" > безопасность </h3>
                    </div>

                    <div className="chapter_3">
                        <h3  className="chapter_h3"> календарик за </h3>
                        <h1 className="chapter_h1" > 2001 </h1>
                        <h3 className="chapter_h3" >  в подарок </h3>
                    </div>

                    <div className="chapter_4">
                        <h3  className="chapter_h3"> путешествие </h3>
                        <h1 className="chapter_h1" > 597 </h1>
                        <h3 className="chapter_h3" > дней </h3>
                    </div>

                </div>

            </div>

            <div className="line"> </div>

        </div>
    );
}

export default Landing;
