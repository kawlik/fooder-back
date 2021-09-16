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
    body: JSON.stringify({ participants: [ '613f4c5b0cfef24bbf74b7b6', '613f4c87510506fc487097dd' ] })
})
.then( res => res.json())
.then( res => console.log( res ));


/**


fetch( 'http://localhost:8080/select/id/61426cef2cc8b5562cd3e311', {
    method: 'put',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        // participant: '613f4c5b0cfef24bbf74b7b6',
        participant: '613f4c87510506fc487097dd',
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
