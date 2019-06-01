import React, { Component } from 'react';


class ListReview extends Component {
    
   
    showContent=(reviews)=>{
        let result=null;
            result= reviews.map((review, key)=>{
                return(
                    <div className="comment" key={key}>
                    <span className="raiting">{review.kindRaiting.name}</span>
                    <h1>By: {review.user.username}</h1> <span>{review.dateReview}</span>
                    <p className="content_comment">
                       {review.content}
                    </p>
                    </div>
                )
            
        })
        return result;
    }

    render() {
      
        return (
            <div>
            {this.showContent(this.props.listReview)}
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         getReviewList :()=>{
//             dispatch(charts.getReviewList())
//           }
//     }
// }
export default (ListReview)

