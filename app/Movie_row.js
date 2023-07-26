import Action_row from './Action_row.js';

const Movie_row =({data,onDelete}) => {
    return (
    <>
        <div className="movie_row">
            <div className="movie_row1">
                <img src={data.pic}/>
            </div>
            <div className="movie_row2">
                <div className="movie_image">{data.name}</div>
                <div className="movie_image1">{data.rating}</div>
                <div className="pragraph1">{data.feedback}</div>
                <div className="pragraph">{data.description}</div>
                <Action_row onDelete={onDelete}/>
            </div>
        </div>
          
    </>
   );
};
export default Movie_row;
    
    
