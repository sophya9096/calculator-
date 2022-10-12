import React from "react";

const Screen1 = ({ props }) => {
    const { classes } = props;

    return (
        <div className={classes.formScreen1}>
            {/* <h1>Hi, It's Good to have you here</h1> */}
            <h1>Hey, goed dat je er bent</h1>
            {/* <h2 className={classes.animation}>"We make safe air visible to you"</h2> */}
            <h2 className={classes.animation}>“Wij maken veilige lucht voor je zichtbaar”</h2>
        </div>
    );
};

export default Screen1;
