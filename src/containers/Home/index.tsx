import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { HomeComponent } from "../../components/Home"
import { useFinishTyping } from "../../hooks/finishTyping";
import {CrownOutlined} from "@ant-design/icons";

export const Home = () => {
    const [api, contextHolder] = notification.useNotification();
    const placement: NotificationPlacement = 'bottomRight';
  
    const openFinishNotification = (isBest:boolean) => {
        isBest ? openBestResultNotification() : openNotBestResultNotification();
    }
    const openBestResultNotification = () => {
      api.info({
        message: `This is your best result`,
        description: 'Your statistics just have been updated',
        icon:<CrownOutlined />,
        placement,
      });
    };
    const openNotBestResultNotification = () => {
        api.info({
          message: `This is not your best result`,
          placement,
        });
      };

    const {finish} = useFinishTyping(openFinishNotification);

  return <HomeComponent notificationComponent={contextHolder} onFinish={finish}/>
} 