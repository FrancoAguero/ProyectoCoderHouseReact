import React, { useState } from 'react'

//Material UI
import { Button, Menu, MenuItem } from "@material-ui/core"

const CategoryBar = ({ handleCategory }) => {
    const [ anchorEL, setAnchorEL ] = useState( [] )

    const handleClick = (e, category) => {
        setAnchorEL([e.currentTarget, category])
    }
    
    const handleClose = () => {
        setAnchorEL( [] )
    }

    return (
        <div className="category_bar">
            <ul>
                <li>
                    <Button onClick={() => handleCategory( 0 )}>
                        Todos
                    </Button>
                </li>
                <li>
                    <Button aria-controls="mothers" aria-haspopup="true" onClick={(e) => handleClick(e, 'mothers')}>
                        Mothers
                    </Button>
                    <Menu
                        id="mothers"
                        anchorEl={anchorEL[0]}
                        keepMounted
                        open={anchorEL[1] === 'mothers' ? true : false}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleCategory( 1 )}>Intel</MenuItem>
                        <MenuItem onClick={() => handleCategory( 2 )}>Amd</MenuItem>
                    </Menu>
                </li>
                <li> 
                    <Button aria-controls="procesadores" aria-haspopup="true" onClick={(e) => handleClick(e, 'procesadores')}>
                        Procesadores
                    </Button>
                    <Menu
                        id="procesadores"
                        anchorEl={anchorEL[0]}
                        keepMounted
                        open={anchorEL[1] === 'procesadores' ? true : false}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleCategory( 3 )}>Intel</MenuItem>
                        <MenuItem onClick={() => handleCategory( 4 )}>Amd</MenuItem>
                    </Menu>
                </li>
                <li> 
                    <Button aria-controls="memorias-ram" aria-haspopup="true" onClick={(e) => handleClick(e, 'memorias-ram')}>
                        Memorias Ram
                    </Button>
                    <Menu
                        id="memorias-ram"
                        anchorEl={anchorEL[0]}
                        keepMounted
                        open={anchorEL[1] === 'memorias-ram' ? true : false}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleCategory( 5 )}>Memorias Ram</MenuItem>
                        <MenuItem onClick={() => handleCategory( 6 )}>Memorias Sodimm</MenuItem>
                    </Menu>
                </li>
                <li> 
                    <Button aria-controls="placas-de-video" aria-haspopup="true" onClick={(e) => handleClick(e, 'placas-de-video')}>
                        Placas de video
                    </Button>
                    <Menu
                        id="placas-de-video"
                        anchorEl={anchorEL[0]}
                        keepMounted
                        open={anchorEL[1] === 'placas-de-video' ? true : false}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleCategory( 7 )}>Nvidia</MenuItem>
                        <MenuItem onClick={() => handleCategory( 8 )}>Amd</MenuItem>
                    </Menu>
                </li>
                <li> 
                    <Button aria-controls="almacenamiento" aria-haspopup="true" onClick={(e) => handleClick(e, 'almacenamiento')}>
                        Almacenamiento
                    </Button>
                    <Menu
                        id="almacenamiento"
                        anchorEl={anchorEL[0]}
                        keepMounted
                        open={anchorEL[1] === 'almacenamiento' ? true : false}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleCategory(9)}>Disco Duro</MenuItem>
                        <MenuItem onClick={() => handleCategory(10)}>Disco Solido</MenuItem>
                        <MenuItem onClick={() => handleCategory(11)}>Disco Duro Externo</MenuItem>
                    </Menu>
                </li>
                <li>
                    <Button onClick={() => handleCategory(12)}>
                        Gabinetes
                    </Button>
                </li>
                <li> 
                    <Button onClick={() => handleCategory(13)}>
                        Fuentes
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default CategoryBar
