import React, { useState } from 'react';

function Searchbar(props) {
    
    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState('');
    const [display, setDisplay] = useState(false);
    // const [stepInfo, setStepInfo] = useState({});
    // const [loading, setLoading] = useState(false);
    
    function otcwrapper(e) {
        //setTimeout(function() {
            onTextChange(e)
        //  }, 0);

        rswrapper();
    }
    
    // function getVideoUrl(path) {
       
    //     let url = `https://storage.cloud.google.com/b-vision-18af8.appspot.com/dance_videos/${path}.mp4`;
    //     let element = (<video width="400" height="250" controls>
    //                         <source src={url} type="video/mp4"/>
    //                     </video>);
    //     return element;
    // }

    function onTextChange(e) {
        setDisplay(false);
        const { items } = props;
        const value = e.target.value;
        let suggestions1 =[];
        

        if (value.length >0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions1 = items.sort().filter(v => regex.test(v));
        }
            setSuggestions(suggestions1);
            setText(value);
         
    }

    function suggestionSelected(value) {
        //setTimeout(function() {
        setText(value);
        setSuggestions([]);
        // setLoading(true);
        // readStepData(value);
         //}
        
        // ,1000);
    }

    function renderSuggestions() {
        // setTimeout(function() {
        if (suggestions.length ===0) {
            return null;
        }
        
        return (
            <ul>
                {suggestions.map((item)=><li className="AutoCompleteText layout center" key={item} onClick={() => suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
        // }, 500);
    }

    function rswrapper() {
        setTimeout(function() {
            setDisplay(true)
        }, 1000);
        
    }

    // async function readStepData(step) {
    //     const result = await axios({
    //     method: 'get',
    //     url: `https://cors-anywhere.herokuapp.com/https://b-vision-18af8.firebaseio.com/stepInfo/${step}.json`,
    //     }).then((x) => {
    //         setStepInfo(x.data);
    //         setLoading(false);
    //     }).catch((error) => console.log(error));
    // }
    //readStepData('Bhabi');

    


    return (

        <div className="container searchContainer">
            <div className="column">
                <div className=" autocomplete container">
                    <div className="inputWrapper justify-center">
                    <h2 className="title">Find Friends!</h2>
                    
                    <input className="AutoCompleteText input layout" value={text} onChange={otcwrapper} type="text" />
                    <div className="results-container">
                    { display ? renderSuggestions() : null  }
                    </div>
                    </div>
                </div>
                
            </div>
        </div>

    );
}

export default Searchbar;