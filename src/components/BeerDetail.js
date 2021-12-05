import React from 'react'
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from "axios"
function BeerDetail(props) {
    const {beerId} = useParams()
    const [beerDetails, setbeerDetails] = useState(null)

    useEffect(() => {
        const getData = async () => {
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        setbeerDetails(response.data)
        console.log(response.data)
    }
    getData()
    }, [])

    if(!beerDetails){
        return <img src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340" alt="" />
    }
    return (
        <div>
            
            <div>
                {/* <img src={this.image_url} alt="" /> */}
                <h1>{beerDetails.name}</h1>
                <h3>{beerDetails.tagline}</h3>
                {/* <h2>{beerDetails.attenuation_level}</h2>
                <h2> {beerDetails.description} </h2>
                <h4>Created by: {beerDetails.contributed_by}</h4> */}
            </div>
        </div>
    )
}
export default BeerDetail
