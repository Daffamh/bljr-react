export{Parent}

function Son(props) {
    return (
        <div style={{background: "lightgreen"}}>
            <h2>Son</h2>
            <div>{props.children}</div>
        </div>
    )
}

function Daughter(props){
    const {brand,model} = props;
    return (
        <div style={{background:"lightblue"}}>
            <h2>Daughter</h2>
            <div>{props.children}</div>
        </div>
    );
}

function Parent(){
    return (
        <div>
            <h1>My Two Children</h1>
            <Son>
                <p>
                    this was writen in the parent componrnt,
                    but displayed as a part of the son component
                </p>
            </Son>
            <Daughter>
                <p>
                    this was writen in the parent componrnt,
                    but displayed as a part of the daughter component
                </p>
            </Daughter>
        </div>
    );
}