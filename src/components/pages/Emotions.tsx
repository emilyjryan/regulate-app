import React, { useState } from "react";

export default function Emotions() {

    const [emotionId, setEmotionId] = useState({
        pic: '',
        word:''
    })

    const selectEmotion = (emotionPic: string, emotionWord: string) => {
       setEmotionId({
        pic: emotionPic, 
        word: emotionWord,
    })
    }

    return (
        <>
        <h1 style={{marginTop: '12px', fontSize: '32px', textAlign: 'center', backgroundColor: 'rgb(167,198,246)'}}>How are you feeling right now?</h1>

        <div className="columns">

            <div className="choices-div column columns text-center p-10">
                <div className="row1 column">

                    <button onClick={() => selectEmotion("😂", "Laughing")} className="row1img1">
                        <p style={{fontSize: '80px'}}>😂</p>
                        Laughing
                    </button>

                    <button onClick={() => selectEmotion("🥱", "Tired")} className="row1img2">
                        <p style={{fontSize: '80px'}}>🥱</p>
                        Tired
                    </button>

                    <button onClick={() => selectEmotion("😱", "Surprised")} className="row1img3">
                        <p style={{fontSize: '80px'}}>😱</p>
                        Surprised
                    </button>

                    <button onClick={() => selectEmotion("😅", "Relieved")} className="row1img4">
                        <p style={{fontSize: '80px'}}>😅</p>
                        Relieved
                    </button>

                </div>

                <div className="row2 column">

                    <button onClick={() => selectEmotion("😰", "Nervous")} className="row2img1">
                        <p style={{fontSize: '80px'}}>😰</p>
                        Nervous
                    </button>

                    <button onClick={() => selectEmotion("🫣", "Scared")} className="row2img2">
                        <p style={{fontSize: '80px'}}>🫣</p>
                        Scared
                    </button>

                    <button onClick={() => selectEmotion("🙄", "Annoyed")} className="row2img3">
                        <p style={{fontSize: '80px'}}>🙄</p>
                        Annoyed
                    </button>

                    <button onClick={() => selectEmotion("😋", "Hungry")} className="row2img4">
                        <p style={{fontSize: '80px'}}>😋</p>
                        Hungry
                    </button>

                </div>

                <div className="row3 column">
                
                    <button onClick={() => selectEmotion("😡", "Angry")} className="row3img1">
                        <p style={{fontSize: '80px'}}>😡</p>
                        Angry
                    </button>

                    <button onClick={() => selectEmotion("🤨", "Skeptical")} className="row3img2">
                        <p style={{fontSize: '80px'}}>🤨</p>
                        Skeptical
                    </button>

                    <button onClick={() => selectEmotion("😖", "Frustrated")} className="row3img3">
                        <p style={{fontSize: '80px'}}>😖</p>
                        Frustrated
                    </button>

                    <button onClick={() => selectEmotion("🤗", "Excited")} className="row3img4">
                        <p style={{fontSize: '80px'}}>🤗</p>
                        Excited
                    </button>

                </div>

                <div className="row4 column">

                    <button onClick={() => selectEmotion("😢", "Sad")} className="row4img1">
                        <p style={{fontSize: '80px'}}>😢</p>
                        Sad
                    </button>

                    <button onClick={() => selectEmotion("🤢", "Nauseous")} className="row4img2">
                        <p style={{fontSize: '80px'}}>🤢</p>
                        Nauseous
                    </button>

                    <button onClick={() => selectEmotion("🤪", "Silly")} className="row4img3">
                        <p style={{fontSize: '80px'}}>🤪</p>
                        Silly
                    </button>

                    <button onClick={() => selectEmotion("😀", "Happy")} className="row4img4">
                        <p style={{fontSize: '80px'}}>😀</p>
                        Happy                
                    </button>

                </div>

            </div>

            <div className="column text-center">
                <div>
                    <h1 style={{marginTop: '12px', fontSize: '26px', textAlign: 'center'}}>I am feeling...</h1>
                </div>
                <div>
                    <p style={{fontSize: '120px'}}>{emotionId.pic}</p>
                    {emotionId.word}                
                </div>

                <div className="column">
                    CLEAR
                </div>
            </div>

        </div>

        </>
    )
}