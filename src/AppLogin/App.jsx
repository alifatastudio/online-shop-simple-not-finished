import React, { useContext } from 'react';
import * as Context from '../AppContext'

function App(){
    const {login, setLogin, admin, setAdmin} = useContext(Context.AppContext);

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <p>Login with your Google Account.</p>
            <button 
                onClick={() => setLogin(!login)}>
                    Change Login
            </button>
            <br/>
            <button 
                onClick={() => setAdmin(!admin)}>
                    Change Admin
            </button>
        </div>
    );
}

export default App;