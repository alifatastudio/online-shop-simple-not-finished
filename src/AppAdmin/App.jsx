import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppAdminDashboard from '../AppAdminDashboard/Index';
import AppAdminOrder from '../AppAdminOrder/Index';
import AppAdminPayment from '../AppAdminPayment/Index';
import AppAdminProduct from '../AppAdminProduct/Index';
import AppNotFound from '../AppNotFound/Index';

export default function App(){

	const routers = [
		{path: '/admin/order', comp: AppAdminOrder },
		{path: '/admin/payment', comp: AppAdminPayment },
		{path: '/admin/product', comp: AppAdminProduct },
		{path: '/admin/', comp: AppAdminDashboard },
		{path: '*', comp: AppNotFound }
	]

	return (
		<React.Fragment>
			<Switch>
				{routers.map(r => (
					<Route path={r.path} component={r.comp} key={r.path} />
				))}
			</Switch>
		</React.Fragment>
	)
}