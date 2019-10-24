import React from 'react';
import { Link } from 'react-router-dom';

/* export default function DogBreedImages (props) {
    return (
        <div className='dog-breed-images'>
            <h1>Dog Breed Images</h1>

            This page will show images of the { props.match.params.breed } breed.

            <div>

            </div>

            <Link to='/'>Go back to index</Link>
        </div>
    )
} */

export default class DogBreedImages extends React.Component {
    render(){
        const { images } = this.props
        const { breed } = this.props
        console.log(this.props)
        console.log(breed)
        return(
        <div className='dog-breed-images'>
            <Link to='/'>Go back to index</Link>
            <h1>Images of {breed.toUpperCase()}</h1>
            <div>
               { images && images.map(url => <img src={ url } alt="Dog" />) }
               { !images && 'Loading...' }
            </div>
          
        </div>
        )
    }
}