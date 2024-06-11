import React, { useEffect, useState } from 'react';
import '../landing.css';

const TextAnimation: React.FC = () => {

    const [typedText, setTypedText] = useState("");
    const [messageIndex, setMessageIndex] = useState(0)
    const [fading, setFading] = useState(false);
    // declare the variable to hold the phrase
    const messages = [
        "Are you hungry? Have some ingredients but you can't figure out what to make?",
        "Just ask PocketChef, Chef's got you covered!"
    ];
    // declare a variable with the interval of 100 milliseconds
    const interval = 100
    const typingRender = (text: string | any[], updater: { (value: React.SetStateAction<string>): void; (arg0: string): void; }, interval: number | undefined) => {
        let localTypingIndex = 0;
        let localTyping = "";
        setFading(false)
        if (text) {
            let printer = setInterval(() => {
                if (localTypingIndex < text.length) {
                    updater((localTyping += text[localTypingIndex]));
                    localTypingIndex += 1;
                } else {
                    localTypingIndex = 0;
                    localTyping = "";
                    clearInterval(printer);
                    const fadeLoop = () => {
                        setFading(true)
                        return ''
                    }
                    const messageLoop = () => {
                        let textIndex = messageIndex;
                        if(textIndex === 0){
                            setMessageIndex(1)
                        }
                        return ''
                    }
                    if(messageIndex === 0){
                        setTimeout(fadeLoop, 4000);
                    }
                    setTimeout(messageLoop, 5000);
                }
            }, interval);
        }
    };
    // run this effect on first render
    useEffect(() => {
        // call the function passing a phrase, setter method for state and interval var
        typingRender(messages[messageIndex], setTypedText, interval);
    }, [interval, messageIndex]);
    return (
        <span className={`text-center text-2xl transition-opacity ${fading ? 'opacity-0' : 'opacity-100'}`}>{typedText}</span>
    )
};

export default TextAnimation;
