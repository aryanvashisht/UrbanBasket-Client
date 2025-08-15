import Button from "@mui/material/Button"

const FeaturedBox = (props) => {
  return (
    <div>
      <Button className="border-2">
        <img 
        className={`${props.sizeClass} rounded-xl`}
        src={props.imageLink} alt="" />
      </Button>
    </div>
  )
}

export default FeaturedBox
