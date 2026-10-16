// material-ui
import { styled } from '@mui/material/styles'

// project imports
import MainCard from './MainCard'

const NodeCardWrapper = styled(MainCard)(({ theme }) => ({
    background: theme.palette.card.main,
    color: theme.darkTextPrimary,
    // Loomflow: larger, rounder node cards with a warm-tinted border and softer shadow
    border: `1.5px solid ${theme.customization?.isDarkMode ? theme.palette.primary[200] + 30 : theme.palette.primary[200] + 90}`,
    borderRadius: '20px',
    width: '320px',
    height: 'auto',
    padding: '10px',
    boxShadow: theme.customization?.isDarkMode ? `rgba(0, 0, 0, 0.35) 0px 6px 18px -4px` : `rgba(20, 33, 61, 0.08) 0px 6px 18px -4px`,
    '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: `rgba(244, 81, 30, 0.22) 0px 12px 24px -6px, rgba(20, 33, 61, 0.08) 0px 4px 8px -2px`
    }
}))

export default NodeCardWrapper
