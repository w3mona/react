//higher order component (HOC) a component that render another component
import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>{
    return (<div>
                <h1>Hello, This my info</h1>
                <p>info is {props.info} - {props.isAdmin && <b>i'm admin</b>}</p>
            </div>);
}

const intermediate=(NewComponet)=>{
    return(props)=>(<div>
        <p>please dont share this info</p>
            <NewComponet {...props}/>
        </div>
        );
}


const requireAuth=(NewComponet)=>{
    return(props)=>(<div>
                        {props.isAdmin ? (<NewComponet {...props} />) : (<p>Please log in</p>)}
                    </div>
                    );
}

const New_= intermediate(Info);
const New2_= requireAuth(Info);

//ReactDOM.render(<New_ info="123" isAdmin={true} />, document.getElementById("app"));
ReactDOM.render(<New2_ info="123" isAdmin={false} />, document.getElementById("app"));