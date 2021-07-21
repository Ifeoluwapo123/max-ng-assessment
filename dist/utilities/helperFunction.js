"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOutUnwantedFields = exports.sortMoviesByDate = void 0;
const sortMoviesByDate = (data) => {
    const sortedActivities = data.sort((a, b) => {
        const bDate = new Date(b.release_date);
        const aDate = new Date(a.release_date);
        return bDate.getTime() - aDate.getTime();
    });
    return sortedActivities;
};
exports.sortMoviesByDate = sortMoviesByDate;
const mapOutUnwantedFields = (data, allNecessaryKeys) => {
    let result = {};
    return data.map((each) => {
        Object.keys(each).map((key) => {
            if (allNecessaryKeys.includes(key.toLowerCase())) {
                const res = {
                    [key]: each[key],
                };
                result = Object.assign(Object.assign({}, result), res);
            }
        });
        return result;
    });
};
exports.mapOutUnwantedFields = mapOutUnwantedFields;
