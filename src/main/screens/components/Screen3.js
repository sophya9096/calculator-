import React from "react";

const Screen3 = ({ props }) => {
    const { classes, name } = props;

    return (
        <div className={classes.formScreen1}>
            <h1>Leuk je te leren kennen "{name}"</h1>
        </div>
    );
};

export default Screen3;
