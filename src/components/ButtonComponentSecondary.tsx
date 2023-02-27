type ButtonProps = {

}

export const ButtonComponentSecondary = (props : ButtonProps) => {
    return (
        <div className="custom-button-div-secondary">
            <button className="custom-button-secondary" role="button"><span className="custom-text">Know More</span></button>
        </div>
    );
}