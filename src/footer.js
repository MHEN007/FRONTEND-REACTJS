const Footer = ({author, year}) => {
    return(
        <div className="footer">
            <p>Copyright &copy; {author} {year}</p>
        </div>
    );
};

export default Footer