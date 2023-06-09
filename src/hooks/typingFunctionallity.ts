import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { generateRandomText } from "../helpers/generateRandomText";

type onFinishType = (record:{cpm:number,wrongChars:number,time:number,accuracy:number}) => void;

export const useTypingFunctionallity = (onFinish:onFinishType) => {
  const [initialText,setInitialText] = useState(generateRandomText());
  const [typedText,setTypedText] = useState('');
  const [inputValue,setInputValue] = useState(initialText[0]);
  const [notTypedText,setNotTypedText] = useState(initialText.slice(1,initialText.length));
  const [timer,setTimer] = useState<number>(0);
  const [cpm,setCpm] = useState(0);
  const [wrongChars,setWrongChars] = useState(0);
  const [accuracy,setAccuracy] = useState(100);
  const intervalRef = useRef(0);
  const [finished,setFinish] = useState(false);

  const onRestart = async () => {
    clearInterval(intervalRef.current);
    setTypedText('');
    setTimer(0);
    setCpm(0);
    setWrongChars(0);
    setAccuracy(100);
    setFinish(false);
    const initText = generateRandomText();
    setInitialText(initText);
    setInputValue(initText[0]);
    setNotTypedText(initText.slice(1,initText.length));
  }

  const onTypeLetter = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value[e.target.value.length - 1] === initialText[typedText.length]) {
      const newTypedText = typedText + e.target.value[e.target.value.length - 1]
      setTypedText(newTypedText);
      setInputValue(initialText[typedText.length + 1]);
      setNotTypedText(initialText.slice(newTypedText.length + 1,initialText.length));
    } else if(inputValue){
      setWrongChars(prev => ++prev);
    }
  }

  useEffect(() => {
    if(typedText.length === 1){
      setTimer(prev => ++prev)
      intervalRef.current = setInterval(() => setTimer(prev => ++prev),1000);
    }

    if(!notTypedText && !inputValue) {
      clearInterval(intervalRef.current);
      setFinish(true);
    }
  },[typedText]);

  useEffect(() => {
    if(typedText && inputValue) setAccuracy(+((typedText.length/(typedText.length + wrongChars)) * 100).toFixed(2));
  },[typedText,wrongChars]);

  useEffect(() => {
    if(timer > 0) setCpm(+((typedText.length / timer)* 60).toFixed(2));
  },[timer]);

  useEffect(() => {
    finished && onFinish({accuracy,cpm,time:timer,wrongChars});
  },[finished]);


  return {typedText,inputValue,onTypeLetter,notTypedText,cpm,wrongChars,timer,accuracy,onRestart};
}