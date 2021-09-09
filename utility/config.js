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


/*  Server setings
/*   *   *   *   *   *   *   *   *   *   */

exports.server = {

    // std server port value
    port: process.env.PORT || 8080,
};


/*  Config export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = exports;