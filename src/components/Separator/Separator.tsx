import "./Separator.css";
import drpepper from "./assets/drpepperbutton.gif";
import landchad from "./assets/landchad.gif";
import pchagas from "./assets/pchagas.png";
import spywaredog from "./assets/spywarewatchdog.png";
import sadgirl from  "./assets/sadgirl.gif";
import shadow_wiki from "./assets/shadow-wiki.png";

function Separator(){
    const banners = [[drpepper, "https://www.drpepper.com/", "drpepper_key"],
        [landchad, "https://landchad.net/", "landchad_key"],
        [pchagas, "https://chaguw.neocities.org/", "pchagas_key"],
        [spywaredog, "", "spywaredog_key"],
        [sadgirl, "https://goblin-heart.net/sadgrl/webmastery/", "sadgirl_key"],
        [shadow_wiki, "", "shadow_wiki_key"]];
    return (
    <div className="separator_div">
            {banners.map(banner => <a key={banner[3]} href={banner[1]}><img key={banner[3]+"_img"} src={banner[0]}/></a>)}
    </div>
    );
}

export default Separator;
