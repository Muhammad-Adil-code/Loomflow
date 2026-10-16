import logo from '@/assets/images/loomflow_light.svg'
import logoDark from '@/assets/images/loomflow_dark.svg'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 160 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Loomflow'
            />
        </div>
    )
}

export default Logo
