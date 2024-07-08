import classes from './footer.module.css'

function Footer (props) {
    return (
        <footer>
            <div className={classes.companyInfo}>
                <p className={classes.text}>About us: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, suscipit?
                </p>
            </div>
            <div className={classes.contacts}>
                <p className={classes.text}>Phone: +7 777 77 77</p>
                <p className={classes.text}>Email: mailto@mail.ru</p>
            </div>
        </footer>
    )
}

export default Footer