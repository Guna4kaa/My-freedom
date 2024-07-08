import classes from './header.module.css'

function Header (props) {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://secrets.tinkoff.ru/api/image/?src=https%253A%252F%252Fpublic-static.tinkoffjournal.ru%252Fbusiness-secrets%252Fuploads%252F2023%252F04%252F9U7vAlfc-1.png&w=1360&h=900" alt="" />
            <nav className={classes.navbar}>
                <a href="">Перейти на официальный сайт www.apple.com</a>
               
            </nav>
        </header>
    )
}

export default Header