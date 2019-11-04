import React from 'react';

function NavAdmin(){
	const [open, setOpen] = React.useState(true);

	  const handleDrawerOpen = () => {
	    setOpen(true);
	  };

	  const handleDrawerClose = () => {
	    setOpen(false);
	  };

	return (
		<div>
			admin menu
		</div>
	)
}

export default NavAdmin;