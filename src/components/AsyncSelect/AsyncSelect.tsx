import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { Item } from "../../model"

const AsyncSelect = (props: {
  loadOptions: (search: string) => Promise<{ options: Item<unknown>[] }>
  onValueChange?: (value: any) => void
  useEffectDependencies?: unknown[]
}) => {
  const [value, setValue] = useState<Item<unknown> | null>(null)

  const onChange = (value: Item<unknown> | null) => {
    setValue(value)
    if (props.onValueChange) {
      props.onValueChange(value?.value)
    }
  }

  return (
    <>
      <AsyncPaginate
        classNames={{
          container: () => "async-select-container",
          control: () => "async-select-control",
        }}
        value={value}
        onChange={onChange}
        debounceTimeout={1000}
        loadOptions={props.loadOptions}
        cacheUniqs={props.useEffectDependencies}
      />
    </>
  )
}

export default AsyncSelect
