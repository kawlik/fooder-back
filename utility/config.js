/*  Database setings
/*   *   *   *   *   *   *   *   *   *   */

exports.db = {

    // db connection link
    link: 'mongodb+srv://admin:sxn3QNQFDFyGMwx5@cluster0.rzz93.mongodb.net/fooder?retryWrites=true&w=majority',

    // db connection options
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};


/*  Facebook passport setings
/*   *   *   *   *   *   *   *   *   *   */

exports.passport = {

    // passport cielnt ID
    clientID: "1197919644023613",

    // passport client secret key
    clientSecret: "85b366e77584d89ac68636d36c5442cb",

    // passport success return path
    callbackURL: "http://localhost:8080/auth/facebook/callback",

    // required data
    profileFields: [ 'id', 'displayName', 'picture' ],
};


/*  Server setings
/*   *   *   *   *   *   *   *   *   *   */

exports.server = {

    // std server port value
    port: process.env.PORT || 8080,
};


/*  Config export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = exports;