export default function() {


    this.namespace = '/api';
    let cases = [{
      type: 'cases',
      id: 'hado',
      attributes: {
        title: 'HADO',
        description: "HADO is a landing and signup page for an in-house event. I used foundation to code the front-end of this webpage. This project was interesting because it combined javascript and SASS to create flickering effects across the website. ",
        learn: ["Use foundation to create a 12-column layout and to use handlebars for recurring components, such as the flickering ‘lights’", "Use jQuery and SASS to trigger flickering effects as the user scroll past an element"],
        different: ['Use ECMAScript 6 instead of jQuery', 'Write more object-oriented javascript'],
        website: 'https://benisburgers.github.io/hado-portfolio/',
        repository: 'https://github.com/benisburgers/hado_new'
      }
    }, {
      type: 'cases',
      id: 'advance',
      attributes: {
        title: 'Advance',
        description: "Advance is an informative website about the gender diversity report of Switzerland. This project was especially challenging because I had to modify pre-existing code while working under time pressure.",
        learn: ['How to extend and modify re-existing code somebody else has written', 'How to use jQuery, SASS, and data-attributes to create growth effects for the different bars and graphs', 'How to respond to client’s wishes and frustrations and adapt quickly'],
        different: ['Take more time to understand the pre-existing code before modifying it', 'Write more concise and structured CSS to make life easier for myself and other programmers in the future'],
        website: 'https://advance-hsg-report.ch/2019/',
        repository: 'https://github.com/benisburgers/advance_report'
      }
    }, {
      type: 'cases',
      id: 'binelli',
      attributes: {
        title: 'Binelli',
        description: "Binelli is an info and signup page for a customer’s raffle. Creating a 12-column layout without a framework and using javascript to validate a form proved to be the biggest challenges.",
        learn: ['How to use conditional javascript, HTML data-attributes, and regex to validate a form while the user is typing and provide them with live feedback', 'How to use URL Queries to create a personalized web-experience and prefill the form for the user', 'How to communicate clearly with the client and use BrowserStack for cross-browser checking'],
        different: ['Use a framework to create a 12-column layout instead of using flexbox', 'Write more modular and clear javascript from the beginning'],
        website: 'https://binelligroup-erleben.ch/index-bak.php',
        repository: 'https://github.com/benisburgers/newsletter'
      }
    }, {
      type: 'cases',
      id: 'wingo',
      attributes: {
        title: 'Binelli',
        description: "Binelli is an info and signup page for a customer’s raffle. Creating a 12-column layout without a framework and using javascript to validate a form proved to be the biggest challenges.",
        learn: ['How to use conditional javascript, HTML data-attributes, and regex to validate a form while the user is typing and provide them with live feedback', 'How to use URL Queries to create a personalized web-experience and prefill the form for the user', 'How to communicate clearly with the client and use BrowserStack for cross-browser checking'],
        different: ['Use a framework to create a 12-column layout instead of using flexbox', 'Write more modular and clear javascript from the beginning'],
        website: 'https://benisburgers.github.io/hado-portfolio/',
        repository: 'https://github.com/benisburgers/hado_new'
      }
    }]; //loop through the array and determine the index of each case/rental/object and whether it is first or last
    //provide these attributes to the object itself, to be used for conditional formating (previous and next buttons)

    cases.forEach(function (element) {
      var currentIndex = cases.indexOf(element);
      element.attributes.index = currentIndex;

      if (currentIndex == 0) {
        element.attributes.first = true;
      }

      if (currentIndex == cases.length - 1) {
        element.attributes.last = true;
      } //if this is NOT the first object in the array


      if (currentIndex > 0) {
        //find out what the PREVIOUS object in the array is
        var previousObject = cases[currentIndex - 1]; //find out what this PREVIOUS object's ID is

        var previousObjectID = previousObject.id; //provide currentObject with said ID

        element.attributes.previous = previousObjectID;
      } //if this is NOT the last object in the array


      if (currentIndex < cases.length - 1) {
        //find out what the NEXT object in the array is
        var nextObject = cases[currentIndex + 1]; //find out what the NEXT object's ID inspect

        var nextObjectID = nextObject.id; //provide currentObject with said ID

        element.attributes.next = nextObjectID;
      }
    });
    this.get('/cases', function () {
      return {
        data: cases
      };
    }); // Find and return the provided rental from our rental list above

    this.get('/cases/:id', function (db, request) {
      var currentRental = {
        data: cases.find(rental => request.params.id === rental.id)
      };
      return currentRental;
    });

}
