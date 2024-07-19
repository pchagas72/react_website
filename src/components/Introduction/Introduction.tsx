import './Introduction.css';
import me_png from './me.png';

function Header(){
    return(
        <div className="header">
            <h3> Introduction </h3>
            <div className="image">
            <img src={me_png} />
            </div>
            <div className="intro_text">
            <p> I'm Pedro Chagas, I like computer science and this is my page. </p>
            <p> Thanks for stopping by! </p>
            </div>
        </div>
    )
}

export default Header
