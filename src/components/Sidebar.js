import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Nav, Badge, Image, Button, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from '../routes';

import Logo from '../assets/img/darwinex/logo-darwinex.svg';
import ProfilePicture from '../assets/img/team/profile-picture.jpeg';
import Explorar from '../assets/img/darwinex/explorar-icon.svg';
import Darwinia from '../assets/img/darwinex/darwinia-icon.svg';
import AllDarwins from '../assets/img/darwinex/all-darwins-icon.svg';

const Sidebar = (props = {}) => {
	const location = useLocation();
	const { pathname } = location;
	const [show, setShow] = useState(false);
	const showClass = show ? 'show' : '';

	const onCollapse = () => setShow(!show);

	const NavItem = (props) => {
		const {
			title,
			link,
			external,
			target,
			icon,
			image,
			badgeText,
			badgeBg = 'secondary',
			badgeColor = 'primary',
		} = props;
		const classNames = badgeText ? 'd-flex justify-content-start align-items-center justify-content-between' : '';
		const navItemClassName = link === pathname ? 'active' : '';
		const linkProps = external ? { href: link } : { as: Link, to: link };

		return (
			<Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
				<Nav.Link {...linkProps} target={target} className={classNames}>
					<span>
						{icon ? (
							<span className="sidebar-icon">
								<FontAwesomeIcon icon={icon} />{' '}
							</span>
						) : null}
						{image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

						<span className="sidebar-text">{title}</span>
					</span>
					{badgeText ? (
						<Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">
							{badgeText}
						</Badge>
					) : null}
				</Nav.Link>
			</Nav.Item>
		);
	};

	return (
		<>
			<Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
				<Navbar.Brand className="me-lg-5" as={Link} to={Routes.DashboardOverview.path}>
					<Image src={Logo} className="navbar-brand-light" />
				</Navbar.Brand>
				<Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
					<span className="navbar-toggler-icon" />
				</Navbar.Toggle>
			</Navbar>
			<CSSTransition timeout={300} in={show} classNames="sidebar-transition">
				<SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
					<div className="sidebar-inner px-4 pt-3">
						<div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
							<div className="d-flex align-items-center">
								<div className="user-avatar lg-avatar me-4">
									<Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
								</div>
							</div>
						</div>
						<Nav className="flex-column pt-3 pt-md-0">
							<a
								class="d-flex justify-content-center card-link"
								href="/"
							>
								<img
									src={Logo}
									height="35"
									alt="Darwinex Logo"
									class="d-block mx-auto mb-5 mt-2"
								/>
							</a>

							<h6 className="text-white">PRINCIPAL</h6>
							<NavItem title="Explorar" link={Routes.DashboardOverview.path} image={Explorar} />
							<NavItem title="All Darwins" link={Routes.AllDarwins.path} image={AllDarwins} />
							<NavItem title="Darwinia" link={Routes.Darwinia.path} image={Darwinia} />
						</Nav>
					</div>
				</SimpleBar>
			</CSSTransition>
		</>
	);
};
export default Sidebar;
