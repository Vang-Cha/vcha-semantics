import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="SpiderMan" 
        postDate="Today at 2:45PM" 
        content="Your friendly neighbor."
        avatar={faker.image.avatar()}
      /> 
     
     <ApprovalCard>
      <CommentDetail 
        author="Captain America" 
        postDate="Today at 3:45PM" 
        content="I have a big shield."
        avatar={faker.image.avatar()}
      />
     </ApprovalCard>
     <ApprovalCard>
      <CommentDetail 
        author="Hulk" 
        postDate="Today at 6:45PM" 
        content="I am the strongest man."
        avatar={faker.image.avatar()}
        />
     </ApprovalCard>
     <ApprovalCard>
      <CommentDetail 
        author="IronMan" 
        postDate="Today at 8:45PM" 
        content="I love you 3000."
        avatar={faker.image.avatar()}
        />
     </ApprovalCard>
     
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
