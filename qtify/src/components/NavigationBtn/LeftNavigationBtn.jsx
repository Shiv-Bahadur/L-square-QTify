import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import left_btn from "../../assets/left_btn.png"

const LeftNavigationBtn = () => {
  return (
    <button>
        <img src={left_btn} height={"32px"} width={"32px"} alt='left-button'/>
    </button>
  )
}
export default LeftNavigationBtn;
