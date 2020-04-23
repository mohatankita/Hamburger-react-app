import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let validationError = null;

    if(props.invalid && props.shouldValidate && props.touched) {
        validationError = <p className={classes.ValidationError}>Please enter a valid { props.elementConfig.placeholder}</p>
        inputClasses.push(classes.Invalid);
    }

    switch( props.elementType ) {
        case ( 'input' ):
            inputElement = <input { ...props.elementConfig }
                                className={inputClasses.join(' ')}
                                value={props.value} 
                                onChange={props.changed} />
            break;
        case ( 'textarea' ):
            inputElement = <textarea { ...props.elementConfig }
                                className={inputClasses.join(' ')}
                                value={props.value} 
                                onChange={props.changed} />
            break;
        case ( 'select' ):
            inputElement = (
                <select className={inputClasses.join(' ')}
                        value={props.value}
                        onChange={props.changed} >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}> {option.displayValue} </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input { ...props.elementConfig }
                                className={inputClasses.join(' ')}
                                value={props.value}
                                onChange={props.changed} />
    }

    return (
        <div className={classes.Input} >
            <label className={classes.Label} > {props.label} </label>
            { inputElement }
            { validationError }
        </div>
    )
}

export default Input;