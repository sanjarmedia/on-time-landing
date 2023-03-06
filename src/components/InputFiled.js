import { Controller } from 'react-hook-form'

export function InputField(props) {
  const { control, name, placeholder, rules, error } = props

  const inputErrorClassName = 'border-red-500 dark:border-red-color'
  const inputClassName ='py-5 -ml-3 focus:border-transparent focus:ring-0 placeholder:text-white ' +
  'bg-background-black-color border-none appearance-none w-full hover:placeholder:text-gray-500'

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <input
              id={name}
              type='text'
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={`${inputClassName} ${error && inputErrorClassName}`}
              placeholder={placeholder}
            />
          )
        }}
        rules={rules}
      />

      {error && <span className='text-xs text-red-500'>* Please fill out this field</span>}
    </>
  )
}
