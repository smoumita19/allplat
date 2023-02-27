type ButtonProps = {

}

export const ButtonComponentPrimary = (props : ButtonProps) => {
    return (
        <div className="custom-button-div-primary">
            <button className="custom-button-primary" role="button"><span className="custom-text">Know More</span></button>
        </div>
    );
}