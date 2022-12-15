import Header from "./components/Header"
import Meme from "./components/Meme"


export default function App() {
   /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
    
    
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    
    function handleClick() {
        setIsGoingOut((prevValue) => prevValue ? false : true)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
     */

     /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     
      const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
      function addItem() {
          // We'll work on this next
          setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length+1}`])
      }
      
      const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
      
      return (
          <div>
              <button onClick={addItem}>Add Item</button>
              {thingsElements}
          </div>
      )
      */

      /*

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    */

    /*
    * App.js
    Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     * 
    import React from "react"
    import WindowTracker from "./WindowTracker"

    export default function App() {
        
        const[show, setShow] = React.useState(true)
        
        return (
            <div className="container">
                <button onClick={() => setShow(prevShow => !prevShow)}>
                    Toggle WindowTracker
                </button>
                {show && <WindowTracker />}
            </div>
        )
    }
    
    WindowTracker.js
    import React from "react"

    export default function WindowTracker() {
        
        const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
        
        React.useEffect(() => {
            function watchWidth() {
                console.log("Setting up...")
                setWindowWidth(window.innerWidth)
            }
            
            window.addEventListener("resize", watchWidth)
            
            return function() {
                console.log("Cleaning up...")
                window.removeEventListener("resize", watchWidth)
            }
        }, [])
        
        return (
            <h1>Window width: {windowWidth}</h1>
        )
    }
   
    */

  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}