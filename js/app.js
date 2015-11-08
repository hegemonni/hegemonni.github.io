var map;

function main() {

  var options = {
    center: [64, 24],
    zoom: 6, 
    zoomControl: true,  // dont add the zoom overlay (it is added by default)
    loaderControl: false //dont show tiles loader
    // https: true
  };

  cartodb.createVis('map', 'https://hegemonni.cartodb.com/api/v2/viz/7ae05c4e-84f7-11e5-b1b2-0e31c9be1b51/viz.json', options)
    .done(function(vis, layers) {
      // there are two layers, base layer and points layer
      var markers = layers[1].getSubLayer(1);
      markers.set({ 'interactivity': ['cartodb_id', 'kuvaus', 'facebook_sivu']});
      // sublayer.setInteraction(true)
      // Set the custom infowindow template defined on the html
      markers.infowindow.set('template');

      // add the tooltip show when hover on the point
      vis.addOverlay({
        layer: markers,
        type: 'tooltip',
        position: 'top|center',
        template: '<p>10.10.2015 Paikka<p4>'
        // template: '<p>{{kuvaus}}</p>'
      });

      vis.addOverlay({
        layer: markers,
        type: 'infobox',
        template: '<h3>Otsikko</h3><img src="http://hs10.snstatic.fi/webkuva/taysi/700/1305986659655?ts=765" height="auto" width="100%"</img><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>{{kuvaus}}</p>',
        // template: '<h3>{{nimi}}</h3><p>{{kuvaus}}</p>',
        width: 200,
        position: 'bottom|left'
      });

      var LayerActions = {
          
          kaikki: function(){
            markers.setSQL("SELECT * FROM rasistinensuomi_cartodb");
            return true;
          },
          mielenosoitus: function(){
            markers.setSQL("SELECT * FROM rasistinensuomi_cartodb WHERE tyyppi='Mielenosoitus'");
            return true;
          },
          vakivalta: function(){
            markers.setSQL("SELECT * FROM rasistinensuomi_cartodb WHERE tyyppi='Vakivalta ja uhkailu'");
            return true;
          },
          omaisuusvahinko: function(){
            markers.set({
              sql: "SELECT * FROM rasistinensuomi_cartodb WHERE tyyppi = 'Omaisuusvahinko'",
              //as it is said, you can also add some CartoCSS code to make your points look like you want for the different queries
             // cartocss: "#ne_10m_populated_places_simple{ marker-fill: black; }"
           });
            return true;
          }
        }

        $('.button').click(function() {
          $('.button').removeClass('selected');
          $(this).addClass('selected');
          //this gets the id of the different buttons and calls to LayerActions which responds according to the selected id
          LayerActions[$(this).attr('id')]();
        });

    });
}

window.onload = main;
