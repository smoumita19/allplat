type ButtonProps = {

}

export const ButtonComponent = (props : ButtonProps) => {
    return (
        <div className="custom-button-div">
            <button className="custom-button" role="button"><span className="custom-text">Button 64</span></button>
        </div>
    );
}