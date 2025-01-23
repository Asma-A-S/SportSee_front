import yoga from '../assets/yoga.png'
import swim from '../assets/swim.png'
import velo from '../assets/velo.png'
import build from '../assets/build.png'

function VerticalNav() {
    return (
        <div className="vertical-nav">
            <nav className="vertical-nav_nav">
                <img
                    src={yoga}
                    alt="icone yoga"
                    className="vertical-nav_icone"
                />
                <img
                    src={swim}
                    alt="swim icone"
                    className="vertical-nav_icone"
                />
                <img
                    src={velo}
                    alt="velo icone"
                    className="vertical-nav_icone"
                />
                <img
                    src={build}
                    alt="body build icone"
                    className="vertical-nav_icone"
                />
            </nav>
            <p className="vertical-nav_copyright">Copyright, SportSee 2020</p>
        </div>
    )
}
export default VerticalNav
