import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { useEffect, useRef, useState } from "react";
import { Container, Input, MainContainer, NotTypedText, RestartButton, Stat, StatsContainer, TextContainer, TypedText } from "./styles";

export const HomeComponent = () => {
  const [initialText,setInitialText] = useState('pa');
  const [typedText,setTypedText] = useState('');
  const [inputValue,setInputValue] = useState(initialText[0]);
  const [notTypedText,setNotTypedText] = useState(initialText.slice(1,initialText.length));
  const [timer,setTimer] = useState(0);
  const [cpm,setCpm] = useState(0);
  const [wrongChars,setWrongChars] = useState(0);
  const intervalRef = useRef(0);
  const [finished,setFinish] = useState(false);

  const onRestart = () => {
    clearInterval(intervalRef.current);
    setTypedText('');
    setInputValue(initialText[0]);
    setNotTypedText(initialText.slice(1,initialText.length));
    setTimer(0);
    setCpm(0);
    setWrongChars(0);
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
      setFinish(true);
    }
  },[typedText]);

  useEffect(() => {
    if(timer > 0) setCpm(+((typedText.length / timer)* 60).toFixed(2));
  },[timer]);
  const [api, contextHolder] = notification.useNotification();
  const placement: NotificationPlacement = 'bottomRight';

  const openNotification = () => {
    api.info({
      message: `This is your best result`,
      description: 'Your statistics just have been updated',
      placement,
    });
  };
  useEffect(() => {
    finished && openNotification();
  },[finished])
  return <Container>
    {contextHolder}
    <MainContainer>
        <TextContainer>
            <TypedText dangerouslySetInnerHTML={{__html:typedText}}/>
            <Input value={''} placeholder={inputValue} onChange={onTypeLetter}/>
            <NotTypedText dangerouslySetInnerHTML={{__html:notTypedText}}/>
        </TextContainer>
        <StatsContainer>
            <Stat>CPM: {cpm}</Stat>
            <Stat>Wrong chars: {wrongChars}</Stat>
            <Stat>Time: {timer}</Stat>
            <RestartButton onClick={onRestart}>Restart</RestartButton>
        </StatsContainer>
    </MainContainer>
  </Container>
}