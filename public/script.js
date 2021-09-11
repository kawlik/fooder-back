const insertTypes = async ( selectSelector ) => {

    // connect to select
    const select = document.querySelector( selectSelector );

    // error check
    if( !select ) {

        throw new Error( `Elem ${selectSelector} has not been found!` );
    }

    // fetching data
    const res = await fetch( window.location.href + 'type' );

    // response error check
    if( res.statusText == 'FAIL' || res.success == false || res.status >= 400 ) {

        throw new Error( 'Data has not been fetched.' );
    }

    // parsing data
    const options = await res.json();

    // inserting options into select element
    options.forEach( option => {

        const newOption = document.createElement( 'option' );

        newOption.textContent = option.name;
        newOption.value = option.name;

        select.append( newOption );
    });
};

/*   *   *   *   *   *   *   *   *   *   */
/**

fetch( 'http://localhost:8080/select', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ participants: [ '613bda8fe4ebc18f86d54967', '613bdd31cc270c7d238e1350' ] })
})
.then( res => res.json())
.then( res => console.log( res ));


/**


fetch( 'http://localhost:8080/select/id/613cb3e9afa0dc2fa210bad1', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        participant: '613bda8fe4ebc18f86d54967',
        // participant: '613bdd31cc270c7d238e1350',
        set: [
            {
                "_id": "613c7def601d08a750694822",
                "name": "Pizza",
                "type": "Kuchnia włoska",
                "img": "613c7def601d08a750694822.png",
                // "score": 1,
                "score": 5,
                "__v": 0
            },
            {
                "_id": "613c7e24601d08a750694825",
                "name": "Spaghetti",
                "type": "Kuchnia włoska",
                "img": "613c7e24601d08a750694825.png",
                // "score": 2,
                "score": 7,
                "__v": 0
            },
            {
                "_id": "613c7e6d601d08a750694829",
                "name": "Pierogi",
                "type": "Kuchnia polska",
                "img": "613c7e6d601d08a750694829.png",
                // "score": 3,
                "score": 11,
                "__v": 0
            },
        ],  
    }),
})
.then( res => res.json())
.then( res => console.log( res ));

/*/
/*   *   *   *   *   *   *   *   *   *   */

document.addEventListener( 'DOMContentLoaded', () => {

    // insert proper types into form
    insertTypes( '#foodType' )
});
