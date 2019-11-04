import React, {useContext} from 'react';
import * as Context from './AppContext';
import * as Style from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import PaymentDelete from './PaymentDelete';
import PaymentCard from './PaymentCard';

const useStyles = Style.makeStyles(theme => ({
  wraper: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '15px'
  },
  txtCenter: {
  	textAlign: 'center'
  }
}));

export default function PaymentView(){
	const { payments, loading } = useContext(Context.AppContext);
	const classes = useStyles();
	const history = useHistory();

	return (
		<React.Fragment>
			<div>
	            <Tooltip title="Add payment">
	                <Fab 
	                    color="primary" 
	                    aria-label="add"
	                    onClick={() => history.push('/admin/payment?page=add')}
	                >
	                    <AddIcon />
	                </Fab>
	            </Tooltip>
	        </div>
	        {loading ? <p className={classes.txtCenter}>Loading data...</p>: null}
	        <div className={classes.wraper}>
				{payments.map(payment => (
					<PaymentCard payment={payment} />
				))}
			</div>
            {!loading && (payments.length === 0) ? <p className={classes.txtCenter}>No payment in data</p>: null } 
			<PaymentDelete />
		</React.Fragment>
	)
}