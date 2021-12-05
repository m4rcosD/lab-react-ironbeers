import React from 'react'
import {Link} from 'react-router-dom'

function AllBeers(props) {

    const {beers} = props

    if (!beers){
        return <img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340" />
    }
    return (
        <div>

      <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">
    <img src="assets/home.png" width="30" height="30" alt=""/>
  </a>
</nav>
{
    beers.map((elem) => {
        return (
            <div>
                <img src={elem.image_url} alt="" />
                <Link to={`/beers/${elem._id}`} > {elem.name} </Link>
                <h3>{elem.tagline}</h3>
                <h4>Created by: {elem.contributed_by}</h4>
            </div>
        )
    })
}
        </div>
    )
}

export default AllBeers
