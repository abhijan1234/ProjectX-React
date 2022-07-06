import { Box, Button, Modal } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./Popup.scss"
const Popup = (props: any) => {

  const handleClick = () => {
    props.primaryButtonHandle()
  }
  return (
    <Modal
      open={props.opened}
      onClose={props.closeHandle}
      
    >
      <div className='modal-size'>
        <div className='title-style'>
          {props.title}
        </div>
        {props.children}
        <div className='button-style'>
          <Button
            disabled={!props.primaryButtomDisabled}
            style={{
              backgroundColor: "rgb(250, 202, 69)",
              fontSize: "8px"
            }} variant='contained'
            size="small"
            onClick={handleClick}
          >
            {props.primaryButton}
          </Button>
          <Button
            style={{
              marginLeft: "5%",
              // paddingRight:"6%",
              fontSize: "8px"
            }}
            variant='outlined' size="small"
            onClick={props.secondaryButtonHandle}
          >
            {props.secondaryButton}
          </Button>
        </div>
      </div>
    </Modal>

  )
}

export default Popup
