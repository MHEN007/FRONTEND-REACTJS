const Header = ({title,motto}) => {
    return(
        <div className="header">
            <div className="judul">
                {title}
                <div className="motto">
                    {motto}
                </div>
            </div>
        </div>
    );
}

export default Header