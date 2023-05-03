import { ReactNode } from "react"

function RoundedButton(props: { children?: ReactNode }) {
  return <button className="rounded-full p-2 hover:bg-opacity-10 hover:bg-black">{props.children}</button>
}

export default RoundedButton
