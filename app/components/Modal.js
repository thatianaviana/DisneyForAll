import React, { Component } from 'react';
import families from './families';
import FamilyCard from './FamilyCard';

require('./Modal.css');

export default class Modal extends Component {
  
  // handleClick = id => {
  //   console.log(id);
  // }

  render() {
    
    // const familyBlurb = this.state.families.map (family => (
    //   <FamilyCard
    //     handleClick={this.handleClick}
    //     id={family.id}
    //     key={family.id}
    //    />

    // ))
    return (
      <div>
        <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="modal-title" id="exampleModalLongTitle">Family Name Should Pop Up Here</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div id="modal-body">
                <div id="modal-image"></div>
                <p id="modal-description">Blurb about the family should pop up here</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}










//     var families = [
//       {
//         'name': 'Ortiz Family',
//         'src': 'https://via.placeholder.com/200',
//         'description': 'This family deserves a day at the happiest day on earth'
//       },
//       {
//         'name': 'Stine Family',
//         'src': 'https://via.placeholder.com/200',
//         'description':'This big family love each other so much, they deserve a day in Disneyland!'
//       }, 
//       {
//         'name': 'Manilow Family',
//         'src': 'https://via.placeholder.com/200',
//         'description': 'Friends describe this family as the hardest working family on the block. Lets help them have fun.'
//       },
//       {
//         'name': 'Abanda Family',
//         'src': 'https://via.placeholder.com/200',
//         'description': 'This family came from Africa for a chance to have a better life. They deserve a fun day at the happiest place on earth!'
//       }, 
//         {
//         'name': 'Heick Family',
//         'src': 'https://via.placeholder.com/200',
//         'description': 'The Heick family\'s dream is to go to Disney. Let\'s help them make a reality!'
//       },

//     ];

//     $('.thumb').on('click', function(){
//           console.log(families);
//       var index = $(this).data('index');
//       var family = families[index];


//       $('#modal-title').html(family.name);
//       $('#modal-image').attr('src', family.src);
//       $('#modal-description').html(family.description);


//     });

//     // $("#video").on('hidden.bs.modal', function(){
//     // 	console.log('here');
//       //     $("iframe").attr('src', '');
//       // });
//   });
// }


