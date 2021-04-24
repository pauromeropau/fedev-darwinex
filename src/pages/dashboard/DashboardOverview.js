import React from 'react';
import { Col, Row } from '@themesberg/react-bootstrap';

import { BarChartWidget, SalesValueWidget, SalesValueWidgetPhone } from '../../components/Widgets';
import { totalOrders } from '../../data/charts';

const DashboardOverview = () => {
	return (
		<>
			{/* <div className="d-flex justify-content-end flex-wrap flex-md-nowrap align-items-center py-4">
				<ButtonGroup>
					<Button variant="outline-white" size="sm">
						Share
					</Button>
					<Button variant="outline-white" size="sm">
						Export
					</Button>
				</ButtonGroup>
			</div> */}

			<Row className="justify-content-md-center">
				<Col xs={12} className="mb-4 d-none d-sm-block">
					<SalesValueWidget title="Sales Value" value="10,567" percentage={10.57} />
				</Col>
				<Col xs={12} className="mb-4 d-sm-none">
					<SalesValueWidgetPhone title="Sales Value" value="10,567" percentage={10.57} />
				</Col>
			</Row>

			<Row>
				<Col xs={12} xl={12} className="mb-4">
					<Row>
						<Col xs={12} xl={4}>
							<Col xs={12} className="mb-4">
								<BarChartWidget title="Total orders" value={452} percentage={18.2} data={totalOrders} />
							</Col>
						</Col>
            <Col xs={12} xl={4}>
							<Col xs={12} className="mb-4">
								<BarChartWidget title="Total orders" value={452} percentage={18.2} data={totalOrders} />
							</Col>
						</Col>
            <Col xs={12} xl={4}>
							<Col xs={12} className="mb-4">
								<BarChartWidget title="Total orders" value={452} percentage={18.2} data={totalOrders} />
							</Col>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	);
};
export default DashboardOverview;
