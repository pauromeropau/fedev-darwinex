import React from 'react';
import { Col, Row } from '@themesberg/react-bootstrap';
import { SalesValueWidget, SalesValueWidgetPhone } from '../../components/Widgets';

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

			{/* <Row className="justify-content-md-center">
				<Col xs={12} className="mb-4 d-none d-sm-block">
					<SalesValueWidget title="Sales Value" value="10,567" percentage={10.57} />
				</Col>
				<Col xs={12} className="mb-4 d-sm-none">
					<SalesValueWidget title="Sales Value" value="10,567" percentage={10.57} />
				</Col>
			</Row> */}

			<Row>
				<Col xl={12} className="mb-4 mt-5">
					<h6 className="fw-bold text-white mb-5">729 Darwins encontrados</h6>
					<Row>
						<Col xl={4}>
							<Col className="mb-4">
								<SalesValueWidget title="BWE" />
							</Col>
						</Col>
						<Col  xl={4}>
							<Col className="mb-4">
								<SalesValueWidget title="NTI" />
							</Col>
						</Col>
						<Col xl={4}>
							<Col className="mb-4">
								<SalesValueWidget title="BWE" />
							</Col>
						</Col>
					</Row>
				</Col>
				<Col xs={12} className="mb-4 d-none d-xs-block">
					<Col xs={9} className="mb-4">
						<h6 className="fw-bold text-white mb-5">729 Darwins encontrados</h6>
						<SalesValueWidgetPhone title="BWE" />
					</Col>
					<Col xs={9} className="mb-4 d-sm-none d-md-none">
						<SalesValueWidgetPhone title="NTI" />
					</Col>
					<Col xs={9} className="mb-4 d-sm-none d-md-none">
						<SalesValueWidgetPhone title="BWE" />
					</Col>
				</Col>
			</Row>
		</>
	);
};
export default DashboardOverview;
