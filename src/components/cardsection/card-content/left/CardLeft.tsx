import type {CardLeftProps} from "../../../../type/Type"
import Card from "../left/Card"
const CardLeft = ({promise}:CardLeftProps) => {
  return (
    <div>
      <Card promise={promise}/>
    </div>
  )
}

export default CardLeft
