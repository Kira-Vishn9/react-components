import NavBar from '../component/UI/navbar/NavBar';
import classes from './404.module.css';

export function Error () {
   
    return( 
        <div>
            <NavBar />
            <div className={classes.wrapError}>     
                <h1>Error 404</h1>
            </div>
        </div>
    )
}