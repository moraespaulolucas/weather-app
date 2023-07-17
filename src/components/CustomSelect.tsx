import { AsyncPaginate, AsyncPaginateProps } from "react-select-async-paginate"
import { Item } from "../model"

interface SelectProps extends AsyncPaginateProps<Item<any>, any, any, false> {}

interface CustomAsyncPaginateProps extends Omit<SelectProps, "debounceTimeout" | "classNames"> {}

const CustomSelect = (props: CustomAsyncPaginateProps) => {
  const defaultProps: Omit<SelectProps, "loadOptions"> = {
    debounceTimeout: 1000,
    classNames: {
      container: () => "async-select-container",
      control: () => "async-select-control",
    }
  }

  const mergedProps = { ...defaultProps, ...props }

  return <AsyncPaginate<Item<any>, any, any, false> {...mergedProps} />
}

export default CustomSelect
