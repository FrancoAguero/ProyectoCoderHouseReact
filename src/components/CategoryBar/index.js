import React, { useState } from 'react'

//Material UI
import { Button, Menu, MenuItem } from "@material-ui/core"

const CategoryBar = () => {
    const [ anchorEL, setAnchorEL ] = useState( null )

    const handleClick = (e) => {
        setAnchorEL( e.currentTarget )
    }

    const handleClose = (e) => {
        setAnchorEL( null )
    }

    return (
        <div className="category_bar">
            <ul>
                <li>
                    <Button aria-controls="Mothers" aria-haspopup="true" onClick={handleClick}>
                        Mothers
                    </Button>
                    <Menu
                        id="Mothers"
                        anchorEl={anchorEL}
                        keepMounted
                        open={Boolean(anchorEL)}
                        onClose={handleClose}
                    >
                        <MenuItem >Amd</MenuItem>
                        <MenuItem >Intel</MenuItem>
                    </Menu>
                </li>
                <li> 
                    <Button aria-controls="Procesadores" aria-haspopup="true" onClick={handleClick}>
                        Procesadores
                    </Button>
                    <Menu
                        id="Procesadores"
                        anchorEl={anchorEL}
                        keepMounted
                        open={Boolean(anchorEL)}
                        onClose={handleClose}
                    >
                        <MenuItem >Amd</MenuItem>
                        <MenuItem >Intel</MenuItem>
                    </Menu>
                </li>
                <li> 
                    <Button aria-controls="Mothers" aria-haspopup="true" onClick={handleClick}>
                        ram
                    </Button>
                    <Menu
                        id="Mothers"
                        anchorEl={anchorEL}
                        keepMounted
                        open={Boolean(anchorEL)}
                        onClose={handleClose}
                    >
                        <MenuItem >Amd</MenuItem>
                        <MenuItem >Intel</MenuItem>
                    </Menu>
                </li>
                <li> 
                    <Button aria-controls="Placas de video" aria-haspopup="true" onClick={handleClick}>
                        Placas de video
                    </Button>
                    <Menu
                        id="Placas de video"
                        anchorEl={anchorEL}
                        keepMounted
                        open={Boolean(anchorEL)}
                        onClose={handleClose}
                    >
                        <MenuItem >Amd</MenuItem>
                        <MenuItem >Nvidia</MenuItem>
                    </Menu>
                </li>
                <li> 
                    <Button aria-controls="Mothers" aria-haspopup="true" onClick={handleClick}>
                        Gabinetes
                    </Button>
                </li>
                <li> 
                    <Button aria-controls="Mothers" aria-haspopup="true" onClick={handleClick}>
                        Fuentes
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default CategoryBar
