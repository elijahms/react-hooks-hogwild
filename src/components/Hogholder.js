import React, {useState} from 'react'
import Hogtile from './Hogtile'


const Hogholder = ({hogs}) => {
    
    const [myHogs, setMyHogs] = useState(hogs)
    const [greased, setGreased] = useState(false)
    const [filterButton, setFilterButton] = useState(false)

    function handleFilter() {
        let mapGreasyOnes = []
        setGreased((greased) => !greased)
        if (!greased) {
        mapGreasyOnes = hogs.filter((hogs) => hogs.greased)
        } else {
            mapGreasyOnes = hogs
        }
        setMyHogs(mapGreasyOnes)

    }

    function handleSort(event) {

        let sortIt = []

        if (event.target.value === "name") {
            if (filterButton) {
            sortIt = [...hogs].sort(function(a, b) {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase(); 
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              })}
        } else {
            sortIt = [...hogs].sort(function (a, b) {
                    return a.weight - b.weight;
                });
        }

        setMyHogs(sortIt)
    }

    
    return (
        <div>
            <button onClick={handleFilter} className="ui animated button">{!greased ? "Show me just the greasy ones" : "Show em All"}</button>
            <br />
            <br />
            <h3>Sort By:</h3>
                <select onChange={handleSort} className="menu">
                    <option value="weight">Weight</option>
                    <option value="name">Name</option>
                </select>
                <button style={{paddingRight: "7px", margin: "10px"}} onClick={() => setFilterButton((filterButton) => !filterButton)} >{filterButton ? "⬆️" : "⬇️" }</button>
            <br />
            <br />
        <div className="ui grid">
            {myHogs.map((hog) => {
                    return <Hogtile 
                    name={hog.name}
                    image={hog.image}
                    key={hog.name}
                    specialty={hog.specialty}
                    weight={hog.weight}
                    greased={hog.greased} /> 
                    })
                }
        </div>
        </div>
    )
}

export default Hogholder