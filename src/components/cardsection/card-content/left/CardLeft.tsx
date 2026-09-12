import type {CardLeftProps} from "../../../../type/Type"
import Card from "../left/Card"
const CardLeft = ({promise,btnCliked,isBtnclicked,addToStack}:CardLeftProps) => {
  return (
    <div>
      <Card promise={promise} btnCliked={btnCliked} isBtnclicked={isBtnclicked} addToStack={addToStack}/>
    </div>
  )
}

export default CardLeft
