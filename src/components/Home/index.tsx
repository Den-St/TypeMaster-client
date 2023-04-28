import { useTypingFunctionallity } from "../../hooks/typingFunctionallity";
import { Container, Input, MainContainer, NotTypedText, RestartButton, Stat, StatsContainer, TextContainer, TypedText } from "./styles";

type Props = {
    onFinish:(record:{cpm:number,wrongChars:number,time:number,accuracy:number}) => void;
    notificationComponent:React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const HomeComponent:React.FC<Props> = ({onFinish,notificationComponent}) => {
    const {typedText,inputValue,onTypeLetter,notTypedText,
           cpm,wrongChars,timer,accuracy,onRestart} = useTypingFunctionallity(onFinish);

  return <Container>
    {notificationComponent}
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
            <Stat>Accuracy: {accuracy}%</Stat>
            <RestartButton onClick={onRestart}>Restart</RestartButton>
        </StatsContainer>
    </MainContainer>
  </Container>
}