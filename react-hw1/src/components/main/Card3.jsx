import classes from './mainComp.module.css'

function Card3(props) {
    return (
        <div className={classes.card}>
            <h2 className={classes.title}>Каталог</h2>
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla labore qui id harum corrupti a facere illum odio expedita, ratione aliquam culpa sequi, cumque fugiat.</p>
            <button className={classes.button}>Кнопщке</button>
        </div>
    )
}

export default Card3