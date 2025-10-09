const Input = (props) => {
  const { value, name, label, type, handleInput } = props;
  return (
    <div className="mb-3 p-2">
      <label className="block mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={`Ingrese el ${label}`}
        name={name}
        value={value[name]}
        onChange={handleInput}
        className="input w-full"
      />
    </div>
  )
}

export default Input