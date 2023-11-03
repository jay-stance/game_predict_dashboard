import AppText from "../AppText/AppText";

function AppInput({
  value,
  placeholder,
  name,
  type,
  styles,
  containerStyle,
  label,
  error,
  multiline = false,
  onBlur,
  onChange,
  handleKeyDown,
  fileType,
}) {

   // Function to handle file input change
   const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && fileType) {
      const acceptedTypes = fileType.split(",");
      const fileTypeIsValid = acceptedTypes.some((type) =>
        file.type.startsWith(type)
      );
      if (!fileTypeIsValid) {
        // Handle invalid file type
        // You can display an error message or reset the input here
        console.log("Invalid file type");
        return;
      }
    }
    onChange(file);
  };


  if (multiline) {
    return (
      <div className={` space-y-3 ${containerStyle}`}>
        {label && <AppText content={label} />}
        <textarea
          className={` px-3 py-2 w-full border-[1px] outline-none text-black01 font-roboto leading-snug bg-[#f0f0f7] border-gray-200 rounded-sm ${styles}`}
          value={value}
          onChange={(text) => {
            console.log('caling onchange');
            onChange(text.target.value);
          }}
          name={name}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
        />
        {error && <AppText styles="text-sm !text-red mt-2">{error}</AppText>}
      </div>
    );
  }

  if (type === "file") {
    return (
      <div className={` space-y-3 ${containerStyle}`}>
        {label && <AppText content={label} />}
        <input
          type="file"
          className={`px-3 py-2 w-full outline-none text-black01 font-roboto leading-snug bg-[#f0f0f7] rounded-sm ${styles}`}
          onChange={handleFileChange}
          name={name}
          accept={fileType} // Specify accepted file types in the accept attribute
        />
        {error && <AppText styles="text-sm !text-red mt-2">{error}</AppText>}
      </div>
    );
  }

  return (
    <div className={` space-y-3 ${containerStyle}`}>
      {label && <AppText content={label} />}
      <input
        className={` px-3 py-2 lg:py-3 w-full outline-none text-black01 font-roboto leading-snug bg-[#f0f0f7] rounded-sm ${styles}`}
        value={value}
        onChange={(e) => {
          console.log('caling onchange');
          onChange(e.target.value);
        }}
        name={name}
        placeholder={placeholder}
        type={type}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
      />
      {error && <AppText styles="text-sm !text-red mt-2">{error}</AppText>}
    </div>
  );
}

export default AppInput;
