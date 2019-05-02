export default function() {
  this.namespace = '/api';

  let cases = [{
        type: 'cases',
        id: 'hado',
        attributes: {
          title: 'HADO',
          description: "For our in-house event, we created a landing and sign-up page with the help of foundation.",
          learn: ['Use foundation to build a website','Use SASS to create flickering animations','Write maintainable and modular javascript'],
          different: ['Use ECMAScript 6 instead of jQuery','Write objec-oriented javascript'],
          website: 'https://benisburgers.github.io/hado-portfolio/',
          repository: 'https://github.com/benisburgers/hado_new'
        }
      }, {
        type: 'cases',
        id: 'advance',
        attributes: {
          title: 'Advance',
          description: "This was Advance - an online report on gender diversity in Switzerland."
        }
      }, {
        type: 'cases',
        id: 'wingo',
        attributes: {
          title: 'Wingo',
          description: "This was Wingo - an online pitch to our customer."
        }
      }, {
          type: 'cases',
          id: 'binelli',
          attributes: {
            title: 'Binelli',
            description: "This was Binelli - a landing page for a customer event."
          }
      }]

      //loop through the array and determine the index of each case/rental/object and whether it is first or last
      //provide these attributes to the object itself, to be used for conditional formating (previous and next buttons)
      cases.forEach(function(element) {
        var currentIndex = cases.indexOf(element);
        element.attributes.index = currentIndex;
        if (currentIndex == 0) {
          element.attributes.first = true;
        }
        if (currentIndex == cases.length - 1) {
          element.attributes.last = true;
        }
        //if this is NOT the first object in the array
        if (currentIndex > 0) {
          //find out what the PREVIOUS object in the array is
          var previousObject = cases[currentIndex - 1];
          //find out what this PREVIOUS object's ID is
          var previousObjectID = previousObject.id;
          //provide currentObject with said ID
          element.attributes.previous = previousObjectID;
        }
        //if this is NOT the last object in the array
        if (currentIndex < cases.length - 1) {
          //find out what the NEXT object in the array is
          var nextObject = cases[currentIndex + 1];
          //find out what the NEXT object's ID inspect
          var nextObjectID = nextObject.id;
          //provide currentObject with said ID
          element.attributes.next = nextObjectID;
        }
      })

      console.log(cases);

      this.get('/cases', function() {
          return { data: cases };
      });


      // Find and return the provided rental from our rental list above
      this.get('/cases/:id', function (db, request) {
        var currentRental = { data: cases.find((rental) => request.params.id === rental.id) };
        return currentRental;
      });
}
