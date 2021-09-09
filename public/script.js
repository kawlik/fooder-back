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

document.addEventListener( 'DOMContentLoaded', insertTypes( '#foodType' ));