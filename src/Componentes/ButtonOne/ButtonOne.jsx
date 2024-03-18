import './ButtonOne.css';

const ButtonOne=(props) =>{
 
    return (
        <button className={`w-48 border-2 hover:border-white text-sm border-indigo-600 text-white bg-inherit rounded p-4 ${props.animation}`}>
            <div className='button-children'>
                {props.children}
            </div>
        </button>
    );
}

export default ButtonOne;
