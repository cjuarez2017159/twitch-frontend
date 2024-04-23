
export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
}) => {
    const handlerValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <>
            <div className="auth-form-label">
                <span>{label}</span>
            </div>
            {textarea ? (
                <textarea
                    type={type}
                    value={value}
                    onChange={handlerValueChange}
                    onBlur={handleInputBlur}
                    rows={5}
                    style={{ maxWidth: '400px' }}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handlerValueChange}
                    onBlur={handleInputBlur}
                />
            )}
            <span style={{
                color: "red"
            }} className="auth-form-validations-message">
                {showErrorMessage && validationMessage}
            </span>
        </>
    )
}