const Notification = (props) => {
    //  Write your code here.
    const { className, childrenText,iconUrl } = props
    const classNameContainer = {`notification-container ${className}`}

return (
    <div className={classNameContainer}>
        <img
            src={iconUrl}
            className="icon"
        />
        <p className="text">{childrenText}</p>
    </div>
)
}

const element = (
    //  Write your code here.
    <div className="bg-container">
        <h1 className="heading">Notifications</h1>
        <Notification className="info-container" childrenText="Information Message" 
            iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification className="success-container" childrenText="Information Message" 
            iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification className="warning-container" childrenText="Information Message" 
            iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification className="error-container" childrenText="Information Message" 
            iconUrl="https://assets.ccbp.in/frontend/react-js/error-icon-img.png"
        />

    </div>
);

ReactDOM.render(element, document.getElementById("root"));
