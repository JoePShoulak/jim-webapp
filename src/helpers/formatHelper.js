import _ from 'lodash';

const formatPokeData = (data) => {
    let newData;

    if (_.includes(data, "-")) {
        newData = data.split("-").map((p) => (_.capitalize(p))).join(" ")
    } else {
        newData = _.capitalize(data)
    }

    return newData;
}

export {formatPokeData};
