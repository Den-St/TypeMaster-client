import { useEffect, useRef, useState } from "react";
import { Container, Input, MainContainer, NotTypedText, RestartButton, Stat, StatsContainer, TextContainer, TypedText } from "./styles";

export const HomeComponent = () => {
    const [initialText,setInitialText] = useState('pamparmpa rararpa rararpa rararpar ararparara rpara rarpar arar para rarpararar pamparmpa rararpa rararpa rararpar ararparara rpara rarpar arar para rarpararar pamparmpa rararpa rararpa rararpar ararparara rpara rarpar arar para rarpararar pamparmpa rararpa rararpa rararpar ararparara rpara rarpar arar para rarpararar');
  const [typedText,setTypedText] = useState('');
  const [inputValue,setInputValue] = useState(initialText[0]);
  const [notTypedText,setNotTypedText] = useState(initialText.slice(1,initialText.length));
  const [timer,setTimer] = useState(0);
  const [cpm,setCpm] = useState(0);//cpm --- Characters Per Minute
  const [wrongChars,setWrongChars] = useState(0);
  const intervalRef = useRef(0);
  const inputRef = useRef(null);

  const onRestart = () => {
    clearInterval(intervalRef.current);
    setTypedText('');
    setInputValue(initialText[0]);
    setNotTypedText(initialText.slice(1,initialText.length));
    setTimer(0);
    setCpm(0);
    setWrongChars(0)
  }

  const onTypeLetter = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value[e.target.value.length - 1] === initialText[typedText.length]) {
      const newTypedText = typedText + e.target.value[e.target.value.length - 1]
      setTypedText(newTypedText);
      setInputValue(initialText[typedText.length + 1]);
      setNotTypedText(initialText.slice(newTypedText.length + 1,initialText.length));
      
    } else if(typedText || inputValue && !notTypedText){
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
    }

  },[typedText]);

  useEffect(() => {
    if(timer > 0) setCpm(+((typedText.length / timer)* 60).toFixed(2));
  },[timer]);


  return <Container>
    <MainContainer>
        <TextContainer>
            <TypedText dangerouslySetInnerHTML={{__html:typedText}}/>
            <Input value={''} placeholder={inputValue} onChange={onTypeLetter}/>
            <NotTypedText dangerouslySetInnerHTML={{__html:notTypedText}}/>
        </TextContainer>
        <StatsContainer>
            <Stat>CPM:{cpm}</Stat>
            <Stat>Wrong chars:{wrongChars}</Stat>
            <Stat>Time:{timer}</Stat>
            <RestartButton disabled={timer === 0} onClick={onRestart}>restart</RestartButton>
        </StatsContainer>
    </MainContainer>
  </Container>
}