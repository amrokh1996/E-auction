import HashLoader
from "react-spinners/HashLoader";


export default function Loader() {
  return (
    <div className="Loader" style={{marginTop:'50%',marginLeft:'50%'}}>
    <HashLoader
        color={'#FA851E'}
        loading={true}
        size={100}
    />
    </div>
  )
}
