import React, { useState, useEffect } from 'react'

export const ItemDetailContainer = ( {} ) => {

    const [data, setData] = useState ([])
    const [loading, setLoading] = useState (false)

    const items = [
        {id: 1, nombre: "Torta", precio: 2500},
        {id: 2, nombre: "Budín", precio: 800},
        {id: 3, nombre: "Scones", precio: 400},
    ]

    useEffect ( ()=> {
        setLoading (true)

        pedirDatos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading (false)
            })

    }, [])

    const pedirDatos = () => {
        
        return new Promise((resolve, reject) => {
        
        setTimeout(()=> {
            resolve(items)
        }, 3000)

        })
    }


    return (
        <div>
            <h2>Productos</h2>
            
            { 
                loading ? 
                <p>Cargando sus productos...</p> 
                :
                <ul>
                { data.map( (items) => (
                    <li key={items.id}>
                        <img src="http://placekitten.com/200/200" alt="{items.nombre}" />
                        <h3>{items.nombre}</h3>
                        <p>{items.precio}</p>
                    </li>
                ))}
                </ul>
                
            }
        </div>
    )

}

