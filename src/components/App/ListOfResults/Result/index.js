const Result = ({ name, zipCode, departmentCode, population }) => {
    return (
        <li>
            <p><span>{name}</span> - <span>{departmentCode}</span></p>
            <p><span>Code postal : </span><span>{zipCode[0]}</span></p>
            <p><span>Population : </span><span>{population}</span></p>
        </li>
    )
}

export default Result;