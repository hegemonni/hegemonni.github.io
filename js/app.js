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
      var sublayer = layers[1].getSubLayer(1);
      sublayer.set({ 'interactivity': ['cartodb_id', 'kuvaus', 'facebook_sivu']});

      // Set the custom infowindow template defined on the html
      sublayer.infowindow.set('template', $('#infowindow_template').html());

      // add the tooltip show when hover on the point
      vis.addOverlay({
        type: 'tooltip',
        position: 'top|center',
        template: '<p>{{kuvaus}}</p>'
      });

      vis.addOverlay({
        type: 'infobox',
        template: '<h3>{{nimi}}</h3><p>{{kuvaus}}</p>',
        width: 200,
        position: 'bottom|left'
      });

      var LayerActions = {
          
          kaikki: function(){
            sublayer.setSQL("SELECT * FROM rasistinensuomi_cartodb");
            return true;
          },
          mielenosoitus: function(){
            sublayer.setSQL("SELECT * FROM rasistinensuomi_cartodb WHERE tyyppi='Mielenosoitus'");
            return true;
          },
          vakivalta: function(){
            sublayer.setSQL("SELECT * FROM rasistinensuomi_cartodb WHERE tyyppi='Vakivalta ja uhkailu'");
            return true;
          },
          omaisuusvahinko: function(){
            sublayer.set({
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
