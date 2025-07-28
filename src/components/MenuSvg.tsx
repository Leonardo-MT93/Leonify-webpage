const MenuSvg = ({ openNavigation }: { openNavigation: boolean }) => {
    return (
      <svg
        className="overflow-visible"
        width="20"
        height="16"
        viewBox="0 0 20 16"
      >
        <rect
          className="transition-all origin-center"
          y={openNavigation ? "7" : "2"}
          width="20"
          height="2"
          rx="1"
          fill="white"
          transform={openNavigation ? "rotate(45)" : "rotate(0)"}
        />
        
        <rect
          className="transition-all origin-center"
          y="7"
          width="20"
          height="2"
          rx="1"
          fill="white"
          opacity={openNavigation ? 0 : 1}
        />
        
        <rect
          className="transition-all origin-center"
          y={openNavigation ? "7" : "12"}
          width="20"
          height="2"
          rx="1"
          fill="white"
          transform={openNavigation ? "rotate(-45)" : "rotate(0)"}
        />
      </svg>
    )
  }
  
  export default MenuSvg
  