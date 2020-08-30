import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import TimePicker from "../TimePicker";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { getActivityPeriodsObj, getFilteredActivityPeriodDateAsKey, getDateString } from '../../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    marginLeft: "20%",
    marginRight: "20%",
  },
  title: {
    fontSize: 14,
  },
  paper: {
    position: "absolute",
    width: "80%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    border: "2px solid " + theme.palette.background.paper,
    overflow: "scroll",
    '@media (min-width:1025px)': {
      width: "40%",
    }
  },
  activityTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    color: "#3c3c3c",
  },
  container: {
    marginTop: 10,
  },
}));



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function UserCard(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDate("");
  };

  const onSelectedDate = (newDate) => {
    setSelectedDate(getDateString(newDate));
  };

  const { user } = props;
  const activity_periods = getActivityPeriodsObj(user);
  const filteredActivityPeriods = getFilteredActivityPeriodDateAsKey(
    activity_periods,
    selectedDate
  );
  return (
    <div className={classes.container}>
      <div key={user.id}>
        <Card className={classes.root} onClick={handleOpen}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {user.real_name}
            </Typography>
          </CardContent>
        </Card>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
            <Typography id="simple-modal-title" variant="h6">
              User Activity Details
              </Typography>
            <TimePicker selectedDate={onSelectedDate} />
            {Object.keys(filteredActivityPeriods).length ? (
              Object.keys(filteredActivityPeriods).map((key) => {
                return (
                  <List className={classes.modal} key={key}>
                    <Typography variant="subtitle2">
                      User was active on {key} at:
                      </Typography>
                    {filteredActivityPeriods[key].map((item) => {
                      return (
                        <ListItem key={item.startTime + item.endTime}>
                          <ListItemText
                            id="simple-modal-description"
                            primary={`${item.startTime} - ${item.endTime}`}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                );
              })
            ) : (
                <Typography variant="caption">No Activity Period found.</Typography>
              )}
          </div>
        </Modal>
      </div>
    </div>
  );
}
