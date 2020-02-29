/*Inicialización del mapa que nos proporciona la API */

class UI {
    constructor() {

        //Instancia la API
        this.api = new API();

        //Crear los markes con layergrupos
        this.markers = new L.LayerGroup();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimiento(){
        this.api.obtenerDatos()
            .then(datos =>{
                const resultado = datos.respuestaJSON.results;

                //Ejecutar la función para mostrar los pines 
                this.mostrarPines(resultado);
            })
    }

    mostrarPines(datos){
        //Limpiar los markers con función de leaftleft
        this.markers.clearLayers();

        //recorrer los arreglos
        datos.forEach(dato =>{
            //Dsctructuring
            const {latitude, longitude, calle, regular, premium} = dato;

            //Crear popup
            const opcionesPopUP = L.popup()
                .setContent(`
                    <p>Calle: ${calle} </p>
                    <p>Regular: ${regular}</p>
                    <p>Premium: ${premium} </p>
                `);

            //Agregar el pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUP);
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }

    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
            .then(datos =>{
               const resultados = datos.respuestaJSON.results;  

               //Enviar datos para el filtrado
               this.filtrarSugerencias(resultados, busqueda);
            })
    }

    //Filtra las suferencias
    filtrarSugerencias(resultado, busqueda){
        //filtrar 
        const filtro = resultado.filter(filtro =>{
            filtro.calle.indexOf(busqueda) !== -1 ;
        })
        //mostrar los pines
        this.mostrarPines(filtro);
    }
}