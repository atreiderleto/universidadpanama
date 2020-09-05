/*
- Llenado dinamico del selector
*/

/**
 * Obtener anio seleccionado
 * 
 * @param (object) event
 */
function obtenerAnio(event) {
    // Obtener valor del campo cambiado
    crearCarrusel(event.target.value)
}

/**
 * Obtener anio seleccionado
 * 
 * @param (object) event
 */
async function crearCarrusel(anio) {

    // Obtener imagenes del anio
    // let foo = await obtenerImagenesDelAnio(anio)
    let foo = [
        '2018-001.jpg',
        '2018-002.jpg',
        '2018-003.jpg',
        '2019-001.jpg',
        '2019-002.jpg',
        '2019-003.jpg',
        '2020-001.jpg',
        '2020-002.jpg',
        '2020-003.jpg'
    ]
    foo = foo.filter(function (image) {
        return image.includes(anio);
    });

    // Vaciar imagenes en el carrusel
    agregarImagenesAlCarrusel(foo)
}

/**
 * Obtener imagenes del anio
 * 
 * @param (object) event
 */
function obtenerImagenesDelAnio(anio) {

    return new Promise(async (resolve, reject) => {

        let url = location.href

        // Consultar imagenes del directorio
        fetch(url+'imgs/')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            let matches = data.match(new RegExp("\\b"+anio+"\\b-[0-9][0-9][0-9].jpg", "g"));
            let matchesDiff = [];

            for (let o = 0; o < matches.length; o++) {
                let flag = false;
                for (let v = 0; v < matchesDiff.length; v++) {
                    if (matches[o] == matchesDiff[v]) {
                        flag = true;
                    }
                }
                if (!flag) {
                    matchesDiff.push(matches[o])
                }
            }
            resolve(matchesDiff)
        });

    });
}

/**
 * Eliminar elementos de imagenes en carrusel
 * 
 * @return void
 */
function vaciarCarrusel() {
    $('.content-imgs').empty();
}

/**
 * Agregar imagenes del anio al carrusel
 * 
 * @param (array) imagenes
 * @return void
 */
function agregarImagenesAlCarrusel(imagenes) {

    vaciarCarrusel();

    for (let o = 0; o < imagenes.length; o++) {
        const ELEMENT_IMG = '<div class="carousel-item w-100"><div class="d-flex justify-content-center"><img class="carrosuel__img" src="imgs/'+imagenes[o]+'" alt="First slide"></div></div>';
        $(ELEMENT_IMG).appendTo('.content-imgs');
    }

    $('.carousel-item').first().addClass('active');
    $('#carousel').carousel();
}

$(document).ready(function() {

    let yearNow = new Date()
    yearNow = yearNow.getFullYear()

    document.getElementById('select-anio').value = yearNow
    crearCarrusel(yearNow)

    // $(".carrousel__arrows_left").fadeOut();

    /* $(".carrousel__arrows_left").mouseover(function() {
        $(".carrousel__arrows_left").fadeIn();
        $(".carrousel__arrows_left").fadeIn("slow");
        $(".carrousel__arrows_left").fadeIn(3000);
    });*/
      
})

/**
 * Mostrar simbolo de mas o menos en menu colapsado
 * Efecto de estado del menu colapsado
 * 
 * @param (int) num
 */
function cambiarIcono(num) {
    let element = document.getElementById('main__option__'+num);
    element.innerHTML = (element.innerHTML === '+') ? '-' : '+';
}