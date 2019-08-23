import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const LeftPane = ({styles, exercises, category, onSelect}) => {

    return (
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises], index) =>
                    !category || category === group ?
                    <React.Fragment key={index}>
                        <Typography
                            variant={'h6'}
                            style={{textTransform: 'capitalize'}}
                        >
                            {group}
                        </Typography>
                        <List component="nav" aria-label="secondary mailbox folders">
                            {exercises.map((exercise, index) =>
                                <ListItem key={index} button>
                                    <ListItemText
                                        primary={exercise.title}
                                        onClick={() => onSelect(exercise.id)}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </React.Fragment> : null
                )}
            </Paper>
        </Grid>
    );
};

export default LeftPane;
