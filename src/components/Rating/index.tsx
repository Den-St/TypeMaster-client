import { Title } from "../Login/styles"
import { Container} from "./styles"
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export const RatingComponent = () => {
    

interface DataType {
  id: number;
  name: string;
  cpm: number;
  accuracy: number;
  time: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'CPM',
    dataIndex: 'cpm',
    key: 'cpm',
  },
  {
    title: 'Accuracy',
    dataIndex: 'accuracy',
    key: 'accuracy',
  },
  {
    title: 'Time',
    key: 'time',
    dataIndex: 'time',
  },
];

const data: DataType[] = [
  {
    id: 1,
    name: 'John Brown',
    cpm: 132,
    accuracy: 50,
    time:30,
  },
  {
    id: 2,
    name: 'John Brown',
    cpm: 132,
    accuracy: 50,
    time:30,
  },
  {
    id: 3,
    name: 'John Brown',
    cpm: 132,
    accuracy: 50,
    time:30,
  },
];
    return <Container>
        <Title>Rating</Title>
        <Table pagination={false} columns={columns} dataSource={data} />
    </Container>
}