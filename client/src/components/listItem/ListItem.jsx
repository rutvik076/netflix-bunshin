import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react"

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "";
  return (
    <div className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img src="https://images.pexels.com/photos/8718387/pexels-photo-8718387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum consequatur ad, iusto non esse minus eum dignissimos consectetur sunt.
            </div>
            <div className="genre">Action</div>
          </div></>
      )}
    </div>
  )
}
