import { Spin } from "antd";
import { useTypingFunctionallity } from "../../hooks/typingFunctionallity";
import { RecordT } from "../../types/recordT";
import { BestStat, Container, Input, MainContainer, NotTypedText, RestartButton, Stat, StatItemContainer, StatsContainer, TextContainer, TypedText } from "./styles";

type Props = {
    onFinish:(record:{cpm:number,wrongChars:number,time:number,accuracy:number}) => void;
    notificationComponent:React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    bestStats?:RecordT
}

export const HomeComponent:React.FC<Props> = ({onFinish,notificationComponent,bestStats}) => {
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
            <StatItemContainer><Stat>CPM: {cpm}</Stat><BestStat>{bestStats?.cpm || 300}</BestStat></StatItemContainer>
            <StatItemContainer><Stat>Wrong chars: {wrongChars}</Stat><BestStat>{bestStats?.wrongChars || 10}</BestStat></StatItemContainer>
            <StatItemContainer><Stat>Time: {timer}</Stat><BestStat>{bestStats?.time || 20}</BestStat></StatItemContainer>
            <StatItemContainer><Stat>Accuracy: {accuracy}%</Stat><BestStat>{bestStats?.accuracy || `80%`}</BestStat></StatItemContainer>
            <RestartButton onClick={onRestart}>Restart</RestartButton>
        </StatsContainer>
    </MainContainer>
  </Container>
}