type HeadingComponentProps = {
    heading : string;
}

export const HeadingComponent = (props : HeadingComponentProps) => {
    return (
        <div className="text-center custom-heading" style={{ margin: '40px'}}>
            <h1 className="m-md-4">{props.heading}</h1>
            <hr className="hr" style={{
                  margin: "auto",
                  width: "20px" 
            }} />
        </div>
     
    );
}