import {assets} from '../assets/assets'
const AppDownload = () => {
    return ( 
        <div className="appDownload" id='appDownload'>
            <p>For a better experience, Download <br /> Blite App</p>
            <div className="appDownloadImg">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    );
}
 
export default AppDownload;