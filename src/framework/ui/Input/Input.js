const Input = ({ value, type, onChange, disabled }) => (
  <input
    type={type}
    value={value}
    disabled={disabled}
    className="text-black rounded mr-2"
    onChange={onChange}
  />
);

export default Input;
