function Sidebar(){
    return(
        <div style={{
            width: "250px",
            background : "#202123",
            color: "white",
            padding: "15px"
        }}>
            <h2>Talkify</h2>

            <button style={{width:"100%", marginTop: "10px"}}>
                + New Chat
            </button>
        </div>
    );
}

export default Sidebar;