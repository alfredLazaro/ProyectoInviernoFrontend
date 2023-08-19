import React from "react";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import CardRestaurant from "../../components/cardRestaur/CardResta";
import Axios from "axios";
function ViewLisRestaurants(){
    var url = "http://localhost:8080/restaurant/all";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        Axios.get(url).then((response)=>{
            setData(response.data);
            console.log(response.data);
            setLoading(false);
        });
    },[]);
    if(loading){
        return(
            <div className="main">
                <div className="showTournamentTitle">
                    <div className="d-flex justify-content-center align-items-center" style={{height:"80vh", fontWeight:"bold", margin:"10px"}}>
                        <ReactLoading type={"bubbles"} color={"#fffff"} height={100} width={100}/>
                    </div>
                </div>
            </div>
        );
    }
    const restaurantsCards=data.map((restaurants)=>(
        <>
            <CardRestaurant
                encargado1={data.name}
                imagenes={restaurants.pictures.map((imagen)=>imagen.id_picture)}
                ancho={100}
                alto={200}
                descripcion={restaurants.description}
                servicios={restaurants.establishmentPackages.map((services)=>services.establishmentServices.map((servicio)=>servicio.serviceName))}
                ubicacion={restaurants.location.location_name}
                name={restaurants.name}
                id={restaurants.idEstablishment}
            />
        </>
    ))
    return(
        <>
            <div className="main">
                <div className="container">
                    <div className="row">{restaurantsCards}</div>
                </div>
            </div>
        </>
    );
}
export default ViewLisRestaurants;