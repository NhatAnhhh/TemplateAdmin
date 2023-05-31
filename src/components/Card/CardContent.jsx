import { Card } from 'antd';
import { ChartArea } from 'components/Chart';

const CardContent = () => (
    <div style={{ display: 'block', flex: (0, 0, '25%'), maxWidth: '25%', }}>
        <Card style={{ padding: (20, 24, 8) }}>
            <div style={{ position: 'relative' }}>
                <ChartArea style={{ height: 46, }} />
            </div>
        </Card>
    </div>
);
export default CardContent;