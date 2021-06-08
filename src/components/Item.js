import { findAllByTitle } from '@testing-library/react'
import React from 'react'
import Button from './Button'
import './item.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({ title, desc, descLink, backgroundImg, leftBtnTxt, midBtnTxt, midBtnLink, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first, none}) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        
        }}>
            <div className="item_container">
               <div className="item_text">
                  <p>{title}</p>
                  <div className="item_textDesc">
                      <p>{desc}<u>{descLink}</u></p>
                  </div>
               </div>
               <div className="item_lowerThird">
                   <div className="item_buttons">
                        {twoButtons && (
                            <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                        )}
                        {twoButtons && ( 
                            <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                        )}
                   </div>
                   {first && (
                       <center>
                            <div className="item_expand">
                                <ExpandMoreIcon />
                            </div>
                       </center>
                       
                   )}
                   {none && (
                       <center>
                            <div className="item_s_button">
                                <Button text={midBtnTxt} link={midBtnLink} />
                            </div>
                       </center>
                       
                   )}
               </div>
            </div>

        </div>
    )
}

export default Item