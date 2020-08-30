export const spiltEmptySpace = (splitable) => splitable.split(" ");
export const joinWithEmptyAndTrim = (joinable) => joinable.join(" ").trim();
export const lastElmIndex = (arr) => arr.length - 1;

export function getDateString(newDate) {
    const temp = spiltEmptySpace(new Date(newDate).toDateString());
    const date = joinWithEmptyAndTrim(temp.slice(1));
    return date;
}

export const getDateTimeObj = (dateTimeString) => {
    const temp = spiltEmptySpace(dateTimeString);
    const date = joinWithEmptyAndTrim(temp.slice(0, lastElmIndex(temp)));
    const time = temp[lastElmIndex(temp)].trim();

    return {
        date,
        time,
    };
};

export function getActivityPeriodsObj(user) {
    return user.activity_periods.reduce((acc, item) => {
        const key = getDateTimeObj(item.start_time).date;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push({
            startTime: getDateTimeObj(item.start_time).time,
            endTime: getDateTimeObj(item.end_time).time,
        });
        return acc;
    }, {});
}

export function getFilteredActivityPeriodDateAsKey(activity_periods, selectedDate) {
    const filteredActivityPeriods = Object.keys(activity_periods).filter(
        (item) => item === selectedDate
    );

    const activityPeriodsObj = filteredActivityPeriods.reduce((acc, key) => {
        acc[key] = activity_periods[key];
        return acc;
    }, {});
    return filteredActivityPeriods.length === 0 && !selectedDate
        ? activity_periods
        : activityPeriodsObj;
}