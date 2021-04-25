import React from 'react';
import { Card, Button, Image } from '@themesberg/react-bootstrap';
import { SalesValueChart, SalesValueChartphone } from './Charts';

import Logo from '../assets/img/darwinex/owl-icon.svg';

export const SalesValueWidget = (props) => {
	const { title } = props;

			return (
		<Card className="shadow-sm card bg-primary text-white">
			<Card.Header className="d-flex flex-row justify-content-center align-items-left flex-0 card-header">
				<div className="d-block">
					<h5 className="fw-bolder mb-2 me-3 mt-2">{title} #12</h5>
				</div>
				<div className="d-flex ms-auto">
					<h6 className="text-success me-3 mt-2">188.22</h6>
					<Button variant="outline-success" size="sm" className="me-3">
						TRADE
					</Button>
				</div>
			</Card.Header>
			<Card.Body className="p-2">
				<SalesValueChart />
			</Card.Body>
			<Card.Header className="d-flex flex-row align-items-center flex-0">
				<div className="d-block">
					<h7 className="mb-2">CAPITAL INVERTIDO</h7>
				</div>
				<div className="d-flex ms-auto">
					<h7 className="fw-bolder text-white">$ 1600.00</h7>
				</div>
			</Card.Header>
			<Card.Header className="d-flex flex-row align-items-center flex-0">
				<div className="d-block">
					<h7 className="mb-2">RETORNO</h7>
				</div>
				<div className="d-flex ms-auto">
					<h7 className="fw-bolder text-success">7.0 %</h7>
				</div>
			</Card.Header>
			<Card.Header className="d-flex flex-row align-items-center flex-0">
				<div className="d-block">
					<h7 className="mb-2">DRAWDOWN</h7>
				</div>
				<div className="d-flex ms-auto">
					<h7 className="fw-bolder text-danger">-37.0 %</h7>
				</div>
			</Card.Header>
			<Card.Header className="d-flex flex-row align-items-center flex-0">
				<div className="d-block">
					<h7 className="mb-2">SCORE</h7>
				</div>
				<div className="d-flex ms-auto">
					<Image src={Logo} className="" />
					<h7 className="fw-bolder text-white">78.2</h7>
				</div>
			</Card.Header>
		</Card>
	);
};

export const SalesValueWidgetPhone = (props) => {
	const { title } = props;

	return (
		<Card className="shadow-sm card bg-primary text-white">
			<Card.Header className="d-md-flex  flex-row align-items-center flex-0 card-header">
				<div className="d-block mb-md-0">
					<h5 className="fw-bolder mb-2 me-3 mt-2">{title} #12</h5>
				</div>
				<div className="d-flex ms-auto">
					<h6 className="text-success me-3 mt-2">188.22</h6>
					<Button variant="outline-success" size="sm" className="me-3">
						TRADE
					</Button>
				</div>
			</Card.Header>
			<Card.Body className="p-2">
				<SalesValueChartphone />
			</Card.Body>
			<Card.Header className="d-flex flex-row align-items-center flex-0">
				<div className="d-block">
					<h7 className="mb-2">CAPITAL INVERTIDO</h7>
				</div>
				<div className="d-flex ms-auto">
					<h7 className="fw-bolder text-white">$ 1600.00</h7>
				</div>
			</Card.Header>
			<Card.Header className="d-flex flex-row align-items-center flex-0">
				<div className="d-block">
					<h7 className="mb-2">RETORNO</h7>
				</div>
				<div className="d-flex ms-auto">
					<h7 className="fw-bolder text-success">7.0 %</h7>
				</div>
			</Card.Header>
			<Card.Header className="d-flex flex-row align-items-center flex-0">
				<div className="d-block">
					<h7 className="mb-2">DRAWDOWN</h7>
				</div>
				<div className="d-flex ms-auto">
					<h7 className="fw-bolder text-danger">-37.0 %</h7>
				</div>
			</Card.Header>
			<Card.Header className="d-flex flex-row align-items-center flex-0">
				<div className="d-block">
					<h7 className="mb-2">SCORE</h7>
				</div>
				<div className="d-flex ms-auto">
					<Image src={Logo} className="" />
					<h7 className="fw-bolder text-white">78.2</h7>
				</div>
			</Card.Header>
		</Card>
	);
};