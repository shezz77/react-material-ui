import React from 'react';
import Grid from "@material-ui/core/Grid";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        height: 500,
        overflowY: 'auto'
    }
};

const Index = ({
                   exercises,
                   category,
                   onExerciseSelect,
                   exercise}) => {
    return (
        <Grid container>
            <LeftPane
                category={category}
                styles={styles}
                exercises={exercises}
                onSelect={onExerciseSelect}
            />
            <RightPane
                category={category}
                styles={styles}
                exercises={exercises}
                exercise={exercise}
            />
        </Grid>
    );
};

export default Index;