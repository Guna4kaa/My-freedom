import classes from './mainComp.module.css'

function Card1(props) {
    return (
        <div className={classes.card}>
            <h2 className={classes.title}>О продукции</h2>
            <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla labore qui id harum corrupti a facere illum odio expedita, ratione aliquam culpa sequi, cumque fugiat.</p>
            <button className={classes.button}>Push me</button>
        </div>
    )
}

export default Card1