import type React from "react"
// import TagLine from "./TagLine"
import type { HeadingProps } from "../app/types"

const Heading: React.FC<HeadingProps> = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
      {/* {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>} */}
      {title && (
        <div
          style={{
            color: "white",
            fontSize: "48px",
            fontWeight: "600",
            lineHeight: "1.2",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          {title}
        </div>
      )}
      {text && (
        <div style={{ color: "#757185", fontSize: "16px", fontWeight: "300", lineHeight: "1.6", textAlign: "center" }}>
          {text}
        </div>
      )}
    </div>
  )
}

export default Heading
